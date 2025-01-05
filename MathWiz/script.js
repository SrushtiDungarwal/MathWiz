function checkEmail(){
    var un = document.getElementById("name").value;
    var em = document.getElementById("emsg");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(un);

    
    return emailRegex;
}
function checkPassword(){
    var ps = document.getElementById("pass").value;
    var psch = document.getElementById("passmsg");
    const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(ps);
    
    return password;
}

function checkMob(){
    var mob = document.getElementById("num").value;
    var mobch = document.getElementById("mobmsg");
    const mobile = /^\d{10}$/.test(mob);
    
    return mobile;
}

function login(){
    var s =  document.getElementById("loginlabel");
    s.style.color = "red"

    if(checkEmail() && checkMob() && checkPassword()){
        window.location.href = "maths_project2.html";
    }else if(!checkEmail()){
        s.innerHTML = "Invalid username.";     
    }else if(!checkPassword()){
        s.innerHTML = "Invalid password.";
    }else if(!checkMob()){
        s.innerHTML = "Invalid mobile number.";
    }else{
        s.innerHTML = "Invalid username, password and mobile number.";
    }
}
