// JS for star
var allStar = document.querySelectorAll('.rating .star');
var ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    let click = allStar.length - 1;
    ratingValue.value = idx + 1;

    allStar.forEach((i, index) => {
      if (index <= idx) {
        i.classList.replace('bx-star', 'bxs-star');
        i.classList.add('active');
      } else {
        i.classList.replace('bxs-star', 'bx-star');
        i.classList.remove('active');
      }
    });
  });
});

// Reset the rating stars
function resetForm() {
	allStar.forEach((star, idx) => {
		if (idx === 5) {
			star.classList.replace('bxs-star', 'bx-star');
			star.classList.add('active');
		} else {
			star.classList.replace('bx-star', 'bxs-star');
			star.classList.remove('active');
		}
	});
	ratingValue.value = 5;
}

document.getElementById('myForm').addEventListener('submit', function submitForm(event) {
  event.preventDefault();

  var formElement = document.getElementById('myForm');
  var formData = new FormData(formElement);
  var encodedData = new URLSearchParams(formData).toString();

  // Redirect to the second HTML file with the form data as query parameters
  window.location.href = `Reco2.html?${encodedData}`;
});