const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "Your password is very good!";
    p.style.color = "#EF2FA2";
  } else if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "Your password is good!";
    p.style.color = "#5bb684";
  } else {
    p.textContent = "Your password is weak!";
    p.style.color = "#FF0000";
  }
};

const checkPassword = () => {
  if (pass.value !== "") {
    showMsg();
  } else {
    p.textContent = "You did not enter the password!";
    p.style.color = "";
  }
};

pass.addEventListener("keyup", checkPassword);
