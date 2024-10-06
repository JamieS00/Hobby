/*changes theme color*/
ChangeTheme = () => {
  let body = document.querySelector("body");

  /*When the page first loads:checking if the body has darktheme (false) -> goes to else to add
        after click dark theme: does body contain dark (true) go inside statement & removes it */
  if (body.classList.contains("DarkTheme")) {
    body.classList.remove("DarkTheme");
  } else {
    body.classList.add(
      "DarkTheme"
    ); /*think of it as a vector/queue how you add stuff*/
  }

  /*remove if it has the class of dark */
};
let ThemeButton = document.querySelector(".Theme-button");
ThemeButton.addEventListener(
  "click",
  ChangeTheme
); /*once click, calls function*/

clientInfo = () => {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  alert(`Thanks ${name}, we will send you the link to the collection 🙂!! `);
};

let SubButton = document.querySelector(".sub-button");
SubButton.addEventListener("click", clientInfo);
