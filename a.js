function validate()
{
    var final = 1;    
   
   
    var v = document.getElementById("name").value;
    var n = v.length;
    if(n<4)
    {
        final =0;
        alert("Length is less than 4");
    }
   
    v=document.getElementById("no").value;
    n=v.length;
    if(n<10)
    {
        final =0;
        alert("Contact number length is less than 10");
    }
   
    v=document.getElementById("email").value;
   
   if(!v.includes('@'))
   {
        final =0;
        alert("email is invalid");  
   }
    v=document.getElementById("username").value;
    n=v.length;
    if(n<3)
    {
        final =0;
        alert("Username length is less than 3");
    }
   
    v=document.getElementById("pass").value;
    n=v.length;
    flag=0;
    for(var b = 0; b<n; b++)
    {
    var c = v.charAt(b)
        if(c>='A' && c<='Z')
        {
            flag =1;
        }
    }
    if(flag==0)
    {
        final =0;
        alert("Password must be in Uppercase");
    }
   
    flag=0;
    for(var b = 0; b<n; b++)
    {
    var c = v.charAt(b)
        if(c>='0' && c<='9')
        {
            flag =1;
        }
    }
    if(flag==0)
    {
        final =0;
        alert("Password must contain a Numeric Value");
    }
   
    var x = document.getElementById("conf").value;
    if(x!=v)
    {
        final =0;
        alert("Password & confirm password does not match");
    }
   
    if(final!=0)
    {
        window.location.href="login.html";
    }    

    return final !== 0;
}
