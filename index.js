const redline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    robots.text(content)

    function askAndReturnSearchTerm() {
        return redline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = redline.keyInSelect(prefixes, `Choose one prefix for the term: '${content.searchTerm}'` )
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log('Final search term: '+content.prefix + ' ' + content.searchTerm +)
}

start()