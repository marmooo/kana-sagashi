import { readLines } from "https://deno.land/std/io/mod.ts";

const words = [];
for (let i = 3; i <= 6; i++) {
  const text = await Deno.readTextFile("ngram-idioms/kana-10000/" + i + ".lst");
  words.push(text);
}
Deno.writeTextFile("src/words.lst", words.join(""));
