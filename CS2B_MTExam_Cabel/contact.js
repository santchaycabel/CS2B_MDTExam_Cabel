document.addEventListener('DOMContentLoaded', () => {
  const cancelBtn = document.getElementById('cancelBtn');
  const form = document.getElementById('contactForm');

  cancelBtn.addEventListener('click',() =>{
    if (confirm('Clear the form?')) {
      form.reset();
    }
  });

  form.addEventListener('submit',(e) => {
    alert('Thank you! Your message has been submitted.');
    // e.preventDefault(); // Uncomment if you don't want the page to refresh
  });
});


