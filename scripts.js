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
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Submit form data using Fetch API
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Show thank you message
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';

            // Redirect to home after a delay
            setTimeout(function() {
                window.location.href = "#home"; // Redirects to the home section
            }, 3000); // Adjust the delay as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


</script>

