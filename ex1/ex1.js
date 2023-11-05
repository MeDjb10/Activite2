const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var currentPosIndex = 0;

const positions = [
  {
    leftArm: { x: 220, y: 250 },
    rightArm: { x: 380, y: 250 },
    leftLeg: { x: 350, y: 500 },
    rightLeg: { x: 250, y: 500 },
  },
  {
    leftArm: { x: 220, y: 300 },
    rightArm: { x: 380, y: 300 },
    leftLeg: { x: 350, y: 450 },
    rightLeg: { x: 250, y: 450 },
  },
  {
    leftArm: { x: 220, y: 200 },
    rightArm: { x: 380, y: 200 },
    leftLeg: { x: 350, y: 400 },
    rightLeg: { x: 250, y: 400 },
  },
];

function draw() {
  var currentPos = positions[currentPosIndex];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(200, 550);
  ctx.lineTo(200, 50);
  ctx.lineTo(300, 50);
  ctx.lineTo(300, 100);
  ctx.stroke();

  ctx.strokeStyle = "red";
  ctx.fillStyle = "yellow";

  ctx.beginPath();
  ctx.arc(300, 150, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300 - 20, 150 - 25);
  ctx.lineTo(300 - 10, 150 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300 + 20, 150 - 25);
  ctx.lineTo(300 + 10, 150 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 150 - 10);
  ctx.lineTo(300, 160);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(280, 170);
  ctx.lineTo(320, 170);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(300, 250);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(currentPos.leftArm.x, currentPos.leftArm.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(currentPos.rightArm.x, currentPos.rightArm.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(300, 450);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 450);
  ctx.lineTo(currentPos.leftLeg.x, currentPos.leftLeg.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 450);
  ctx.lineTo(currentPos.rightLeg.x, currentPos.rightLeg.y);
  ctx.stroke();
}

draw();

canvas.addEventListener("click", function () {
  currentPosIndex = (currentPosIndex + 1) % positions.length;
  draw();
});
