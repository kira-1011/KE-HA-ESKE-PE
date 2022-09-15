// get the image name from the url query and set src of the image the query
// let image_container = document.getElementsByClassName("image_container")[0];
// let image = document.getElementsByClassName("image")[0];
// image.src = window.location.href.substring(48);

//make the link's "back to previous page" href = previous page
let b_homepage = document.querySelectorAll(".b_homepage_link");
let back_arrow = document.querySelectorAll(".arrow_back");

document.querySelectorAll('.b_homepage_link').forEach(item => {
    item.addEventListener('click', event => {
        item.setAttribute('href', document.referrer);
    })
  })

  document.querySelectorAll('.arrow_back').forEach(item => {
    item.addEventListener('click', event => {
        item.setAttribute('href', document.referrer);
    })
  })