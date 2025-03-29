const clock = document.querySelector("#clock");
setInterval(() => {
  let currenTime = new Date();
  clock.innerHTML = `CLOCK: ${currenTime.toLocaleTimeString()}`;
}, 1000);
