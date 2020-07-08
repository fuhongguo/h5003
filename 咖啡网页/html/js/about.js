var spans=document.getElementsByTagName("header");

for(var i in spans){
    spans[i].onclick=function(){

        
        for(var i=0;i<textaa.length;i++){
            textaa[i].className="";
            spans[i].className="";
        }
        var i=this.getAttribute("ff");
        
        this.className="active";
        textaa[i].className="active";
    }
}


var img=document.getElementsByClassName("img")[0];
var arr=["../img/公司简介.jpg","../img/摩卡.jpg"];
for(var i=0;i<=arr.length-1;i++){
}
timer=setInterval(function(){
             var first=arr.shift();
            arr.push(first);
        img.src=arr[0];
        
    },1000);