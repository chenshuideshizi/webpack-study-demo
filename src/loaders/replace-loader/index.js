module.exports = function(source, sourceMap, meta) {
    const { name } = this.query

    return source.replace(/World/g, name)
}