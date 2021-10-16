const remSize = parseInt(getComputedStyle(document.documentElement).fontSize);
const tmpCanvas = document.createElement("canvas");
const size = 8;
const problemNum = 8;
const meiro = new Array(12);
let score = 0;
let counter = 0;
let processed;
let idioms = [];
const words =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュー"
    .split("");
loadConfig();


function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.dataset.theme = "dark";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

function calcReply() {
  const reply = new Array(size * size);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      const selected = tds[y].classList.contains("table-primary");
      const hinted = tds[y].classList.contains("table-secondary");
      const pos = meiro[x][y];
      if (pos > 0 && (selected || hinted)) {
        reply[pos - 1] = tds[y].textContent;
      }
    }
  }
  return reply;
}

function findMeiroIndex(n) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] == n) {
        return x * size + y;
      }
    }
  }
  return -1;
}

function prependIdiomLink(idiom, correct) {
  const a = document.createElement("a");
  a.textContent = idiom;
  a.href = "https://www.google.com/search?q=" + idiom + "とは";
  a.target = "_blank";
  a.rel = "noopener noreferer";
  if (correct) {
    a.className = "btn btn-light m-1";
  } else {
    a.className = "btn btn-secondary m-1";
  }
  solvedPanel.prepend(a);
}

function showSolved(reply, hinted) {
  const trs = document.getElementById("meiro").children;
  let j = 0;
  let k = 0;
  for (let i = 0; i < counter; i++) {
    const idiom = idioms[j];
    if (!processed[i]) {
      if (reply[i] == idiom[k]) {
        if (k == idiom.length - 1) {
          const pos = i - k + 1;
          if (processed[pos]) {
            const idx = findMeiroIndex(pos);
            const td = trs[Math.floor(idx / size)].children[idx % size];
            if (td.classList.contains("table-secondary")) {
              score += 1;
            } else {
              score += idiom.length;
            }
            prependIdiomLink(idiom, true);
          }
          document.getElementById("score").textContent = score;
        }
        processed[i] = true;
      } else {
        if (hinted) {
          const pos = i - k + 1;
          const idx = findMeiroIndex(pos);
          const td = trs[Math.floor(idx / size)].children[idx % size];
          td.className = "";
          td.classList.add("table-secondary");
        } else {
          prependIdiomLink(idiom, false);
          const pos = i - k;
          for (let l = pos; l < pos + idiom.length; l++) {
            processed[l] = true;
            const idx = findMeiroIndex(l + 1);
            const td = trs[Math.floor(idx / size)].children[idx % size];
            td.className = "";
            td.classList.add("table-secondary");
          }
        }
      }
    }
    if (k == idiom.length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function showHint() {
  const reply = calcReply();
  showSolved(reply, true);
}

function showAnswer() {
  const reply = calcReply();
  showSolved(reply, false);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] > 0) {
        tds[y].className = "";
        tds[y].classList.add("table-danger");
      }
    }
  }
  const startButton = document.getElementById("startButton");
  startButton.classList.remove("d-none");
  startButton.textContent = "スタート";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.add("d-none");
}

function getNeighborText(trs, x, y, direction) {
  let text = trs[x].children[y].textContent;
  if (direction == 1) {
    if (meiro[x - 1][y] != 0) {
      text += trs[x - 1].children[y].textContent;
    }
  } else if (direction == 2) {
    if (meiro[x + 1][y] != 0) {
      text += trs[x + 1].children[y].textContent;
    }
  } else if (direction == 3) {
    if (meiro[x][y - 1] != 0) {
      text += trs[x].children[y - 1].textContent;
    }
  } else {
    if (meiro[x][y + 1] != 0) {
      text += trs[x].children[y + 1].textContent;
    }
  }
  return text;
}

function setNeighborText(trs, x, y, direction, text, isAnswer) {
  if (!isAnswer) {
    trs[x].children[y].textContent = text[0];
  }
  if (direction == 1) {
    trs[x - 1].children[y].textContent = text[1];
  } else if (direction == 2) {
    trs[x + 1].children[y].textContent = text[1];
  } else if (direction == 3) {
    trs[x].children[y - 1].textContent = text[1];
  } else {
    trs[x].children[y + 1].textContent = text[1];
  }
}

function generateRandomText(text, isAnswer) {
  if (isAnswer) {
    const first = text[0];
    for (let i = 0; i < 5; i++) { // どうしても熟語ができてしまうケースがあるため回数打ち切り
      text = first + words[getRandomInt(0, words.length)];
      if (!includeIdiom(text))return text;
    }
  } else {
    for (let i = 0; i < 5; i++) { // どうしても熟語ができてしまうケースがあるため回数打ち切り
      for (let j = 0; j < 2; j++) {
        text[j] = words[getRandomInt(0, words.length)];
      }
      if (!includeIdiom(text))return text;
    }
  }
  return text;
}

function includeIdiom(text) {
  if (idioms.includes(text.slice(0, 2))) {
    return true;
  } else {
    return false;
  }
}

function strictNeighbor(trs, x, y, direction, isAnswer) {
  let text = getNeighborText(trs, x, y, direction);
  if (text.length == 2) { // 解答ノードを含まない時
    text = generateRandomText(text, isAnswer);
    setNeighborText(trs, x, y, direction, text, isAnswer);
  }
}

function strictSolution() {
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] == 0) {
        // 解答ノード以外は隣接ニ文字だけ見て熟語ができないようにする
        if (0 <= x - 1) {
          strictNeighbor(trs, x, y, 1, false);
        }
        if (x + 1 < size) {
          strictNeighbor(trs, x, y, 2, false);
        }
        if (0 <= y - 1) {
          strictNeighbor(trs, x, y, 3, false);
        }
        if (y + 1 < size) {
          strictNeighbor(trs, x, y, 4, false);
        }
      } else {
        // 解答ノードは別解ができないようにする
        const routes = getNeighborRoutes(x, y);
        for (let j = 0; j < routes.length; j++) {
          strictNeighbor(trs, x, y, routes[j][2], true);
        }
      }
    }
  }
}

function startGame() {
  while (solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);
  generateGame();
  strictSolution();
  const startButton = document.getElementById("startButton");
  startButton.classList.add("d-none");
  startButton.textContent = "やり直し";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.remove("d-none");
}

function getNeighborRoutes(x, y) {
  const routes = [];
  if (0 <= x - 1 && meiro[x - 1][y] == 0) {
    routes.push([x - 1, y, 1]);
  }
  if (x + 1 < size && meiro[x + 1][y] == 0) {
    routes.push([x + 1, y, 2]);
  }
  if (0 <= y - 1 && meiro[x][y - 1] == 0) {
    routes.push([x, y - 1, 3]);
  }
  if (y + 1 < size && meiro[x][y + 1] == 0) {
    routes.push([x, y + 1, 4]);
  }
  return routes;
}

function paint(x, y, direction, n) {
  if (direction == 1) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x - i][y] = counter;
    }
    return [x - n + 1, y];
  } else if (direction == 2) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x + i][y] = counter;
    }
    return [x + n - 1, y];
  } else if (direction == 3) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y - i] = counter;
    }
    return [x, y - n + 1];
  } else {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y + i] = counter;
    }
    return [x, y + n - 1];
  }
}

function _p() {
  let str = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      str += meiro[i][j];
    }
    str += "\n";
  }
  console.log(str);
}

function isPassable(x, y, direction, n) {
  let passable = true;
  if (direction == 1) {
    if (x - n < 0)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x - i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 2) {
    if (size <= x + n)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x + i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 3) {
    if (y - n < 0)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x][y - i] != 0) {
        passable = false;
        break;
      }
    }
  } else {
    if (size <= y + n)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x][y + i] != 0) {
        passable = false;
        break;
      }
    }
  }
  return passable;
}

function generateGame() {
  // 10個の熟語を画面内に生成する
  idioms = shuffle(idioms);
  let generating = true;
  while (generating) {
    counter = 0;
    for (let x = 0; x < size; x++) {
      meiro[x] = new Array(size);
      for (let y = 0; y < size; y++) {
        meiro[x][y] = 0;
      }
    }
    let i = 0;
    let directionCount = 0;
    for (i = 0; i < problemNum; i++) {
      let painted = false;
      for (let j = 0; j < 5; j++) { // 5回ペイントしてうまくいかなければ失敗
        const x = getRandomInt(0, size);
        const y = getRandomInt(0, size);
        const direction = getRandomInt(1, 5);
        if (isPassable(x, y, direction, idioms[i].length)) {
          // 熟語が反転していると難しいので一般的な方向に合わせる
          if (direction == 1) {
            paint(x - idioms[i].length + 1, y, 2, idioms[i].length);
            directionCount += 0;
          } else if (direction == 3) {
            paint(x, y - idioms[i].length + 1, 4, idioms[i].length);
            directionCount += 1;
          } else {
            paint(x, y, direction, idioms[i].length);
            directionCount += Math.floor(direction / 4);
          }
          painted = true;
          break;
        }
      }
      if (!painted)break;
    }
    if (i == problemNum) {
      if (directionCount != 0 && directionCount != problemNum) {
        // すべて同じ方向だと問題としてつまらない
        generating = false;
      }
    }
  }
  processed = new Array(counter); // 回答リストのキャッシュを生成
  const meiroNode = document.getElementById("meiro");
  while (meiroNode.firstChild)meiroNode.removeChild(meiroNode.firstChild);
  for (let x = 0; x < size; x++) {
    const tr = document.createElement("tr");
    meiroNode.appendChild(tr);
    for (let y = 0; y < size; y++) {
      const td = document.createElement("td");
      td.textContent = words[getRandomInt(0, words.length)];
      tr.appendChild(td);
      td.onclick = function () {
        this.classList.toggle("table-primary");
      };
    }
  }
  const trs = meiroNode.children;
  let j = 0;
  let k = 0;
  for (let i = 1; i <= counter; i++) {
    const idx = findMeiroIndex(i);
    const idiom = idioms[j][k];
    const td = trs[Math.floor(idx / size)].children[idx % size];
    td.textContent = idiom;
    if (k == idioms[j].length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function resizeFontSize(node) {
  // https://stackoverflow.com/questions/118241/
  function getTextWidth(text, font) {
    // re-use canvas object for better performance
    // const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = tmpCanvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  function getTextRect(text, fontSize, font, lineHeight) {
    const lines = text.split("\n");
    let maxWidth = 0;
    const fontConfig = fontSize + "px " + font;
    for (let i = 0; i < lines.length; i++) {
      const width = getTextWidth(lines[i], fontConfig);
      if (maxWidth < width) {
        maxWidth = width;
      }
    }
    return [maxWidth, fontSize * lines.length * lineHeight];
  }
  function getNodeRect() {
    const width = document.getElementById("container").clientWidth;
    const headerHeight = document.getElementById("header").clientHeight;
    const startButtonHeight = document.getElementById("startButton").clientHeight;
    const height = document.documentElement.clientHeight - headerHeight -
      startButtonHeight;
    return [width, height];
  }
  // function getPaddingRect(style) {
  //   const width = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  //   const height = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  //   return [width, height];
  // }
  const style = getComputedStyle(node);
  const font = style.fontFamily;
  const fontSize = 16; // parseFloat(style.fontSize);
  const lineHeight = 1.1; // parseFloat(style.lineHeight) / fontSize;
  const nodeRect = getNodeRect();
  const textRect = getTextRect("禿", fontSize, font, lineHeight);
  const paddingRect = [remSize * 2 + 21, remSize * 1.5 + 6]; // getPaddingRect(style);

  // https://stackoverflow.com/questions/46653569/
  // Safariで正確な算出ができないので誤差ぶんだけ縮小化 (10%)
  const rowFontSize = fontSize * (nodeRect[0] - paddingRect[0]) / 12 /
    textRect[0] * 0.90;
  const colFontSize = fontSize * (nodeRect[1] - paddingRect[1]) / 12 /
    textRect[1] * 0.90;
  if (colFontSize < rowFontSize) {
    node.style.fontSize = colFontSize + "px";
  } else {
    node.style.fontSize = rowFontSize + "px";
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    delete document.documentElement.dataset.theme;
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.dataset.theme = "dark";
  }
}


const meiroObj = document.getElementById("meiro");
resizeFontSize(meiroObj);
window.addEventListener("resize", function () {
  resizeFontSize(meiroObj);
});

fetch("words.lst").then(response => response.text()).then(text => {
  text.trim().split("\n").forEach(line => {
    idioms.push(line);
  });
  generateGame();
  strictSolution();
  while (solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);
  showAnswer();
});

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("startButton").onclick = startGame;
document.getElementById("answerButton").onclick = showAnswer;
document.getElementById("hintButton").onclick = showHint;
