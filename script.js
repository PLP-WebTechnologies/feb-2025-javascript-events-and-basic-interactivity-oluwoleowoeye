// script.js
// Button click
document.getElementById('myButton').addEventListener('click', function() {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "#ff9999";
});

// Hover effects
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
  this.style.transform = "scale(1.1)";
});
document.getElementById('hoverDiv').addEventListener('mouseout', function() {
  this.style.transform = "scale(1)";
});

// Keypress detection
document.addEventListener('keypress', function(e) {
  console.log(`Key pressed: ${e.key}`);
});

// Secret double-click action
document.getElementById('secretArea').addEventListener('dblclick', function() {
  alert("You found the secret!");
});
// Image gallery
let currentImage = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

document.getElementById('nextBtn').addEventListener('click', function() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
// Form validation
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email.includes('@')) {
      alert("Please enter a valid email");
      return;
  }
  
  if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
  }
  
  alert("Form submitted successfully!");
});

// Real-time feedback
document.getElementById('password').addEventListener('input', function() {
  const feedback = document.getElementById('passwordFeedback');
  if (this.value.length < 8) {
      feedback.textContent = "Password too short (min 8 characters)";
      feedback.style.color = "red";
  } else {
      feedback.textContent = "Password strength: good";
      feedback.style.color = "green";
  }
});