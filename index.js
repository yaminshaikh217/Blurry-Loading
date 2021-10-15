const load = document.getElementById("loading");
const section = document.getElementById("section")

let initial = 0

let interval = setInterval(() => {
    blurry()
}, 40);

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}




function blurry() {
    initial++;

    if (initial > 99) {
        clearInterval(interval);
    }
    load.innerText = `${initial}%`
    section.style.filter = `blur(${scale(initial, 0, 100, 30, 0)}px)`
    load.style.opacity = scale(initial, 0, 100, 1, 0)

}
