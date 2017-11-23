onmessage=function(event){   
    var worker = new Worker("2.worker1.js"); 
    worker.postMessage("");
    worker.onmessage = function (event) {
        var data = event.data;
        worker = new Worker("2.worker2.js");
        worker.postMessage(data);
        worker.onmessage = function (event) {
            postMessage(event.data);//把挑选结果返回主页面
        }
    } 
}
