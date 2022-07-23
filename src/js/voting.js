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


function funcBtnLike(){
  getCat().then(setInfoLike)  
}

function funcBtnFavourite(){
  getCat().then(setInfoFavourite)  
}
function funcBtnDislike(){
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
  newImg.src = `/images/${symbol}.svg`;

  newDiv.append(newTime)
  newDiv.append(newBoxText)
  newDiv.append(newImg)
  listDiv.append(newDiv)
}


function preloader(data){
  const div = document.querySelector('.voting-main__img-box')
  let img = document.createElement("img");

  if (flag !== null) {
    div.removeChild(flag);
}
  let urlCat = data[0].url;
  img.src = `${urlCat}`;

  flag = div.appendChild(img)
}



document.addEventListener('DOMContentLoaded', () => {
  getCat().then(preloader)
});


