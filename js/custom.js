/* 
NOTE: I attempted to complete the sliders' functionality but found it challenging, and unfortunately, I was unable to complete it in the limited time.
I want to assure you that I did my best to complete the circular slider part, but due to its complexity, I was unable to finish it within the given timeline.
I have included the code that I was able to write.//
I understand the importance of completing this task, and I want to assure you that I am taking steps to address this issue.
__________________________________________________________________________________________________________________________________________________________________
*/

/* const rects = document.querySelectorAll(".rCon")
rects.forEach(rect => rect.addEventListener("click", rightClick));
function rightClick() {
  if (this.classList.contains("v")) return;
  if (this.classList.contains("l")) {
    const vrect = document.querySelector(".rCon.v")
    const lrect = document.querySelector(".rCon.l")
    const rrect = document.querySelector(".rCon.r")
    const rAng = getAngle(rrect.style.transform);
    const lAng = getAngle(lrect.style.transform);
    const vAng = getAngle(vrect.style.transform);
    rrect.style.height = "400px"
    rrect.style.transform = `translateX(-50%) rotate(${rAng + 180}deg)`
    lrect.style.height = "600px"
    lrect.style.transform = `translateX(-50%) rotate(${lAng + 90}deg)`
    vrect.style.height = "600px"
    vrect.style.transform = `translateX(-50%) rotate(${vAng + 90}deg)`
    rrect.classList.remove("r");
    lrect.classList.remove("l");
    vrect.classList.remove("v");
    rrect.classList.add("l");
    lrect.classList.add("v");
    vrect.classList.add("r");
  };
  if (this.classList.contains("r")) {
    const vrect = document.querySelector(".rCon.v")
    const lrect = document.querySelector(".rCon.l")
    const rrect = document.querySelector(".rCon.r")
    const rAng = getAngle(rrect.style.transform);
    const lAng = getAngle(lrect.style.transform);
    const vAng = getAngle(vrect.style.transform);
    console.log("R ", rAng, "L ", lAng, "V ", vAng)
    rrect.style.height = "400px"
    rrect.style.transform = `translateX(-50%) rotate(${rAng - 90}deg)`
    lrect.style.height = "500px"
    lrect.style.transform = `translateX(-50%) rotate(${lAng - 180}deg)`
    vrect.style.height = "500px"
    vrect.style.transform = `translateX(-50%) rotate(${vAng - 90}deg)`
    setTimeout(() => {
      rrect.classList.remove("r");
      lrect.classList.remove("l");
      vrect.classList.remove("v");
      rrect.classList.add("v");
      lrect.classList.add("r");
      vrect.classList.add("l");
    }, 1000);
  }
}
function getAngle(str) {
  const regex = /rotate\(([^)]+)\)/;
  const match = regex.exec(str);
  if (match) {
    const value = match[1];
    return parseInt(value);
  }
  return null
} */
