document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lightbox = document.getElementById("lightbox");
  const fullsizeImage = document.getElementById("fullsize-image");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      const fullImageSrc = thumbnail.getAttribute("data-full");
      const parentLi = thumbnail.closest("li"); 
      const overlayCaption = parentLi.querySelector(".overlay-caption");
      
      // Lazy load the full-size image
      if (fullImageSrc) {
        fullsizeImage.src = fullImageSrc;
      }

      // Show the lightbox and animate the image
      lightbox.classList.add("active");
      setTimeout(() => fullsizeImage.classList.add("active"), 10);

      // Show the overlay caption
      if (overlayCaption) {
        overlayCaption.classList.add("active");
      }
    });
  });

  // Close the lightbox with fade-out transition
  lightbox.addEventListener("click", () => {
    // Start fade-out effect
    fullsizeImage.classList.remove("active");
    
    // Delay hiding the lightbox until after the transition
    setTimeout(() => {
      lightbox.classList.remove("active");
      fullsizeImage.src = ""; // Optionally clear the src to free memory
      
      // Hide overlay captions
      const activeOverlayCaptions = document.querySelectorAll(".overlay-caption.active");
      activeOverlayCaptions.forEach(caption => caption.classList.remove("active"));
    }, 500); // Match the transition duration in CSS
  });

  // Close the lightbox when overlay caption is clicked
  document.querySelectorAll(".overlay-caption").forEach(caption => {
    caption.addEventListener("click", (event) => {
      fullsizeImage.classList.remove("active");

      setTimeout(() => {
        lightbox.classList.remove("active");
        fullsizeImage.src = ""; 
        caption.classList.remove("active");
      }, 500); 

      event.stopPropagation();
    });
  });
});

