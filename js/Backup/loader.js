var index=0;
var gamelevel=1;
var pages = ["/lectures/welcome.html", "/lectures/video1.html", "/lectures/quiz1.html","/lectures/libraryOfBabel.html","/lectures/quiz2.html","/lectures/classifyingAndStructure.html" ,"/lectures/navigation1.html","/lectures/labeling.html","/lectures/quiz3","/lectures/userCenteredDesign.html","/lectures/threeInfluences.html","/lectures/theJob","/lectures/quiz4.html"]; 
var returned;

function checkStats(){		
		$.ajax(
		{
			method: "POST",	
			url:"../php/playerstats.php",
			success : function(msg)
			{
				
				index = msg.substring(0,msg.indexOf(":"));
				gamelevel = msg.substring(msg.indexOf(":")+1,msg.length);
				console.log("INDEX: "+index + " | GAMELEVEL: "+gamelevel); 
				load();
			}
		});
	return true;
}

function setStats()
{
	$.ajax(
	{
		method: "POST",	
		url:"../php/playerstatshandler.php",
		data: {'level': index, 'gamelevel':gamelevel},
		success : function(msg)
			{
					console.log("setstats: "+msg);
			}
	});
}

function load(){
$.ajax({
			method: "POST",	
			url:"../php/checklogin.php",
			success : function(msg){
					if (msg == "LoggedOut")
					{
						hideButtons();
						$( "#loadMe" ).load( "/login.html" );
					}
					else
					{
						setStats();
						showButtons();
						$( "#loadMe" ).load(pages[index]);
						if (index == 3){
                            $('#myModal').modal();
                        }
					}
			}
});
}



$(document).ready(function() 
{
	checkStats();

});




$("#nextForm").on("click",next);
$("#backForm").on("click",back);


$("#start").click(function(e) 
{
    e.preventDefault();
	indexSpecify(0);
});

$("#video").click(function(e) 
{
    setStats(1,gamelevel);
	indexSpecify(1);
});

$("#quiz").click(function(e) 
{
	setStats(2,gamelevel);
	indexSpecify(2);
});

$("#end").click(function(e) 
{
	setStats(3,gamelevel);
	indexSpecify(3);
});


$("#logout").click(function(e) 
{
    e.preventDefault();
	console.log("test");
	$.ajax(
		{
			method: "POST",	
			url:"../php/logout.php",
			success : function(msg)
			{
				location.reload(true);
			}
		});
});



function indexSpecify(pageNumber)
{
	index = pageNumber;
	console.log(pageNumber);
	setStats(index,gamelevel);
	load();
}

function next()
{
	if(index < (pages.length-1))
	{
		index++;
	}
	load();
}

function back()
{
	if(index > 0)
	{
		index--;
	}
	load();
}

function hideButtons()
{
	$("#next").hide();
	$("#back").hide();
	$("#sections").hide();
	$("#logoutLi").hide();
}
function showButtons()
{
	$("#next").show();
	$("#back").show();
	$("#sections").show();
	$("#logoutLi").show();
}






