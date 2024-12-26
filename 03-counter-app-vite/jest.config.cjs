module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['./node_modules/'],
    // setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    
}