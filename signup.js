let login_link = document.getElementById("login_link");
let signup_link = document.getElementById("signup_link");
let loginbox = document.getElementById("loginbox");
let signbox = document.getElementById("signbox");

login_link.onclick=function()
{
    loginbox.style.display="block";
    signbox.style.display="none";
}
signup_link.onclick=function()
{
    signbox.style.display="block";
    loginbox.style.display="none";
}