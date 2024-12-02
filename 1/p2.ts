import * as fs from "fs";

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

const split = input
	.trim()
	.split("\n")
	.map((l) => l.split(/\s+/gi));

const left = split.map(([l]) => l).map(Number);
const right = split.map(([, r]) => r).map(Number);

const rightsCount = new Map<number, number>();
for (const r of right) {
	rightsCount.set(r, (rightsCount.get(r) ?? 0) + 1);
}

let sum = 0;
for (const l of left) {
	sum += (rightsCount.get(l) ?? 0) * l;
}

console.log(sum);
