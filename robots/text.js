const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

async function robot(content) {
    await fetchContentFromWikipedia(content)
    sanitizeContent(content)
    // breakContentIntoSentences(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponse.get()

        content.sourceContentOriginal = wikipediaContent.content
    }

    function sanitizeContent(content){
        const withoutBlankLinesAndMarkDown = removeBlankLinesAndMarkDown(content.sourceContentOriginal)
        console.log(withoutBlankLinesAndMarkDown)

        function removeBlankLinesAndMarkDown(text) {
            const allLines = text.split('\n')

            const withoutBlankLinesAndMarkDown = allLines.filter((line) =>{
                if (line.trim().length === 0 || line.trim().startsWith('=')) {
                    return false
                }
                return true
            })
            return withoutBlankLinesAndMarkDown.join(' ')
        }
    }
}

module.exports = robot