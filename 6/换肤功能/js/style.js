// 显示换肤DIV
function openColorDiv() {
    document.getElementById("color_div").style.display = "block";
}

//隐藏换肤DIV 
function cancelColorDiv() {
    document.getElementById("color_div").style.display = "none";
}

//切换颜色
function changeCss(newColor) {
    if(newColor !== null){
      document.getElementById('color_css').href = './css/' + newColor + '.css';
      setLocalStorage(newColor);
    }
   
}

// 设置localStorage
function setLocalStorage(newColor) {
    localStorage.setItem("color_css", newColor);
}

// 取得localStorage
function getLocalStorage(){
  return localStorage.getItem("color_css");
}

//初始化加载localStorage
window.onload =function(){
      var color = getLocalStorage();
      changeCss(color);
}