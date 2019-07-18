"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const enterWord = document.getElementById("trans");
const submitWord = document.getElementById("submit");
const outputWord = document.getElementById("output");
const resetWord = document.getElementById("reset");

enterWord.onclick = function() {
	enterWord.textContent = pigLatin(enterWord.value);
};
submitWord.onclick = function() {
	submitWord.textContent = pigLatin(submitWord.value);
};
outputWord.onclick = function() {
	outputWord.textContent = pigLatin(outputWord.value);
};
restWord.onclick = function() {
	resetWord.textContent = pigLatin(resetWord.value);
};

function pigLatin(word) {
	let word = document.getElementByID("Trans.value"());
	function convert(word) {
		const vowels = ["a", "e", "i", "o", "u", "y"];
		const splitWord = word
			.toLowerCase()
			.trim()
			.split(""); //['c','a','r']
		const assert = require("assert");
		const readline = require("readline");
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		const enterWord = document.getElementById("trans");
		const submitWord = document.getElementById("submit");
		const outputWord = document.getElementById("output");
		const resetWord = document.getElementById("reset");

		enterWord.onclick = function() {
			enterWord.textContent = pigLatin(enterWord.value);
		};
		submitWord.onclick = function() {
			submitWord.textContent = pigLatin(submitWord.value);
		};
		outputWord.onload = function() {
			outputWord.textContent = pigLatin(outputWord.value);
		};
		restWord.onclick = function() {
			resetWord.textContent = pigLatin(resetWord.value);
		};

		const ending = new Array("a", "y");
		const firstLetter = splitWord[0];
		word = word.toLowerCase().split(" ");

		if (vowels.includes(firstLetter)) {
			//is the first letter a vowel?
			const myTranslation = word + "yay"; //then add 'yay' and we are done!
			myTranslation[0].toUpperCase();
			return myTranslation;
		} else {
			splitWord.push(splitWord.shift()); //remove the first consonant, send to end

			for (let i = 0; i < splitWord.length; i++) {
				//check the next letters (is or isNotVowel)
				if (!vowels.includes(splitWord[i])) {
					//if not vowel
					splitWord.push(splitWord.shift()); //remove the first vowel, sent to end.
				} else {
					const myTranslation = splitWord.join("");
					myTranslation[0].toUpperCase();
					return myTranslation.concat("ay");
				}
			}
		}
	}
	//Lets get started with the processing
	if (word.split(" ").length > 1) {
		//if it's more than 1 word
		let mySplitPhrase = word.split(" "); // then split up the words
		let myTranslations = [];
		// return convert(word);
		for (let i = 0; i < mySplitPhrase.length; i++) {
			//for each of the words (mySplitPhrase[i])
			myTranslations.push(convert(mySplitPhrase[i]));
		}
		return myTranslations.join(" ");
	} else {
		return document.getElementByID("output"); //only one word, so translate once!
	}
}
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

//Pig Latin Gui//
