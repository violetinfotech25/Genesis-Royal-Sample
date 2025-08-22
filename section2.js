function toggleText() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("toggleBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.innerText = "Show Less";
    } else {
      moreText.style.display = "none";
      btn.innerText = "Learn More";
    }
  }

  function playLocalVideo() {
    const video = document.getElementById("aboutVideo");

    // Play video in full screen or inline
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }

    video.play();
  }