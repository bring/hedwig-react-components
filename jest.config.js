const base = require('./jest.config.base.js')

module.exports = {
    ...base,
    projects: ['packages/*/jest.config.js'],
    coverageDirectory: 'coverage/'
}
