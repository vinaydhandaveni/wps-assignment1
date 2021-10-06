document.addEventListener("DOMContentLoaded", function(event) {
    var names= document.querySelectorAll(".place input, .name input");
    for (var i=0; i<names.length; i++) 
        names[i].addEventListener("blur",onBlurNames);

    function onBlurNames(event) {
        var name = this.value;
        var regex = /^[a-zA-Z ]{2,30}$/;
        var errormsg = document.getElementById(this.id).id + "_err";
        console.log(errormsg);
        if (regex.test(name) == false)
            document.getElementById(errormsg).textContent= "Invalid input";
        else 
            document.getElementById(errormsg).textContent = ""
    }

    var mobile_no= document.getElementById("mobile");
    mobile_no.addEventListener("blur",function(event) {
        var errormsg = document.getElementById(this.id).id + "_err";
        console.log(errormsg);
        var regex = /^[6-9]\d{9}$/; 
        if(regex.test(mobile_no.value) == false)
            document.getElementById(errormsg).textContent= "Invalid Mobile Number";
        else 
            document.getElementById(errormsg).textContent = ""
    });
});
