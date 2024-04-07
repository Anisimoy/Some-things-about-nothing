

let dick = document.getElementById("myAnimation");
let skin = document.getElementById("skin");
let letfBall = document.getElementById("leftBall");
let rightBall = document.getElementById("rightBall");
let slider = document.getElementById("range");
let output = document.getElementById("demo");
let value = document.getElementById("0");

// Настройка слайдера


output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Движение кожи :)
let hoverCount = 0;
let hoverItem = document.getElementById("skin");
    hoverItem.addEventListener("mouseout", () => {
         console.log(hoverCount++);

            if (hoverCount >= 10) {
                alert("The End");}
});


// Анимация
function myMove() {
  if (slider.value >= 40) {
        alert("Староват ты, дружище");
  } else if (slider.value < 10) {
        alert("Маловат, орел");
  } else {
        let element = document.getElementById("myAnimation");
        let secondElement = document.getElementById("skin");
            element.style.rotate = "90deg";
            secondElement.style.rotate = "90deg";
  }
}


// Смены настроений)


function dickChangeAsian() {
  skin.style.cssText =
    "background: rgb(189, 189, 54);width: 80px; right: -240px;";
  dick.style.cssText = "width: 95px; right: -227px;";
  letfBall.style.cssText =
    "width: 62px; height: 62px; background: rgb(189, 189, 54); top: 140px; right: -303px;";
  rightBall.style.cssText =
    "width: 62px; height: 62px; background: rgb(189, 189, 54);top: 75px; right: -290px; ";
}

function dickChangeEcvatorial() {
  skin.style.cssText =
    "background:rgb(41, 10, 10);width: 190px; height: 50px; right: -130px; top: -37px;";
  dick.style.cssText =
    "background:rgb(58, 6, 6);width: 230px; height: 50px; right: -90px";
  letfBall.style.cssText =
    "background:black; width: 80px; height: 80px; top: 160px; left: 310px;";
  rightBall.style.cssText = "background:black; width: 80px; height: 80px;";
}

function dickChangeEuro() {
  skin.style.cssText =
    " width: 120px; height: 40px;top: -27px; right: -200px; background: peachpuff;";
  dick.style.cssText =
    "width: 150px; height: 40px; right: -172px; bottom:-15px; background: pink;";
  letfBall.style.cssText =
    " width: 70px;height: 70px; background: peachpuff; right: -300px; top: 150px;";
  rightBall.style.cssText =
    "width: 70px; height: 70px; background: peachpuff; right: -280px; top: 78px;";
}
