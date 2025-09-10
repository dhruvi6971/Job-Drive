document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop default form submission

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const termsCheckbox = document.querySelector('input[type="checkbox"]');

  const emailGroup = emailInput.parentElement;
  const passwordGroup = passwordInput.parentElement;

  // Clear any existing errors
  clearError(emailGroup);
  clearError(passwordGroup);

  let isValid = true;

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    showError(emailGroup, "Please enter a valid email address");
    isValid = false;
  } else if (emailInput.value.toLowerCase().includes("@gmail.com")) {
    showError(emailGroup, "Gmail addresses are not allowed");
    isValid = false;
  }

  // Password validation (min 6 chars for example)
  if (passwordInput.value.length < 6) {
    showError(passwordGroup, "Password must be at least 6 characters");
    isValid = false;
  }

  // Checkbox validation
  if (!termsCheckbox.checked) {
    alert("You must agree to the terms and conditions.");
    isValid = false;
  }

  if (isValid) {
    console.log("✅ Form is valid. Submitting...");
    
    // Redirect simulation — replace with actual form submit or redirect
    window.location.href = "verification-sent.html";
  }
});

// Helper to show error
function showError(group, message) {
  group.classList.add("error");

  let existing = group.querySelector(".error-message");
  if (!existing) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    group.appendChild(errorDiv);
  } else {
    existing.textContent = message;
  }
}

// Helper to clear error
function clearError(group) {
  group.classList.remove("error");
  const existing = group.querySelector(".error-message");
  if (existing) existing.remove();
}
