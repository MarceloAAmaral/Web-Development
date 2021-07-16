$(document).ready(function () {
    var $window = $(window);
    $header = $('#header');
    $windowH = $window.height();
    $windowW = $window.width();
    headerH = $header.height();   
	protocolo = $(location).attr('protocol'); 
	dominio = 'localhost/gata';    
	url = protocolo+"//"+dominio+"/";
	layout();
	$("#navegacao div[data-param='right']").click(function(){			
		desliza("r");		
	});	
	$("#navegacao div[data-param='left']").click(function(){			
		desliza("l");		
	});	
});
function desliza(direcao){
	var x = $("#fotos").width();
	var num = $("#fotos").css('margin-left');	
	num = num.replace('px', '');
	if(direcao=='r'){
		num = parseInt(num)-($windowW);
	    $("#navegacao div[data-param='left']").removeClass('none');	
		if(num<-(x-$windowW)){			
			$("#navegacao div[data-param='right']").addClass('none');		
		}		
	}
	if(direcao=='l'){
		num = parseInt(num)+($windowW);			
		$("#navegacao div[data-param='right']").removeClass('none');	
		if(num>=0){			
			$("#navegacao div[data-param='left']").addClass('none');		
		}		
	}
	
	$("#fotos").css({ marginLeft : num+"px"} );
}

function layout(){
	var $item = $('#fotos .item');	
	$item.css('width',$windowW);
	var qtde = $item.length;
	console.log(qtde);
	var x = 0;
	for(let i=0; i< qtde; i++){
		x = x+($item.eq(i).width());
	}
	$("#fotos").width(x);
	$("#navegacao div[data-param='left']").addClass('none');
	return x;
}

