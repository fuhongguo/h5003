
var lun = document.querySelectorAll(".lun-img")[0];
var btn = document.querySelectorAll("button");
var lunbo_ul = document.querySelectorAll(".lunbo-ul")[0];
var lis = document.querySelectorAll(".avel");
console.log(lis);

var j = 0;
for (var i in btn) {
    btn[i].onclick = function () {
        if (this.innerHTML == "&gt;") {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            j++;
            if (j > 3) {
                j = 0;
            }
            lunbo_ul.style.marginLeft = j * -1920 + "px";

        } else {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            j--;
            if (j < 0) {
                j = 3;
            }
            lunbo_ul.style.marginLeft = j * -1920 + "px";
        }
        lis[j].className = "ave";
    }
}

for (var i in lis) {
    lis[i].onclick = function () {
        j = this.getAttribute("by");
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lunbo_ul.style.marginLeft = j * -1920 + "px";
        lis[j].className = "ave";
    }

}



timer = setInterval(function () {
    j++;
    if (j > 3) {
        j = 0;
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
    }
    lunbo_ul.style.marginLeft = j * -1920 + "px";
    lis[j].className = "ave";
}, 3000);

lunbo.onmouseover = function () {
    clearInterval(timer);
}

lunbo.onmouseout = function () {
    timer = setInterval(function () {
        j++;
        if (j > 3) {
            j = 0;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lunbo_ul.style.marginLeft = j * -1920 + "px";
        lis[j].className = "ave";
    }, 3000)
}
