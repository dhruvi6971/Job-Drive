document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submit

  const emailInput = document.getElementById("email");
  const parentGroup = emailInput.parentElement;
  const existingError = parentGroup.querySelector(".error-message");

  // simple regex for email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errorText = "";

  if (!emailPattern.test(emailInput.value)) {
    errorText = "Please enter a valid email address";
  } else if (emailInput.value.toLowerCase().includes("@gmail.com")) {
    errorText = "Gmail addresses are not allowed";
  }

  if (errorText) {
    parentGroup.classList.add("error");

    if (!existingError) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error-message");
      errorMsg.textContent = errorText;
      parentGroup.appendChild(errorMsg);
    } else {
      existingError.textContent = errorText; // update existing message
    }

    return false; // prevent redirect
  } else {
    parentGroup.classList.remove("error");
    if (existingError) existingError.remove();

    // proceed with form submission here if needed
    // e.g., call form.submit() manually or send via AJAX
    console.log("Form ready to submit!");
  }
});
