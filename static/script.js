var arr = new Array("first_banner.jpg", "second_banner.jpg", "third_banner.jpg");
var index = 1;

var banner_img = document.getElementById("banner_img");
var banner_style = document.getElementById("banner_text");

setInterval(changeImg, 5000);

banner_img.addEventListener('click', changeImg);

function changeImg() {
    if (index == 3) {
        banner_img.src = "./static/images/" + arr[0];
        banner_style.classList.remove('banner_3');
        banner_style.classList.add('banner_1');
        index = 1;
    } else {
        banner_img.src = "./static/images/" + arr[index];
        banner_style.classList.remove('banner_'+index);
        banner_style.classList.add('banner_'+(index+1));
        index++;
    }
}

document.getElementById("xcode_more_btn").addEventListener('click', function() {
    window.open("https://developer.apple.com/kr/xcode/");
});

// memo - canvas
var canvas, context;
function init() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    context.lineWidth = 2;
    context.strokeStyle = "black";

    canvas.addEventListener("mousemove", function (e) {move(e)}, false);
    canvas.addEventListener("mousedown", function (e) {down(e)}, false);
    canvas.addEventListener("mouseup", function (e) {up(e)}, false);
    canvas.addEventListener("mouseout", function (e) {out(e)}, false);
}

var startX = 0, startY = 0;
var drawing = false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}

function down(e) {
    startX = e.offsetX;
    startY = e.offsetY;
    drawing = true;
}

function up(e) {
    drawing = false;
}

function move(e) {
    if(!drawing) return;
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) {
    drawing = false;
}