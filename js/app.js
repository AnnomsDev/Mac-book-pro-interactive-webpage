// Defult total price
let totalPrice = 1299

// uptate cost innerText in HTML
function updateCostInnerText(fieldId, ammount) {
    let costField = document.getElementById(fieldId)
    costField.innerText = ammount;
}

// Get cost from innerText 
function getCost(fieldId) {
    return parseInt(document.getElementById(fieldId).innerText);
}

// Update Total Price
function updateTotal() {
    const bestPrice = 1299;
    let extraMemoryCost = getCost('memory-cost');
    let extraStorageCost = getCost('storage-cost')
    let deliveryCost = getCost('delivery-cost');
    totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    // update total price innerText
    updateCostInnerText('total-price', totalPrice)
}

// Handle btn click
function updatePriceOnBtnClick(btnId, fieldToAdd, extraCostAmmount) {
    document.getElementById(btnId).addEventListener('click', function () {
        // Update innerText
        updateCostInnerText(fieldToAdd, extraCostAmmount)
        // update total
        updateTotal();
        // update extra section total
        updateDiscountedTotal();
    })
}



// memory
// handle 8GB ubified memory btn click
updatePriceOnBtnClick("btn-memory-8gb", "memory-cost", 0);
// handle 16GB ubified memory btn click
updatePriceOnBtnClick("btn-memory-16gb", "memory-cost", 180);

// storage
// handle 256GB SSD storage btn click
updatePriceOnBtnClick("btn-storage-256gb", "storage-cost", 0);
// handle 256GB SSD storage btn click
updatePriceOnBtnClick("btn-storage-512gb", "storage-cost", 100);
// handle 1tb SSD storage btn click
updatePriceOnBtnClick("btn-storage-1tb", "storage-cost", 180);

// handle Delivery option btn click
updatePriceOnBtnClick("btn-aug-25", "delivery-cost", 0)
updatePriceOnBtnClick("btn-aug-21", "delivery-cost", 20)


/*---------------------------------------------------------
-------Promo code and total price after discount-----------
-----------------------------------------------------------*/
let isPromoCodeApplied = false;

// Promo code apply button
const btnApplyPromo = document.getElementById('apply-promo');

// Handle promo code Apply button click
btnApplyPromo.addEventListener('click', function () {
    let inputPromo = document.getElementById('input-promo');
    if (inputPromo.value == 'stevekaku') {
        isPromoCodeApplied = true;
        updateDiscountedTotal();
        // disable input field and apply button
        btnApplyPromo.setAttribute('disabled', true);
        inputPromo.setAttribute('disabled', true);
    }
    inputPromo.value = '';
    showAlert(isPromoCodeApplied);
})
    
// Update Extra Mark Total section
function updateDiscountedTotal(params) {
    if (isPromoCodeApplied) {
        totalPrice = totalPrice - (totalPrice * 0.2);
    }
    document.getElementById('total').innerText = totalPrice;
}

// Show Alert
function showAlert(isValidPromo) {
    let alertP = document.getElementById('alart-text');
    if (!isValidPromo) {
        alertP.innerText = "**Invalid Promo Code !**"
        alertP.style.color = 'red';
    }
    else {
        alertP.innerText = "**Promo Code applied**"
        alertP.style.color = 'green';

    }
    alertP.style.display = "block"
}