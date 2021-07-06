setInterval(() => {
    const info = new Date();
    const hr = info.getHours();
    const mn = info.getMinutes();
    const sec = info.getSeconds();
    const hrrotation = 30*hr + mn/2;
    const mnrotation = 6*mn;
    const secrotation = 6*sec;
    hour.style.transform = `rotate(${hrrotation}deg)`;
    minute.style.transform = `rotate(${mnrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
}, 1000);