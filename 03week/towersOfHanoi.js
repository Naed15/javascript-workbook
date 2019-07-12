"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function move(n, a, b, c) {
	if (n > 0) {
		move(n - 1, a, c, b);
		console.log("Move disk from " + a + " to " + c);
		move(n - 1, b, a, c);
	}
}
move(4, "A", "B", "C");

function isLegal() {
	function move(n, a, b, c) {
		if (n > 0) {
			move(n - 1, a, c, b);
			console.log("Move disk from " + a + " to " + c);
			move(n - 1, b, a, c);
		}
	}
	move(4, "A", "B", "C");

	function checkForWin() {
		stacks = { a: [], b: [4, 3, 2, 1], c: [] };
		stacks = { a: [1], b: [4, 3, 2], c: [] };
	}

	function towersOfHanoi(startStack, endStack) {
		(() => {
			"use strict";

			// hanoi :: Int -> String -> String -> String -> [[String, String]]
			const hanoi = (n, a, b, c) =>
				n
					? hanoi(n - 1, a, c, b)
							.concat([[a, b]])
							.concat(hanoi(n - 1, c, b, a))
					: [];

			// show :: a -> String
			const show = x => JSON.stringify(x, null, 2);

			return show(
				hanoi(3, "left", "right", "mid").map(d => d[0] + " -> " + d[1])
			);
		})();
		function getPrompt() {
			printStacks();
			rl.question("start stack: ", startStack => {
				rl.question("end stack: ", endStack => {
					towersOfHanoi(startStack, endStack);
					getPrompt();
				});
			});
		}

		// Tests

		if (typeof describe === "function") {
			describe("#towersOfHanoi()", () => {
				it("should be able to move a block", () => {
					towersOfHanoi("a", "b");
					assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
				});
			});

			describe("#isLegal()", () => {
				it("should not allow an illegal move", () => {
					stacks = {
						a: [4, 3, 2],
						b: [1],
						c: []
					};
					assert.equal(isLegal("a", "b"), false);
				});
				it("should allow a legal move", () => {
					stacks = {
						a: [4, 3, 2, 1],
						b: [],
						c: []
					};
					assert.equal(isLegal("a", "c"), true);
				});
			});
			describe("#checkForWin()", () => {
				it("should detect a win", () => {
					stacks = { a: [], b: [4, 3, 2, 1], c: [] };
					assert.equal(checkForWin(), true);
					stacks = { a: [1], b: [4, 3, 2], c: [] };
					assert.equal(checkForWin(), false);
				});
			});
		} else {
			getPrompt();
		}
	}
}

// 1. build a board.
// 3 verticle lines for the blocks to go through.
// 2. build the blocks.
// only 3 blocks
// each block should be slightly bigger than the last block
// for terminal app no colors.
//
// 3. set the rules for the game.
// 4. set a check for winner.
