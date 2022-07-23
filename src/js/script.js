async function getBreed(limit){
  const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "66445e74-b645-41c5-956d-98a2dd0bab3d"
      }
    })
  return await response.json();
}

async function selectBreed(breed){
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "66445e74-b645-41c5-956d-98a2dd0bab3d"
      }
    })
  return await response.json();
}
//  const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`, {


function grid(data){
  const breedsGalery = document.querySelector('.breeds-galery')
  for(let i = 0; i<30; i++){
    let img = document.createElement("img");
    let imgBox = document.createElement("div")
    imgBox.classList.add('photo-box', `${(data[i].name).replace(/\s+/g, '-')}`, 'photo-hover')
    let urlCat = data[i].image.url;
    let sectionForImg = document.createElement("section")
    img.src = `${urlCat}`;
    img.classList.add('photo')
    let butForImg = document.createElement("h2")
    butForImg.innerHTML = `${data[i].name}`
    butForImg.classList.add('breed-btn')
    butForImg.setAttribute("id",`${data[i].id}`);
    sectionForImg.append(img)
    imgBox.append(sectionForImg)
    imgBox.append(butForImg)

    breedsGalery.append(imgBox)

  }
}

function reGrid(data){
  const breedsGalery = document.querySelector('.breeds-galery')
  for(let i = 66; i>=42; i--){
    let img = document.createElement("img");
    let imgBox = document.createElement("div")
    imgBox.classList.add('photo-box', `${(data[i].name).replace(/\s+/g, '-')}`, 'photo-hover')
    let urlCat = data[i].image.url;
    let sectionForImg = document.createElement("section")
    img.src = `${urlCat}`;
    img.classList.add('photo')
    let butForImg = document.createElement("h2")
    butForImg.innerHTML = `${data[i].name}`
    butForImg.classList.add(`${data[i].id}`, 'breed-btn')

    sectionForImg.append(img)
    imgBox.append(sectionForImg)
    imgBox.append(butForImg)

    breedsGalery.append(imgBox)
  }
}

function list(data){
  const select = document.querySelector('.breeds-header__list-control')
  // console.log(data)

  for(let i = 0; i<data.length; i++){
    let option = document.createElement('option')
    option.classList.add('option')
    option.value=data[i].id
    option.innerHTML = `${data[i].name}`
    select.append(option)
    
  }
  // const btnBreed = document.querySelector('.Abyssinian');
}


getBreed(67).then(grid)
getBreed(67).then(list)


// btnLike.addEventListener('click', funcBtnLike);



//setbreed
function setBreed(data){
  const breedsGalery = document.querySelector('.breeds-galery')
  let img = document.createElement("img");
  let imgBox = document.createElement("div")
  // imgBox.classList.add('photo-box', `${(data[0].name).replace(' ', '-')}`)
  imgBox.classList.add('photo-box', 'photo-hover')
  let sectionForImg = document.createElement("section")

  let urlCat = data[0].url;
  img.src = `${urlCat}`;
  img.classList.add('photo')

  let butForImg = document.createElement("h2")
  butForImg.innerHTML = `${data[0].breeds[0].name}`
  butForImg.classList.add(`${data[0].id}`, 'breed-btn')

  sectionForImg.append(img)
  imgBox.append(sectionForImg)
  imgBox.append(butForImg)

  breedsGalery.appendChild(imgBox)

}

//setbreed with limit

const selectItem = document.querySelector('.breeds-header__list-control');

selectItem.onchange = function(){
  const breedsGalery = document.querySelector('.breeds-galery')
  while (breedsGalery.firstChild) {
    breedsGalery.removeChild(breedsGalery.firstChild);
  }
  let value = selectItem.value
  selectBreed(value).then(setBreed)
  if(value === '0'){
    getBreed(67).then(grid)
  }
  // for(let i = 0; i <= 4; i++){
  //   selectBreed(value).then(setBreed)
  // }

}

//add limit on amount of img

const selectLimit = document.querySelector('.breeds-header__limits-control');

selectLimit.onchange = function(){
  const breedsGalery = document.querySelector('.breeds-galery')
  const photoImg = document.querySelector('.photo')
  if(selectLimit.value == 5){
    breedsGalery.style.columnCount = 2;
  } else if (selectLimit.value == 10){
    breedsGalery.style.columnCount = 3;

  } else if (selectLimit.value == 15){
    breedsGalery.style.columnCount = 4;

  } else if (selectLimit.value == 20){
    breedsGalery.style.columnCount = 4;

  }
}


//filter with alphabet

const alphabetUp = document.querySelector('.breeds-header__alphabet-up');
const alphabetDown = document.querySelector('.breeds-header__alphabet-down')

alphabetUp.addEventListener("click", funcAlphabetUp);
alphabetDown.addEventListener("click",funcAlphabetDown); 

function funcAlphabetUp(){
  const breedsGalery = document.querySelector('.breeds-galery')
  while (breedsGalery.firstChild) {
    breedsGalery.removeChild(breedsGalery.firstChild);
  }
  getBreed(67).then(grid)
  alphabetUp.removeEventListener('click', funcAlphabetUp)
  alphabetDown.addEventListener("click",funcAlphabetDown); 

}

function funcAlphabetDown(){
  alphabetDown.onclick = null;

  const breedsGalery = document.querySelector('.breeds-galery')
  while (breedsGalery.firstChild) {
    breedsGalery.removeChild(breedsGalery.firstChild);
  }
  getBreed(67).then(reGrid)
  alphabetDown.removeEventListener('click', funcAlphabetDown)
  alphabetUp.addEventListener("click", funcAlphabetUp);

}

//create page wit breed's description


let newFlag = null
function setInfoBreed(data){

  
  let breedInfo = document.querySelector('.breed-info__title')
  breedInfo.innerHTML = `${data[0].breeds[0].name}`

  // let breedInfoFor = document.querySelector('.bredd-info__breed-for')
  // breedInfoFor.innerHTML = `${data[0].breeds[0].description}`

  let temperament = document.querySelector('.description-left__text')
  temperament.innerHTML = `${data[0].breeds[0].temperament}`

  let origin = document.querySelector('.breed-origin')
  origin.innerHTML = `${data[0].breeds[0].origin}`

  let weight = document.querySelector('.breed-weight')
  weight.innerHTML = `${data[0].breeds[0].weight.imperial}`

  let lifeSpan = document.querySelector('.breed-life-span')
  lifeSpan.innerHTML = `${data[0].breeds[0].life_span}`

  const div = document.querySelector('.breeds-spesific__img-box')
  let img = document.createElement("img");

  if (newFlag !== null) {
    div.removeChild(flag);
  }
  let urlCat = data[0].url;
  img.src = `${urlCat}`;

  newFlag = div.appendChild(img)
}

selectBreed("bomb").then(setInfoBreed)


