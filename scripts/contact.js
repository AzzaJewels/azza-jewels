document.getElementById('enquiry-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const name = document.getElementById('enquiry-name').value.trim();
  const email = document.getElementById('enquiry-email').value.trim();
  const message = document.getElementById('enquiry-message').value.trim();
  if (!name || !message) {
    document.getElementById('enquiry-status').textContent = 'Please enter your name and message.';
    return;
  }
  const subject = 'Website enquiry from ' + name.replace(/[\r\n]/g, ' ');
  const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
  window.location.href = 'mailto:info@azzajewels.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.getElementById('enquiry-status').textContent = 'Opening your email app. Your enquiry is sent only after you press Send in that app. If it does not open, email info@azzajewels.com directly.';
});
