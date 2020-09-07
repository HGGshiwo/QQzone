function sleep(numberMillis) 
{    
    var now = new Date();    
    var exitTime = now.getTime() + numberMillis;   
    while (true) 
    { 
        now = new Date();       
        if (now.getTime() > exitTime) 
        return;    
    } 
}
window.onload=function(){
    
    sleep(7000);

    var LIKES = document.getElementsByClassName("fui-icon icon-op-praise");

    console.log(LIKES.length);

    for(i=0;i<LIKES.length;i++)
    {
        LIKES[i].click();
    };
}



