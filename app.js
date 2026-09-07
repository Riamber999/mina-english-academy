"use strict";
const items=CURRICULUM.items,groups=CURRICULUM.groups;
const $=id=>document.getElementById(id);
const today=()=>{const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
const count=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
const old=read("minaState",{}),raw=read("minaCareer",{}),saved=read("minaCourse",{});
const validId=id=>items.some(e=>e.id===id);
function ids(value){return Array.isArray(value)?[...new Set(value.map(x=>typeof x==="number"?items[x]?.id:x).filter(validId))]:[]}
const state={stars:count(old?.stars),courage:count(old?.courage),day:raw?.day,listen:ids(raw?.listen),say:ids(raw?.say),quiz:ids(raw?.quiz),encore:raw?.encore===true};
const practiced=new Set(ids(saved?.practiced));
let i=validId(saved?.current)?items.findIndex(e=>e.id===saved.current):count(Number(read("minaIndex",0)))%items.length;
let variant=0,activeQuiz=null,streak=0,toastTimer,speechRun=0;
const levels=[["🌱 新人練習生",0],["🎤 Vocal 新秀",15],["💃 舞台練習生",40],["🌟 出道新星",80],["👑 閃耀偶像",150]];
const current=()=>items[i],line=()=>current().variants[variant];
function rollDay(){if(state.day!==today()){state.day=today();state.listen=[];state.say=[];state.quiz=[];state.encore=false;streak=0}}
function persist(){try{localStorage.setItem("minaState",JSON.stringify({stars:state.stars,courage:state.courage}));localStorage.setItem("minaCareer",JSON.stringify(state));localStorage.setItem("minaCourse",JSON.stringify({current:current().id,practiced:[...practiced]}));if(i<31)localStorage.setItem("minaIndex",String(i))}catch{$("storageWarning").textContent="這個瀏覽器目前無法保存進度；你仍然可以繼續練習。"}}
function notify(message){$("toast").textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").textContent="",3500)}
function celebrate(){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;for(let n=0;n<16;n++){const el=document.createElement("span");el.className="spark";el.textContent=["✦","⭐","💜"][n%3];el.style.left=(5+Math.random()*90)+"%";el.style.animationDelay=Math.random()*.4+"s";document.body.append(el);setTimeout(()=>el.remove(),2200)}}
function pool(){return items.filter(e=>e.group===current().group)}
function fillSelect(id,options,value){$(id).replaceChildren();options.forEach(([val,label])=>{const option=document.createElement("option");option.value=val;option.textContent=label;$(id).append(option)});$(id).value=value}
function menus(){const entry=current();$("kind").value=entry.kind;fillSelect("group",groups.filter(g=>g.kind===entry.kind).map(g=>[g.id,g.emoji+" "+g.name+" · "+g.count+" 張"]),entry.group);fillSelect("lesson",pool().map((e,n)=>[e.id,(n+1)+". "+e.en]),entry.id)}
function stats(){rollDay();$("stars").textContent=state.stars;$("courage").textContent=state.courage;const idx=levels.reduce((best,l,n)=>state.stars>=l[1]?n:best,0),next=levels[idx+1];
$("level").textContent=levels[idx][0];$("nextLevel").textContent=next?"再收集 "+(next[1]-state.stars)+" 星光，成為"+next[0]:"你已登上舞台！繼續享受英文吧。";
const percentage=next?Math.min(100,100*(state.stars-levels[idx][1])/(next[1]-levels[idx][1])):100;$("levelBar").style.width=percentage+"%";$("levelProgress").setAttribute("aria-valuenow",Math.round(percentage));
for(const [key,id] of [["listen","listenCount"],["say","sayCount"],["quiz","quizCount"]])$(id).textContent=state[key].length>=3?"✓ 完成":state[key].length+" / 3";
$("dailyMessage").textContent=state.encore?"🎉 今日安可舞台已解鎖！任務完成，可以休息囉。":"完成三項任務，解鎖今日安可舞台 ✨";
$("know").textContent=state.say.includes(current().id)?"✓ 今天已跟唸":"🎤 我跟著唸了";
const p=pool();$("groupProgress").textContent="這個主題已答對 "+p.filter(e=>practiced.has(e.id)).length+" / "+p.length+" 張卡 · 每張卡的不同說法共用今日獎勵";
}
function award(kind,stars,courage){rollDay();const id=current().id;if(state[kind].includes(id))return false;state[kind].push(id);state.stars+=stars;state.courage+=courage;
if(!state.encore&&["listen","say","quiz"].every(k=>state[k].length>=3)){state.encore=true;state.stars+=5;celebrate();notify("🎉 今日安可舞台！額外獲得 5 星光")}
persist();stats();return true}
function stopSpeech(){speechRun++;if("speechSynthesis" in window)speechSynthesis.cancel()}
function render(){stopSpeech();activeQuiz=null;$("quizArea").hidden=true;$("meaning").hidden=false;$("options").replaceChildren();$("feedback").textContent="";
const entry=current(),v=line();$("emoji").textContent=entry.emoji;$("word").textContent=v.en;$("word").classList.toggle("sentence",entry.kind!=="word");$("meaning").textContent=v.zh;
const p=pool();$("position").textContent=(p.findIndex(e=>e.id===entry.id)+1)+" / "+p.length;
$("source").textContent="學習表 PDF 第 "+entry.page+" 頁 · "+entry.source;
$("variantControl").hidden=entry.variants.length<2;fillSelect("variant",entry.variants.map((v,n)=>[String(n),(n+1)+". "+v.en]),String(variant));menus();stats()}
function choose(id){const next=items.findIndex(e=>e.id===id);if(next<0)return;i=next;variant=0;render();persist()}
function move(delta){const p=pool(),pos=p.findIndex(e=>e.id===current().id);choose(p[(pos+delta+p.length)%p.length].id)}
function speak(){if(!("speechSynthesis" in window)){notify("這個瀏覽器不支援發音，可以請大人陪你唸。");return}
stopSpeech();const run=speechRun,day=today(),id=current().id,u=new SpeechSynthesisUtterance(line().en.replaceAll(" / ",", "));
u.lang="en-US";u.rate=.8;u.pitch=1.05;u.onend=()=>{if(run===speechRun&&current().id===id&&day===today())award("listen",0,0)};u.onerror=e=>{if(run===speechRun&&e.error!=="canceled"&&e.error!=="interrupted")notify("發音暫時無法播放，請再試一次。")};speechSynthesis.speak(u)}
function shuffle(a){for(let n=a.length-1;n>0;n--){const j=Math.floor(Math.random()*(n+1));[a[n],a[j]]=[a[j],a[n]]}return a}
function quiz(){rollDay();const v=line(),entry=current(),choices=[{en:v.en,zh:v.zh,correct:true}];
const candidates=shuffle(pool().flatMap(e=>e.variants)).concat(shuffle(items.filter(e=>e.kind===entry.kind).flatMap(e=>e.variants)));
for(const c of candidates){if(choices.length===4)break;if(c.en!==v.en&&!choices.some(p=>p.zh===c.zh))choices.push({en:c.en,zh:c.zh,correct:false})}
activeQuiz={done:false,mistake:false,id:entry.id};$("quizArea").hidden=false;$("meaning").hidden=true;$("question").textContent="舞台理解力：上面這句英文是什麼意思？";if(entry.kind==="word")$("question").textContent="舞台理解力：上面這個英文是什麼意思？";
$("feedback").textContent="";$("options").replaceChildren();shuffle(choices).forEach(c=>{const b=document.createElement("button");b.className="option";b.textContent=c.zh;b.addEventListener("click",()=>answer(b,c.correct));$("options").append(b)})}
function answer(btn,correct){if(!activeQuiz||activeQuiz.done||activeQuiz.id!==current().id)return;rollDay();
if(!correct){activeQuiz.mistake=true;streak=0;btn.classList.add("bad");btn.disabled=true;$("feedback").textContent="💗 沒關係，再想一想！你可以聽發音，再試一次。";return}
activeQuiz.done=true;btn.classList.add("good");Array.from($("options").children).forEach(b=>b.disabled=true);$("meaning").hidden=false;practiced.add(current().id);
const fresh=!state.quiz.includes(current().id);if(fresh){streak=activeQuiz.mistake?0:streak+1;const bonus=streak>0&&streak%3===0?1:0;award("quiz",2+bonus,2);$("feedback").textContent=bonus?"🔥 連續答對 3 張卡！+3 星光、+2 勇氣":"✨ 做到了！+2 星光、+2 勇氣";celebrate()}else $("feedback").textContent="✨ 又答對了！這張卡今天已領過獎勵，試試其他說法或下一張卡吧。";
persist();stats();$("minaText").textContent="You did it! 每一次練習，都讓你更有自信。"}
$("listen").addEventListener("click",speak);
$("know").addEventListener("click",()=>{if(award("say",1,1)){notify("🎤 勇敢開口！+1 星光、+1 勇氣");$("minaText").textContent="Great job! 你正在找到自己的聲音。"}else notify("這張卡今天已練習過，可以試試其他說法或下一張！")});
$("kind").addEventListener("change",()=>choose(items.find(e=>e.kind===$("kind").value).id));
$("group").addEventListener("change",()=>choose(items.find(e=>e.group===$("group").value).id));
$("lesson").addEventListener("change",()=>choose($("lesson").value));
$("variant").addEventListener("change",()=>{variant=Number($("variant").value);render()});
$("challenge").addEventListener("click",quiz);$("previous").addEventListener("click",()=>move(-1));$("next").addEventListener("click",()=>move(1));
document.addEventListener("visibilitychange",()=>{if(!document.hidden){stats();persist()}});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{$("storageWarning").textContent="離線功能尚未啟用；目前仍可在線上練習。"}))}
rollDay();render();persist();

