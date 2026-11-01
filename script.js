const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#password");
const togglePasswordButton = document.querySelector("#toggle-password");
const resetLinkButton = document.querySelector("#reset-link");
const formMessage = document.querySelector("#form-message");

togglePasswordButton.addEventListener("click", () => {
	const isPasswordHidden = passwordInput.type === "password";

	passwordInput.type = isPasswordHidden ? "text" : "password";
	togglePasswordButton.textContent = isPasswordHidden ? "Hide" : "Show";
	togglePasswordButton.setAttribute("aria-label", isPasswordHidden ? "Hide password" : "Show password");
	togglePasswordButton.setAttribute("aria-pressed", String(isPasswordHidden));
});

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();
	formMessage.textContent = "Your details look good. Connect a sign-in service to continue.";
});

resetLinkButton.addEventListener("click", () => {
	formMessage.textContent = "Password reset is not set up yet.";
});
