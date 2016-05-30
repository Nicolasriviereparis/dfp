

$('.label-pdf').click(function(){


	if ($(this).hasClass("masquer")){
		$(this).empty().append("+");
		$(this).removeClass("masquer");
		$(this).css({
			'position': 'absolute',
			'top': '5px',
			'right': '5px',
			'float': 'right',
			'background-color': 'white',
			'color':'rgb(234, 98, 18)',
			'padding':'5px 0',
			'border-radius': '4px',
			'width':'40px',
			'font-size':'24px',
			'line-height':'20px',
			'font-weight':'400',
		});
	}
	else
	{
		$(this).empty().append("-");
		$(this).addClass("masquer");
		$(this).css({
			'position': 'absolute',
			'top': '5px',
			'right': '5px',
			'float': 'right',
			'background-color': 'rgb(150, 220, 90)',
			'color':'white',
			'padding':'5px 0',
			'border-radius': '4px',
			'width':'40px',
			'font-size':'24px',
			'line-height':'20px',
			'font-weight':'400',
		});	}
	/* le if test si la class "masquer" est appliqué à #test, si oui il affiche "afficher les option" puis enlève la class "masquer" sinon il applique la class "masquer" et affiche l'autre text*/


});



$('#unCheckAll').click(function(){
	
	if ($('.label-pdf').hasClass("masquer")){
		$('.label-pdf').empty().append("+");
		$('.label-pdf').removeClass("masquer");
		$('.label-pdf').css({
			'position': 'absolute',
			'top': '5px',
			'right': '5px',
			'float': 'right',
			'background-color': 'white',
			'color':'rgb(234, 98, 18)',
			'padding':'5px 0',
			'border-radius': '4px',
			'width':'40px',
			'font-size':'24px',
			'line-height':'20px',
			'font-weight':'400',
		});
	}
});
