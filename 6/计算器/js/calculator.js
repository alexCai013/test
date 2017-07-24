 var resultDom = document.getElementById("result");
 var num = 0;
 var result = 0;
 var numshow = "0";
 var operate = 0; //判断输入状态的标志 
 var calcul = 0; //判断计算状态的标志 
 var quit = 0; //防止重复按键的标志 

 // 数字点击操作
 function command(num) {
     var str = resultDom.value; //获得当前显示数据 
     str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
     str = str + String(num); //给当前值追加字符 
     resultDom.value = str; //刷新显示 
     operate = 0; //重置输入状态 
     quit = 0; //重置防止重复按键的标志 
 }

 //1
 document.getElementById('n1').onclick = function() {
     command(1);
 }
 //2
 document.getElementById('n2').onclick = function() {
     command(2);
 }
 //3
 document.getElementById('n3').onclick = function() {
     command(3);
 }
 //4
 document.getElementById('n4').onclick = function() {
     command(4);
 }
 //5
 document.getElementById('n5').onclick = function() {
     command(5);
 }
 //6
 document.getElementById('n6').onclick = function() {
     command(6);
 }
 //7
 document.getElementById('n7').onclick = function() {
     command(7);
 }
 //8
 document.getElementById('n8').onclick = function() {
     command(8);
 }
 //9
 document.getElementById('n9').onclick = function() {
     command(9);
 }
 //0
 document.getElementById('n0').onclick = function() {
     command(0);
 }

 // 小数点操作
 document.getElementById('dot').onclick = function() {
     var str = resultDom.value;
     str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
     for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
         if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
     }
     str = str + ".";
     resultDom.value = str;
     operate = 0;
 }

 // 计算执行
 function calculate() {
     numshow = Number(resultDom.value);
     if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
         switch (calcul) { //判断要输入状态 
             case 1:
                 result = parseFloat((num + numshow).toFixed(8));
                 break; //计算"+" 
             case 2:
                 result = parseFloat((num - numshow).toFixed(8));
                 break; //计算"-" 
             case 3:
                 result = parseFloat((num * numshow).toFixed(8));
                 break; //计算"*"
             case 4:
                 if (numshow != 0) {
                     result = parseFloat((num / numshow).toFixed(8));
                 } else {
                     result = "NaN"
                 }
                 break; //计算"／"
             case 5:
                 result = parseFloat((num % numshow).toFixed(8));
                 break; //计算"%"
         }
         quit = 1; //避免重复按键 
     } else {
         result = numshow;
     }
     numshow = String(result);
     resultDom.value = numshow;
     num = result; //存储当前值 
 }

 // 退格
 document.getElementById('del').onclick = function() {
     var str = resultDom.value;
     str = str.substring(0, str.length - 1);
     str = (str == "" ? 0 : str);
     resultDom.value = str;
 }

 // 清零
 document.getElementById('clearzero').onclick = function() {
     resultDom.value = 0;
     num = 0;
     result = 0;
     numshow = "0";
 }


 function cal(op, cal) {
     calculate(); //调用计算函数 
     operate = op; //更改输入状态 
     calcul = cal; //更改计算状态为加 
 }

 //加法
 document.getElementById('plus').onclick = function() {
     cal(1, 1);
 }

 //减法 
 document.getElementById('minus').onclick = function() {
     cal(1, 2);
 }

 //乘法 
 document.getElementById('times').onclick = function() {
     cal(1, 3);
 }

 //除法   
 document.getElementById('divide').onclick = function() {
     cal(1, 4);
 }

 //求余
 document.getElementById('persent').onclick = function() {
     cal(1, 5);
 }

 // 根号
 document.getElementById('sqrt').onclick = function() {
     resultDom.value = parseFloat(Math.sqrt(resultDom.value).toFixed(8));
 }

 //sin
 document.getElementById('sin').onclick = function() {
     resultDom.value = parseFloat(Math.sin(resultDom.value).toFixed(8));
 }

 // cos
 document.getElementById('cos').onclick = function() {
     resultDom.value = parseFloat(Math.cos(resultDom.value).toFixed(8));
 }

 // tan
 document.getElementById('tan').onclick = function() {
     resultDom.value = parseFloat(Math.tan(resultDom.value).toFixed(8));
 }

 //等于 
 document.getElementById('equal').onclick = function() {
     calculate();
     operate = 1;
     num = 0;
     result = 0;
     numshow = "0";
 }
