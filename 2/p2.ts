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

const isSafe = (n: number[]) => {
	return (
		(acceptPrevNext(n, isAscending) || acceptPrevNext(n, isDescending)) &&
		acceptPrevNext(n, acceptableDiff)
	);
};

console.log(
	input
		.trim()
		.split("\n")
		.map((l) => l.split(/\s+/gi).map(Number))
		.filter((n) => {
			if (isSafe(n)) {
				return true;
			}
			for (let i = 0; i < n.length; i++) {
				if (isSafe([...n.slice(0, i), ...n.slice(i + 1)])) {
					return true;
				}
			}
			return false;
		}).length
);
