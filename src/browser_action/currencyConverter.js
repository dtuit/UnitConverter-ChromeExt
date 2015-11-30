$(document).ready(function() {
	console.log(currencies.AFN.name);
	
	getCurrencyPairs();

	change_selectors1();
	
	$('#conversion_selector').change(function() {
		$("#conversion_selector option:selected").each(function() {
			change_selectors1();
		});
	});
});


function change_selectors1() {
	$('#left_selector').empty();
	$('#right_selector').empty();
	//loads the correct options into the selectors
	//console.log(createCurrencySelectors());
	$(createCurrencySelectors()).appendTo('#left_selector, #right_selector');
	//sets up default options 
	$('#left_selector :nth-child(1)').prop('selected', true);
	$('#right_selector :nth-child(2)').prop('selected', true);
	//default value of nothing
	$('#left_input').val("");
	$("#left_input").focus();
	// Convert('#left_input', '#right_input', 'left_selector', 'right_selector');
}

function getCurrencyPairs(){
			console.log("redaf");

	var	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json');
	xmlhttp.onload = function(){
		console.log("redaf");

	};
}