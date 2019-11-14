document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelectorAll("input[type=checkbox]"); // checkbox for deselect
    const fold = document.querySelector("select");
    const foldValue = document.querySelector(".fold-value");
    const moneyValue = document.querySelector(".money-value");

    // events for inputs
    for (e of inputs) {
        e.addEventListener("change", function (e) {

            const name = e.target.getAttribute("name");
            const thisInput = document.getElementsByName(name);
            const status = e.target.checked;

            // reset all input this match 
            for (el of thisInput) {
                el.checked = false
            }

            // checkbox status control 
            if (status === true) {
                e.target.checked = true;
                _sumsOperation();
            } else {
                _sumsOperation();
            }
        })
    }

    // fold change event
    fold.addEventListener("change", function (e) {
        _sumsOperation();
    })


    function _sumsOperation() {

        const thisfold = Number(fold.value);
        let rates = 1;
        let valueM;
        let valueF;

        // get all checked input
        const checks = document.querySelectorAll("input[type=checkbox]:checked");

        if (checks.length > 0) {
            for (el of checks) {
                rates = rates * Number(el.value.replace(",", "."));
            }
            valueM = parseFloat(Math.round((rates * thisfold) * 100) / 100).toFixed(2);
            valueF = fold.value;
        } else {
            valueM = 0;
            valueF = 0;
        }

        // ui update 
        foldValue.textContent = valueF;
        moneyValue.textContent = valueM;
    }



});