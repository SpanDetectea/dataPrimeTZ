let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let widthLine = 90 * canvas.width / 100;
let heightLine = 90 * canvas.height / 100;

// ctx.beginPath();
// ctx.moveTo(canvas.width - widthLine, heightLine);
// ctx.lineTo(widthLine, heightLine);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(canvas.width - widthLine, heightLine);
// ctx.lineTo(canvas.width - widthLine, canvas.height - heightLine);
// ctx.stroke();
function getRandomArbitrary() {
    return Math.floor(Math.random() * (11 - 2) + 2);
}
function getRandomNum() {
    return Math.floor(Math.random() * (11 - 0) + 0);
}

function showPoint() {
    ctx.beginPath();
    ctx.moveTo(canvas.width - widthLine, heightLine);
    ctx.lineTo(widthLine, heightLine);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width - widthLine, heightLine);
    ctx.lineTo(canvas.width - widthLine, canvas.height - heightLine);
    ctx.stroke();
    let maxDot = getRandomArbitrary();

    let startX = 10 * canvas.width / 100 + 20;
    let distanceX = (widthLine - startX - 20) / (maxDot - 1);

    let startY = 90 * canvas.height / 100 - 20;
    let distanceY = ((heightLine - 20) - (10 * canvas.height / 100 + 20)) / (10);

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fill();
    let y = getRandomNum();
    for (let i = 0; i < maxDot; i++) {
        let yRand = getRandomNum();
        y = startY - y * distanceY;
        y2 = startY - yRand * distanceY;
        let z = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(y2 - y, 2));
        let sin = (y2 - y) / z;
        let c = 5 * sin;
        let e = Math.sqrt(Math.pow(5, 2) - Math.pow(c, 2))

        if (i < maxDot - 1) {
            if (y2 - y < 0) {
                ctx.arc(startX, y, 5, 0, Math.PI * 2, true);
                ctx.moveTo(startX + e, y + c);
                ctx.lineTo(startX + distanceX - e, y2 - c);
                ctx.moveTo(startX + distanceX, y2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
            } else {
                ctx.arc(startX, y, 5, 0, Math.PI * 2, true);
                ctx.moveTo(startX + e, y + c);
                ctx.lineTo(startX + distanceX - e, y2 - c);
                ctx.moveTo(startX + distanceX, y2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
            }
        } else {
            ctx.arc(startX, y, 5, 0, Math.PI * 2, true);
        }
        y = yRand;
        ctx.fillStyle = 'white';
        ctx.fill();
        startX += distanceX;
    }
    ctx.stroke();
}
showPoint();
canvas.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showPoint();
})