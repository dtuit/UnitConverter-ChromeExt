function createSelectors(conv_type) {

	var optionsTags = "";
	$.each(units[conv_type], function(index, value){
		optionsTags += '<option value="' + index + '">' + value.name + '</option>'; //
	});
	return optionsTags;

}


function fillCategories() {
	var categoryTags = "", categ = "";
	$.each(selectionOptions, function(index) {
		categ = index.replace(/_/g, ' ');
		categoryTags += '<option value="' + index + '">' + categ + '</option>';
	});

	$('#conversion_selector').append(categoryTags);

}

function createCurrencySelectors() {
	var optionsTags = "";
	console.log();

	$.each(currencies, function(code, cur) {
		optionsTags += '<option>' + cur.name + " - " + code + '</option>';
	});

	return optionsTags;
}