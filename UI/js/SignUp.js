document.getElementById('signup').addEventListener('click',()=>{
    let path=document.getElementsByTagName('a');
if(document.getElementById('password1').value!==document.getElementById('password2').value){
 alert('non matching password');
 document.getElementById("a").setAttribute("href","../html/SignUp.html");
}else{
    document.getElementById("a").setAttribute("href","../html/SignIn.html");
}
});