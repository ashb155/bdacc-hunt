const initialContentItems = document.querySelectorAll("#content .animate");
if (initialContentItems.length > 0) {
  initialContentItems.forEach((el, i) =>
    setTimeout(() => el.classList.add("visible"), i * 200)
  );
}

const enc1 = atob("REFUQQ==");
const enc2 = atob("RUNITw==");
const enc3 = atob("UEFUSA==");
const enc4 = atob("UkVBRA==");
const enc5 = atob("UExBTkU=")
const enc6 = atob("T1ZFTg==")

const title = document.getElementById("title");
const submitBtn = document.getElementById("submitBtn");
const stage2 = document.getElementById("stage2");
const stage2Items = stage2 ? stage2.querySelectorAll(".animate") : [];
const submitBtnTeam = document.getElementById("submitBtnTeam");
const teamInput = document.getElementById("teamInput");

const content = document.getElementById("content");
const message = document.getElementById("message");
const codeInput = document.getElementById("codeInput");
const a1Btn = document.getElementById("a1Btn");

const hint2 = document.getElementById("hint2");
const message2 = document.getElementById("message2");
const codeInput2 = document.getElementById("codeInput2");
const a2Btn = document.getElementById("a2Btn");

const hint3 = document.getElementById("hint3");
const message3 = document.getElementById("message3");
const codeInput3 = document.getElementById("codeInput3");
const a3Btn = document.getElementById("a3Btn");

const hint4 = document.getElementById("hint4");
const message4 = document.getElementById("message4");
const codeInput4 = document.getElementById("codeInput4");
const a4Btn = document.getElementById("a4Btn");

const hint5 = document.getElementById('hint5');
const message5 = document.getElementById('message5');
const codeInput5 = document.getElementById('codeInput5');
const a5Btn = document.getElementById('a5Btn');

const hint6 = document.getElementById('hint6');
const message6 = document.getElementById('message6');
const codeInput6 = document.getElementById('codeInput6');
const a6Btn = document.getElementById('a6Btn');

const hint7 = document.getElementById('hint7');
const message7 = document.getElementById('message7');
const codeInput7 = document.getElementById('codeInput7');
const a7Btn = document.getElementById('a7Btn');

function showMessage(msgElement, text, color, glitch = false) {
  if (!msgElement) return;
  msgElement.textContent = text;
  msgElement.style.color = color;
  msgElement.classList.remove("glitch", "visible");
  setTimeout(() => {
    msgElement.classList.add("visible");
    if (glitch) msgElement.classList.add("glitch");
  }, 10);
}

function animateIn(hintElement) {
    if (!hintElement) return;
    const items = hintElement.querySelectorAll(".animate");
    items.forEach((el, i) =>
      setTimeout(() => el.classList.add("visible"), i * 200)
    );
}

function transitionToNextStage(currentHint, currentMessage, nextHint) {
    showMessage(currentMessage, "ACCESS GRANTED.", "#33ffcc", true);
    setTimeout(() => {
        if(currentHint) currentHint.style.display = "none";
        if(currentMessage) currentMessage.style.display = "none";
        if(nextHint) nextHint.style.display = "block";
        animateIn(nextHint);
    }, 1500);
}

if (submitBtn && codeInput && title) {
    submitBtn.addEventListener("click", () => {
        const input = codeInput.value.trim().toUpperCase();
        if (input === enc1) {
            showMessage(message, "ACCESS GRANTED.", "#33ffcc", true);
            title.textContent = "";
            content.style.display = "none";
            stage2.style.display = "block";
            stage2Items.forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 200)
            );
        } else {
            showMessage(message, "ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444");
        }
    });

    const text = "THE ALGORITHM IS AWAKE";
    let index = 0;
    (function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index++);
            setTimeout(typeEffect, 80);
        }
    })();
}

if (submitBtnTeam && teamInput) {
    submitBtnTeam.addEventListener("click", () => {
        const team = teamInput.value.trim().toUpperCase();
        if (["A", "B", "C"].includes(team)) {
            window.location.href = `${team.toLowerCase()}.html`;
        } else {
            showMessage(message, "INVALID TEAM. ONLY A, B OR C.", "#ff4444");
        }
    });
}

if (a1Btn) {
    a1Btn.addEventListener("click", () => {
        if (codeInput.value.trim().toUpperCase() === enc1) {
            transitionToNextStage(content, message, hint2);
        } else {
            showMessage(message, "ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444");
        }
    });
}

if (a2Btn) {
    a2Btn.addEventListener("click", () => {
        if (codeInput2.value.trim().toUpperCase() === enc2) {
            transitionToNextStage(hint2, message2, hint3);
        } else {
            showMessage(message2, "ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444");
        }
    });
}

if (a3Btn) {
    a3Btn.addEventListener("click", () => {
        if (codeInput3.value.trim().toUpperCase() === enc3) {
            transitionToNextStage(hint3, message3, hint4);
        } else {
            showMessage(message3,"ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444");
        }
    });
}

if (a4Btn){
    a4Btn.addEventListener("click",()=>{
        if(codeInput4.value.trim().toUpperCase() === enc4 ){
            transitionToNextStage(hint4,message4,hint5);
        }
        else{
            showMessage(message4,"ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444")
        }
    })
}

if(a5Btn){
    a5Btn.addEventListener("click",()=>{
        if(codeInput5.value.trim().toUpperCase()=== enc5){
            transitionToNextStage(hint5,message5,hint6);
        }
         else{
            showMessage(message5,"ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444")
        }
    })
}


if(a6Btn){
    a6Btn.addEventListener("click",()=>{
        if(codeInput6.value.trim().toUpperCase()=== enc6){
           showMessage(message6,"MISSION SUCCESS", "#33ffcc")
        
        }
         else{
            showMessage(message6,"ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444")
        }
    })
}



