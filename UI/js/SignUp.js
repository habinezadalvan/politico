// document.getElementById('signup').addEventListener('click',()=>{
//     // let path=document.getElementsByTagName('a');
// if(document.getElementById('password1').value!==document.getElementById('password2').value){
//  alert('non matching password');
//  document.getElementById("a").setAttribute("href","../html/SignUp.html");
// }else{
//     document.getElementById("a").setAttribute("href","../html/SignIn.html");
// }
// });
document.getElementById('signup').addEventListener('click',()=>{
    if(document.getElementById('choice').value==='Politician'){
        document.getElementById("a").setAttribute("href","../html/PoliticianPage.html");
    }else{
        document.getElementById("a").setAttribute("href","../html/SignIn.html");
    }
});