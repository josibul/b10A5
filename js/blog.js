document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeButton').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = '/index.html';
    });
  });