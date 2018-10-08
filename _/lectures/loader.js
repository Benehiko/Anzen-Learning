var index=0;
var gamelevel=1;
var pages = ["/lectures/1_video1_introduction_part1.html", "/lectures/2_swotanalysis.htm",
"/lectures/3_video2_introduction_part2.html","/lectures/4_form1_link.html","/lectures/5_choosing.html",
"/lectures/6_quiz_link.html","/lectures/7_npv_soap.html","/lectures/8_roi.html","/lectures/9_othermethods.html",
"/lectures/10_project_charter.html","/lectures/11_project_plan.html","/lectures/12_notDone.html",
"/lectures/13_tutorial_end.html"]; 
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
				checkSection();
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
						console.log("Loading :" +index);
						console.log(pages[index]);
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
	$("#video").hide();
	$("#quiz").hide();
	$("#library").hide();
	$("#video2").hide();
	$("#quiz2").hide();
	$("#structure").hide();
	$("#navigation").hide();
	$("#labelling").hide();
	$("#quiz3").hide();
	$("#user").hide();
	$("#influence").hide();
	$("#job").hide();
	$("#quiz4").hide();
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

$("#library").click(function(e) 
{
	setStats(3,gamelevel);
	indexSpecify(3);
});

$("#video2").click(function(e) 
{
	setStats(4,gamelevel);
	indexSpecify(4);
});

$("#quiz2").click(function(e) 
{
	setStats(5,gamelevel);
	indexSpecify(5);
});

$("#structure").click(function(e) 
{
	setStats(6,gamelevel);
	indexSpecify(6);
});

$("#navigation").click(function(e) 
{
	setStats(7,gamelevel);
	indexSpecify(7);
});

$("#labelling").click(function(e) 
{
	setStats(8,gamelevel);
	indexSpecify(8);
});

$("#quiz3").click(function(e) 
{
	setStats(9,gamelevel);
	indexSpecify(9);
});

$("#user").click(function(e) 
{
	setStats(10,gamelevel);
	indexSpecify(10);
});

$("#influence").click(function(e) 
{
	setStats(11,gamelevel);
	indexSpecify(11);
});

$("#job").click(function(e) 
{
	setStats(12,gamelevel);
	indexSpecify(12);
});

$("#quiz4").click(function(e) 
{
	setStats(13,gamelevel);
	indexSpecify(13);
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
	setStats(index,gamelevel);
	load();
}

function next()
{
	
	
	
	if(index < (pages.length-1))
	{
		index++;
	}
	
	checkSection();
	console.log("index :" +index); 
	load();
}
function checkSection()
{
	//todo convert to switch case and add IDs to an array to allow dynamic button adding
	if(index >= 1)
	{
		$("#video").show();
	}
	if(index >= 2)
	{
		$("#quiz").show();
	}
	if(index >= 3)
	{
		$("#library").show();
	}
	if(index >= 4)
	{
		$("#video2").show();
	}
	if(index >= 5)
	{
		$("#quiz2").show();
	}
	if(index >= 6)
	{
		$("#structure").show();
	}
	if(index >= 7)
	{
		$("#navigation").show();
	}
	if(index >= 8)
	{
		$("#labelling").show();
	}
	if(index >= 9)
	{
		$("#quiz3").show();
	}
	if(index >= 10)
	{
		$("#user").show();
	}
	if(index >= 11)
	{
		$("#influence").show();
	}
	if(index >= 12)
	{
		$("#job").show();
        $("#modal-end").modal();
		$("#next").hide();
	}

}
function back()
{
	if(index > 0)
	{
		index--;
	}
	$("#next").show();
	load();
}

function hideButtons()
{
	$("#next").hide();
	$("#back").hide();
	$("#sections").hide();
	$("#logoutLi").hide();
	$("#video").hide();
	$("#quiz").hide();
	$("#library").hide();
	$("#quiz2").hide();
	$("#structure").hide();
	$("#navigation").hide();
	$("#labelling").hide();
	$("#quiz3").hide();
	$("#user").hide();
	$("#influence").hide();
	$("#job").hide();
	$("#quiz4").hide();
}

function showButtons()
{
	$("#next").show();
	$("#back").show();
	$("#sections").show();
	$("#logoutLi").show();
}






