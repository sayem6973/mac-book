function extraComponent(idName,Price){
    const extraMemory = document.getElementById(idName);
    const extraMemoryText = extraMemory.innerText;
    extraMemory.innerText = Price;

    updateTotal()
}
// extraMemory

document.getElementById("16gb-memory").addEventListener("click", function(){
    extraComponent("extraMemory-Price","180")
    
})
document.getElementById("8gb-memory").addEventListener("click", function(){
    extraComponent("extraMemory-Price","0")
})

// storage

document.getElementById("256gbSsd-storage").addEventListener("click", function(){
    extraComponent("extraStorage-Price","0")
})
document.getElementById("512gbSsd-storage").addEventListener("click", function(){
    extraComponent("extraStorage-Price","100")
})

document.getElementById("1tbSsd-storage").addEventListener("click", function(){
    extraComponent("extraStorage-Price","180")
})

// delivery area

document.getElementById("freePrimeDelivery").addEventListener("click", function(){
    extraComponent("delivery-charge","0")
})
document.getElementById("DeliveryWith20$Charge").addEventListener("click", function(){
    extraComponent("delivery-charge","20")
});

// total

function updateTotal(){
    const bestPrice = document.getElementById("best-price");const bestPriceText = parseInt(bestPrice.innerText);
    const extraMemoryPrice = document.getElementById("extraMemory-Price");
    const extraMemoryPriceText = parseInt(extraMemoryPrice.innerText);
    const extraStoragePrice = document.getElementById("extraStorage-Price");
    const extraStoragePriceText = parseInt(extraStoragePrice.innerText);
    const deliveryPrice = document.getElementById("delivery-charge");
    const deliveryPriceText = parseInt(deliveryPrice.innerText);

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = parseInt(totalPrice.innerText);

    let addPrice = bestPriceText + extraMemoryPriceText + extraStoragePriceText + deliveryPriceText ;

    totalPrice.innerText = addPrice;
    
    const total = document.getElementById("total");
    const totalText = parseInt(total.innerText);

     addPrice = bestPriceText + extraMemoryPriceText + extraStoragePriceText + deliveryPriceText ;

    total.innerText = addPrice;
}

document.getElementById("apply").addEventListener("click", function(){
    const inputField = document.getElementById("copun-input");
    const inputFieldValue = inputField.value;
    inputField.value = " "

    if(inputFieldValue == "sayem1234"){
    const total = document.getElementById("total");
    const totalText = parseInt(total.innerText);
    const discountAmount = totalText * 20 / 100 ; 
    const totalPrice = totalText - discountAmount

    total.innerText = totalPrice;
    }
})