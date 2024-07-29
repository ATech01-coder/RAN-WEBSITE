document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });
        cartTotalElement.textContent = total.toFixed(2);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const name = productElement.getAttribute('data-name');
            const price = parseFloat(productElement.getAttribute('data-price'));
            cartItems.push({ name, price });
            updateCart();
        });
    });
});
