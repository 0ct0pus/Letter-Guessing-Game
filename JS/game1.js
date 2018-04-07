console.log("game1.js initialised.")

//jQuery
$(document).ready(() => {
  const $aButton = $('.a-button');
  const $oButton = $('.o-button');
  const $uButton = $('.u-button');

  $aButton.on(('click'), () => {
    $aButton.addClass('button-active-correct');
    $('.catText').replaceWith("<h1 class='catText' align='center'>Cat</h1>");
    $('.catText2').replaceWith("<h1 class='catText' align='center'>Cat</h1>");

  })

  $oButton.on(('click'), () => {
    $oButton.addClass('button-active-incorrect');
    $('.catText').replaceWith("<h1 class='catText2' align='center'>Cot</h1>");
    $('.catText2').replaceWith("<h1 class='catText2' align='center'>Cot</h1>");
  }).on(('mouseleave'), () => {
    $oButton.removeClass('button-active-incorrect');
  })

  $uButton.on(('click'), () => {
    $uButton.addClass('button-active-incorrect');
    $('.catText').replaceWith("<h1 class='catText2' align='center'>Cut</h1>");
    $('.catText2').replaceWith("<h1 class='catText2' align='center'>Cut</h1>");
  }).on(('mouseleave'), () => {
    $uButton.removeClass('button-active-incorrect');
  })


})
