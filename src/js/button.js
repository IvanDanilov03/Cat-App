const votingButton = $('.choose__voting-button')
const breedsButton = $('.choose__breeds-button')
const galeryButton = $('.choose__galery-button')
const rightFunctional = $('.right-functional')
const search = $('.search')
const breedSpesBtn = $('.breed-btn')
const spesificBtnBack = $('.specific__btn')
const searchInfo = $('.search-info')
const searchBarInput = $('.search-bar__input')
const mobileMEnu = $('.mobile-menu')

const hideTab = $('.tabs-content__item')
const lists = $('.lists')
const btnListLike = $('.lists-likes__btn')
const btnListFavourite = $('.lists-favourites__btn')
const btnListtDislike = $('.lists-dislikes__btn')
const btnBreedSearch = $('.search-bar__btn')

const rightPlace = $('.right-place')

const voting = $('.voting')
const breeds = $('.breeds')
const galery = $('.galery')
const breedSpesific = $('.breeds-spesific')
const likesCategory = $('.likes')
const favouritesCategory = $('.favourites')
const dislikesCategory =$('.dislikes')

let flagBack = null;
let flagBackArr = [];


rightFunctional.hide()
lists.hide()
voting.hide();
breeds.hide();
galery.hide();
search.hide();
breedSpesific.hide();
searchInfo.hide();
likesCategory.hide();
favouritesCategory.hide();
dislikesCategory.hide();
mobileMEnu.hide();

$(document).on('click', '.choose__voting-button', function(){
    onClick(votingButton, breedsButton, galeryButton, voting)
    checkHistory()
})

$(document).on('click', '.choose__breeds-button', function(){
    onClick(breedsButton, votingButton, galeryButton, breeds)
    let specTitleText = $('.specific__title-text')
    specTitleText.html('BREEDS') 
    let backBtnAbout = $('.search-btn__about-back')
    backBtnAbout.addClass('specific__btn').removeClass('search-btn__about-back')
    checkHistory()
})

$(document).on('click', '.choose__galery-button', function(event){
    onClick(galeryButton, breedsButton, votingButton, galery)
    checkHistory()
    delayedUpload()
})
$(document).on('click', '.mobile-menu__voting-button', function(){
    mobileMEnu.hide();

    onClick(votingButton, breedsButton, galeryButton, voting)
    checkHistory()
})

$(document).on('click', '.mobile-menu__breeds-button', function(){
    mobileMEnu.hide();

    onClick(breedsButton, votingButton, galeryButton, breeds)
    let specTitleText = $('.specific__title-text')
    specTitleText.html('BREEDS') 
    let backBtnAbout = $('.search-btn__about-back')
    backBtnAbout.addClass('specific__btn').removeClass('search-btn__about-back')
    checkHistory()
})

$(document).on('click', '.mobile-menu__galery-button', function(event){
    mobileMEnu.hide();

    onClick(galeryButton, breedsButton, votingButton, galery)
    checkHistory()
    delayedUpload()
})

$(document).on('click', '.search-bar__btn', function(){
    hideForSearch()
    getSearchBreed();
    checkHistory();
    removeActiveClass();
    hideListCategory();
    removeActiveClassList();
})


function hideForSearch(){
    voting.hide();
    breeds.hide();
    galery.hide();
    breedSpesific.hide();
    searchInfo.show();
    flagBack = searchInfo;
    flagBackArr.push(flagBack)
}


function onClick(butChange, butSec, butThird, tubToShow){
    rightFunctional.show()
    rightPlace.hide();
    hideTab.hide();
    breedSpesific.hide();
    likesCategory.hide();
    favouritesCategory.hide();
    dislikesCategory.hide();
    search.show();
    lists.show();
    butChange.addClass('is-active');
    butSec.removeClass('is-active');
    butThird.removeClass('is-active');
    tubToShow.show();
    flagBack = tubToShow;
    flagBackArr.push(flagBack)
    // checkHistory();
    removeActiveClassList()
}


$(document).on('click', '.breed-btn', function(){
    breedChoose()
    let breedId = $(this).attr("id");
    selectBreed(breedId).then(setInfoBreed)

})

function breedChoose(){
    searchInfo.hide()
    breeds.hide();
    breedSpesific.show();
}

$(document).on('click', '.specific__btn', function(){
    onClick(breedsButton, votingButton, galeryButton, breeds)
    flagBackArr.pop()
})
$(document).on('click', '.search-btn__about-back', function(){
    breedSpesific.hide();
    searchInfo.show();
})

$(document).on('click', '.voting-header__btn-span', function(){
    btnBack()
    checkHistory()
})

$(document).on('click', '.breeds-header__btn-span', function(){
    btnBack()
    checkHistory()
})

$(document).on('click', '.galery-header__btn-span', function(){
    btnBack()
    checkHistory()
})

$(document).on('click', '.search-info__header-btn__span', function(){
    let specTitleText = $('.specific__title-text')
    specTitleText.html('BREEDS') 
    btnBack()
    checkHistory()
    let backBtnAbout = $('.search-btn__about-back')
    backBtnAbout.addClass('specific__btn').removeClass('search-btn__about-back')
})

$(document).on('click', '.likes-header__btn-span', function(){
    btnBack()
    checkHistory()
})

$(document).on('click', '.favourites-header__btn-span', function(){
    btnBack()
    checkHistory()
})

$(document).on('click', '.dislikes-header__btn-span', function(){
    btnBack()
    checkHistory()
})


function btnBack(){
    if(flagBackArr[flagBackArr.length - 2].attr('class') == 'breeds tabs-content__item'){
        flagBackArr.pop()
        onClick(breedsButton, votingButton, galeryButton, breeds)

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'voting tabs-content__item'){
        flagBackArr.pop()
        onClick(votingButton, breedsButton, galeryButton, voting)

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'galery tabs-content__item'){
        flagBackArr.pop()
        onClick(galeryButton, breedsButton, votingButton, galery)

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'search-info tabs-content__item'){
        flagBackArr.pop()
        onClick(galeryButton, breedsButton, votingButton, flagBackArr[flagBackArr.length-1])
        checkSearch()

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'likes tabs-content__item'){
        flagBackArr.pop()
        hideForListLikes(favouritesCategory, dislikesCategory, likesCategory)
        addRemoveActiveClass(btnListFavourite, btnListtDislike, btnListLike)

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'favourites tabs-content__item'){
        flagBackArr.pop()
        hideForListLikes(likesCategory, dislikesCategory, favouritesCategory)
        addRemoveActiveClass(btnListLike, btnListtDislike, btnListFavourite)

    } else if(flagBackArr[flagBackArr.length - 2].attr('class') == 'dislikes tabs-content__item'){
        flagBackArr.pop()
        hideForListLikes(likesCategory, favouritesCategory, dislikesCategory)
        addRemoveActiveClass(btnListLike, btnListFavourite, btnListtDislike)
    }
}

function checkHistory(){
    for(let i = 0; i<flagBackArr.length;i++){
        if(flagBackArr[flagBackArr.length - 1]==flagBackArr[flagBackArr.length - 2]){
            flagBackArr.pop()
        }
    }
}

function checkSearch(){
    if(flagBackArr[flagBackArr.length-1].attr('class') == 'search-info tabs-content__item'){
        removeActiveClass()
    }
}

///////////////////////////////////////////////////////////////////////////////
$(document).on('click', '.lists-likes', function(){
    hideForListLikes(favouritesCategory, dislikesCategory, likesCategory)
    addRemoveActiveClass(btnListFavourite, btnListtDislike, btnListLike)
    flagBack = likesCategory;
    flagBackArr.push(flagBack)
    checkHistory()

})
$(document).on('click', '.lists-favourites', function(){
    hideForListLikes(likesCategory, dislikesCategory, favouritesCategory)
    addRemoveActiveClass(btnListLike, btnListtDislike, btnListFavourite)
    flagBack =  favouritesCategory;
    flagBackArr.push(flagBack)
    checkHistory()

})
$(document).on('click', '.lists-dislikes', function(){
    hideForListLikes(likesCategory, favouritesCategory, dislikesCategory)
    addRemoveActiveClass(btnListLike, btnListFavourite, btnListtDislike)
    flagBack = dislikesCategory;
    flagBackArr.push(flagBack)
    checkHistory()

})

function addRemoveActiveClass(firstRemove, secondRemove, addActive){
    firstRemove.removeClass('active')
    secondRemove.removeClass('active')
    addActive.addClass('active')
}


function hideForListLikes(firstCategory, secondCategory, showCategory){
    voting.hide();
    breeds.hide();
    galery.hide();
    breedSpesific.hide();
    searchInfo.hide();
    firstCategory.hide();
    secondCategory.hide();
    showCategory.show();
    removeActiveClass()
}


function removeActiveClass(){
    votingButton.removeClass('is-active')
    breedsButton.removeClass('is-active')
    galeryButton.removeClass('is-active')
}

function removeActiveClassList(){
    btnListLike.removeClass('active')
    btnListFavourite.removeClass('active')
    btnListtDislike.removeClass('active')
}

function hideListCategory(){
    likesCategory.hide();
    favouritesCategory.hide();
    dislikesCategory.hide();
}