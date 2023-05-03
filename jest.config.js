module.exports = {
	setupFiles: ["<rootDir>/test/setup-tests.js"],
	testEnvironment: "node",
	roots: ["<rootDir>/test"],
	testMatch: ["**/*.test.js"],
	reporters: [
		"default",
		[
			"jest-junit",
			{
				outputDirectory: "test-reports",
				outputName: "test-report.xml"
			}
		]
	]
}