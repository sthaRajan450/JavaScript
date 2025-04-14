function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

document.querySelector("#center").addEventListener(
  "mousemove",
  throttle((e) => {
    const div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    );
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img,{
        y:'0',
        ease:Power1,
        duration:.6
    })

    gsap.to(img,{
        y:'100%',
        delay:.6,
        ease:Power2,
        
    })
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400)
);
