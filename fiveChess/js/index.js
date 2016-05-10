var canvas = document.getElementById('canvas'),
	chess = canvas.getContext('2d'),
	me = true,
	chessBord = [];

for (var i = 0; i < 15; i++) {
	chessBord[i] = [];
	for (var j = 0; j < 15; j++) {
		chessBord[i][j] = 0;
	}
}

chess.strokeStyle = "#BFBFBF";
drawChessBoad();
//绘制棋盘
function drawChessBoad() {
	for (var i = 0; i < 15; i++) {
		chess.moveTo(15 + i * 30, 15);
		chess.lineTo(15 + i * 30, 435);
		chess.stroke();
		chess.moveTo(15, 15 + i * 30);
		chess.lineTo(435, 15 + i * 30);
		chess.stroke();
	}
}
//绘制棋子
function oneSetp(i, j, me) {
	chess.beginPath();
	chess.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
	chess.closePath();
	var gradient = chess.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);

	if (me) {
		gradient.addColorStop(0, "#0a0a0a");
		gradient.addColorStop(1, "#636766");
	} else {
		gradient.addColorStop(0, "#d1d1d1");
		gradient.addColorStop(1, "#f9f9f9");
	}

	chess.fillStyle = gradient;
	chess.fill();
}
//点击落子
canvas.onclick = function(e) {
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x / 30);
	var j = Math.floor(y / 30);
	//处理已经落子了还能在次点击换子的情况
	if(chessBord[i][j] == 0){
		oneSetp(i,j,me);
		if(me){
			chessBord[i][j] = 1;
		}else{
			chessBord[i][j] = 2;
		}
		me = !me;
	}
	
};
