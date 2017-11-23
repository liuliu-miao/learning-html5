onmessage = function (event) {   //上一级将event消息传给script.js，script.js接收到消息 
    var int_array=new Array(100);    
    for(var i=0;i<100;i++)
        int_array[i]=parseInt(Math.random()*100);
    var worker = new Worker("1.worker.js");  
    worker.postMessage(JSON.stringify(int_array));//此代码向下一级(worker.js)传递消息
    worker.onmessage = function(event) {       //下一级(worker.js)发出消息，被此代码接收到，然后此代码执行下列操作
        postMessage(event.data);//此代码把消息传到上一级
    }
}
