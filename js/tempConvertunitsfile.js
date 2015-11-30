//removespaces in objects and make cammel case
// remove under scores and add spaces to name feild

//using units4.js file

var unitsNew = {};

$.each(units2, function(index, value) {

	// index = camelCase(index);

	unitsNew[index] = {};

	$.each(value, function(i, v) {


		removedbrackets = RemoveBrackets(i)
		iInCammelCase = camelCase(removedbrackets);
		theName = createName(i);

		unitsNew[index][iInCammelCase] = {};

		unitsNew[index][iInCammelCase].scale = v.factor;
		unitsNew[index][iInCammelCase].symbol = "";
		unitsNew[index][iInCammelCase].name = theName;

	});
});


function camelCase(input) {
	return input.toLowerCase().replace(/(_| |-|\/)(.)/g, function(match, group1, group2) {
		console.log(input + " " + match + " " + group1 + " " + group2);
		return group2.toUpperCase();
	});
}

function RemoveBrackets(input){
	return input.replace(/[()]|\./g,'', "");

}

function createName(input) {
	/*return input.replace(/([^ \t]+)/g, function(match, group1){
		return group1.;

	});*/
	input = input.replace(/(_| |-|\/)(.)/g, function(match, group1, group2) {
		return match.toUpperCase().replace('_', ' ');
	});
	return input;
}

// using units.js file

var selectO = {};

$.each(units, function(index, value) {
	selectO[index] = [2];
	var j = 0;
	$.each(value, function(i, v) {
		if (j < 2) {
			selectO[index][j] = i;
		}
		j++;
	});
});