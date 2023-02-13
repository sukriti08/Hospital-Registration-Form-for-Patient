// select and deSelect all checkbox
function selects() {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox')
            ele[i].checked = true;
    }
}
function deSelect() {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox')
            ele[i].checked = false;

    }
}

// autofill address
function autoFilAddress() {
    let checkBox = document.getElementById('checkBox');

    let pAddress = document.getElementById('pAddress');
    let pZipCode = document.getElementById('pZipCode');
    let pCity = document.getElementById('pCity');
    let pCountry = document.getElementById('pCountry');

    let gAddress = document.getElementById('gAddress');
    let gZipCode = document.getElementById('gZipCode');
    let gCity = document.getElementById('gCity');
    let gCountry = document.getElementById('gCountry');

    if (checkBox.checked == true) {
        let pAddressValue = pAddress.value;
        let pZipCodeValue = pZipCode.value;
        let pCityValue = pCity.value;
        let pCountryValue = pCountry.value;

        gAddress.value = pAddressValue;
        gZipCode.value = pZipCodeValue;
        gCity.value = pCityValue;
        gCountry.value = pCountryValue;
    }

    else {
        gAddress.value = "";
        gZipCode.value = "";
        gCity.value = "";
        gCountry.value = "";
    }
}