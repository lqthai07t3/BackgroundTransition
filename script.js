var Bgimg = document.createElement("img");
var showBg = document.getElementById("bg");

 Bgimg.addEventListener('load', function(){
 	showBg.style.backgroundImage = "url('https://tophinhnen.com/wp-content/uploads/2018/01/tai-hinh-nen-thien-nhien-11.jpg')";
 	showBg.style.opacity = "1";
 });
 Bgimg.src = "https://tophinhnen.com/wp-content/uploads/2018/01/tai-hinh-nen-thien-nhien-11.jpg";