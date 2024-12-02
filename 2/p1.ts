import * as fs from "fs";

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

const acceptPrevNext = <T>(
	n: T[],
	fn: (prev: T, next: T) => boolean
): boolean => {
	for (let i = 1; i < n.length; i++) {
		if (!fn(n[i - 1], n[i])) {
			return false;
		}
	}
	return true;
};

const isAscending = (prev: number, next: number): boolean => {
	return prev < next;
};

const isDescending = (prev: number, next: number): boolean => {
	return prev > next;
};

const acceptableDiff = (prev: number, next: number): boolean => {
	const diff = Math.abs(prev - next);
	return 1 <= diff && diff <= 3;
};

console.log(
	input
		.trim()
		.split("\n")
		.map((l) => l.split(/\s+/gi).map(Number))
		.filter((n, i) => {
			return (
				(acceptPrevNext(n, isAscending) || acceptPrevNext(n, isDescending)) &&
				acceptPrevNext(n, acceptableDiff)
			);
		}).length
);
