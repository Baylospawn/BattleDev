document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validatePassword();
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

function validatePassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.';
    } else {
        errorMessage.textContent = '';
        alert('Connexion réussie!');
    }
}
