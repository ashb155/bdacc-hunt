const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
const title = document.getElementById('title');
const contentItems = document.querySelectorAll('.animate');
const qrContainer = document.getElementById("qrContainer");


submitBtn.addEventListener("click", () => {
    const input = codeInput.value.trim().toUpperCase();

    if(input === enc1) {
        message.textContent = "ACCESS GRANTED.";
        message.style.fontSize=40
        message.style.color = "#33ffcc";  
        message.classList.add('visible');
        message.classList.remove('glitch');
        void message.offsetWidth;
        message.classList.add('glitch');

        qrContainer.classList.add('visible');
    } else {
        message.textContent = "ACCESS DENIED. THE ALGORITHM WATCHES.";
        message.style.color = "#ff4444";
        message.classList.add('visible');
        message.classList.remove('glitch');
        
        qrContainer.classList.remove('visible');
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


const enc='REFUQQ=='
const enc1=atob(enc)
