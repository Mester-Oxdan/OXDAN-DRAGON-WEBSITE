function login(event) {
    event.preventDefault();
  
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
  
    var username = usernameInput.value;
    var password = passwordInput.value;
  
    // Create an object with the login data
    var loginData = {
      username: username,
      password: password
    };
  
    // Send login data to the server
    fetch('php/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.text())
    .then(result => {
      if (result.trim() === 'success') {
        var audio = new Audio('resources/musics/undertale.mp3');
      audio.play();
        var h2 = document.createElement('h2');
        h2.textContent = '!Registration Successful!';

        // Create a paragraph element
        var paragraph = document.createElement('h2');
        paragraph.textContent = 'Press any key to continue';

        // Append the elements to the document body or a specific container
        document.body.appendChild(h2);
        document.body.appendChild(paragraph);
        document.addEventListener('keydown', function(event) {
          // Check if any key is pressed (excluding modifier keys like Shift, Ctrl, Alt)
          if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
            // Change the location to the desired HTML file
            window.location.href = 'skip_start_login.html';
            //history.back();
          }
        });
      } else {
        var h2 = document.createElement('h2');
        var audio = new Audio('resources/musics/undertale.mp3');
      audio.play();
      h2.textContent = '!Registration Failed!';

      // Create a paragraph element
      var paragraph = document.createElement('h2');
      paragraph.textContent = 'Press any key to continue';

      // Append the elements to the document body or a specific container
      document.body.appendChild(h2);
      document.body.appendChild(paragraph);

      document.addEventListener('keydown', function(event) {
        // Check if any key is pressed (excluding modifier keys like Shift, Ctrl, Alt)
        if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
          // Change the location to the desired HTML file
          //window.location.href = 'skip_start_login.html';
          history.back();
        }
      });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      var audio = new Audio('resources/musics/undertale.mp3');
      audio.play();
      var h2 = document.createElement('h2');
      h2.textContent = '!Registration Failed!';

      // Create a paragraph element
      var paragraph = document.createElement('h2');
      paragraph.textContent = 'Press any key to continue';

      // Append the elements to the document body or a specific container
      document.body.appendChild(h2);
      document.body.appendChild(paragraph);

      document.addEventListener('keydown', function(event) {
        // Check if any key is pressed (excluding modifier keys like Shift, Ctrl, Alt)
        if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 18) {
          // Change the location to the desired HTML file
          //window.location.href = 'skip_start.html';
          history.back();
        }
      });
    });
  }
  