var defaultCategory = "Temperature";
var units = chrome.extension.getBackgroundPage().units;
var selectionOptions = chrome.extension.getBackgroundPage().selectionOptions;

/**
 * [Handles the Page Events]
 *
 */
$(document).ready(function() {
	fillCategories();
	loadUserPref("uC");

	$("#left_input").on('input', function() {
		removeInvalidChars(this);
		Convert(this, '#right_input', 'left_selector', 'right_selector');

	});
	$("#right_input").on('input', function() { //converts in opposite direction
		removeInvalidChars(this);
		Convert(this, '#left_input', 'right_selector', 'left_selector');

	});
	$(left_selector).change(function() {
		Convert('#left_input', '#right_input', 'left_selector', 'right_selector');

	});
	$(right_selector).change(function() {
		Convert('#left_input', '#right_input', 'left_selector', 'right_selector');

	});

	// Change the Selection Type and related options.
	$('#conversion_selector').change(function() {
		$("#conversion_selector option:selected").each(function() {
			var conv_type = $(this).val();
			change_selectors(conv_type);

		});

	});

});

/**
 * [change_selectors Changes the <select>s to the selected category, sets the default options and value of ""]
 * @param  {[string]} conv_type [The category of conversion]
 */
function change_selectors(conv_type) {

	$('#left_selector').empty();
	$('#right_selector').empty();
	//loads the correct options into the selectors
	createSelectors(conv_type); //unnessary? check!
	$(createSelectors(conv_type)).appendTo('#left_selector, #right_selector');
	//sets up default options 
	$('#left_selector').val(selectionOptions[conv_type][0]);
	$('#right_selector').val(selectionOptions[conv_type][1]);
	//default value of nothing
	$('#left_input').val("");
	$('#right_input').val("");
	$("#left_input").focus();
	Convert('#left_input', '#right_input', 'left_selector', 'right_selector');
}

/**
 * [Convert Determines if input is correct then calls ComvertCompute]
 * @param {[string]} input          [input id]
 * @param {[string]} output         [output id]
 * @param {[string]} inputSelector  []
 * @param {[string]} outputSelector []
 */
function Convert(input, output, inputSelector, outputSelector) {
	//set up for conversion
	rawInputVal = $(input).val(); // refactor

	var inputVal = toDecimal(rawInputVal);

	if (isNaN(inputVal)) {
		$(output).val("");
	} else {

		var leftInputSelectorIndex = document.getElementById(inputSelector).value;
		var rightInputSelectorIndex = document.getElementById(outputSelector).value;
		$(output).val(ConvertCompute(leftInputSelectorIndex, inputVal, rightInputSelectorIndex));
	}

}

/**
 * [ConvertCompute using units defined in unit.js converts the query]
 * @param {[type]} aFromUnitIndex [index of the 'from' unit]
 * @param {[type]} value          [the value to be converted]
 * @param {[type]} aToUnitIndex   [index of the 'to' unit]
 * unitTypeIndex		[the conversion type]
 */
function ConvertCompute(aFromUnitIndex, value, aToUnitIndex) {

	var unitType = document.getElementById('conversion_selector').value;

	var oneUnitFrom = units[unitType][aFromUnitIndex];
	var oneUnitTo = units[unitType][aToUnitIndex];

	//Convert "From" units to base unit of category ie. celcius to Kelvin
	if (isNumber(oneUnitFrom.scale)) {
		value = value * oneUnitFrom.scale;
	} else {
		value = oneUnitFrom.scale(value);
	}

	//Next Convert into "To" units from the base unit of category ie. kelvin to fahrenheit
	if (isNumber(oneUnitTo.scale)) {
		value = value / oneUnitTo.scale;
	} else {
		value = oneUnitTo.scaleFrom(value);
	}

	if (isNumber(value)) {
		return roundIt(value, DECIMALPLACES);
	} else {
		return "";
	}

}

/*HELPER FUNCTIONS*/

/**
 * [roundIt Rounds to desired number of decimal places]
 * can implement option to choose the number
 * @param  {[integer]} num [the value to be rounded]
 * @param  {[integer]} X   [value to be converted]
 * @return {[integer]}     [the rounded value]
 */
function roundIt(num, X) {
	X = (!X ? 6 : X);
	return Math.round(num * Math.pow(10, X)) / Math.pow(10, X);
}

/**
 * [isNumber Check if conversion formula is a number]
 * @param  {[string]}  n [conversion string from the "units.js" object]
 * @return {Boolean}   [true if nubmer false if formula]
 */
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * [toDecimal converts the input to a decimal, can handle fractional form of format "1 2/3"]
 * @param  {[string]} fraction [the string input into the <input>]
 * @return {[float]}          [the input in decimal form]
 */
function toDecimal(fraction) {
	var result, wholeNum = 0,
		frac, deci = 0;
	if (fraction.search('/') >= 0) {
		if ((fraction.search(' ') >= 0)) {
			wholeNum = fraction.split(' ');
			frac = wholeNum[1];
			wholeNum = parseFloat(wholeNum[0]);
		} else {
			frac = fraction;
		}
		frac = frac.split('/');
		deci = parseFloat(frac[0]) / parseFloat(frac[1]);
		result = wholeNum + deci;
	} else {
		result = parseFloat(fraction);
	}
	return result;
}

/**
 * [removeInvalidChars Removes invalid characters when input. valid characters are "0-9. /-"]
 * @param  {[string]} inputElement [the input string]
 * @return {[string]}              [valid input string]
 */
function removeInvalidChars(inputElement) {
	var c = inputElement.selectionStart,
		r = /[^\d. /-]/gi,
		v = $(inputElement).val();
	if (r.test(v)) {
		$(inputElement).val(v.replace(r, ''));
		c--;
	}
	// inputElement.setSelectionRange(c, c);

}



function convertver2(){

}