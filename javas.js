

function validate() {

  var password = document.getElementById("pass"), confirm_password = document.getElementById("passconf");
  var flag=10;
  var fname=document.getElementById("fn"),lname=document.getElementById("ln");
  var dd=new Date(document.getElementById("dob").value);
  var patname=/^[a-zA-Z]+$/;
  var today=new Date();
  var pat=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i;
  var email=document.getElementById("email").value;
  var num=document.getElementById("num").value;
  num = num.replace(/-/g, "");
  document.getElementById("num").value=num;

var str=document.getElementById("num");
// var sss=/[0-9]/
 var r=/^[0-9]{10}$/.exec(str.value);
// alert(r);
var m=/^[+][0-9]{12}$/.exec(str.value);
  if(r!=null)
  {
    flag=3;// alert("success1");
  }
 if(m!=null)
   {
      flag=3;// alert("success2");
  }
  else
  {
    // alert("error");
    // flag=3;
  }
    if((password.value==confirm_password.value)&&(patname.test(fname.value))&&(patname.test(lname.value))&&(dd<today)&&((pat.test(email)==true))&&flag==3)
    {

      document.getElementById("a").style.display="block";
      document.getElementById("s").style.display="none";
    }
    else {

      document.getElementById("s").style.display="block";
      document.getElementById("a").style.display="none";
    }

}
