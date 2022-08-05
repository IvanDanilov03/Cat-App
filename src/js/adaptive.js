const leftPart = $('.left-part')
const closeMobileMenu = $('.mobile-menu__close')

// function resizeListener() {
//     let windowWidth = window.outerWidth
//     if(windowWidth <= 500){
//       $(document).on('click', '.choose__voting-button', function(){
//         leftPart.hide()
//     })
//     }
// }
  
//   window.addEventListener("resize", resizeListener);

  let windowWidth = window.outerWidth
  const mobileMenuBtn = $('.menu')
  mobileMenuBtn.hide()

  if(windowWidth <= 992){
    mobileMenuBtn.show()
    $(document).on('click', '.choose__voting-button', function(){
      leftPart.hide()
    });
    $(document).on('click', '.choose__breeds-button', function(){
      leftPart.hide()
    });
    $(document).on('click', '.choose__galery-button', function(){
      leftPart.hide()
    });
    $(document).on('click', '.menu', function(){
      rightFunctional.hide();
      mobileMEnu.show()
    })
    $(document).on('click', '.mobile-menu__close', function(){
      if(flagBackArr[flagBackArr.length - 1].attr('class') == 'breeds tabs-content__item'){
        flagBackArr.pop()
        mobileMEnu.hide()
        onClick(breedsButton, votingButton, galeryButton, breeds)

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'voting tabs-content__item'){
          mobileMEnu.hide()
          flagBackArr.pop()
          onClick(votingButton, breedsButton, galeryButton, voting)

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'galery tabs-content__item'){
          mobileMEnu.hide()
          flagBackArr.pop()
          onClick(galeryButton, breedsButton, votingButton, galery)

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'search-info tabs-content__item'){
          mobileMEnu.hide()  
          onClick(galeryButton, breedsButton, votingButton, flagBackArr[flagBackArr.length-1])
          flagBackArr.pop()
          checkSearch()

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'likes tabs-content__item'){
          mobileMEnu.hide()
          rightFunctional.show()
          hideForListLikes(favouritesCategory, dislikesCategory, likesCategory)
          addRemoveActiveClass(btnListFavourite, btnListtDislike, btnListLike)

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'favourites tabs-content__item'){
        mobileMEnu.hide()
        rightFunctional.show()
          hideForListLikes(likesCategory, dislikesCategory, favouritesCategory)
          addRemoveActiveClass(btnListLike, btnListtDislike, btnListFavourite)

      } else if(flagBackArr[flagBackArr.length - 1].attr('class') == 'dislikes tabs-content__item'){
        mobileMEnu.hide()
        rightFunctional.show()
        hideForListLikes(likesCategory, favouritesCategory, dislikesCategory)
        addRemoveActiveClass(btnListLike, btnListFavourite, btnListtDislike)
      }
      })

}