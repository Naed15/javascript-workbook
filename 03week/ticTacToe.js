"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

// if horizontal win then ...
// let playerTurn = "X";
// playerO = "O";
// isValidn(place "x" or "o")
// switchPLayer
// check for win
// switch player
//repeat cycle node

function printBoard() {
	console.log("   0  1  2");
	console.log("0 " + board[0].join(" | "));
	console.log("  ---------");
	console.log("1 " + board[1].join(" | "));
	console.log("  ---------");
	console.log("2 " + board[2].join(" | "));
}
const switchPlayer = () => {
	if (playerTurn == "X") {
		playerTurn = "O";
	} else {
		playerTurn = "X";
	}
};
for (i = 0; i <= 3; i++) {
	board = [i][i] && [i][1] && [i][2] && [1][1] && [1];
}
function checkForWin() {
	// will check for horizontal win first
	function horizontalWin() {
		if (horizontalWin()) {
			console.log("Game over|" + playerTurn + " wins!");
			board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
		}
	}

	function verticalWin() {
		// Your code here
	}

	function diagonalWin() {
		// Your code here
	}

	function ticTacToe() {
		// Your code here
	}

	function getPrompt() {
		printBoard();
		console.log("It's Player " + playerTurn + "'s turn.");
		rl.question("row: ", row => {
			rl.question("column: ", column => {
				ticTacToe();
				getPrompt();
			});
		});
	}
}

// Tests

if (typeof describe === "function") {
	describe("#ticTacToe()", () => {
		it("should place mark on the board", () => {
			ticTacToe();
			assert.deepEqual(board, [
				[" ", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should alternate between players", () => {
			ticTacToe();
			assert.deepEqual(board, [
				["O", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should check for vertical wins", () => {
			board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
			assert.equal(verticalWin(), true);
		});
		it("should check for horizontal wins", () => {
			board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
			assert.equal(horizontalWin(), true);
		});
		it("should check for diagonal wins", () => {
			board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
			assert.equal(diagonalWin(), true);
		});
		it("should detect a win", () => {
			assert.equal(checkForWin(), true);
		});
	});
} else {
	getPrompt();
}
