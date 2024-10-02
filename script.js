const correctUsername = "test";
const correctPassword = "1234";

function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        // Visa välkomstsidan och göm inloggningssida
        document.getElementById('login').classList.add('hidden');
        document.getElementById('welcomePage').classList.remove('hidden');
    } else {
        // Visa felmeddelande
        document.getElementById('login').classList.add('hidden');
        document.getElementById('errorPage').classList.remove('hidden');
    }
}

function logout() {
    // Göm välkomstsidan och visa inloggningsformuläret
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function goBackToLogin() {
    // Göm felmeddelandet och visa inloggningsformuläret
    document.getElementById('errorPage').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}