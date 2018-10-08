var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var size = 100;
var xPos = 5;
var yPos = 5;
var grid;
var correct = ["win"];
var incorrect = ["lose"]

var score = 0;		
var counter = 0;
var cd = false;
		
numOfColumn = width/size;
numOfRow = width/size;
setup();
			
			
function setup()
{
	grid = 
	[ 
		["0","1","0","1","0"],
		["1","0","2","0","1"],
		["0","1","0","1","0"],
		["2","0","1","0","1"],
		["0","1","0","2","0"]
	];
	drawGrid();
	myGamePiece = new Image();
	myGamePiece.src = "../img/flowerCat.png";
	ctx.font = "30px Arial";
	draw();
}
			
function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(myGamePiece,xPos,yPos,80,80);
	drawGrid();
	$("#scoreID").text("Score: "+score);
	count();
}
			

function drawGrid()
{	
	setText();
	drawCol();
	drawRow();
}				

			
			
function setText()
{
	var correctCount = 0;
	var incorrectCount = 0;
	for(var y = 0;y<numOfRow;y++)
	{
		for(var x =0;x<numOfColumn;x++)
		{
			if(grid[y][x] == 2)
			{
				ctx.fillText(correct[correctCount],(x*100)+20,(y*100)+50);
				correctCount++;
			}
			else if(grid[y][x] == 1)
			{
				ctx.fillText(incorrect[incorrectCount],(x*100)+20,(y*100)+50);
				incorrectCount++;
			}
						
			if(correctCount >= correct.length)
			{
				correctCount = 0;
			}
			if(incorrectCount >= incorrect.length)
			{
				incorrectCount = 0;
			}
		}
					
	}
}

function drawCol()
{
	for(var x=0;x<numOfColumn+1;x++)
	{ 
		ctx.beginPath();
		ctx.moveTo((x*size),0);
		ctx.lineTo((x*size),height);
		ctx.closePath();
		ctx.stroke();
	}
}

function drawRow()
{
	for(var y=0;y<numOfRow+1;y++)
	{ 
		ctx.beginPath();
		ctx.moveTo(0,(y*size));
		ctx.lineTo(width,(y*size));
		ctx.closePath();
		ctx.stroke();
	}
}
	setInterval(draw,(1000/60));
			
function count()
{
	if(cd)
	{
		if(counter < 30)
		{
			counter++
		}
		else
		{
			counter = 0;
			cd = false;
		}
	}
}
			
window.addEventListener('keydown', function (e) 
	{
		var key = e.keyCode;
		if(counter == 0)
		{
			if(key == 68 && xPos < (numOfColumn*size)-100)
			{
				xPos = xPos +size;
				cd = true;
			}
			else if(key == 65 && xPos > 40)
			{
				xPos = xPos -size;
				cd = true;
			}
			else if(key == 83 && yPos < (numOfRow*size)-100)
			{
				yPos = yPos +size;
				cd = true;
			}
			else if(key == 87 && yPos > 40)
			{
				yPos = yPos -size;
				cd = true;
			}
			else if(key == 13)
			{
				var y = (yPos-5)/100;
				var x = (xPos-5)/100;
				console.log(x,y);
				if(grid[y][x]==1)
				{
					score--;
				}
				else if(grid[y][x]==2)
				{
					score++;
				}
				grid[y][x]=0;
			}
			else if(key == 90)
			{
				console.log("Final score "+score);
			}
		}
	})
			
window.addEventListener('keyup', function (e) 
	{
		canvas.key = false;
	})
			