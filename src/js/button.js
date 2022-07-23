const votingButton = $('.choose__voting-button')
const breedsButton = $('.choose__breeds-button')
const galeryButton = $('.choose__galery-button')
const rightFunctional = $('.right-functional')
const search = $('.search')
const breedSpesBtn = $('.breed-btn')
const spesificBtnBack = $('.specific__btn')

const hideTab = $('.tabs-content__item')
const lists = $('.lists')

const rightPlace = $('.right-place')

const voting = $('.voting')
const breeds = $('.breeds')
const galery = $('.galery')
const breedSpesific = $('.breeds-spesific')


rightFunctional.hide()
lists.hide()
voting.hide();
breeds.hide();
galery.hide();
search.hide();
breedSpesific.hide();


$(document).on('click', '.choose__voting-button', function(){
    onClick(votingButton, breedsButton, galeryButton, voting)
})
$(document).on('click', '.choose__breeds-button', function(){
    onClick(breedsButton, votingButton, galeryButton, breeds)
})
$(document).on('click', '.choose__galery-button', function(){
    onClick(galeryButton, breedsButton, votingButton, galery)
})

function onClick(butChange, butSec, butThird, tubToShow){
    rightFunctional.show()
    rightPlace.hide();
    hideTab.hide();
    breedSpesific.hide();
    search.show();
    lists.show();
    butChange.addClass('is-active');
    butSec.removeClass('is-active');
    butThird.removeClass('is-active');
    tubToShow.show();
}


$(document).on('click', '.breed-btn', function(){
    breedChoose()
})

function breedChoose(){
    breeds.hide();
    breedSpesific.show();

}

$(document).on('click', '.specific__btn', function(){
    onClick(breedsButton, votingButton, galeryButton, breeds)
})
