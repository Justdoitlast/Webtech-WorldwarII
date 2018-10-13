        var alternate=0;
        var standardbrowser=!document.all&&!document.getElementById;
        
        if (standardbrowser){
        document.write('<form name="tick"><input type="text" name="tock" size="11"></form>');
        }
        function show(){
        if (!standardbrowser){
        var clockobj=document.getElementById? document.getElementById("digitalclock") : document.all.digitalclock;
        var Digital=new Date();
        var minutes=Digital.getMinutes();
        var hour=Digital.getHours();
        var seconds=Digital.getSeconds();
        }

        
        if (standardbrowser){
        if (alternate==0){
        document.tick.tock.value=hour+" : "+minutes+" ";
        }
        else{
        document.tick.tock.value=hour+" "+minutes+" ";
        }
        }
        else{
        if (alternate==0){
        clockobj.innerHTML=hour+"<font color='lime'> : </font>"+minutes+"<font color='lime'> : </font>"+seconds;
        }
        else{
        clockobj.innerHTML=hour+"<font color='black'> : </font>"+minutes+"<font color='black'> : </font>"+seconds;
        }
        }
        alternate=(alternate==0)? 1 : 0;
        setTimeout("show()",1000);
        }
        window.onload=show;



        // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

