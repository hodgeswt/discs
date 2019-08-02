
function setup() {
	createCanvas(windowWidth, windowHeight);
}

var r = 255;
var g = 0;
var b = 0;

function draw() {
	if (r === 255 && g === 0 && b <= 255) {
		b += 1;
	}
	if (b === 255 && g === 0 && r >= 0) {
		r -= 1;
	}
	if (r === 0 && b === 255 && g <= 255) {
		g += 1;
	} 
	if (r === 0 && g === 255 && b >= 0) {
		b -= 1;
	}
	if (g === 255 && b === 0 && r <= 255) {
		r += 1;
	}
	if (r === 255 && b === 0 && g >= 0) {
		g -= 1;
	}

	
	var string = 'rgb(' + r + ',' + g + ',' + b + ')';
	
	
	fill(color(string));
	
	ellipse(mouseX, mouseY, 80, 80);
}
