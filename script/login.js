document.getElementById("login-btn").addEventListener("click" ,()=>{
    const userName =document.getElementById("user-name").value;
    const Password=document.getElementById("password").value;
    if (userName.toLowerCase() =="admin" && Password.toLowerCase()=="admin123") {
        alert("login successful")
        window.open('./homepage.html')
    } else if(userName.toLowerCase() !== "admin") {
        alert("invalid username")
    }
    else{
        alert("invalid password")
    }
})