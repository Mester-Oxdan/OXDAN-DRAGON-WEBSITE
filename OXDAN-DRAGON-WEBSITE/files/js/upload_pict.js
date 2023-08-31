/*document.getElementById('upload-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      document.getElementById('profile-pic').src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }); */

// js/upload_pict.js

// Function to handle image uploading
document.getElementById('upload-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
      const imageData = e.target.result;
      document.getElementById('profile-pic').src = imageData;

      // Save the uploaded image data to localStorage
      localStorage.setItem('uploadedImage', imageData);
  };

  reader.readAsDataURL(file);
});

// Function to load the saved image when the HTML page starts
window.onload = function() {
  const savedImageData = localStorage.getItem('uploadedImage');
  if (savedImageData) {
      document.getElementById('profile-pic').src = savedImageData;
  }
};
