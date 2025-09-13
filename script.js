const initialContentItems = document.querySelectorAll("#content .animate");
if (initialContentItems.length > 0) {
  initialContentItems.forEach((el, i) =>
    setTimeout(() => el.classList.add("visible"), i * 200)
  );
}

const enc1 = atob("REFUQQ==");
const enc2 = atob("RUNITw==");
const enc3 = atob("UEFUSA==");

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
            showMessage(message, "ACCESS DENIED. TRY AGAIN.", "#ff4444");
        }
    });
}

if (a2Btn) {
    a2Btn.addEventListener("click", () => {
        if (codeInput2.value.trim().toUpperCase() === enc2) {
            transitionToNextStage(hint2, message2, hint3);
        } else {
            showMessage(message2, "INCORRECT. THE ECHO FADES.", "#ff4444");
        }
    });
}

if (a3Btn) {
    a3Btn.addEventListener("click", () => {
        if (codeInput3.value.trim().toUpperCase() === enc3) {
            showMessage(message3, "PATHWAY UNLOCKED. WELL DONE.", "#33ffcc", true);
        } else {
            showMessage(message3, "WRONG PATH. TRY AGAIN.", "#ff4444");
        }
    });
}