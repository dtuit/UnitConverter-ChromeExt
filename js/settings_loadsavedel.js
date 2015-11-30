var DECIMALPLACES = 6;

function loadUserPref(parrent) {
    // updateToNewSave();

    $.each(selectionOptions, function(index, value) {
        if (checkStorage(index)) {
            var thisIndexPref = JSON.parse(localStorage[index]);
            if (thisIndexPref.lhs != "" || thisIndexPref.rhs != "") {
                value[0] = thisIndexPref.lhs;
                value[1] = thisIndexPref.rhs;
            }
        }
    });
    if (localStorage["defaultCategory"] != null) {
        defaultCategory = localStorage["defaultCategory"];
        $('#conversion_selector').val(defaultCategory);
    }
    if (localStorage["decimalPlaces"] != null) {
        DECIMALPLACES = parseInt(localStorage["decimalPlaces"]);
        if (document.getElementById("decimal_places") !== null) {
            $("#decimal_places").val(DECIMALPLACES);
        }
    }
    parrent == "uC" ? change_selectors(defaultCategory) : "";
}



function saveUserPref() {

    var j = 0;
    $.each(selectionOptions, function(index, value) {
        var optionsIndex = {};

        optionsIndex.lhs = document.getElementById(index + "_lhs").value;
        optionsIndex.rhs = document.getElementById(index + "_rhs").value;

        console.log(optionsIndex);

        localStorage[index] = JSON.stringify(optionsIndex);
    });

    // var e = document.getElementById('conversion_selector');
    localStorage["defaultCategory"] = document.getElementById('conversion_selector').value;

    e = document.getElementById('decimal_places');
    localStorage["decimalPlaces"] = e.options[e.selectedIndex].value;
}

function updateToNewSave() {
    /*needs to mimic a save from 0.0.0.4*/
    if (!(localStorage.getItem("saveVersion") != null)) {

        $.each(selectionOptions, function(index, value) {
            indexMod = index.replace(/_/g, ' '); //formating of previous version without underscore
            if (checkStorage(indexMod)) {
                var categType = JSON.parse(localStorage[indexMod]);
                console.log(categType);
                localStorage.removeItem(indexMod);
                var optionsIndex = {};

                var i = 0;
                $.each(units[index], function(unitType) {
                    if (i == categType.lhs) {
                        optionsIndex.lhs = unitType;
                    }
                    if (i == categType.rhs) {
                        optionsIndex.rhs = unitType;
                    }
                    i++;
                });
                console.log(optionsIndex);
                localStorage[index] = JSON.stringify(optionsIndex);
            }
            localStorage["saveVersion"] = "5";
        });

    }


    /* mimics a save from 0.0.0.3 */
    // var a = "2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4";
    // $.cookie("defaultOptions", a);
    // console.log($.cookie("defaultOptions"));
    /**/

    /*if ($.cookie('defaultOptions') != null) {
        var optionsDataLoaded = $.cookie('defaultOptions').split(',');
        console.log(optionsDataLoaded);
        var i = 0;
        $.each(selectionOptions, function(index, value) {
            var optionsIndex = {};
            optionsIndex.lhs = optionsDataLoaded[i];
            optionsIndex.rhs = optionsDataLoaded[i + 1];
            localStorage[index] = JSON.stringify(optionsIndex);
            i += 2;
        });
        
        var v = optionsDataLoaded[optionsDataLoaded.length - 1];
        console.log(v);
        var k = 0;
        var category;
        $.each(selectionOptions, function(index, value){
            if(k == v){
                category = index;
            }
            k+=1;
        });
        localStorage["defaultCategory"] = category;

        $.removeCookie("defaultOptions");
    }*/
}

function checkStorage(index) {
    if (localStorage.getItem(index) != null) {
        var e = JSON.parse(localStorage.getItem(index));
        if (e.lhs !== null && e.lhs !== undefined && e.rhs !== null && e.rhs !== undefined) {
            // console.log("supposedly valid " + index);
            return true;


        } else {
            // console.log("Invalid Content " + index);
            return false;
        }
    } else {

        // console.log("Invalid Not in localStorage; " + index);
        return false;
    }

}

/*function saveSessionStorage(){
    var session = {};

    session.category = document.getElementById("conversion_selector").value;
    session.lhs = document.getElementById("left_selector").selectedIndex;
    session.rhs = document.getElementById("right_selector").selectedIndex;
    session.lhsValue = document.getElementById("left_input").value;
    session.rhsValue = document.getElementById("right_input").value;
    session.uuid = self.window.name;

    localStorage["session"] = JSON.stringify(session);


}

function loadSessionStorage(){

    if(sessionStorage.getItem("session") != null){
        var session = JSON.parse(sessionStorage.getItem("session"));
        defaultCategory = session.category;
        $('#conversion_selector').val(session.category); 
        selectionOptions[session.category][0] = session.lhs;
        selectionOptions[session.category][1] = session.rhs;
        change_selectors(defaultCategory);
        document.getElementById("left_input").value = session.lhsValue;
        document.getElementById("right_input").value = session.rhsValue;

        

    }

}*/

function generateOLDsave() {

    mimicAsave = {};
    mimicAsave.lhs = 1;
    mimicAsave.rhs = 0;

    $.each(selectionOptions, function(index, value) {
        indexMod = index.replace(/_/g, ' ');
        localStorage[indexMod] = JSON.stringify(mimicAsave);
    });

    localStorage["defaultCategory"] = "Temperature";
    localStorage["decimalPlaces"] = 6;


}


function tryChromeStorage(){
    var a = {};
    a.b = 1;
    a.c = 2;
    chrome.storage.local.set({"key": a});
}