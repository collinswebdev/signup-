const username = document.getElementById("username");
const password = document.getElementById("password");
const gmail = document.getElementById("gmail");
const favcolor = document.getElementById("favcolor");
const date = document.getElementById("date");
const country = document.getElementById("country");
const checkbox = document.getElementById("checkbox");
const body = document.getElementById("body");
const gender = document.getElementById("gender");
const signupForm = document.getElementById("signupForm");

function signUp() {
  let result = [
    "username:" + username.value,
    "password:" + password.value,
    "gmail:" + gmail.value,
    "gender:" + gender.value,
    "favcolor:" + favcolor.value,
    "date:" + date.value,
    "country:" + country.value,
  ];

  if (result[3] === "male") {
    result[3] = "male";
  } else if (result[3] === "female") {
    result[3] = "female";
  }
  if (checkbox.checked) {
    result.push("checked");
  } else if (!checkbox.checked) {
    result.push("unchecked");
  }

  for (let i = 0; i < result.length; i++) {
    return (
      (body.innerHTML = ` Database: ${String(result)}`),
      body.classList.add("database"),
      console.log(result)
    );
  }
  console.log(...result);
}
