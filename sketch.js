let winHeight = window.innerHeight;
let winWidth = window.innerWidth;
let dim = Math.min(winHeight, winWidth);

let n = 0.45;

let pcor;
let cor;
let t

function setup() {
    let can = createCanvas(winWidth, winHeight).canvas;
    can.style.position = "fixed";
    can.style.top = "0px";
    can.style.zIndex = "-1";
    background("rgba(10, 139, 60, 0.5)");
    textSize(winHeight/2.4);
    textAlign(CENTER, CENTER);
    fill('rgba(10, 89, 60, 0.6)');
    stroke('rgba(10, 49, 60, 0.1)');
    strokeWeight(5);
    angleMode(DEGREES);

    t = 0;
    pcor = {
        x: 0,
        y: 0
    };
    cor = {
        x: 0,
        y: 0
    };
}

function draw() {
    pcor = cor;
    cor = {
        x: ((0.9 * dim / 2) * (cos(t) * cos(n * t))) + winWidth/2,
        y: ((0.9 * dim / 2) * (sin(t) * cos(n * t))) + winHeight/2
    };
    if (t > 2) {
        line(pcor.x, pcor.y, cor.x, cor.y);
    }
    t += 2;
}