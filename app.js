"use strict";
const words=[
["👦","boy","男孩"],["🤝","friend","朋友"],["👧","girl","女孩"],["🧑‍🏫","teacher","教師"],
["🧑‍⚕️","doctor","醫生"],["🧒","kid","小孩"],["🎓","student","學生"],["👦🏻","brother","兄弟"],
["👨","father / dad","爸爸"],["👩","mother / mom","媽媽"],["👧🏻","sister","姐妹"],["👵","grandma","奶奶、外婆"],
["👴","grandpa","爺爺、外公"],["🍎","apple","蘋果"],["🍌","banana","香蕉"],["🍰","cake","蛋糕"],
["🥚","egg","蛋"],["🥛","milk","牛奶"],["🍚","rice","米、飯"],["🍵","tea","茶"],["💧","water","水"],
["🧃","juice","果汁"],["🍔","hamburger","漢堡"],["🍨","ice cream","冰淇淋"],["🍊","orange","柳丁"],
["🍕","pizza","披薩"],["🌅","breakfast","早餐"],["☀️","lunch","午餐"],["🌙","dinner","晚餐"],["🎒","bag","書包"],["⚽","ball","球"]
];
const $=id=>document.getElementById(id);
const today=()=>{const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
const count=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
const old=read("minaState",{})||{};
const raw=read("minaCareer",{})||{};
const state={stars:count(old.stars),courage:count(old.courage),day:raw.day,listen:Array.isArray(raw.listen)?raw.listen:[],say:Array.isArray(raw.say)?raw.say:[],quiz:Array.isArray(raw.quiz)?raw.quiz:[],encore:raw.encore===true};
let i=count(Number(read("minaIndex",0)))%words.length;
let streak=0,activeQuiz=null,toastTimer;
const levels=[["🌱 新人練習生",0],["🎤 Vocal 新秀",15],["💃 舞台練習生",40],["🌟 出道新星",80],["👑 閃耀偶像",150]];
function rollDay(){if(state.day!==today()){state.day=today();state.listen=[];state.say=[];state.quiz=[];state.encore=false;streak=0}}
function persist(){try{localStorage.setItem("minaState",JSON.stringify({stars:state.stars,courage:state.courage}));localStorage.setItem("minaIndex",String(i));localStorage.setItem("minaCareer",JSON.stringify(state))}catch{$("storageWarning").textContent="這個瀏覽器目前無法保存進度；你仍然可以繼續練習。"}}
function notify(message){$("toast").textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").textContent="",3500)}
function celebrate(){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;for(let n=0;n<16;n++){const el=document.createElement("span");el.className="spark";el.textContent=["✦","⭐","💜"][n%3];el.style.left=(5+Math.random()*90)+"%";el.style.animationDelay=Math.random()*.4+"s";document.body.append(el);setTimeout(()=>el.remove(),2200)}}
function stats(){rollDay();$("stars").textContent=state.stars;$("courage").textContent=state.courage;
const idx=levels.reduce((best,l,n)=>state.stars>=l[1]?n:best,0);const next=levels[idx+1];$("level").textContent=levels[idx][0];$("nextLevel").textContent=next?"再收集 "+(next[1]-state.stars)+" 星光，成為"+next[0]:"你已登上舞台！繼續享受英文吧。";
const percentage=next?Math.min(100,100*(state.stars-levels[idx][1])/(next[1]-levels[idx][1])):100;$("levelBar").style.width=percentage+"%";$("levelProgress").setAttribute("aria-valuenow",Math.round(percentage));
for(const [key,id] of [["listen","listenCount"],["say","sayCount"],["quiz","quizCount"]]){$(id).textContent=state[key].length>=3?"✓ 完成":state[key].length+" / 3"}
$("dailyMessage").textContent=state.encore?"🎉 今日安可舞台已解鎖！任務完成，可以休息囉。":"完成三項任務，解鎖今日安可舞台 ✨";
$("know").textContent=state.say.includes(i)?"✓ 今天已跟唸":"🎤 我跟著唸了";
}
function award(kind,stars,courage){rollDay();if(state[kind].includes(i))return false;state[kind].push(i);state.stars+=stars;state.courage+=courage;
if(!state.encore&&["listen","say","quiz"].every(k=>state[k].length>=3)){state.encore=true;state.stars+=5;celebrate();notify("🎉 今日安可舞台！額外獲得 5 星光")}
persist();stats();return true}
function render(){activeQuiz=null;$("quizArea").hidden=true;$("options").replaceChildren();$("feedback").textContent="";const w=words[i];$("emoji").textContent=w[0];$("word").textContent=w[1];$("meaning").textContent=w[2];$("position").textContent=(i+1)+" / "+words.length;stats()}
function move(delta){i=(i+delta+words.length)%words.length;render();persist()}
function speak(){if(!("speechSynthesis" in window)){notify("這個瀏覽器不支援發音，可以請大人陪你唸。");return}
speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(words[i][1].replace(" / "," or "));u.lang="en-US";u.rate=.8;u.pitch=1.05;
const wordIndex=i;u.onend=()=>{if(i===wordIndex)award("listen",0,0)};u.onerror=()=>notify("發音暫時無法播放，請再試一次。");speechSynthesis.speak(u)}
function quiz(){rollDay();const target=i;const picks=[target];while(picks.length<4){const n=Math.floor(Math.random()*words.length);if(!picks.includes(n))picks.push(n)}
for(let n=picks.length-1;n>0;n--){const j=Math.floor(Math.random()*(n+1));[picks[n],picks[j]]=[picks[j],picks[n]]}
activeQuiz={target,done:false,mistake:false};$("quizArea").hidden=false;$("question").textContent="舞台任務：找出「"+words[i][2]+"」的英文";$("feedback").textContent="";$("options").replaceChildren();
picks.forEach(n=>{const b=document.createElement("button");b.className="option";b.textContent=words[n][1];b.addEventListener("click",()=>answer(b,n));$("options").append(b)})}
function answer(btn,n){if(!activeQuiz||activeQuiz.done)return;rollDay();if(n!==activeQuiz.target){activeQuiz.mistake=true;streak=0;btn.classList.add("bad");btn.disabled=true;$("feedback").textContent="💗 沒關係，再想一想！你可以按「聽發音」找提示。";return}
activeQuiz.done=true;btn.classList.add("good");Array.from($("options").children).forEach(b=>b.disabled=true);
const fresh=!state.quiz.includes(i);if(fresh){streak=activeQuiz.mistake?0:streak+1;const bonus=streak>0&&streak%3===0?1:0;award("quiz",2+bonus,2);$("feedback").textContent=bonus?"🔥 連續答對 3 題！+3 星光、+2 勇氣":"✨ 做到了！+2 星光、+2 勇氣";celebrate()}else{$("feedback").textContent="✨ 又答對了！這個單字今天已領過獎勵，試試下一個吧。"}
$("minaText").textContent="You did it! 每一次練習，都讓你更有自信。";
}
$("listen").addEventListener("click",speak);
$("know").addEventListener("click",()=>{if(award("say",1,1)){notify("🎤 勇敢開口！+1 星光、+1 勇氣");$("minaText").textContent="Great job! 你正在找到自己的聲音。"}else notify("這個單字今天已練習過，換下一個試試！")});
$("challenge").addEventListener("click",quiz);$("previous").addEventListener("click",()=>move(-1));$("next").addEventListener("click",()=>move(1));
document.addEventListener("visibilitychange",()=>{if(!document.hidden){stats();persist()}});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{$("storageWarning").textContent="離線功能尚未啟用；目前仍可在線上練習。"}))}
rollDay();render();persist();
