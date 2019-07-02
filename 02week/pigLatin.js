"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function pigLatin(word) {
	return word.split("");
}

function pigLatin(word) {
	let chars = letters(word);
	return chars.slice(1).join("") + chars[0] + "ay";
}

function pigLatin(word) {
	return sentence.replace(pigLatin);
}

pigLatin("car"), "arcay";
pigLatin("dog"), "ogday";
pigLatin("create"), "eatecray";
pigLatin("valley"), "alleyvay";

pigLatin("egg"), "eggyay";
pigLatin("emission"), "emissionyay";
pigLatin("HeLlO "), "ellohay";
" RoCkEt", "ocketray";

function getPrompt() {
	rl.question("word ", answer => {
		console.log(pigLatin(answer));
		getPrompt();
	});
}

// Tests

if (typeof describe === "function") {
	describe("#pigLatin()", () => {
		it("should translate a simple word", () => {
			assert.equal(pigLatin("car"), "arcay");
			assert.equal(pigLatin("dog"), "ogday");
		});
		it("should translate a complex word", () => {
			assert.equal(pigLatin("create"), "eatecray");
			assert.equal(pigLatin("valley"), "alleyvay");
		});
		it('should attach "yay" if word begins with vowel', () => {
			assert.equal(pigLatin("egg"), "eggyay");
			assert.equal(pigLatin("emission"), "emissionyay");
		});
		it("should lowercase and trim word before translation", () => {
			assert.equal(pigLatin("HeLlO "), "ellohay");
			assert.equal(pigLatin(" RoCkEt"), "ocketray");
		});
	});
} else {
	getPrompt();
}
