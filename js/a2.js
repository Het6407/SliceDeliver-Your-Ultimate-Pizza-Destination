document.addEventListener("DOMContentLoaded", function (event) {
  var orderButton = document.getElementById("order-btn");
  orderButton.addEventListener("click", function () {
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var sauce = document.querySelector('input[name="sauce"]:checked');

    // Check if a sauce is selected
    if (!sauce) {
      alert("Please select a sauce!");
      return; // Exit the function and prevent further processing
    }

    sauce = sauce.value; // Get the selected sauce value

    // Rest of the code remains the same as before
    var toppings = document.querySelectorAll('input[type="checkbox"]:checked');
    var delivery = document.getElementById("delivery");
    var paymentMethod = document.getElementById("payment-method").value;

    var orderDetails = "Order Details:\n";
    orderDetails += "Size: " + size + "\n";
    orderDetails += "Crust: " + crust + "\n";
    orderDetails += "Sauce: " + sauce + "\n";
    orderDetails += "Toppings: ";
    var toppingsDisplay = "";
    var toppingsPrice = 0;
    for (var i = 0; i < toppings.length; i++) {
      orderDetails += toppings[i].value + " ";
      toppingsDisplay += toppings[i].value + ", ";
      toppingsPrice += 1.5  ; // Each topping costs $0.99
    } 
    var delivery = document.getElementById("delivery").checked;
        var deliveryOption = delivery ? "Delivery" : "Take Away" + "\n";
        orderDetails += "\n";
        orderDetails += "Delivery or Takeaway: " + deliveryOption + "\n";

    

    // Calculate the price based on size and toppings
    var basePrice = 0;
    if (size === "small") {
      basePrice = 7.79;
    } else if (size === "medium") {
      basePrice = 9.29;
    } else if (size === "large") {
      basePrice = 11.29;
    } else if(size === "X-Large") {
      basePrice = 14.49;
    }

    var totalPrice = basePrice + toppingsPrice;

    // Add taxes (assuming 10% tax rate)
    var tax = totalPrice * 0.1;
    totalPrice += tax;

    orderDetails += "Price (Base): $" + basePrice.toFixed(2) + "\n";
    orderDetails += "Price (Toppings): $" + toppingsPrice.toFixed(2) + "\n";
    orderDetails += "Tax (13%): $" + tax.toFixed(2) + "\n";
    orderDetails += "Total Price: $" + totalPrice.toFixed(2) + "\n";
    orderDetails += "Payment Method: " + paymentMethod + "\n";

    alert(orderDetails);
    document.getElementById("toppings-display").textContent = toppingsDisplay.slice(0, -2); // Remove the trailing comma and space
    document.getElementById("total-price").value = totalPrice.toFixed(2); // Display the total price in the payment section
  });
});