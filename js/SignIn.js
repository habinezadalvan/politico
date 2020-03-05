
document.getElementById("SignIn").addEventListener('click', () => {
    let signin=document.getElementById("SignIn");
    let u=document.getElementById("username").value;
    let p=document.getElementById("password").value;
    if(u==="Admin"&&p==="123"){
        signin.addEventListener('click', () => {
            window.location.href = 'AdminPage.html';
        });
    }else{
        signin.addEventListener('click', () => {
            window.location.href = 'UserPage.html';
        });
    }});


