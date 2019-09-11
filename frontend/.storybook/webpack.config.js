module.exports = async ({ config }) => {


    config.resolve.extensions.push(".ts", ".svelte")

    config.module.rules.push({
        test: /\.ts$/,
        use: {
            loader: 'awesome-typescript-loader',
            options: {
                transpileOnly:true //make life easy
            }
        }
    })



    return config;
    
}