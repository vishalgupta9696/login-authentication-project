document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'user';
    const validPassword = 'password';

    usernameInput.addEventListener('input', validateInput);
    passwordInput.addEventListener('input', validateInput);

    function validateInput() {
        if (usernameInput.value.trim() && passwordInput.value.trim()) {
            loginForm.querySelector('button').disabled = false;
        } else {
            loginForm.querySelector('button').disabled = true;
        }
    }

    const togglePassword = document.createElement('span');
    togglePassword.innerText = 'Show';
    togglePassword.style.cursor = 'pointer';
    togglePassword.style.marginLeft = '10px';
    passwordInput.parentNode.appendChild(togglePassword);

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerText = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePassword.innerText = 'Show';
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === validUsername && password === validPassword) {
            errorMessage.textContent = '';
            alert('Login successful!');
            
        } else {
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.classList.add('visible');
        }
    });

   
    validateInput();
});
