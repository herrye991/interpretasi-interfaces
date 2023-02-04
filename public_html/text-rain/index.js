var c = document.getElementById("c");
c.height = window.innerHeight;
c.width = window.innerWidth;
var ctx = c.getContext("2d");
var english = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ";
english = english.split("");
var font_size = 18;
var columns = c.width/font_size;
var drops = [];
var r=0,g=255,b=255;
for(var x = 0; x < columns; x++){
	drops[x] = 1; 
}
function draw(){
	var img = new Image();
	img.src = "image.png";
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.font = font_size + "px arial";
	if(r > 0 && b == 0){
		r--;
		g++;
	}
	if(g > 0 && r == 0){
		g--;
		b++;
	}
	if(b > 0 && g == 0){
		r++;
		b--;
	}
	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
	for(var i = 0; i < drops.length; i++){
		var text = english[Math.floor(Math.random()*english.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
			drops[i]++;
	}
	ctx.drawImage(img, c.width / 2 - img.width / 2, c.height / 2 - img.height / 2);
}
setInterval(function() {draw()}, 30);