var x = document.getElementById("backdrop");
setTimeout(function()
{ 
    $("#backdrop").fadeTo("slow", 0);
 }, 4000);
setTimeout(function()
{ 
    x.remove();
 }, 5500);