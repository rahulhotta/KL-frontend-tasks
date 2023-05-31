// Function to validate Email using regex
function validateEmail(input) {
  let validRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let inputErrorFeild = document.getElementById("email_error_msg");
  let emailInputField = document.getElementById("email_input");
  console.log(emailInputField);
  if (validRegex.test(input) && input.trim() !== "") {
    inputErrorFeild.innerHTML = "";
    emailInputField.style.borderColor = "black";
    return true;
  } else {
    inputErrorFeild.innerHTML = "Please enter a valid Email";
    emailInputField.style.borderColor = "red";
    return false;
  }
}

// Function to validate the fields which are mandatory to input
const validateMandatory = (text, name) => {
  let nameErrorField = document.getElementById(`${name}_error_msg`);
  let inputField = document.getElementById(`${name}`);
  if (text.trim() !== "") {
    nameErrorField.innerHTML = "";
    inputField.style.borderColor = "black";
    return true;
  } else {
    nameErrorField.innerHTML = "This field can not be empty";
    inputField.style.borderColor = "red";
    return false;
  }
};

// Function to validate the phone number using regex
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
let emailValue = document.userForm.email_input;
let userName = document.userForm.name_input;
let phoneNumber = document.userForm.phone_input;
let city = document.userForm.city_input;
let state = document.userForm.state_input;
let userForm = document.getElementById("userForm");

// list of feilds which are mandatory to input
const userDataList = [userName, city, state];

userDataList.forEach((item) => {
  item.addEventListener("change", () => {
    formFlag = validateMandatory(item.value, item.name) && formFlag;
  });
});

emailValue.addEventListener("change", () => {
  validateEmail(emailValue.value);
});
phoneNumber.addEventListener("change", () => {
  validatePhone(phoneNumber.value);
});

// an event listener to handle form validation on submit
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formFlag = validatePhone(phoneNumber.value);
  formFlag = validateEmail(emailValue.value) && formFlag;
  userDataList.forEach((item) => {
    formFlag = validateMandatory(item.value, item.name) && formFlag;
  });

  // making all the input values empty after successful submission of form
  if (formFlag) {
    emailValue.value = "";
    userName.value = "";
    phoneNumber.value = "";
    city.value = "";
    state.value = "";
    alert("data saved!");
  }
});
