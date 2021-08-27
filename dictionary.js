const { sample } = require("./helpers")

module.exports = {
	get told() {
		return sample(["told", "informed", "advised about", "given info", "let known"])
	},
	get photos() {
		return sample(["photos", "pictures", "images"])
	}
}