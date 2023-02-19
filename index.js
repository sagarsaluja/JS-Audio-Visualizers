const button = document.getElementById("button1");
const audio1 = new Audio();
audio1.src = './Assets/ALERT_Appear.wav'
button.addEventListener('click' ,()=>{
    audio1.play();
})