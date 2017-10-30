var cityType = ["NYC", "SF", "LA", "ATX", "SYD"];
for (var i=0;i<cityType.length;i++){
   $('<option/>').val(cityType[i]).text(cityType[i]).appendTo('#city-type');


   	if(cityType === 'NYC') {
    	$('body').css("background-image", "url(images/nyc.jpg)");
    }

    else if(cityType === 'SYD') {
    	$('body').css("background-image", "url(images/sydney.jpg)");
    }

    else if(cityType === 'ATX') {
    	$('body').css("background-image", "url(images/austin.jpg)");
    }

    else if(cityType === 'SF') {
    	$('body').css("background-image", "url(images/sf.jpg)");
    }

    else if(cityType === 'LAX') {
   		$('body').css("background-image", "url(images/la.jpg)");
    }
};