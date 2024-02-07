function record() {
    //get values
    var carBrand = document.getElementById("brand").value;
    var carPrice = document.getElementById("price").value;
    var carKey = document.getElementById("key").value;

    //check if values are not empty
    if (carBrand && carPrice && carKey) {
        var carDetails = {
            brand: carBrand,
            price: carPrice,
            key: carKey
        };
        localStorage.setItem(carKey, JSON.stringify(carDetails));

        alert("Details store successfully");
    } else {
        alert("Please fill the details");
    }
}

function retrieve() {
    var rkey = document.getElementById("rkey");

    if (rkey.value in localStorage) {
        var carDetails = JSON.parse(localStorage.getItem(rkey.value));

        var res = document.getElementById("res");

        res.innerHTML = `<br>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    Key: ${carDetails.key}
                </a>
                <a href="#" class="list-group-item list-group-item-action">Brand : ${carDetails.brand}</a>
                <a href="#" class="list-group-item list-group-item-action">Price : ${carDetails.price}</a>
            </div>`;
    } else {
        alert("Record not found");
    }
}

function remove() {
    var rekey = document.getElementById("rekey");

    if (rekey.value in localStorage) {
        localStorage.removeItem(rekey.value);
        alert("Record removed successfully");
    } else {
        alert("Record not found");
    }
}
function clearMe() {
    localStorage.clear();
    alert("All records cleared successfully");
}