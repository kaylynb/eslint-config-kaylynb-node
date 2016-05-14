'use strict'

const assert = require('chai').assert
const eslint = require('eslint')

describe('eslintrc', () => {
	it('should be valid', () => {
		const cli = new eslint.CLIEngine({
			useEslintrc: false,
			configFile: 'eslintrc.json'
		})

		const code = `'use strict'
const x = 1
console.log(x)
`

		assert.equal(
			cli.executeOnText(code).errorCount,
			0
		)
	})
})
