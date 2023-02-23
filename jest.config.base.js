module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    testRegex: '(/src/.*.(test|spec)).(js?|ts?)$',
    moduleFileExtensions: ['js', 'jsx'],
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
