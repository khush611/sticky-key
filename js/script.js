let shiftCount = 0;
let status = 0;

let isRunning = 0;

let time = 0;

const startShiftInterval = () => {
  isRunning = 1;
  let temp = setInterval(() => {
    time++;
    if (shiftCount >= 5) {
      enableStickyKey();
      shiftCount = 0;
      time = 0;
      isRunning = 0;
      clearInterval(temp);
    }
    if (time > 5) {
      time = 0;
      isRunning = 0;
      shiftCount = 0;
      clearInterval(temp);
    }
  }, 1000);
};

let enableStickyKey = () => {
  status = 1;
  //console.log("activated");
  document.getElementById("box").classList.remove("hide");
  document.getElementById("header").classList.add("hide");
};

document.getElementById("disable").addEventListener("click", () => {
  location.reload();
});

/* STARTING POINT*/
window.addEventListener("keyup", (key) => {
  if (key.keyCode === 16) {
    //console.log(shiftCount);
    shiftCount++;
    if (isRunning === 1 || status === 1) {
      return;
    }
    startShiftInterval();
  } else console.log("wrong-key");
});
