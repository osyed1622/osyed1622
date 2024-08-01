document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');

        // Clear the form
        form.reset();
    });
});
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

document.getElementById('profileImg').addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        this.classList.add('fullscreen-img');
        this.requestFullscreen();
    }
});

document.addEventListener('fullscreenchange', function() {
    const profileImg = document.getElementById('profileImg');
    if (!document.fullscreenElement) {
        profileImg.classList.remove('fullscreen-img');
    }
});
