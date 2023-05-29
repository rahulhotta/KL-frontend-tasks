function ValidateEmail(input) {
  let validRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let inputErrorFeild = document.getElementById("email_error_msg");
  let emailInputField = document.getElementById("email_input");
  console.log(emailInputField)
  if (validRegex.test(input) && input.trim() !== "") {
    inputErrorFeild.innerHTML = "";
    emailInputField.style.borderColor = "black";
    return true;
  } else {
    // document.userForm.email_input.focus();
    inputErrorFeild.innerHTML = "Please enter a valid Email";
    emailInputField.style.borderColor = "red";
    return false;
  }
}
const validateMandatory = (text, name) => {
  let nameErrorField = document.getElementById(`${name}_error_msg`);
  let inputField = document.getElementById(`${name}`);
  if (text.trim() !== "") {
    nameErrorField.innerHTML = "";
    inputField.style.borderColor = "black";
    return true;
  } else {
    nameErrorField.innerHTML = "This feild can not be empty";
    inputField.style.borderColor = "red";
    return false;
  }
};
let validatePhone = (input) => {
  let validRegex = new RegExp("^[7-9][0-9]{9}$");
  let inputErrorFeild = document.getElementById("phone_input_error_msg");
  if (input.trim() !== "") {
    if (validRegex.test(input)) {
      inputErrorFeild.innerHTML = "";
      return true;
    } else {
      document.userForm.phone_input.focus();
      inputErrorFeild.innerHTML = "Please enter a valid Phone number";
      return false;
    }
  } else {
    inputErrorFeild.innerHTML = "";
    return true;
  }
};
let userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = document.userForm.email_input;
  let userName = document.userForm.name_input;
  let phoneNumber = document.userForm.phone_input;
  let city = document.userForm.city_input;
  let state = document.userForm.state_input;
  if (
    validateMandatory(userName.value, userName.name) &&
    ValidateEmail(emailValue.value) &&
    validateMandatory(city.value, city.name) &&
    validateMandatory(state.value, state.name) &&
    validatePhone(phoneNumber.value)
  ) {
    emailValue.value = "";
    userName.value = "";
    phoneNumber.value = "";
    city.value = "";
    state.value = "";
    alert("data saved!");
  }
});
