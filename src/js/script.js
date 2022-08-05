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
    butForImg.classList.add('breed-btn')
    butForImg.setAttribute("id",`${data[i].id}`);
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
  butForImg.classList.add('breed-btn')
  butForImg.setAttribute("id",`${data[0].breeds[0].id}`);
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

//create page with breed's description


let newFlag = null
function setInfoBreed(data){

  let breedId = document.querySelector('.specific__title-text__id')
  breedId.innerHTML = `${data[0].breeds[0].id}`

  let breedInfo = document.querySelector('.breed-info__title')
  breedInfo.innerHTML = `${data[0].breeds[0].name}`

  let breedInfoFor = document.querySelector('.bredd-info__breed-for')
  breedInfoFor.innerHTML = `${data[0].breeds[0].description}`

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
    div.removeChild(newFlag);
  }
  let urlCat = data[0].url;
  img.src = `${urlCat}`;

  newFlag = div.appendChild(img)
}


//Search

const breedInput = document.querySelector('.search-bar__input');
// const btnBreedSearch = document.querySelector('.search-bar__btn');


// btnBreedSearch.addEventListener('click', getSearchBreed);
breedInput.addEventListener('keydown', handleKey);

function handleKey(e) {
  if (e.key === 'Enter') {
    hideForSearch();
    getSearchBreed();
    checkHistory();
    removeActiveClass();
    hideListCategory();
    removeActiveClassList();
  }
}


function validateInput(text){
  if (/^[a-zA-Z]+(?:[\s-]+[a-zA-Z]+)*$/gm.test(text)) {
    return text;
  }
  alert("You have to enter a valid breed name");  
  const searchGalery = document.querySelector('.search-galery')
  let getText = document.querySelector('.search-info__header-h2__bold')
  getText.innerHTML = ''
  while (searchGalery.firstChild) {
    searchGalery.removeChild(searchGalery.firstChild);
    searchImgFlag = null
  }
  breedInput.value = ''
  return false;
}

let foundId = null

function finIdSearch(data){
  let errFlag = null
  if(validateInput(breedInput.value)){
    let inputText = breedInput.value
    for(let i = 0; i<data.length; i++){

      if(inputText == data[i].name){
        foundId = data[i].id
      } else{
        errFlag++
        if(errFlag == 67){
          foundId=null
        }
      }
      
    }  
    selectBreed(foundId).then(createInfoSearch)
  }

}

let searchImgFlag = null;
function createInfoSearch(data){
  let getText = document.querySelector('.search-info__header-h2__bold')
  const searchGalery = document.querySelector('.search-galery')

  if(data.length==0){
    alert("You must enter the correct breed name");  
    while (searchGalery.firstChild) {
      searchGalery.removeChild(searchGalery.firstChild);
      searchImgFlag = null

    }
    breedInput.value = ''
  } 
  getText.innerHTML = `${breedInput.value}`


  breedInput.value = ''

  let specTitleText = document.querySelector('.specific__title-text')
  specTitleText.innerHTML = 'SEARCH'

  let img = document.createElement("img");
  let imgBox = document.createElement("div")

  imgBox.classList.add('photo-box', `${(data[0].breeds[0].name).replace(/\s+/g, '-')}`, 'photo-hover')

  let urlCat = data[0].url;
  img.src = `${urlCat}`;

  let sectionForImg = document.createElement("section")

  img.classList.add('photo')
  let butForImg = document.createElement("h2")
  butForImg.innerHTML = `${data[0].breeds[0].name}`
  butForImg.classList.add('breed-btn')
  butForImg.setAttribute("id",`${data[0].breeds[0].id}`);
  sectionForImg.appendChild(img)

  imgBox.appendChild(sectionForImg)

  imgBox.appendChild(butForImg)

  if (searchImgFlag !== null) {
    searchGalery.removeChild(searchImgFlag);
  }


  searchImgFlag = searchGalery.appendChild(imgBox)

  let backBtnAbout = document.querySelector('.specific__btn')
  backBtnAbout.classList.add('search-btn__about-back')
  backBtnAbout.classList.remove('specific__btn')
}

function getSearchBreed(){
  getBreed(67).then(finIdSearch)
}

///////////////////////////////////////////////////////////