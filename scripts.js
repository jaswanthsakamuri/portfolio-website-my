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
</script>

