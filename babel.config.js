module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: ['last 2 versions']
                }
            ],
            '@babel/react'
        ],
        plugins: [
            'babel-plugin-transform-scss'
            //'@babel/plugin-proposal-object-rest-spread',
            //'@babel/plugin-proposal-class-properties'
        ]
    }
}
