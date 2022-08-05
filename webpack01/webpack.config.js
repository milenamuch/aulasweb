const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require ("path")

module.exports = {
    mode: "development", //neste modo vai compilar de uma maneira de desenvolvimento
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js", //o nome da chave do objeto será setado no [name]
        path: path.resolve (__dirname, "dist")
    },
    module://regras para o Babel
    {
        rules: 
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader',
                    options:
                    {
                        presets: ['@babel/preset-env']
                    },
                },
            },
    
        ]   
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html", 
        filename: "index.html"
    })]
};

//para rodar precisa colocar yarn watch