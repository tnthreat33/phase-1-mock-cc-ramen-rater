// write your code here
// see all ramen images in div id='ramen-menu'
//when page loads request DOMContentLoaded()
//fetch all ramen object server to get all ramen object
//.then forEach ramen put image in div '#ramen-menu' with img

document.addEventListener("DOMContentLoaded", () => {
    function getImages() {
      
      fetch("http://localhost:3000/ramens")
        .then((res) => res.json())
        .then((ramens) => {
          const photoHolder = document.getElementById("ramen-menu");
          ramens.forEach((ramens) => {
            const photo = document.createElement("img");
            photo.src = ramens.image;
            photo.dataset.name = ramens.name;
            photo.dataset.restaurant = ramens.restaurant;
            photo.dataset.rating = ramens.rating;
            photo.dataset.comment = ramens.comment;
            photoHolder.append(photo);
          });
        });
    }
    getImages();
  });
  //add eventlistern for click on images
  //eventlister will run function information
  //function information will return information for the image clicked
    //name will go in class name 
    //resturant will go in class restuarant
    //Image will go in class detail-image
  const ramenMenu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');
const ratingDisplay = document.getElementById('rating-display');
const commentDisplay = document.getElementById('comment-display');

// Set up event listener for clicks on images in the ramen menu
ramenMenu.addEventListener('click', (event) => {
  // Check that the element clicked was an image
  if (event.target.tagName === 'IMG') {
    // Update the src attribute of the detail image
    ramenDetail.querySelector('.detail-image').src = event.target.src;

    // Update the name and restaurant elements
    ramenDetail.querySelector('.name').textContent = event.target.dataset.name;
    ramenDetail.querySelector('.restaurant').textContent = event.target.dataset.restaurant;

    // Update the rating and comment displays
    ratingDisplay.textContent = event.target.dataset.rating;
    commentDisplay.textContent = event.target.dataset.comment;
  }
});

 
// create new ramen after submitting new-ramen form. add the new ramen to #ramen-menu div
const form = document.getElementById("new-ramen");

  // Add a submit event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Use FormData to retrieve the form data
    const formData = new FormData(form);
    const imageUrl = formData.get("image");
    const name = formData.get("name");
    const restaurant = formData.get("restaurant");
    const rating = formData.get("rating");
    const comment = formData.get("comment");

    // Create a new img element
    const img = document.createElement("img");
    img.src = imageUrl;
    img.dataset.name = name;
    img.dataset.restaurant = restaurant;
    img.dataset.rating = rating;
    img.dataset.comment = comment;

    // Append the new img element to the #ramen-menu div
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.append(img);
  });
