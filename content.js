const interval = setInterval(() => {
  const header = document.querySelector("#start");

  if(header) {
    clearInterval(interval);
    
    const button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("twoTimesButton");
  
    button.addEventListener("click", () => {
      const videos = document.querySelectorAll("video");
      videos.forEach(video => {
        const inactive = video.playbackRate === 2;
        if(inactive) {
          video.playbackRate = 1;
          button.classList.remove("speedChangerActive");
        } else {
          video.playbackRate = 2;
          button.classList.add("speedChangerActive");
        }
      })
    })
  
    header.appendChild(button);
  }
}, 1000);