async function galeryRequest(){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=50`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "66445e74-b645-41c5-956d-98a2dd0bab3d"
        }
      })
    return await response.json();
  }

const galleryMain = document.querySelector('.galery-main')
galleryMain.style.display = 'none'


function setGallery(data){
    galleryMain.style.display = 'block'
    const spinnerGallery = document.querySelector('.galery-spinner')
    spinnerGallery.style.display = 'none'
    const breedsGalery = document.querySelector('.galery-main')
    for(let i = 0; i<50; i++){
        let img = document.createElement("img");
        let imgBox = document.createElement("div")
        imgBox.classList.add('photo-box')
        let urlCat = data[i].url;
        let sectionForImg = document.createElement("section")
        img.src = `${urlCat}`;
        img.classList.add('photo')
        sectionForImg.append(img)
        imgBox.append(sectionForImg)

        breedsGalery.append(imgBox)
    }
}


let flagNumSpiner = 0
function delayedUpload() {
    if(flagNumSpiner ==0){
        flagNumSpiner++
        timeoutID = window.setTimeout(callGallery, 2000);
    }
}

function callGallery(){
    galeryRequest().then(setGallery)
}

