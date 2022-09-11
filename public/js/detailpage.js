// display image description when mouseover and zoom effect 

// on mouse click go to description page with adding the background image name on the query for the next page to get its

//check the image size and if its height is 1280 increase the height of the container 

for( let i=0; i<document.getElementsByClassName("ulcontainer").length; i++)
{
    let wrapper = document.getElementsByClassName("wrapper")[i];
    let image_div = document.getElementsByClassName("image_div")[i];
    let ulContainer= document.getElementsByClassName("ulcontainer")[i];
    let ul = document.getElementsByClassName("description_list")[i];
    ulContainer.addEventListener("mouseover", () => {
        ul.style.animation = "list 0.5s ease forwards";
        image_div.style.scale = "1.2";
    });

    ulContainer.addEventListener("mouseleave", ()=>{
        ul.style.visibility = "visible";
        ul.style.animation = "list1 0.5s ease forwards";
        image_div.style.scale = "1";
    });

    let imagename = image_div.style.backgroundImage;
    imagename = imagename.substring(5,imagename.length-2);
    ulContainer.addEventListener("click", ()=>{
      window.location.href = window.location.href.split("#")[0] + `/${image_div.dataset.id}` ;
    });

  let imageSrc = image_div.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
  let image = new Image();
  image.src = imageSrc;
  // image.onload = function () {
  //   console.log(image.height);
  //   if(image.height >= 1200)
  //     wrapper.style.height = "30em";
  // };
}

