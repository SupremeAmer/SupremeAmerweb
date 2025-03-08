document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const product = document.getElementById("product").value;
  
  const orderDetails = `Name: ${name}\nEmail: ${email}\nProduct: ${product}`;
  alert(orderDetails);

  document.getElementById("orderForm").reset();
});
