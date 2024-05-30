module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
		"zustand": "<rootDir>/src/__mocks__/zustand.ts"
	},
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
	},
}