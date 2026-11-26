const username = document.getElementById("username");
const password = document.getElementById("password");
const gmail = document.getElementById("gmail");
const maleoption = document.getElementById("maleoption");
const femaleoption = document.getElementById("femaleoption");
const favcolor = document.getElementById("favcolor");
const date = document.getElementById("date");
const country = document.getElementById("country");
const checkbox = document.getElementById("checkbox");
const signup = document.getElementById("signup");
const paragraph = document.getElementById("paragraph");

function signUp() {
  let result = [
    "username:" + " " + username.value,
    "password" + " " + password.value,
    "gmail:" + " " + gmail.value,
    "maleoption:" + " " + maleoption.value,
    "femaleoption:" + " " + femaleoption.value,
    "favcolor:" + " " + favcolor.value,
    "date:" + " " + date.value,
    "country:" + " " + country.value,
    "checkbox:" + " " + checkbox.checked,
    checkbox.checked,
  ];
  if (result[9] === true) {
    result.push("checked");
  } else if (result[9] === false) {
    result.push("unchecked");
  }
  for (let i = 0; i < result.length; i++) {
    return (paragraph.innerHTML = `Database: ${result}`);
  }
}
