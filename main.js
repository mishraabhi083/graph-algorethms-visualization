environment = {
	scale_factor: 10,
	background_color:"#000",
}

class GridBlock{
	constructor(x, y) {
		this.start_coordinates = { x, y }
		this.status = false
		this.target=false
	}
}


function setup() {
	let x = createCanvas(environment.scale_factor*100, environment.scale_factor*60)
	x.canvas.style.border = "3px solid #fff"
	console.log(x)
	background(environment.background_color)
}
function draw() {
	let grid=[]
	for (i = 0; i < environment.scale_factor * 100; i += environment.scale_factor){
		let a=[]
		for (j = 0; j < environment.scale_factor * 60; j += environment.scale_factor){
			a.push(new GridBlock(i,j))	
			// rect(i,j,environment.scale_factor,environment.scale_factor)
		}
		grid.push(a)
	}

	// for testing purpose:-
	// for (i = 0; i < 100; i += 1){
	// 	for (j = 0; j < 60; j += 1){
	// 		if (i % 2 == 0  && j%2==0) {
	// 			grid[i][j].status=true
	// 		}
	// 	}
	// }


	
	for (i = 0; i < environment.scale_factor * 100; i += environment.scale_factor){
		for (j = 0; j < environment.scale_factor * 60; j += environment.scale_factor){
			// console.log(i,j,": ",grid[i][j])
			if (grid[i/environment.scale_factor][j/environment.scale_factor].status) {
				fill('#0a0')
				noStroke()
			} else {
				noFill()
				// stroke('#444')
			}
			rect(i,j,environment.scale_factor,environment.scale_factor)
		}
	}
}

render_grid = (grid) => {
	for (i = 0; i < environment.scale_factor * 100; i += environment.scale_factor){
		for (j = 0; j < environment.scale_factor * 60; j += environment.scale_factor){
			// console.log(i,j,": ",grid[i][j])
			if (grid[i][j].visited) {
				fill('#fff')
				noStroke()
			} else {
				noFill()
				stroke('#444')
			}
			rect(i,j,environment.scale_factor,environment.scale_factor)
		}
	}
}