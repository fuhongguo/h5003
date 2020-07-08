var img = document.getElementsByClassName("img")[0];
    var arr = ["../img/摩卡.jpg", "../img/公司简介.jpg"];
    for (var i = 0; i <= arr.length - 1; i++) {}
    timer = setInterval(function () {
        var first = arr.shift();
        arr.push(first);
        img.src = arr[0];

    }, 1000);