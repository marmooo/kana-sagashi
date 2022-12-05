const remSize=parseInt(getComputedStyle(document.documentElement).fontSize),tmpCanvas=document.createElement("canvas"),size=8,problemNum=8,meiro=new Array(12);let score=0,counter=0,processed,idioms=[];const words="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュー".split("");loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&(document.documentElement.dataset.theme="dark")}function getRandomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}function shuffle(a){for(let b=a.length;1<b;b--){const c=Math.floor(Math.random()*b);[a[c],a[b-1]]=[a[b-1],a[c]]}return a}function calcReply(){const a=new Array(size*size),b=document.getElementById("meiro").children;for(let c=0;c<size;c++){const d=b[c].children;for(let b=0;b<size;b++){const f=d[b].classList.contains("table-primary"),g=d[b].classList.contains("table-secondary"),e=meiro[c][b];e>0&&(f||g)&&(a[e-1]=d[b].textContent)}}return a}function findMeiroIndex(a){for(let b=0;b<size;b++)for(let c=0;c<size;c++)if(meiro[b][c]==a)return b*size+c;return-1}function prependIdiomLink(b,c){const a=document.createElement("a");a.textContent=b,a.href="https://www.google.com/search?q="+b+"とは",a.target="_blank",a.rel="noopener noreferer",c?a.className="btn btn-light m-1":a.className="btn btn-secondary m-1",a.role="button",solvedPanel.prepend(a)}function showSolved(d,e){const b=document.getElementById("meiro").children;let c=0,a=0;for(let f=0;f<counter;f++){const g=idioms[c];if(!processed[f])if(d[f]==g[a]){if(a==g.length-1){const c=f-a+1;if(processed[c]){const a=findMeiroIndex(c),d=b[Math.floor(a/size)].children[a%size];d.classList.contains("table-secondary")?score+=1:score+=g.length,prependIdiomLink(g,!0)}document.getElementById("score").textContent=score}processed[f]=!0}else if(e){const e=f-a+1,c=findMeiroIndex(e),d=b[Math.floor(c/size)].children[c%size];d.className="",d.classList.add("table-secondary")}else{prependIdiomLink(g,!1);const c=f-a;for(let a=c;a<c+g.length;a++){processed[a]=!0;const d=findMeiroIndex(a+1),e=b[Math.floor(d/size)].children[d%size];e.className="",e.classList.add("table-secondary")}}a==g.length-1?(c+=1,a=0):a+=1}}function showHint(){const a=calcReply();showSolved(a,!0)}function showAnswer(){const b=calcReply();showSolved(b,!1);const c=document.getElementById("meiro").children;for(let a=0;a<size;a++){const b=c[a].children;for(let c=0;c<size;c++)meiro[a][c]>0&&(b[c].className="",b[c].classList.add("table-danger"))}const a=document.getElementById("startButton");a.classList.remove("d-none"),a.textContent="スタート";const d=document.getElementById("answerButton");d.classList.add("d-none")}function getNeighborText(c,a,b,e){let d=c[a].children[b].textContent;return e==1?meiro[a-1][b]!=0&&(d+=c[a-1].children[b].textContent):e==2?meiro[a+1][b]!=0&&(d+=c[a+1].children[b].textContent):e==3?meiro[a][b-1]!=0&&(d+=c[a].children[b-1].textContent):meiro[a][b+1]!=0&&(d+=c[a].children[b+1].textContent),d}function setNeighborText(a,b,c,e,d,f){f||(a[b].children[c].textContent=d[0]),e==1?a[b-1].children[c].textContent=d[1]:e==2?a[b+1].children[c].textContent=d[1]:e==3?a[b].children[c-1].textContent=d[1]:a[b].children[c+1].textContent=d[1]}function generateRandomText(a,b){if(b){{const b=a[0];for(let c=0;c<5;c++)if(a=b+words[getRandomInt(0,words.length)],!includeIdiom(a))return a}}else for(let b=0;b<5;b++){for(let b=0;b<2;b++)a[b]=words[getRandomInt(0,words.length)];if(!includeIdiom(a))return a}return a}function includeIdiom(a){return!!idioms.includes(a.slice(0,2))}function strictNeighbor(b,c,d,e,f){let a=getNeighborText(b,c,d,e);a.length==2&&(a=generateRandomText(a,f),setNeighborText(b,c,d,e,a,f))}function strictSolution(){const a=document.getElementById("meiro").children;for(let b=0;b<size;b++)for(let c=0;c<size;c++)if(meiro[b][c]==0)0<=b-1&&strictNeighbor(a,b,c,1,!1),b+1<size&&strictNeighbor(a,b,c,2,!1),0<=c-1&&strictNeighbor(a,b,c,3,!1),c+1<size&&strictNeighbor(a,b,c,4,!1);else{const d=getNeighborRoutes(b,c);for(let e=0;e<d.length;e++)strictNeighbor(a,b,c,d[e][2],!0)}}function startGame(){while(solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);generateGame(),strictSolution();const a=document.getElementById("startButton");a.classList.add("d-none"),a.textContent="やり直し";const b=document.getElementById("answerButton");b.classList.remove("d-none")}function getNeighborRoutes(a,b){const c=[];return 0<=a-1&&meiro[a-1][b]==0&&c.push([a-1,b,1]),a+1<size&&meiro[a+1][b]==0&&c.push([a+1,b,2]),0<=b-1&&meiro[a][b-1]==0&&c.push([a,b-1,3]),b+1<size&&meiro[a][b+1]==0&&c.push([a,b+1,4]),c}function paint(a,b,d,c){if(d==1){for(let d=0;d<c;d++)counter+=1,meiro[a-d][b]=counter;return[a-c+1,b]}if(d==2){for(let d=0;d<c;d++)counter+=1,meiro[a+d][b]=counter;return[a+c-1,b]}if(d==3){for(let d=0;d<c;d++)counter+=1,meiro[a][b-d]=counter;return[a,b-c+1]}for(let d=0;d<c;d++)counter+=1,meiro[a][b+d]=counter;return[a,b+c-1]}function _p(){let a="";for(let b=0;b<size;b++){for(let c=0;c<size;c++)a+=meiro[b][c];a+="\n"}console.log(a)}function isPassable(b,c,e,a){let d=!0;if(e==1){{if(b-a<0)return!1;for(let e=0;e<a;e++)if(meiro[b-e][c]!=0){d=!1;break}}}else if(e==2){{if(size<=b+a)return!1;for(let e=0;e<a;e++)if(meiro[b+e][c]!=0){d=!1;break}}}else if(e==3){{if(c-a<0)return!1;for(let e=0;e<a;e++)if(meiro[b][c-e]!=0){d=!1;break}}}else{if(size<=c+a)return!1;for(let e=0;e<a;e++)if(meiro[b][c+e]!=0){d=!1;break}}return d}function generateGame(){idioms=shuffle(idioms);let d=!0;while(d){counter=0;for(let a=0;a<size;a++){meiro[a]=new Array(size);for(let b=0;b<size;b++)meiro[a][b]=0}let a=0,b=0;for(a=0;a<problemNum;a++){let c=!1;for(let g=0;g<5;g++){const e=getRandomInt(0,size),f=getRandomInt(0,size),d=getRandomInt(1,5);if(isPassable(e,f,d,idioms[a].length)){d==1?(paint(e-idioms[a].length+1,f,2,idioms[a].length),b+=0):d==3?(paint(e,f-idioms[a].length+1,4,idioms[a].length),b+=1):(paint(e,f,d,idioms[a].length),b+=Math.floor(d/4)),c=!0;break}}if(!c)break}a==problemNum&&b!=0&&b!=problemNum&&(d=!1)}processed=new Array(counter);const a=document.getElementById("meiro");while(a.firstChild)a.removeChild(a.firstChild);for(let b=0;b<size;b++){const c=document.createElement("tr");a.appendChild(c);for(let b=0;b<size;b++){const a=document.createElement("td");a.role="button",a.textContent=words[getRandomInt(0,words.length)],c.appendChild(a),a.onclick=()=>{a.classList.toggle("table-primary")}}}const e=a.children;let c=0,b=0;for(let a=1;a<=counter;a++){const d=findMeiroIndex(a),f=idioms[c][b],g=e[Math.floor(d/size)].children[d%size];g.textContent=f,b==idioms[c].length-1?(c+=1,b=0):b+=1}}function resizeFontSize(a){const b=document.getElementById("masu").offsetWidth,c=1.2,d=remSize*8,e=9,f=(b-d-e)/8/c;a.style.fontSize=f+"px"}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),delete document.documentElement.dataset.theme):(localStorage.setItem("darkMode",1),document.documentElement.dataset.theme="dark")}const meiroObj=document.getElementById("meiro");resizeFontSize(meiroObj),window.addEventListener("resize",()=>{resizeFontSize(meiroObj)}),fetch("words.lst").then(a=>a.text()).then(a=>{for(a.trim().split("\n").forEach(a=>{idioms.push(a)}),generateGame(),strictSolution();solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);showAnswer()}),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("startButton").onclick=startGame,document.getElementById("answerButton").onclick=showAnswer,document.getElementById("hintButton").onclick=showHint