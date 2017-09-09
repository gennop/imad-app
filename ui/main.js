var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
    counter=counter+1;
    var span =document.getElementById('count');
    span.innerHTML=counter.toString();
};

var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginleft= marginleft+10;
    img.style.marginleft=marginleft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};