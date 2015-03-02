function hideObj(toHide){
	$("toHide").css("visibility", "hidden");
}

function showObj(toShow){
	$("toShow").css("visibility", "normal");
}

function hideAndShow(){
	$(".top-nav li").click(hideObj(".top-nav"));
	showObj(".vert-nav");
}


