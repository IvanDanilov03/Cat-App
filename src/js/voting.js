const btnLike = document.querySelector('.voting-main__btn-like');
const btnFavourite = document.querySelector('.voting-main__btn-favourite');
const btnDislike = document.querySelector('.voting-main__btn-dislike');


btnLike.addEventListener('click', funcBtnLike);
btnFavourite.addEventListener('click', funcBtnFavourite);
btnDislike.addEventListener('click', funcBtnDislike);


async function getCat(limit=1){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "66445e74-b645-41c5-956d-98a2dd0bab3d"
        }
      })
    return await response.json();
}

let chooseFlag = '';
function funcBtnLike(){
  chooseFlag = 'like'

  getCat().then(setInfoLike)   

}

function funcBtnFavourite(){
  chooseFlag = 'favourite'

  getCat().then(setInfoFavourite)  
}
function funcBtnDislike(){
  chooseFlag = 'dislike'

  getCat().then(setInfoDislike)  
}


let flag = null

function setInfoLike(data){
  preloader(data)
  createBottomInfo(data, 'smile_green', 'Likes')
}

function setInfoFavourite(data){
  preloader(data)
  createBottomInfo(data, 'heart_red', 'Favourites')
}

function setInfoDislike(data){
  preloader(data)
  createBottomInfo(data, 'sad_yellow', 'Dislikes')
}


function createBottomInfo(data, symbol, category){
  const listDiv = document.querySelector('.voting-list')
  let newDiv = document.createElement('div')
  newDiv.classList.add("voting-list__box");

  let current = new Date();
  let currentTime = current.getHours() + ':' + current.getMinutes();
  let newTime = document.createElement('h2');
  newTime.classList.add("voting-list__box-time");
  newTime.textContent = `${currentTime}`;

  let newBoxText = document.createElement('h2')
  newBoxText.classList.add("voting-list__box-text");
  let id = data[0].id;
  newBoxText.innerHTML = `Image ID: ` + `<span class="id">`+ `${id}` + `</span>` +  ` was added to ${category}`;

  let newImg = document.createElement('img')
  newImg.src = `images/${symbol}.svg`;

  newDiv.append(newTime)
  newDiv.append(newBoxText)
  newDiv.append(newImg)
  listDiv.append(newDiv)
}


let imgSrcArr = []
const galleryWrapper = document.querySelector('.favourites-gallery__wrapper')
const galleryNotification = document.querySelector('.favourites-notification')
galleryWrapper.style.display = 'none'
galleryNotification.style.display = 'none'


function btnFavDel(){
  console.log(this)
}

function preloader(data){
  imgSrcArr.push(data[0].url)

  const div = document.querySelector('.voting-main__img-box')
  let img = document.createElement("img");

  if (flag !== null) {
    div.removeChild(flag);
}
  let urlCat = data[0].url;
  img.src = `${urlCat}`;

  flag = div.appendChild(img)
  
  if(chooseFlag == 'like'){
    const hideNoItemLike = document.querySelector('.likes-header__no-title')
    hideNoItemLike.style.display = 'none'
    let likesGallery = document.querySelector('.likes-gallery')

    let imgLike = document.createElement("img");
    let imgLikeBox = document.createElement("div")
    let sectionForImgLike = document.createElement("section")

    let urlCatLike = imgSrcArr[0];
    imgLike.src = `${urlCatLike}`;

    sectionForImgLike.append(imgLike)
    imgLikeBox.append(sectionForImgLike)
    likesGallery.appendChild(imgLikeBox)

    imgSrcArr.shift()

  } else if (chooseFlag == 'favourite'){
    const hideNoItemFav = document.querySelector('.favourites-header__no-title')
    hideNoItemFav.style.display = 'none'
    galleryWrapper.style.display = 'block'
    galleryNotification.style.display = 'block'
    let favouritesGallery = document.querySelector('.favourites-gallery')

    let imgFav = document.createElement("img");
    let imgFavBox = document.createElement("div")
    imgFavBox.classList.add('favourite-photo__box', 'favourite-hover')
    imgFavBox.setAttribute('id', data[0].id)
    let hoverH = document.createElement("div")
    hoverH.classList.add('favourite-hover__img-box')


    let sectionForImgFav = document.createElement("section")

    let urlCatFav = imgSrcArr[0];
    imgFav.src = `${urlCatFav}`;

    sectionForImgFav.append(imgFav)
    imgFavBox.append(sectionForImgFav)
    imgFavBox.append(hoverH)

    favouritesGallery.appendChild(imgFavBox)

    imgSrcArr.shift()


    const favPhotoBoxTest = document.querySelectorAll('.favourite-hover__img-box');

    // favPhotoBox.addEventListener('click', btnFavDel);

    for (let i = 0; i < favPhotoBoxTest.length; i++) {
      favPhotoBoxTest[i].onclick = function(){
        this.parentElement.remove()
        const listDiv = document.querySelector('.favourites-notification')
        let newDiv = document.createElement('div')
        newDiv.classList.add("favourites-notification__box");
      
        let current = new Date();
        let currentTime = current.getHours() + ':' + current.getMinutes();
        let newTime = document.createElement('h2');
        newTime.classList.add("favourites-notification__box-time");
        newTime.textContent = `${currentTime}`;
      
        let newBoxText = document.createElement('h2')
        newBoxText.classList.add("favourites-notification__box-text");
        let id = this.parentElement.id;

        newBoxText.innerHTML = `Image ID: ` + `<span class="id">`+ `${id}` + `</span>` +  ` was removed from Favourites`;
      
        newDiv.append(newTime)
        newDiv.append(newBoxText)
        listDiv.append(newDiv)
        //////////////////////////////////////////////
        //////////////////////////////////////////////
        //////////////////////////////////////////////
        const votingDiv = document.querySelector('.voting-list');
        let newDivVoting = document.createElement('div')
        newDivVoting.classList.add("voting-list__box");
      
        let currentVoting = new Date();
        let currentTimeVoting = currentVoting.getHours() + ':' + currentVoting.getMinutes();
        let newTimeVoting = document.createElement('h2');
        newTimeVoting.classList.add("voting-list__box-time");
        newTimeVoting.textContent = `${currentTimeVoting}`;
      
        let newBoxTextVoting = document.createElement('h2')
        newBoxTextVoting.classList.add("voting-list__box-text");
        let idVoting = this.parentElement.id;

        newBoxTextVoting.innerHTML = `Image ID: ` + `<span class="id">`+ `${idVoting}` + `</span>` +  ` was removed from Favourites`;
      
        newDivVoting.append(newTimeVoting)
        newDivVoting.append(newBoxTextVoting)
        votingDiv.append(newDivVoting)
      };
    }


  } else if (chooseFlag == 'dislike'){
    const hideNoItemDislike = document.querySelector('.dislikes-header__no-title')
    hideNoItemDislike.style.display = 'none'

    let dislikesGallery = document.querySelector('.dislikes-gallery')

    let imgDisike = document.createElement("img");
    let imgDislikeBox = document.createElement("div")
    let sectionForImgDislike = document.createElement("section")
    let urlCatDislike = imgSrcArr[0];
    imgDisike.src = `${urlCatDislike}`;

    sectionForImgDislike.append(imgDisike)
    imgDislikeBox.append(sectionForImgDislike)
    dislikesGallery.appendChild(imgDislikeBox)

    imgSrcArr.shift()
  } 
}



document.addEventListener('DOMContentLoaded', () => {
  getCat().then(preloader)
});


function votingAppend(){

}