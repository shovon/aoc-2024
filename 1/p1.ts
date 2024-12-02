import * as fs from "fs";

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

const split = input
	.trim()
	.split("\n")
	.map((l) => l.split(/\s+/gi));

const left = split
	.map(([l]) => l)
	.map(Number)
	.sort((a, b) => a - b);
const right = split
	.map(([, r]) => r)
	.map(Number)
	.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < left.length; i++) {
	sum += Math.abs(right[i] - left[i]);
}

console.log(sum);
