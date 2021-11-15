import { readLines } from "https://deno.land/std/io/mod.ts";

function isIdiom(word) {
  if (3 <= word.length && word.length <= 6 && /^[ァ-ヶ]+$/.test(word)) {
    return true;
  } else {
    return false;
  }
}

async function build(threshold) {
  const idioms = [];
  const fileReader = await Deno.open(
    `graded-vocab-ja/dist/0.csv`,
  );
  for await (const line of readLines(fileReader)) {
    const arr = line.split(",");
    const word = arr[0];
    const count = parseInt(arr[1]);
    if (isIdiom(word) && count >= threshold) {
      idioms.push(word);
    }
  }
  Deno.writeTextFileSync(`src/words.lst`, idioms.join("\n"));
}

const threshold = 100000;
await build(threshold);
