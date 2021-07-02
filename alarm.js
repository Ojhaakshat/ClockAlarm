console.log("Connected");

const alarmSubmit = document.getElementById('alarmSubmit');


var audio = new Audio('action_epic.mp3');
function ringBell() {
    audio.play();
}

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
            ringBell();
        }, timeToAlarm);
    }
});