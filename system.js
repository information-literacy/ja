var btnlogin_on = document.getElementById('btn');
var btnlogin_off = document.getElementById('btn2');
var inputpw = document.getElementById('password');
var inputpw2 = document.getElementById('password2');
var inputemail = document.getElementById('email');

btnlogin_on.style.display = "none";
btnlogin_off.style.display = "block";

function typing_sys() {
  if (6 < inputemail.value.length && 3 < inputpw.value.length) {
    btnlogin_on.style.display = "block";
    btnlogin_off.style.display = "none";
  }else{
    btnlogin_on.style.display = "none";
    btnlogin_off.style.display = "block";
  }
}


function typing2_sys() {
  if (6 < inputemail.value.length && 3 < inputpw.value.length && inputpw.value == inputpw2.value) {
    btnlogin_on.style.display = "block";
    btnlogin_off.style.display = "none";
  }else{
    btnlogin_on.style.display = "none";
    btnlogin_off.style.display = "block";
  }
}


