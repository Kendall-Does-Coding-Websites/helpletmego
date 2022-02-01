const help_let_me_go = lyrics.find(
  (x) => x.name === "help let me go"
).lyrics;

const help_let_me_go__container =
  document.getElementsByClassName("lyrics")[0];

help_let_me_go.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return help_let_me_go__container.appendChild(p);
});

const slider_help_let_me_go = document.querySelector(".slider");

const toggle_help_let_me_go = document.querySelector(".round");
toggle_help_let_me_go.addEventListener("click", modeSwitch);

let isLight_help_let_me_go = true;

function modeSwitch() {
  isLight_help_let_me_go  = !isLight_help_let_me_go;

  isLight_help_let_me_go
    ? (slider_help_let_me_go.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_help_let_me_go.style.backgroundImage =
        "url('../../images/night.png')");

  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}
