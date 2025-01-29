function submitdata() {

    let mprice = Number(document.getElementById("mprice").value);
    let interest = Number(document.getElementById("interest").value);
    let month = Number(document.getElementById("month").value);

    // Check if all fields are filled
    if (mprice === "" || interest === "" || month === "") {
        alert("Please fill out all values");
    } else {
        // Displaying the entered values
        document.getElementById("d-mprice").innerHTML = mprice;
        document.getElementById("d-int").innerHTML = interest;
        document.getElementById("d-month").innerHTML = month;

        // Calculate total cost
        let totalcost = mprice + (mprice * interest / 100); // Adding interest to mobile price

        // Display total cost
        document.getElementById("totalcost").innerHTML = totalcost.toFixed(2);

        // Calculate per month installment
        let permonthinstalment = totalcost / month;

        // Display per month installment
        document.getElementById("per-month").innerHTML = permonthinstalment.toFixed(2);
    }
}
