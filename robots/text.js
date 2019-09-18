function robot(content) {
    fetchContentFromWikipedia(content)
    sanitizeContent(content)
    breakContentIntoSentences(content)
}

module.exports = robot