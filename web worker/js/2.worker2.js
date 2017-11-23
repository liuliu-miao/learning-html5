onmessage = function(event) {      
    var int_array = JSON.parse(event.data); //还原整数数组
    var result="";
    for(var i=0;i<int_array.length;i++)
    {
        if(parseInt(int_array[i])%5==0)    
        {
            if(result!="")
                result+=";";        
            result += int_array[i];    //将能被5整除的数字拼接成字符串
        }
    }
    postMessage(result);           
    close();                         
}
