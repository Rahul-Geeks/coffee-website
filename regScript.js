let form = document.getElementById("reg-form");


function checkPass() {

    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    if (pass1.value === pass2.value) {
        form.setAttribute("action", "success-reg.html");
    } else {
        alert("Passwords does not match,enter correctly.");
    }
}