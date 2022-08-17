// Login 
function login() {
    let username = document.getElementById('formlogin').username.value;
    let password = document.getElementById('formlogin').password.value;
    let Result = document.getElementById('wrong');

    if (username == 'xirpl1' && password == '12345') {
        window.open("homepage.html", "_self");
    } else if (username == 'user1' && password == '123') {
        window.open("homepage.html", "_self");
    } else if (username == 'user2' && password == '123') {
        window.open("homepage.html", "_self");
    } else {
        Result.innerHTML = 'Username atau Password salah';
    }
}