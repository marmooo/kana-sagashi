import { TextLineStream } from "jsr:@std/streams/text-line-stream";

function isIdiom(word) {
  if (3 <= word.length && word.length <= 6 && /^[ァ-ヶ]+$/.test(word)) {
    return true;
  } else {
    return false;
  }
}

async function build(threshold) {
  const idioms = [];
  const file = await Deno.open("graded-vocab-ja/dist/0.csv");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
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
