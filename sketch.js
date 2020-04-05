let Height
let Width

let p1
let p2

let p3
let p4

let p5
let p6

let p7
let p8



function setup() {
	createCanvas(windowWidth, windowHeight);
	p1= {x:0, y:0}
	p2= {x:floor(windowWidth), y:floor(windowHeight)}
	
	p3= {x:0, y:floor(windowHeight)}
	p4= {x:floor(windowWidth), y:0}

	p5= {x:0, y:floor(windowHeight/2)}
	p6= {x:windowWidth, y:floor(windowHeight/2)}

	p7= {x:floor(windowWidth/2), y:0}
	p8= {x:floor(windowWidth/2), y:floor(windowHeight)}
}

function draw() {
	//line(p1.x,p1.y,p2.x,p2.y)
	diagonal(p1,p2)
	diagonal(p3,p4)
	diagonal(p5,p6)
	rectaV(p7,p8)
	
	point(20,20)

}

function diagonal(p1,p2){
	const dx = p2.x - p1.x
	const dy = p2.y - p1.y

	const m = dy / dx

	b = p1.y - m * p1.x

	point(p1.x, p1.y)

	let x = p1.x + 1
	let y 
	while(x != p2.x){
		y= m*x+b
		point(x,y)
		x++
	}
	
}

function rectaV(p1,p2){
	const dx=p1.x
	const dy=p1.y

	let y= dy

	while(y != p2.y){
		 
		point(dx,y)
		y++
	}

}