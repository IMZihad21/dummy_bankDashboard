document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    if (userEmail == 'someone@example.com' && userPass == 'qwerty'){
        window.location.href = 'banking.html';
    }
    else {
        const loginFail = document.createElement('h3');
        loginFail.innerText = 'Invalid Username or Password';
        const loginBtn = document.getElementById('login-submit');
        loginBtn.parentNode.insertBefore(loginFail, loginBtn);
    }
})