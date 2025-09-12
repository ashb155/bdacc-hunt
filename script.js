const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
const title = document.getElementById('title');
const contentItems = document.querySelectorAll('.animate');
const stage2 = document.getElementById("stage2");
const stage2Items = stage2.querySelectorAll('.animate');

const enc = 'REFUQQ==';
const enc1 = atob(enc);

submitBtn.addEventListener("click", () => {
    const input = codeInput.value.trim().toUpperCase();

    if(input === enc1) {
        message.textContent = "ACCESS GRANTED.";
        message.style.color = "#33ffcc";
        message.classList.add('visible');
        message.classList.remove('glitch');
        void message.offsetWidth;
        message.classList.add('glitch');

        title.textContent='';
        document.getElementById("content").style.display = "none";

        stage2.style.display = "block";
        stage2Items.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 200);
        });
    } else {
        message.textContent = "ACCESS DENIED. THE ALGORITHM WATCHES.";
        message.style.color = "#ff4444";
        message.classList.add('visible');
        message.classList.remove('glitch');
    }
});

const text = 'THE ALGORITHM IS AWAKE';
let index = 0;

function typeEffect(){
    if (index < text.length){
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(() => {
            contentItems.forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 200);
            });
        }, 800);
    }
}

title.textContent = "";
typeEffect();


const submitBtnTeam = document.getElementById("submitBtnTeam");
const teamInput = document.getElementById("teamInput");

submitBtnTeam.addEventListener("click", () => {
  const team = teamInput.value.trim().toUpperCase();

  if (["A", "B", "C"].includes(team)) {
    message.textContent = `TEAM ${team} SELECTED.`;
    message.style.color = "#33ffcc";
    message.classList.add("visible");
  } else {
    message.textContent = "INVALID TEAM. ONLY A, B OR C.";
    message.style.color = "#ff4444";
    message.classList.add("visible");
  }
});
