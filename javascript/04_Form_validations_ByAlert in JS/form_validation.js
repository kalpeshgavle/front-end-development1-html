function form_valid() {
    //first name section
    let a = document.form_1.fname.value;
    if (a == "" || a == null) {
        alert("Please enter your name");
        return false;
    }
    else if (!isNaN(a)) {
        alert("Only Alphabets");
        return false;
    }

    //Gender section
    let male = document.form_1.gen[0].checked;
    let female = document.form_1.gen[1].checked;
    if (male == false && female == false) {
        alert("select gender");
        return false;
    }

    //Qualification section
    let check_Q1 = document.form_1.q1.checked;
    let check_Q2 = document.form_1.q2.checked;
    let check_Q3 = document.form_1.q3.checked;
    if (check_Q1 == false && check_Q2 == false && check_Q3 == false) {
        alert("Select qualification");
        return false;
    }

    //city section
    let c = document.form_1.city.value;
    if (c == -1) {
        alert("Select city");
        return false;
    }

    //password and confirm password section
    let p = document.form_1.pass.value;
    let cp = document.form_1.cpass.value;
    if (p == "" || p == null) {
        alert("Please enter password");
        return false;
    } else if (cp == "") {
        alert("Please confirm password");
        return false;
    }
    else if (cp !== p) {
        alert("Both passwords should be same");
        return false;
    }

    //mobile number section
    let m = document.form_1.mno.value;
    if (m == "") {
        alert("please enter mobile no");
        return false;
    } else if (isNaN(m)) {
        alert("alphabets not allowed")
        return false;
    } else if (m.length < 10) {
        alert("must be 10 digits")
        return false;
    }
    else if (m.length > 10) {
        alert("must be 10 digits")
        return false;
    }
}

//function for hide & show password 
function pass_show() {
    let passw = document.getElementById("pwd");
    if (passw.type == "password") {
        passw.type = "text"
    } else {
        passw.type = "password"
    }
}