
const contentItems = document.querySelectorAll(".animate");
if (contentItems.length > 0) {
  contentItems.forEach((el, i) =>
    setTimeout(() => el.classList.add("visible"), i * 200)
  );
}

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
const title = document.getElementById("title");
const stage2 = document.getElementById("stage2");
const stage2Items = stage2 ? stage2.querySelectorAll(".animate") : [];
const submitBtnTeam = document.getElementById("submitBtnTeam");
const teamInput = document.getElementById("teamInput");

if (submitBtn && codeInput && message && title) {
  const enc1 = atob("REFUQQ==");

  function showMessage(text, color, glitch = false) {
    message.textContent = text;
    message.style.color = color;
    message.classList.add("visible");
    message.classList.toggle("glitch", glitch);
  }

  submitBtn.addEventListener("click", () => {
    const input = codeInput.value.trim().toUpperCase();
    if (input === enc1) {
      showMessage("ACCESS GRANTED.", "#33ffcc", true);
      title.textContent = "";
      document.getElementById("content").style.display = "none";
      stage2.style.display = "block";
      stage2Items.forEach((el, i) =>
        setTimeout(() => el.classList.add("visible"), i * 200)
      );
    } else {
      showMessage("ACCESS DENIED. THE ALGORITHM WATCHES.", "#ff4444");
    }
  });

  const text = "THE ALGORITHM IS AWAKE";
  let index = 0;
  (function typeEffect() {
    if (index < text.length) {
      title.textContent += text.charAt(index++);
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(() => {
        contentItems.forEach((el, i) =>
          setTimeout(() => el.classList.add("visible"), i * 200)
        );
      }, 800);
    }
  })();
}

if (submitBtnTeam && teamInput) {
  submitBtnTeam.addEventListener("click", () => {
    const team = teamInput.value.trim().toUpperCase();
    if (["A", "B", "C"].includes(team)) {
      window.location.href = `${team.toLowerCase()}.html`;
    } else {
      message.textContent = "INVALID TEAM. ONLY A, B OR C.";
      message.style.color = "#ff4444";
      message.classList.add("visible");
    }
  });
}
