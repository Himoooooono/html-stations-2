function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var checked = e.target.checked;
  if(checked){
    document.getElementById("text").style.backgroundColor = "red";
  }
  else{
    document.getElementById("text").style.backgroundColor = "white";
  }

}
