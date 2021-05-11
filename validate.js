function fetchdata() {
  var firstname = document.getElementById("name").value;
  var fname = new Array();
  fname = firstname.split(' ');
  var text = fname[0];
  localStorage.setItem("textvalue", text);
  console.log(firstname);


  var phone = document.getElementById("phno").value;
  localStorage.setItem("phoneN", phone);
  console.log(phone);

  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];

  }
  var my = new Array();
  my = OTP.split(' ');
  var ee = my[0];
  console.log(ee);
  //console.log(myotp);
  localStorage.setItem("myotp", ee);
 

}
// //Name validation
function myname()
{
  var name = document.getElementById("name").value;
  // var firstname=document.getElementById("name").value;
  // localStorage.setItem("textvalue",firstname)
  var arr = new Array();
  arr = name.split(' ')
  var regx = /\b\w+\b(?:.*?\b\w+\b){1}/;
  var letter = /^[a-zA-Z ]*$/;
  if (name.match(letter) == null) {
    document.getElementById("namemsg").innerHTML = "Only Alphbets Are Allowed";
    return false;
  }
  if (name.length < 1) {
    document.getElementById("namemsg").innerHTML = "enter name";
    return false;
  }
  if (name.match(regx) === null) {
    document.getElementById("namemsg").innerHTML = "Min 2 words are allowed";
    return false;
  }

  var temp = arr[0];

  var temp1 = arr[1];

  if (temp.length < 4 && temp1.length < 4) {

    document.getElementById("namemsg").innerHTML = " Min 4 chars are allowed";
    return false;
  }
  return true;

}



//mail validation
function mymail(){
  var mailid = document.getElementById("email_id").value;
  var emailFormat = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[_a-z0-9-]+)$/;
  if (mailid == "") {
    document.getElementById("email_message").innerHTML = "please enter email"
    //alert("Enter email Field");
    return false;
  }
  if (emailFormat.test(mailid)) {
    //alert("Enter email Field valid");
    return true;
  }
  else {
    document.getElementById("email_message").innerHTML = "please enter correct format"
    return false;

  }

 
}

function allfun()
{
  var isNameValid=false;
  var isEmailValid=false;

 isNameValid= myname();
 isEmailValid= mymail();
 fetchdata();
  if(isNameValid && isEmailValid){
  window.location="otp.html"
  }
}

