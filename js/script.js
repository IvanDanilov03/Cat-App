const votingButton=$(".choose__voting-button"),breedsButton=$(".choose__breeds-button"),galeryButton=$(".choose__galery-button"),rightFunctional=$(".right-functional"),search=$(".search"),breedSpesBtn=$(".breed-btn"),spesificBtnBack=$(".specific__btn"),searchInfo=$(".search-info"),searchBarInput=$(".search-bar__input"),mobileMEnu=$(".mobile-menu"),hideTab=$(".tabs-content__item"),lists=$(".lists"),btnListLike=$(".lists-likes__btn"),btnListFavourite=$(".lists-favourites__btn"),btnListtDislike=$(".lists-dislikes__btn"),btnBreedSearch=$(".search-bar__btn"),rightPlace=$(".right-place"),voting=$(".voting"),breeds=$(".breeds"),galery=$(".galery"),breedSpesific=$(".breeds-spesific"),likesCategory=$(".likes"),favouritesCategory=$(".favourites"),dislikesCategory=$(".dislikes");let flagBack=null,flagBackArr=[];function hideForSearch(){voting.hide(),breeds.hide(),galery.hide(),breedSpesific.hide(),searchInfo.show(),flagBack=searchInfo,flagBackArr.push(flagBack)}function onClick(e,t,n,i){rightFunctional.show(),rightPlace.hide(),hideTab.hide(),breedSpesific.hide(),likesCategory.hide(),favouritesCategory.hide(),dislikesCategory.hide(),search.show(),lists.show(),e.addClass("is-active"),t.removeClass("is-active"),n.removeClass("is-active"),i.show(),flagBack=i,flagBackArr.push(flagBack),removeActiveClassList()}function breedChoose(){searchInfo.hide(),breeds.hide(),breedSpesific.show()}function btnBack(){"breeds tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),onClick(breedsButton,votingButton,galeryButton,breeds)):"voting tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),onClick(votingButton,breedsButton,galeryButton,voting)):"galery tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),onClick(galeryButton,breedsButton,votingButton,galery)):"search-info tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),onClick(galeryButton,breedsButton,votingButton,flagBackArr[flagBackArr.length-1]),checkSearch()):"likes tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),hideForListLikes(favouritesCategory,dislikesCategory,likesCategory),addRemoveActiveClass(btnListFavourite,btnListtDislike,btnListLike)):"favourites tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")?(flagBackArr.pop(),hideForListLikes(likesCategory,dislikesCategory,favouritesCategory),addRemoveActiveClass(btnListLike,btnListtDislike,btnListFavourite)):"dislikes tabs-content__item"==flagBackArr[flagBackArr.length-2].attr("class")&&(flagBackArr.pop(),hideForListLikes(likesCategory,favouritesCategory,dislikesCategory),addRemoveActiveClass(btnListLike,btnListFavourite,btnListtDislike))}function checkHistory(){for(let e=0;e<flagBackArr.length;e++)flagBackArr[flagBackArr.length-1]==flagBackArr[flagBackArr.length-2]&&flagBackArr.pop()}function checkSearch(){"search-info tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")&&removeActiveClass()}function addRemoveActiveClass(e,t,n){e.removeClass("active"),t.removeClass("active"),n.addClass("active")}function hideForListLikes(e,t,n){voting.hide(),breeds.hide(),galery.hide(),breedSpesific.hide(),searchInfo.hide(),e.hide(),t.hide(),n.show(),removeActiveClass()}function removeActiveClass(){votingButton.removeClass("is-active"),breedsButton.removeClass("is-active"),galeryButton.removeClass("is-active")}function removeActiveClassList(){btnListLike.removeClass("active"),btnListFavourite.removeClass("active"),btnListtDislike.removeClass("active")}function hideListCategory(){likesCategory.hide(),favouritesCategory.hide(),dislikesCategory.hide()}rightFunctional.hide(),lists.hide(),voting.hide(),breeds.hide(),galery.hide(),search.hide(),breedSpesific.hide(),searchInfo.hide(),likesCategory.hide(),favouritesCategory.hide(),dislikesCategory.hide(),mobileMEnu.hide(),$(document).on("click",".choose__voting-button",(function(){onClick(votingButton,breedsButton,galeryButton,voting),checkHistory()})),$(document).on("click",".choose__breeds-button",(function(){onClick(breedsButton,votingButton,galeryButton,breeds),$(".specific__title-text").html("BREEDS"),$(".search-btn__about-back").addClass("specific__btn").removeClass("search-btn__about-back"),checkHistory()})),$(document).on("click",".choose__galery-button",(function(e){onClick(galeryButton,breedsButton,votingButton,galery),checkHistory(),delayedUpload()})),$(document).on("click",".mobile-menu__voting-button",(function(){mobileMEnu.hide(),onClick(votingButton,breedsButton,galeryButton,voting),checkHistory()})),$(document).on("click",".mobile-menu__breeds-button",(function(){mobileMEnu.hide(),onClick(breedsButton,votingButton,galeryButton,breeds),$(".specific__title-text").html("BREEDS"),$(".search-btn__about-back").addClass("specific__btn").removeClass("search-btn__about-back"),checkHistory()})),$(document).on("click",".mobile-menu__galery-button",(function(e){mobileMEnu.hide(),onClick(galeryButton,breedsButton,votingButton,galery),checkHistory(),delayedUpload()})),$(document).on("click",".search-bar__btn",(function(){hideForSearch(),getSearchBreed(),checkHistory(),removeActiveClass(),hideListCategory(),removeActiveClassList()})),$(document).on("click",".breed-btn",(function(){breedChoose(),selectBreed($(this).attr("id")).then(setInfoBreed)})),$(document).on("click",".specific__btn",(function(){onClick(breedsButton,votingButton,galeryButton,breeds),flagBackArr.pop()})),$(document).on("click",".search-btn__about-back",(function(){breedSpesific.hide(),searchInfo.show()})),$(document).on("click",".voting-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".breeds-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".galery-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".search-info__header-btn__span",(function(){$(".specific__title-text").html("BREEDS"),btnBack(),checkHistory(),$(".search-btn__about-back").addClass("specific__btn").removeClass("search-btn__about-back")})),$(document).on("click",".likes-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".favourites-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".dislikes-header__btn-span",(function(){btnBack(),checkHistory()})),$(document).on("click",".lists-likes",(function(){hideForListLikes(favouritesCategory,dislikesCategory,likesCategory),addRemoveActiveClass(btnListFavourite,btnListtDislike,btnListLike),flagBack=likesCategory,flagBackArr.push(flagBack),checkHistory()})),$(document).on("click",".lists-favourites",(function(){hideForListLikes(likesCategory,dislikesCategory,favouritesCategory),addRemoveActiveClass(btnListLike,btnListtDislike,btnListFavourite),flagBack=favouritesCategory,flagBackArr.push(flagBack),checkHistory()})),$(document).on("click",".lists-dislikes",(function(){hideForListLikes(likesCategory,favouritesCategory,dislikesCategory),addRemoveActiveClass(btnListLike,btnListFavourite,btnListtDislike),flagBack=dislikesCategory,flagBackArr.push(flagBack),checkHistory()}));const btnLike=document.querySelector(".voting-main__btn-like"),btnFavourite=document.querySelector(".voting-main__btn-favourite"),btnDislike=document.querySelector(".voting-main__btn-dislike");async function getCat(e=1){const t=await fetch(`https://api.thecatapi.com/v1/images/search?limit=${e}`,{headers:{"Content-Type":"application/json","x-api-key":"66445e74-b645-41c5-956d-98a2dd0bab3d"}});return await t.json()}btnLike.addEventListener("click",funcBtnLike),btnFavourite.addEventListener("click",funcBtnFavourite),btnDislike.addEventListener("click",funcBtnDislike);let chooseFlag="";function funcBtnLike(){chooseFlag="like",getCat().then(setInfoLike)}function funcBtnFavourite(){chooseFlag="favourite",getCat().then(setInfoFavourite)}function funcBtnDislike(){chooseFlag="dislike",getCat().then(setInfoDislike)}let flag=null;function setInfoLike(e){preloader(e),createBottomInfo(e,"smile_green","Likes")}function setInfoFavourite(e){preloader(e),createBottomInfo(e,"heart_red","Favourites")}function setInfoDislike(e){preloader(e),createBottomInfo(e,"sad_yellow","Dislikes")}function createBottomInfo(e,t,n){const i=document.querySelector(".voting-list");let o=document.createElement("div");o.classList.add("voting-list__box");let a=new Date,r=a.getHours()+":"+a.getMinutes(),c=document.createElement("h2");c.classList.add("voting-list__box-time"),c.textContent=`${r}`;let s=document.createElement("h2");s.classList.add("voting-list__box-text");let l=e[0].id;s.innerHTML=`Image ID: <span class="id">${l}</span> was added to ${n}`;let d=document.createElement("img");d.src=`images/${t}.svg`,o.append(c),o.append(s),o.append(d),i.append(o)}let imgSrcArr=[];const galleryWrapper=document.querySelector(".favourites-gallery__wrapper"),galleryNotification=document.querySelector(".favourites-notification");function btnFavDel(){console.log(this)}function preloader(e){imgSrcArr.push(e[0].url);const t=document.querySelector(".voting-main__img-box");let n=document.createElement("img");null!==flag&&t.removeChild(flag);let i=e[0].url;if(n.src=`${i}`,flag=t.appendChild(n),"like"==chooseFlag){document.querySelector(".likes-header__no-title").style.display="none";let e=document.querySelector(".likes-gallery"),t=document.createElement("img"),n=document.createElement("div"),i=document.createElement("section"),o=imgSrcArr[0];t.src=`${o}`,i.append(t),n.append(i),e.appendChild(n),imgSrcArr.shift()}else if("favourite"==chooseFlag){document.querySelector(".favourites-header__no-title").style.display="none",galleryWrapper.style.display="block",galleryNotification.style.display="block";let t=document.querySelector(".favourites-gallery"),n=document.createElement("img"),i=document.createElement("div");i.classList.add("favourite-photo__box","favourite-hover"),i.setAttribute("id",e[0].id);let o=document.createElement("div");o.classList.add("favourite-hover__img-box");let a=document.createElement("section"),r=imgSrcArr[0];n.src=`${r}`,a.append(n),i.append(a),i.append(o),t.appendChild(i),imgSrcArr.shift();const c=document.querySelectorAll(".favourite-hover__img-box");for(let e=0;e<c.length;e++)c[e].onclick=function(){this.parentElement.remove();const e=document.querySelector(".favourites-notification");let t=document.createElement("div");t.classList.add("favourites-notification__box");let n=new Date,i=n.getHours()+":"+n.getMinutes(),o=document.createElement("h2");o.classList.add("favourites-notification__box-time"),o.textContent=`${i}`;let a=document.createElement("h2");a.classList.add("favourites-notification__box-text");let r=this.parentElement.id;a.innerHTML=`Image ID: <span class="id">${r}</span> was removed from Favourites`,t.append(o),t.append(a),e.append(t);const c=document.querySelector(".voting-list");let s=document.createElement("div");s.classList.add("voting-list__box");let l=new Date,d=l.getHours()+":"+l.getMinutes(),u=document.createElement("h2");u.classList.add("voting-list__box-time"),u.textContent=`${d}`;let h=document.createElement("h2");h.classList.add("voting-list__box-text");let g=this.parentElement.id;h.innerHTML=`Image ID: <span class="id">${g}</span> was removed from Favourites`,s.append(u),s.append(h),c.append(s)}}else if("dislike"==chooseFlag){document.querySelector(".dislikes-header__no-title").style.display="none";let e=document.querySelector(".dislikes-gallery"),t=document.createElement("img"),n=document.createElement("div"),i=document.createElement("section"),o=imgSrcArr[0];t.src=`${o}`,i.append(t),n.append(i),e.appendChild(n),imgSrcArr.shift()}}function votingAppend(){}async function galeryRequest(){const e=await fetch("https://api.thecatapi.com/v1/images/search?limit=50",{headers:{"Content-Type":"application/json","x-api-key":"66445e74-b645-41c5-956d-98a2dd0bab3d"}});return await e.json()}galleryWrapper.style.display="none",galleryNotification.style.display="none",document.addEventListener("DOMContentLoaded",(()=>{getCat().then(preloader)}));const galleryMain=document.querySelector(".galery-main");function setGallery(e){galleryMain.style.display="block";document.querySelector(".galery-spinner").style.display="none";const t=document.querySelector(".galery-main");for(let n=0;n<50;n++){let i=document.createElement("img"),o=document.createElement("div");o.classList.add("photo-box");let a=e[n].url,r=document.createElement("section");i.src=`${a}`,i.classList.add("photo"),r.append(i),o.append(r),t.append(o)}}galleryMain.style.display="none";let flagNumSpiner=0;function delayedUpload(){0==flagNumSpiner&&(flagNumSpiner++,timeoutID=window.setTimeout(callGallery,2e3))}function callGallery(){galeryRequest().then(setGallery)}const leftPart=$(".left-part"),closeMobileMenu=$(".mobile-menu__close");let windowWidth=window.outerWidth;const mobileMenuBtn=$(".menu");async function getBreed(e){const t=await fetch(`https://api.thecatapi.com/v1/breeds?limit=${e}`,{headers:{"Content-Type":"application/json","x-api-key":"66445e74-b645-41c5-956d-98a2dd0bab3d"}});return await t.json()}async function selectBreed(e){const t=await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"Content-Type":"application/json","x-api-key":"66445e74-b645-41c5-956d-98a2dd0bab3d"}});return await t.json()}function grid(e){const t=document.querySelector(".breeds-galery");for(let n=0;n<30;n++){let i=document.createElement("img"),o=document.createElement("div");o.classList.add("photo-box",`${e[n].name.replace(/\s+/g,"-")}`,"photo-hover");let a=e[n].image.url,r=document.createElement("section");i.src=`${a}`,i.classList.add("photo");let c=document.createElement("h2");c.innerHTML=`${e[n].name}`,c.classList.add("breed-btn"),c.setAttribute("id",`${e[n].id}`),r.append(i),o.append(r),o.append(c),t.append(o)}}function reGrid(e){const t=document.querySelector(".breeds-galery");for(let n=66;n>=42;n--){let i=document.createElement("img"),o=document.createElement("div");o.classList.add("photo-box",`${e[n].name.replace(/\s+/g,"-")}`,"photo-hover");let a=e[n].image.url,r=document.createElement("section");i.src=`${a}`,i.classList.add("photo");let c=document.createElement("h2");c.innerHTML=`${e[n].name}`,c.classList.add("breed-btn"),c.setAttribute("id",`${e[n].id}`),r.append(i),o.append(r),o.append(c),t.append(o)}}function list(e){const t=document.querySelector(".breeds-header__list-control");for(let n=0;n<e.length;n++){let i=document.createElement("option");i.classList.add("option"),i.value=e[n].id,i.innerHTML=`${e[n].name}`,t.append(i)}}function setBreed(e){const t=document.querySelector(".breeds-galery");let n=document.createElement("img"),i=document.createElement("div");i.classList.add("photo-box","photo-hover");let o=document.createElement("section"),a=e[0].url;n.src=`${a}`,n.classList.add("photo");let r=document.createElement("h2");r.innerHTML=`${e[0].breeds[0].name}`,r.classList.add("breed-btn"),r.setAttribute("id",`${e[0].breeds[0].id}`),o.append(n),i.append(o),i.append(r),t.appendChild(i)}mobileMenuBtn.hide(),windowWidth<=992&&(mobileMenuBtn.show(),$(document).on("click",".choose__voting-button",(function(){leftPart.hide()})),$(document).on("click",".choose__breeds-button",(function(){leftPart.hide()})),$(document).on("click",".choose__galery-button",(function(){leftPart.hide()})),$(document).on("click",".menu",(function(){rightFunctional.hide(),mobileMEnu.show()})),$(document).on("click",".mobile-menu__close",(function(){"breeds tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(flagBackArr.pop(),mobileMEnu.hide(),onClick(breedsButton,votingButton,galeryButton,breeds)):"voting tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(mobileMEnu.hide(),flagBackArr.pop(),onClick(votingButton,breedsButton,galeryButton,voting)):"galery tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(mobileMEnu.hide(),flagBackArr.pop(),onClick(galeryButton,breedsButton,votingButton,galery)):"search-info tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(mobileMEnu.hide(),onClick(galeryButton,breedsButton,votingButton,flagBackArr[flagBackArr.length-1]),flagBackArr.pop(),checkSearch()):"likes tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(mobileMEnu.hide(),rightFunctional.show(),hideForListLikes(favouritesCategory,dislikesCategory,likesCategory),addRemoveActiveClass(btnListFavourite,btnListtDislike,btnListLike)):"favourites tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")?(mobileMEnu.hide(),rightFunctional.show(),hideForListLikes(likesCategory,dislikesCategory,favouritesCategory),addRemoveActiveClass(btnListLike,btnListtDislike,btnListFavourite)):"dislikes tabs-content__item"==flagBackArr[flagBackArr.length-1].attr("class")&&(mobileMEnu.hide(),rightFunctional.show(),hideForListLikes(likesCategory,favouritesCategory,dislikesCategory),addRemoveActiveClass(btnListLike,btnListFavourite,btnListtDislike))}))),getBreed(67).then(grid),getBreed(67).then(list);const selectItem=document.querySelector(".breeds-header__list-control");selectItem.onchange=function(){const e=document.querySelector(".breeds-galery");for(;e.firstChild;)e.removeChild(e.firstChild);let t=selectItem.value;selectBreed(t).then(setBreed),"0"===t&&getBreed(67).then(grid)};const selectLimit=document.querySelector(".breeds-header__limits-control");selectLimit.onchange=function(){const e=document.querySelector(".breeds-galery");document.querySelector(".photo");5==selectLimit.value?e.style.columnCount=2:10==selectLimit.value?e.style.columnCount=3:15==selectLimit.value&&(e.style.columnCount=4)};const alphabetUp=document.querySelector(".breeds-header__alphabet-up"),alphabetDown=document.querySelector(".breeds-header__alphabet-down");function funcAlphabetUp(){const e=document.querySelector(".breeds-galery");for(;e.firstChild;)e.removeChild(e.firstChild);getBreed(67).then(grid),alphabetUp.removeEventListener("click",funcAlphabetUp),alphabetDown.addEventListener("click",funcAlphabetDown)}function funcAlphabetDown(){alphabetDown.onclick=null;const e=document.querySelector(".breeds-galery");for(;e.firstChild;)e.removeChild(e.firstChild);getBreed(67).then(reGrid),alphabetDown.removeEventListener("click",funcAlphabetDown),alphabetUp.addEventListener("click",funcAlphabetUp)}alphabetUp.addEventListener("click",funcAlphabetUp),alphabetDown.addEventListener("click",funcAlphabetDown);let newFlag=null;function setInfoBreed(e){document.querySelector(".specific__title-text__id").innerHTML=`${e[0].breeds[0].id}`,document.querySelector(".breed-info__title").innerHTML=`${e[0].breeds[0].name}`,document.querySelector(".bredd-info__breed-for").innerHTML=`${e[0].breeds[0].description}`,document.querySelector(".description-left__text").innerHTML=`${e[0].breeds[0].temperament}`,document.querySelector(".breed-origin").innerHTML=`${e[0].breeds[0].origin}`,document.querySelector(".breed-weight").innerHTML=`${e[0].breeds[0].weight.imperial}`,document.querySelector(".breed-life-span").innerHTML=`${e[0].breeds[0].life_span}`;const t=document.querySelector(".breeds-spesific__img-box");let n=document.createElement("img");null!==newFlag&&t.removeChild(newFlag);let i=e[0].url;n.src=`${i}`,newFlag=t.appendChild(n)}const breedInput=document.querySelector(".search-bar__input");function handleKey(e){"Enter"===e.key&&(hideForSearch(),getSearchBreed(),checkHistory(),removeActiveClass(),hideListCategory(),removeActiveClassList())}function validateInput(e){if(/^[a-zA-Z]+(?:[\s-]+[a-zA-Z]+)*$/gm.test(e))return e;alert("You have to enter a valid breed name");const t=document.querySelector(".search-galery");for(document.querySelector(".search-info__header-h2__bold").innerHTML="";t.firstChild;)t.removeChild(t.firstChild),searchImgFlag=null;return breedInput.value="",!1}breedInput.addEventListener("keydown",handleKey);let foundId=null;function finIdSearch(e){let t=null;if(validateInput(breedInput.value)){let n=breedInput.value;for(let i=0;i<e.length;i++)n==e[i].name?foundId=e[i].id:(t++,67==t&&(foundId=null));selectBreed(foundId).then(createInfoSearch)}}let searchImgFlag=null;function createInfoSearch(e){let t=document.querySelector(".search-info__header-h2__bold");const n=document.querySelector(".search-galery");if(0==e.length){for(alert("You must enter the correct breed name");n.firstChild;)n.removeChild(n.firstChild),searchImgFlag=null;breedInput.value=""}t.innerHTML=`${breedInput.value}`,breedInput.value="",document.querySelector(".specific__title-text").innerHTML="SEARCH";let i=document.createElement("img"),o=document.createElement("div");o.classList.add("photo-box",`${e[0].breeds[0].name.replace(/\s+/g,"-")}`,"photo-hover");let a=e[0].url;i.src=`${a}`;let r=document.createElement("section");i.classList.add("photo");let c=document.createElement("h2");c.innerHTML=`${e[0].breeds[0].name}`,c.classList.add("breed-btn"),c.setAttribute("id",`${e[0].breeds[0].id}`),r.appendChild(i),o.appendChild(r),o.appendChild(c),null!==searchImgFlag&&n.removeChild(searchImgFlag),searchImgFlag=n.appendChild(o);let s=document.querySelector(".specific__btn");s.classList.add("search-btn__about-back"),s.classList.remove("specific__btn")}function getSearchBreed(){getBreed(67).then(finIdSearch)}