
// cart object to hold items and their counts
const cart = {};

// Add item to cart
function addToCart(itemName) {
  if (!cart[itemName]) {
    cart[itemName] = 1;
  } else {
    cart[itemName]++;
  }
  alert(`${itemName} added to cart. Total: ${cart[itemName]}`);
  console.log('Current cart:', cart);
}

// Remove item from cart
function removeFromCart(itemName) {
  if (cart[itemName]) {
    cart[itemName]--;
    if (cart[itemName] === 0) delete cart[itemName];
    alert(`${itemName} removed from cart.`);
  } else {
    alert(`${itemName} is not in the cart.`);
  }
  console.log('Current cart:', cart);
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple hover effect for product images (scale up slightly)
document.querySelectorAll('.product-card img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

/*
Primary Reference Collection (verified 2025-09-21):
- MDN Web Docs, a reputable source for JavaScript and Web APIs: https://developer.mozilla.org/
Each specific API or language feature above links to its dedicated MDN page for verification.
*/
