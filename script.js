const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
const qrContainer = document.getElementById("qrContainer");
const title= document.getElementById('title');

const correctCode = "HUNT";

submitBtn.addEventListener("click", () => {
    const input = codeInput.value.trim().toUpperCase();

    if(input === correctCode) {
        message.textContent = "";

        qrContainer.classList.remove("hidden");

        qrContainer.classList.remove("glitch");
        void qrContainer.offsetWidth; 
        qrContainer.classList.add("glitch");

        setTimeout(() => {
            qrContainer.classList.remove("glitch");
        }, 1200);

    } else {
        message.textContent = "ACCESS DENIED. THE ALGORITHM WATCHES.";
        qrContainer.classList.add("hidden");
    }
});

const text= 'THE ALGORITHM IS AWAKE';
let index = 0;
function typeEffect(){
    if (index<text.length){
        title.textContent += text.charAt(index)
        index++;
        setTimeout(typeEffect,80)
    }
}

title.textContent = "";
typeEffect();
