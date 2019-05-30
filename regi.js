
<script>
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }

varp1=document.getElementById("pass1").value;
            }
varp2=document.getElementById("pass2").value;
if(p1!=p2)
{
alert("Password doesn't match");
return false;
}
else if(p1==""||p2=="")
{
           
 alert("Password Invalid");
return false;

}
</script>

