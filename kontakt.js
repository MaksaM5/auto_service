function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name && phone && email && message) {
    alert('Message successfully sent!');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
}
