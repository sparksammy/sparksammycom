function initCalendar(siteID,month,year,moduleID,miniCalID,lp){
	$("#miniCal"+miniCalID+" td.calEvent").on("mouseover", function(event){
		var wCenter = Math.round($(document).width() / 2);
		var pos = $(this).offset(); 
        var width = $(this).width();
        var calBlock = $(this);
        calBlock.css("cursor","pointer").addClass("calEvent2");
        if(pos.left > wCenter){
			$("#popUp").css({  
		        left: (pos.left + - 254) + "px",  
		        top: pos.top + "px"
		    });
	    } else {
	    	$("#popUp").css({  
		        left: (pos.left + width) + "px",  
		        top: pos.top + "px"
		    });
	    }
	    if(popUpFlag){
	    	clearTimeout(popUpFlag);
	    }
	    popUpGo = function(){
	       if(calBlock.text().length == 0){
	       		$("#popUp").load("/sndreq/buildCalPopup.php?siteID="+siteID+"&fullcal=true", function(){
					 $("#popUp").fadeIn("fast");
					 popUpFlag = false;
				});
	       } else if(siteID > 0 && month > 0 && year > 0){
               var rndDate = new Date();
			   $("#popUp").load("/sndreq/buildCalPopup.php?siteID="+siteID+"&moduleID="+moduleID+"&year="+year+"&month="+month+"&day="+calBlock.text()+"&rndnum="+rndDate.getTime(), function(){
					 $("#popUp").fadeIn("fast");
					 popUpFlag = false;
				});
		   }
		}
	    popUpFlag = setTimeout("popUpGo()",500);
	    
	});
	$("#miniCal"+miniCalID+" td.calEvent").on("mouseout", function(event){
		if(popUpFlag){
	    	clearTimeout(popUpFlag);
	    }
		$("#popUp").css({  
	        display: "none"
	    });
	    $(this).removeClass("calEvent2");
	});
	$('div[id=miniCal'+miniCalID+'] td.calEvent').on('click', function(event){
        if(lp){
            window.location = "/index.php?pageID=page_lesson_plan&calID="+moduleID+"&month="+month+"&year="+year+"&day=" + $(this).text();
        } else window.location = "/index.php?pageID=page_calendar&calID="+moduleID+"&month="+month+"&year="+year+"&day=" + $(this).text();
	});
/*	$('div[id=miniCal'+miniCalID+'] td.lessEvent').on('click', function(event){
		window.location = "/index.php?pageID=page_lesson_plan&calID="+moduleID+"&month="+month+"&year="+year+"&day=" + $(this).text();
	}); */
	$('#prevMonth, #nextMonth').on('mouseover', function(event){
		$(this).css("cursor","pointer"); 
	});
	if($.browser.mozilla){		
		$("table.dayGrid").css("height","155px");
	}
}
function loadCal(siteID,month,year,direction,moduleID,miniCalID,lp){
	$("#popUp").css({
        display: "none"
    });
    $("#calMonth"+miniCalID).html('LOADING...');
    var leftMove = (direction == "prev") ? "+=209" : "-=209";
    if(siteID > 0 && month > 0 && year > 0){
	    $.get('/sndreq/buildCal.php?siteID='+siteID+'&moduleID='+moduleID+'&month='+month+'&year='+year, function(data)  
	          {          
	          	  $("#miniCal"+miniCalID).css("position","relative");
	              $("#miniCal"+miniCalID).animate({
	          	    opacity: 0,
				    left: leftMove
				  }, 300, function() {
				      $("#miniCal"+miniCalID).parent().parent().html(data);
	              	  $("#miniCal"+miniCalID).css({position: "relative", top:"190px", opacity:0});
	              	  $("#miniCal"+miniCalID).animate({
	              	  	opacity: 1,
	              	  	top: "-=190"
	              	  }, 300);
	              	  initCalendar(siteID,month,year,moduleID,miniCalID,lp);
				  });
	          }
	    );
    }
}