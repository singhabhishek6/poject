var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var numsquares = 6;
var color = generateRandomColor(numsquares);
var pickedColor = pickColor();
var  easybtn = document.querySelector("#easy");
var  hardbtn = document.querySelector("#hard");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function()
 {
    color = generateRandomColor(numsquares);
    pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
   
    for(var i = 0; i < square.length; i++)
        {
            square[i].style.backgroundColor = color[i];
        }
   h1.style.background = "steelblue";
});
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
for(var i = 0; i < square.length; i++)
    {
        square[i].style.backgroundColor = color[i];
        square[i].addEventListener("click", function()
        {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
                {
                    messageDisplay.textContent = "Right";
                    changeColor(clickedColor);
                    h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again?";
                }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
function changeColor(color)
{
    for(var i = 0; i<square.length; i++)
        {
            square[i].style.backgroundColor = color;
        }
}

function pickColor()
{
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}
function generateRandomColor(num)
{
    var arr = [];
    for(var i = 0; i<num; i++)
        {
           arr.push(randomColor()) 
        }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g +", "+ b + ")";
}
easybtn.addEventListener("click", function()
{
   easybtn.classList.add("select");	
   hardbtn.classList.remove("select");
	numsquares = 3;
	color = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for(var i = 0; i<square.length; i++)
        {
           if(color[i])
			   {
				   square[i].style.backgroundColor = color[i];
			   }
			else{
				square[i].style.display = "none";
			}
        }
	
});

hardbtn.addEventListener("click", function()
{
   easybtn.classList.remove("select");	
   hardbtn.classList.add("select");	
	numsquares = 6;
	color = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for(var i = 0; i<square.length; i++)
        {
           if(color[i])
				   square[i].style.backgroundColor = color[i];
				square[i].style.display = "block";
		}
});