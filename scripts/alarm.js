console.log("Connected");

const alarmSubmit = document.getElementById('alarmSubmit');
const alarmStop = document.getElementById('alarmStop');

var audio = new Audio('action_epic.mp3');
function ringBell() {
    audio.play();
}
alarmStop.addEventListener('click', (e) => {
    e.preventDefault();
    audio.currentTime = 0;
    audio.pause();
    alarmStop.style.display = "none";

})
alarmSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const alarm = document.getElementById('alarm');
    const alarmDetail = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDetail}...`);
    const present = new Date();

    let timeToAlarm = alarmDetail - present;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            alarmStop.style.display = "block";
            // alarmStop.classList.add("db");
            ringBell();
        }, timeToAlarm);
        alarmStop.style.display = "none";
    }
});