module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/src/.*.(test|spec)).(js?|ts?)$',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    collectCoverage: false,
    verbose: true,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css?$': 'jest-transform-css'
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    globals: {
        'babel-jest': {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-react'
            ]
        }
    }
}
