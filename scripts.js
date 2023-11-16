var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Add this to your existing scripts
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.aimg');
  const overlay = document.querySelector('.overlay');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      overlay.style.display = 'flex';
      image.classList.add('enlarged');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    images.forEach((image) => {
      image.classList.remove('enlarged');
    });
  });
});

