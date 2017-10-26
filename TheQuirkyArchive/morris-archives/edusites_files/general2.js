// JavaScript Document

function goToPage(page){
	window.location = page;
}

function enterkey(frm,e)
{
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	if (keycode == 13) frm.submit();
}

sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

function squirtFlash(source,width,height){
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+width+'" height="'+height+'">');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="movie" value="'+source+'">');
	document.write('<param name="quality" value="high">');
	document.write('<embed wmode="transparent" src="'+source+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"></embed>');
	document.write('</object>');
}

function initSearch(siteID){
	var searchT = false;
	var sType = $("#search");
	var sBox = $("#searchResults");
	var pos = $("#search").offset();
	var onBox = false;
	var hasFocus = false;
	sType.focus(function(){
		if(sType.val() == "search site"){
			sType.val("");
			sType.css("color","#000000");
		}
		hasFocus = true;
	}).blur(function(){
		if(!onBox){
			if(sType.val() == ""){ 
				sType.val("search site");
				sType.css("color","#8C8C8C");
				sBox.css("display","none");
			}
			sBox.html('<div class="smallTitle mb10">Searching...</div>');
			sBox.fadeOut("fast");
		}
		hasFocus = false;
	}).keyup(function(){
		if(sType.val().length > 1){
			if(sBox.css("display") == "none"){
				sBox.fadeIn("fast");
			}
			if(searchT){
				clearTimeout(searchT);
			}
			searchT = setTimeout(function(){
				sBox.load("/sndreq/quicksearch.php?ID="+encodeURI(sType.val())+"&siteID="+siteID);
			}, 500);
		}
	});
	sBox.mouseenter(function(){
		onBox = true;
	}).mouseleave(function(){
		onBox = false;
		if(!hasFocus){
			sBox.html('<div class="smallTitle mb10">Searching...</div>');
			sBox.fadeOut("fast");
		}
	});
}

function showLinkBox(loadPage){
    var onOverlay = false;
    $("#linkBox").load("/sndreq/"+loadPage);
    $("#photoScreen").fadeIn("fast",function(){
        $("#linkBox").css("display","inline").mouseenter(function(){
            onOverlay = true;
        }).mouseleave(function(){
                onOverlay = false;
            }).animate({
                top: '75px'
            }, 250);
    }).click(function(){
            if(onOverlay == false){
                hideLinkBox();
            }
        });
}

function hideLinkBox(){
    $("#photoScreen").css("display", "none");
    $("#linkBox").css({"display":"none", "top":"-475px", "width":"500px", "height":"400px", "margin-left":"-250px"});
}
