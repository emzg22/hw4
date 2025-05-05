/*
Name: Emily Gomez
Date created: 4/15/25
    Date last edited: 4/23/25
    Version: 4.1
Description: JavaScript code for homework 4
*/

function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }
//code for dynamic date
const date = new Date();
let text = date.toLocaleDateString();
document.getElementById("date").innerHTML = text;

//code for slider
let slider = document.getElementById("range");
let output = document.getElementById("slider");
output.innerHTML = slider.value;

slider.oninput = function () 
{
    output.innerHTML = this.value;
};

//code to validate username
function validateUname() 
{   //this part converts it to lowercase and assigns it to a js variable
    uname = document.getElementById("uname").value.toLowerCase();
    document.getElementById("uname").value = uname;

    let regex = /^[a-zA-Z0-9_-]+$/;//this allows the pattern to be refrenced later on in the if/else sequence
    if (uname.length == 0) //this gives in error if the username is blank
    {
        document.getElementById("unameError").innerHTML = 
        "Please enter your username";
        error_flag = 1;
        
    }
    else
        if (!isNaN(uname.charAt(0))) //this gives an error if the username begins with a number
        {
         document.getElementById("unameError").innerHTML = 
         "Your username cannot begin with a number";
         error_flag = 1;
         
        }
        else
            if (!regex.test(uname)) //this gives an error if there are invalid characters in the username
            {
             document.getElementById("unameError").innerHTML = 
             "Your username can only include letters, numbers, underscores, and dashes";
             error_flag = 1;
             
            } 
            else 
                if (uname.length < 5) //this gives an error if the username is under 5 characters
                {
                 document.getElementById("unameError").innerHTML = 
                 "Your username must include at least 5 characters";
                 error_flag = 1;
                 
                } 
                else
                    if (uname.length > 30) //this gives an error if the username is over 30 characters
                    {
                     document.getElementById("unameError").innerHTML = 
                     "Your username must not exceed 30 characters";
                     error_flag = 1;
                    
                    } 
                    else 
                    {
                     document.getElementById("unameError").innerHTML = "&#128077";
                     
                    }
}
//code to validate initial password
function validatePword()
{
    pword = document.getElementById("pword").value;

    if (pword.length == 0) //this gives in error if the password is blank
    {
        document.getElementById("pwordError").innerHTML = 
        "Please enter your password";
        error_flag = 1;
        
    }
    else
        if (pword.includes(uname)) //this gives an error if the password includes the username
        {
            document.getElementById("pwordError").innerHTML = 
            "Your password cannot include your username";
            error_flag = 1;
            
        }
        else
            if (!pword.match(/[A-Z]/)) //this gives an error if there isn't a uppercase
            {
                document.getElementById("pwordError").innerHTML = 
                "Please include at least one uppercase letter";
                error_flag = 1;
                
            }
            else
                if (!pword.match(/[a-z]/)) //this gives an error if there isn't a lowercase
                {
                    document.getElementById("pwordError").innerHTML = 
                    "Please include at least one lowercase letter";
                    error_flag = 1;
                    
                }
                else 
                    if (!pword.match(/[0-9]/)) //this gives an error if there isn't a number
                    {
                        document.getElementById("pwordError").innerHTML = 
                        "Please include at least one number";
                        error_flag = 1;
                        
                    }
                    else   
                        if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/))//this gives an error if there isn't a special character
                        {
                            document.getElementById("pwordError").innerHTML = 
                            "Please include at least one special character";
                            
                        }
                        else 
                            if (pword.length < 8) //this gives an error if the password is under 8 characters
                            {
                            document.getElementById("pwordError").innerHTML = 
                            "Your username must include at least 8 characters";
                            error_flag = 1;
                            
                            } 
                            else
                                if (pword.length > 20) //this gives an error if the username is over 20 characters
                                {
                                document.getElementById("pwordError").innerHTML = 
                                "Your username must not exceed 20 characters";
                                error_flag = 1;
                                
                                } 
                                else 
                                {
                                    document.getElementById("pwordError").innerHTML = "&#128077";
                                    
                                }
}
//code to confirm password
function validateRepword() 
{
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("repword").value;

    if (pword1 !== pword2) //this makes sure the passwords match
        {
        document.getElementById("repwordError").innerHTML = 
        "Please make sure your passwords match";
        error_flag = 1;
        
        } 
    else
        {
        document.getElementById("repwordError").innerHTML = 
        "Congrats, your passwords match!";
        
        }
}
//code to validate first name
function validateFname()
{
    fname = document.getElementById("fname").value;
    
    let regex = /^[a-zA-Z']+$/;
    if(fname.length == 0)//this gives an error if the first name is blank
    {
        document.getElementById("fnameError").innerHTML = 
        "Please enter your first name";
        error_flag = 1;
        
    }
    else
        if (!regex.test(fname)) //this gives an error if there are invalid characters for the first name
        {
            document.getElementById("fnameError").innerHTML = 
            "Your first name can only include letters, apostrophes and dashes";
            error_flag = 1;
            
        } 
        else  
        {
            document.getElementById("fnameError").innerHTML = "&#128077";
        }
}
//code to validate middle initial
function validateMininitial()
{
    minitial = document.getElementById("minitial").value;
    
    let regex = /^[a-zA-Z]+$/;
    if (minitial.length !== 0) //this only validates if the middle initial isn't blank
    {
       if(!regex.test(minitial)) //this gives an error if there are invalid characters for the first name
        {
            document.getElementById("minitialError").innerHTML = 
            "Your middle initial can only include letters";
            error_flag = 1;
            
        } 
        else  
        {
            document.getElementById("minitialError").innerHTML = "&#128077";
            
        }
    }
}
//code to validate last name
function validateLname()
{
    lname = document.getElementById("lname").value;
    
    let regex = /^[a-zA-Z']+$/;
    if(lname.length == 0)//this gives an error if the last name is blank
    {
        document.getElementById("lnameError").innerHTML = 
        "Please enter your last name";
        error_flag = 1;
        
    }
    else
        if (!regex.test(lname)) //this gives an error if there are invalid characters for the last name
        {
            document.getElementById("lnameError").innerHTML = 
            "Your last name can only include letters, apostrophes and dashes";
            error_flag = 1;
            
        } 
        else  
        {
            document.getElementById("lnameError").innerHTML = "&#128077";
            
        }
}
//code to validate date of birth
function validateDob() 
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    if (date > new Date()) 
        {
            document.getElementById("dobError").innerHTML = 
            "Your date of birth cannot be in the future";
            dob.value = "";
            error_flag = 1;
            
        } 
        else 
            if (date < new Date(maxDate)) 
            {
                document.getElementById("dobError").innerHTML = 
                "Youe date of birth cannot be more than 120 years ago";
                dob.value = "";
                error_flag = 1;
                 
            } 
            else 
            {
                document.getElementById("dobError").innerHTML = "&#128077";
                
            }
}
//code to validate phone numner
function validatePhone() 
{   
    phone = document.getElementById("phone").value;

    let regex = /^[()0-9-]+$/;//this allows the pattern to be refrenced later on in the if/else sequence
    if (phone.length == 0) //this gives in error if the phone number is blank
    {
        document.getElementById("phoneError").innerHTML = 
        "Please enter your phone number";
        error_flag = 1;
        
    }
    else
        if (!regex.test(phone)) //this gives an error if there are invalid characters in the phone number
        {
         document.getElementById("phoneError").innerHTML = 
         "Your phone number can only include numbers, parentheses, and dashes";
         error_flag = 1;
         
        }
        else 
        {
            document.getElementById("phoneError").innerHTML = "&#128077";
            
        } 
}
//code to validate ssn
function validateSsn() 
{
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (ssn.length == 0) //this gives in error if the ssn is blank
    {
        document.getElementById("ssnError").innerHTML = 
        "Please enter your ssn";
        error_flag = 1;
        
    }
    else
        if (!ssnR.test(ssn)) //this makes sure the ssn matches the pattern
        {
            document.getElementById("ssnError").innerHTML = 
            "Please enter a valid SSN";
            error_flag = 1;
            
        } 
        else 
        {
            document.getElementById("ssnError").innerHTML = "&#128077";
           
        }
}
//code to validate email
function validateEmail() 
{
    email = document.getElementById("email").value;
    emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length == 0) //this gives in error if the email is blank
    {
        document.getElementById("emailError").innerHTML = 
        "Please enter your email";
        error_flag = 1;
        
    }
    else
        if (!emailR.test(email)) //this makes sure the email matches the pattern
        {
            document.getElementById("emailError").innerHTML = 
            "Please enter a valid email";
            error_flag = 1;
            
        } 
        else 
        {
            document.getElementById("emailError").innerHTML = "&#128077";
            
        }
}
//code to validate address1
function validateAddress1()
{
    address1 = document.getElementById("address1").value;

    if (address1.length == 0) //this gives in error if the address is blank
    {
        document.getElementById("address1Error").innerHTML = 
        "Please enter your address";
        error_flag = 1;
        
    }
    else 
        if (address1.length < 2) //this gives an error if the first address line is under 2 characters
        {
            document.getElementById("address1Error").innerHTML = 
            "Your first address line must include at least 2 characters";
            error_flag = 1;
            
        } 
        else
            if (address1.length > 30) //this gives an error if the first address line is over 30 characters
            {
                document.getElementById("address1Error").innerHTML = 
                "Your first address line must not exceed 30 characters";
                error_flag = 1;
                
            } 
            else 
            {
                document.getElementById("address1Error").innerHTML = "&#128077";
                
            }
}
//code to validate address2
function validateAddress2()
{
    address2 = document.getElementById("address2").value;
    if(address2.length != 0)
    {
        if (address2.length < 2) //this gives an error if the second address line is under 2 characters
        {
         document.getElementById("address2Error").innerHTML = 
         "Your second address line must include at least 2 characters";
         error_flag = 1;
         
        } 
         else
            if (address2.length > 30) //this gives an error if the second address line is over 30 characters
            {
                document.getElementById("address2Error").innerHTML = 
                "Your second address line must not exceed 30 characters";
                error_flag = 1;
                
            } 
            else 
            {
                document.getElementById("address2Error").innerHTML = "&#128077";
                
            }
    }
}
//code to validate city
function validateCity()
{
    city = document.getElementById("city").value;

    if (city.length == 0) //this gives in error if the city is blank
    {
        document.getElementById("cityError").innerHTML = 
        "Please enter your city";
        error_flag = 1;
        
    }
    else 
        if (city.length < 2) //this gives an error if the city is under 2 characters
        {
            document.getElementById("cityError").innerHTML = 
            "Your city must include at least 2 characters";
            error_flag = 1;
            
        } 
        else
            if (city.length > 30) //this gives an error if the city is over 30 characters
            {
                document.getElementById("cityError").innerHTML = 
                "Your city must not exceed 30 characters";
                error_flag = 1;
                
            } 
            else
            {
                document.getElementById("cityError").innerHTML = "&#128077";
                
            }
}
//code to validate state
function validateState()
{
    state = document.getElementById("state").value;

    if (state == "Please Select One") //this gives in error if the state is blank
    {
        document.getElementById("stateError").innerHTML = 
        "   Please select a state";
        error_flag = 1;
        
    }
    else
    {
        document.getElementById("stateError").innerHTML = "&#128077";
        
    }
}
//code to validate zip code
function validateZip() 
{
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (zip.length == 0) 
    {
        document.getElementById("zipError").innerHTML = 
        "Please enter your zip code";
        error_flag = 1;
        
    }
    else 
        if (zip.length > 5) 
        {
            zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
        }
        else 
        {
            zip = zip.slice(0, 5);
        }

    zipInput.value = zip;
    document.getElementById("zipError").innerHTML = "&#128077";
    
}
//code to review input
function reviewInput() 
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    var i;5
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>"+formcontent.elements[i].value+"</td>";
                        formoutput += "<td class='outputdata'>&#x2713</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>"+formcontent.elements[i].name+"</td>";
                        formoutput += "<td class='outputdata'>"+ formcontent.elements[i].value+"</td></tr>";
                    }
                    break;
                case "button": case "submit": case "reset":
                    break;
                default:
                    formoutput += "<tr><td align='right'>"+formcontent.elements[i].name+"</td>";
                    formoutput += "<td class='outputdata'>"+ formcontent.elements[i].value+"</td></tr>";
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
function removeReview() 
{
    document.getElementById("showInput").innerHTML = "(you started over)";
}
//code for alert box
function showAlert() 
{
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() 
    {
        alertBox.style.display = "none";
    }
}
//code for validate button

function validateEverything() 
{
    error_flag = "0";
    validateUname();
    validatePword();
    validateRepword();
    validateFname();
    validateMininitial();
    validateLname();
    validateDob();
    validatePhone();
    validateSsn();
    validateEmail();
    validateAddress1();
    validateAddress2();
    validateCity();
    validateState();
    validateZip();
    console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fill out all required fields before submitting this form");
        }
        else {
          document.getElementById("submit").disabled  = false;
        }

}

document.addEventListener("DOMContentLoaded", function ()
{
    const greeting = document.getElementById("welcome1");
    const newUser = document.getElementById("welcome2");
    const fnameField = document.getElementById("fname"); // adjust ID if needed
    const rememberBox = document.getElementById("remember-me");
    const cookieFname = "fname";
  
    function getCookie(cname) 
    {
        let name = cname + "=";
        let cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++) 
        {
            let c = cookies[i];
            while (c.charAt(0) == ' ') 
            {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) 
            {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
  
    function setCookie(cname, cvalue, exdays) 
    {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  
    function deleteCookie(cname) 
    {
        document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    }

    const savedName = getCookie(cookieFname);
    if (savedName !== "") 
    {
        greeting.innerHTML = "Welcome back, " + savedName + "!<br>";
        newUser.innerHTML = "<label>" +  "<input type='checkbox' id='notUserCheckbox' />" +
                            " Not " + savedName + "? Click here to start a new form." +
                            "</label>";

        document.getElementById("notUserCheckbox").addEventListener("change", function () 
        {
            if (this.checked) 
            {
                deleteCookie(cookieFname);
                localStorage.clear();
                document.querySelector("form").reset();
                location.reload(); 
            }
        });
    }   else 
        {
            greeting.textContent = "Hello New User!";
        }
  
    // On form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) 
    {
      e.preventDefault();
      const rememberMe = rememberBox.checked;
      const fname = fnameField.value.trim();
  
      if (rememberMe && fname) 
      {
        setCookie(cookieFname, fname, 48);
      } else 
      {
        deleteCookie(cookieFname);
        localStorage.clear();
      }
      window.location.href = "hw4thankyou.html";
    });
  });