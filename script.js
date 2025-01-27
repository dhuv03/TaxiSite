const formWrapper = document.querySelector('.form-wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () => {
    formWrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    formWrapper.classList.remove('active');
});