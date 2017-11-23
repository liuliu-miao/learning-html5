onmessage = function (event) {
    var int_array = new Array(100);    //随机数组
    for (var i = 0; i < 100; i++)
        int_array[i] = parseInt(Math.random() * 100);
    postMessage(JSON.stringify(int_array));//把随机数组提交给子线程进行挑选工作
    close();
}

  