class MyWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyWebpackPlugin', (compilation, callback) => {
            const manifest = {}
            for(const name of Object.keys(compilation.assets)) {
                // 将生成文件的名称和大小写入manifest对象
                manifest[name] = compilation.assets[name].size()
            }
            compilation.assets['manifest.json'] = {
                source() {
                    return JSON.stringify(manifest)
                },
                size() {
                    return this.source().length
                }
            }
            callback()
        })
    }
}

module.exports = MyWebpackPlugin