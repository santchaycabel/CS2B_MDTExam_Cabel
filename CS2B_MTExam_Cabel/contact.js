// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Get the Cancel button element by its ID
  const cancelBtn = document.getElementById('cancelBtn');

  // Get the contact form element by its ID
  const form = document.getElementById('contactForm');

  // When the Cancel button is clicked
  cancelBtn.addEventListener('click', () => {
    // Ask the user to confirm before clearing the form
    if (confirm('Clear the form?')) {
      // Reset all form fields if the user clicks "OK"
      form.reset();
    }
  });

  // When the form is submitted
  form.addEventListener('submit', (e) => {
    // Show a confirmation message
    alert('Thank you! Your message has been submitted.');
    // To stop the form from actually submitting to the server,
    // remove the comment slashes on the next line:
    // e.preventDefault();
  });
});

/*
References (MDN Web Docs – verified on 2025-09-21)
1. addEventListener (EventTarget): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
2. DOMContentLoaded event:       https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
3. document.getElementById:      https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
4. window.confirm:               https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
5. HTMLFormElement.reset:        https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
6. window.alert:                 https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
7. Event.preventDefault:         https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
*/