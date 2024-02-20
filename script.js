let string = "";
let buttons = document.querySelectorAll(".button");
let audio = new Audio();
audio.src = "ping-82822.mp3";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
      audio.play();
    } else if (e.target.innerHTML == "AC") {
      string = " ";
      document.querySelector("input").value = string;
      audio.play();
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
      audio.play();
    }
  });
});
