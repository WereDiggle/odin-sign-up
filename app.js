const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

const userPassword = $("#user_password");
const confirmUserPassword = $("#confirm_user_password");

checkPassword = () => {
    if (userPassword.value != confirmUserPassword.value) {
        confirmUserPassword.setCustomValidity("Password does not match");
        $("#confirm_user_password + p").textContent = "* Password does not match";
    } else {
        confirmUserPassword.setCustomValidity("");
        $("#confirm_user_password + p").textContent = "";
    }
}

userPassword.addEventListener("input", checkPassword);
confirmUserPassword.addEventListener("input", checkPassword);