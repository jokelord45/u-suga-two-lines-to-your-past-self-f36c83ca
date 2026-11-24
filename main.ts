import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self — v2 (revised): pin the moment to an exact date
// so the warning names one real night, and sharpen the sting in line 2.
const entry = [
  "Don't delete the scholarship application the night before it is due, on 14 March 2019, because you are certain they will say no.",
  "That one click bought you four years of student debt, and the acceptance letter arrived the following Tuesday anyway.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
