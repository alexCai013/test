function onCalc() {
    // 数字1
    var num1 = document.getElementById("num1").value;
    // 数字2
    var num2 = document.getElementById("num2").value;
    // 运算符
    var symbol = parseInt(document.getElementById("symbol").value);

    // 数字验证
    var re = /^(-?\d+)(\.\d+)?$/;
    if (!re.test(num1) || !re.test(num2)) {
        document.getElementById("result").innerHTML = "请输入正确的数字";
        document.getElementById("result").style.color = "red";
        return;
        // 除数为0的时候    
    } else if (symbol == 3 && num2 == 0) {
        document.getElementById("result").innerHTML = "被除数不能为0";
        document.getElementById("result").style.color = "red";
        return;
    }
    var result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (symbol) {
            // 加
        case 0:
            result = num1 + num2;
            break;
            // 减
        case 1:
            result = num1 - num2;
            break;
            // 乘
        case 2:
            result = num1 * num2;
            break;
            // 除
        case 3:
            result = num1 / num2;
        default:
            break;
    }
    if (Math.floor(result) !== result) {
        result = result.toFixed(4);
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.color = "#FFF";
    return;
}
