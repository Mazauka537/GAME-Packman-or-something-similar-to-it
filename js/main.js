let canvas = document.getElementById('canvas');
let height = 900;
let width = 1600;
canvas.height = height;
canvas.width = width;
let ctx = canvas.getContext('2d');

let target = {x: width / 2, y: height / 2};
let hunter = {x: 50, y: 50, speed: 14, fat: 5};

let timer = setInterval(frameHandler, 15);

canvas.onclick = changeTarget;

function frameHandler() {
    ctx.clearRect(0, 0, width, height);

    renderMap();

    renderTarget();

    if (!isHunterNearTarget()) {
        moveHunterToTarget();
    } else {
        hunter.x = target.x;
        hunter.y = target.y;
    }

    renderHunter();
}

function isHunterNearTarget() {
    return Math.pow(hunter.x - target.x, 2) + Math.pow(hunter.y - target.y, 2) <= hunter.speed * hunter.speed;
}

function moveHunterToTarget() {
    let distance = Math.sqrt(Math.pow(target.x - hunter.x, 2) + Math.pow(target.y - hunter.y, 2));
    let lambda = hunter.speed / (distance - hunter.speed);
    hunter.x = (hunter.x + lambda * target.x) / (1 + lambda);
    hunter.y = (hunter.y + lambda * target.y) / (1 + lambda);
}

function renderHunter() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(hunter.x, hunter.y, hunter.fat, 0, Math.PI * 2);
    ctx.fill();
}

function renderTarget() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(target.x, target.y, 8, 0, Math.PI * 2);
    ctx.fill();
}

function changeTarget(e) {
    let x = e.clientX;
    let y = e.clientY;
    target.x = width / canvas.offsetWidth * x;
    target.y = height / canvas.offsetHeight * y;
}

function renderMap() {
    ctx.beginPath();

    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 2;

    ctx.moveTo(100, 600);
    ctx.lineTo(100, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 300);
    ctx.lineTo(200, 300);
    ctx.lineTo(200, 200);
    ctx.lineTo(300, 200);

    ctx.moveTo(500, 100);
    ctx.lineTo(500, 400);
    ctx.lineTo(200, 400);

    ctx.moveTo(200, 500);
    ctx.lineTo(900, 500);

    ctx.moveTo(600, 100);
    ctx.lineTo(600, 800);

    ctx.moveTo(600, 400);
    ctx.lineTo(900, 400);

    ctx.moveTo(500, 900);
    ctx.lineTo(500, 600);
    ctx.lineTo(200, 600);

    ctx.moveTo(100, 800);
    ctx.lineTo(400, 800);
    ctx.lineTo(400, 700);
    ctx.lineTo(100, 700);
    ctx.lineTo(100, 800);

    ctx.moveTo(700, 800);
    ctx.lineTo(700, 600);
    ctx.lineTo(900, 600);

    ctx.moveTo(800, 800);
    ctx.lineTo(800, 700);
    ctx.lineTo(900, 700);
    ctx.lineTo(900, 800);
    ctx.lineTo(800, 800);

    ctx.moveTo(700, 100);
    ctx.lineTo(900, 100);
    ctx.lineTo(900, 200);
    ctx.lineTo(700, 200);
    ctx.lineTo(700, 100);

    ctx.moveTo(700, 300);
    ctx.lineTo(1000, 300);

    ctx.moveTo(1000, 0);
    ctx.lineTo(1000, 100);

    ctx.moveTo(1000, 200);
    ctx.lineTo(1000, 600);

    ctx.moveTo(1000, 700);
    ctx.lineTo(1000, 900);

    ctx.moveTo(1200, 0);
    ctx.lineTo(1200, 100);
    ctx.lineTo(1500, 100);

    ctx.moveTo(1100, 100);
    ctx.lineTo(1100, 800);

    ctx.moveTo(1100, 200);
    ctx.lineTo(1500, 200);

    ctx.moveTo(1100, 700);
    ctx.lineTo(1500, 700);

    ctx.moveTo(1200, 300);
    ctx.lineTo(1500, 300);
    ctx.lineTo(1500, 600);
    ctx.lineTo(1200, 600);

    ctx.moveTo(1400, 300);
    ctx.lineTo(1400, 500);
    ctx.lineTo(1200, 500);
    ctx.lineTo(1200, 400);
    ctx.lineTo(1300, 400);
    ctx.lineTo(1300, 500);

    ctx.moveTo(1200, 800);
    ctx.lineTo(1600, 800);

    ctx.stroke();
}
