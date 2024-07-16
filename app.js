let checkInput = document.querySelector("#check");
let btnThumb = document.querySelector(".btn-thumb")

checkInput.addEventListener("change", () => {
  let isChecked = checkInput.checked;
  btnThumb.style.animation = isChecked
    ? "animOn 0.8s cubic-bezier(0.4, 0, 0.6, 1) forwards"
    : "animOff 0.8s cubic-bezier(0.4, 0, 0.6, 1) forwards";
})
