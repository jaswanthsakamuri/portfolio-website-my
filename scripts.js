document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
  
    // Ensure the video plays inline and is muted for mobile
    video.setAttribute('playsinline', '');
    video.muted = true;
  
    // Play the video manually if autoplay doesn't work
    video.play().catch(function() {
      // Autoplay failed, show a poster image or handle accordingly
      video.poster = 'path/to/your/poster.jpg';
    });
  });
  function showNeuralNetworkVideo() {
    document.getElementById('neuralNetworkPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('neuralNetworkPopup').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // Here you would normally handle the form submission, e.g., sending it to a server
});
// Function to open the teaser modal
function openTeaserModal(teaserId) {
    document.getElementById(teaserId).style.display = "block";
}

// Function to close the teaser modal
function closeTeaserModal(teaserId) {
    document.getElementById(teaserId).style.display = "none";
}

// Function to handle access request
function requestAccess() {
    alert("Please contact us to request full access to the video.");
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
// Function to open the teaser modal
function openTeaserModal(teaserId) {
    document.getElementById(teaserId).style.display = "block";
}

// Function to close the teaser modal
function closeTeaserModal(teaserId) {
    document.getElementById(teaserId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
<script>
  document.querySelector('a[href="mailto:Jaswanth.us1@gmail.com"]').addEventListener('click', function() {
    alert('Opening your email client to contact Jaswanth!');
  });

  document.querySelector('a[href="tel:+14696097134"]').addEventListener('click', function() {
    alert('Dialing Jaswanth\'s number!');
  });
  <script>
    document.getElementById('google-form-iframe').onload = function() {
        // When the iframe loads, check if the submission was successful
        const iframeDoc = document.getElementById('google-form-iframe').contentDocument || document.getElementById('google-form-iframe').contentWindow.document;
        const thankYouMessage = document.getElementById('thank-you-message');
        
        iframeDoc.addEventListener('submit', function() {
            // Hide the form and show the thank you message
            document.querySelector('.contact-form').style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            // Optional: Redirect to home after a delay
            setTimeout(function() {
                window.location.href = "#home"; // Redirects to the home section
            }, 3000); // Adjust the delay as needed
        });
    };
</script>

</script>

