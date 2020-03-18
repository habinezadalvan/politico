document.getElementById("create-btn").addEventListener('click', () => {
    document.getElementById("create-allform").style.display="flex";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
    
});
document.getElementById("edit-btn").addEventListener('click', () => {
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="flex";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
    
});
document.getElementById("delete-btn").addEventListener('click', () => {
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="flex";
    document.getElementById("createpost-form").style.display="none";
    
});
document.getElementById("createpost-btn").addEventListener('click', () => {
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="flex";
    
});
document.getElementById("createpost").addEventListener('click',()=>{
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
});
document.getElementById("delete").addEventListener('click',()=>{
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
});
document.getElementById("update").addEventListener('click',()=>{
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
});
document.getElementById("create").addEventListener('click',()=>{
    document.getElementById("create-allform").style.display="none";
    document.getElementById("edit-form").style.display="none";
    document.getElementById("delete-form").style.display="none";
    document.getElementById("createpost-form").style.display="none";
});