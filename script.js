let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let login = popup.querySelector("[name=login]");
let form = popup.querySelector(".login-form");
let password = popup.querySelector("[name=password]");
let storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage; //запоминаем логин
        password.focus();
    } else {
        login.focus();
    }
})

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show")
    popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
    
    if (!login.value || !password.value) {
      evt.preventDefault(); //отловили момент, когда пользователь отправляет форму 
      console.log("Нужно ввести логин и пароль");
      popup.classList.add("modal-error");
    }
})

