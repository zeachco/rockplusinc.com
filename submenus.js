$(document).ready(function(){
	$("#sidenav .parentMenu").hover(function(){
		var node = $(this).attr("node")
		$("#sidenav .childOf_"+node).show(500);
	})
	if(/s=wholesale\_category&v=[a-z0-9\-]+\_/.test(document.location.href)){
		//alert('test');
	}
	
	
});
