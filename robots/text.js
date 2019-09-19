const algorithmia = require('algorithmia')

function robot(content) {
    fetchContentFromWikipedia(content)
    // sanitizeContent(content)
    // breakContentIntoSentences(content)

    function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia('simJS9t/Hm6yADGrYLLrnQClcpE1')
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponse = wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponse.get()

        console.log(wikipediaContent)
    }
}

module.exports = robot