const path = require("path")

export default {
    root: path.resolve(__dirname,'src'),
    build: {
        outdir: '../dist'
    },
    server: {
        port:8080
    }
}