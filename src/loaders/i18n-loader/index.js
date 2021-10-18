module.exports = function (source) {
    const path = require('path')
    const { locale } = this.query
    // 读取语言配置文件
    let json = null
    if (locale) {
        const filename = path.resolve(__dirname, `${locale}.json`)
        json = require(filename)
    }

    // 读取语言标记 {{}}
    const matches = source.match(/\{\{\w+\}\}/g)
    for(const match of matches) {
        const name = match.match(/\{\{(\w+)\}\}/)[1].toLowerCase()
        if (json !== null && json[name] !== undefined) {
            source = source.replace(match, json[name])
        } else {
            source = source.replace(match, name)
        }
    }
    return source
}