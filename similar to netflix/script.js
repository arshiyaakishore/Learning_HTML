document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log('Email:', email);
    console.log('Password:', password);
});