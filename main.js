$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');
    const $cartMenu = $('#cartMenu');
    const $accountMenu = $('#accountMenu');
    const $helpMenu = $('#helpMenu');
    const $dropdownMenu = $('.dropdown-menu');
    $cart.on('click',() =>{
      $cartMenu.show();
    })
    $cart.on('mouseleave',() =>{
      $dropdownMenu.hide();
    })
    $account.on('click',() =>{
      $accountMenu.show();
    })
    $account.on('mouseleave',() =>{
      $dropdownMenu.hide();
    })
    $help.on('click',() =>{
      $helpMenu.show();
    })
    $help.on('mouseleave',() =>{
      $dropdownMenu.hide();
    })
  
  })