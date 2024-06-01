document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validate username and password (you can add your own validation logic)
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to the next page or perform other actions
    } else {
      alert('Invalid username or password');
    }
  });