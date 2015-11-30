var defaultCategory = "Temperature";
var units = chrome.extension.getBackgroundPage().units;
var selectionOptions = chrome.extension.getBackgroundPage().selectionOptions;

$(document).ready(function () {
    addSelectors();
    fillCategories();
    loadUserPref();
    fillSelectors();
    
    $("#decimal_places").val(DECIMALPLACES);


    $('#save').click(function () {
        saveUserPref();

    });
});

function addSelectors() {
    var selectorsTags = "", indexMod;
    $.each(selectionOptions, function(index, value){
        indexMod = index.replace(/_/g, ' ');
        selectorsTags += ' <tr><td>' + indexMod + ':</td>' + '<td><select id="' + index + "_lhs" + '" class="selector"></select></td><td><select id="' + index + "_rhs" + '" class="selector"></select></td></tr>';
    });
    $('#options_table tr:nth-child('+ 2 ).after(selectorsTags);
}

function fillSelectors() {
    var indexMod;
    $.each(selectionOptions, function(index, value){
        // index.search(' ') ? indexMod = index.replace(' ', '-') : indexMod = index ;

        //HTML: add the option Tags to the selector Tags
        var tags = createSelectors(index);
        $('#' + index + "_lhs").append(tags);
        $('#' + index + "_rhs").append(tags);
        //set the Default Values
        $('#' + index + "_lhs").val(value[0]);
        $('#' + index + "_rhs").val(value[1]);

    });
}