const clock = document.querySelector('#clock');
const second_clock = document.querySelector('#second_clock');
function DisplayClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours} : ${minutes}`;
    // second_clock.innerText = seconds;
}
DisplayClock();
setInterval(DisplayClock, 1000);
