$(function(){
  'use strict';

  // showing 2nd level sub menu while hiding others
  $('.sidebar-nav-link').on('click', function(e){
    var subMenu = $(this).next();

    $(this).parent().siblings().find('.sidebar-nav-sub').slideUp();
    $('.sub-with-sub ul').slideUp();

    if(subMenu.length) {
      e.preventDefault();
      subMenu.slideToggle();
    }
  });

  // showing 3rd level sub menu while hiding others
  $('.sub-with-sub .nav-sub-link').on('click', function(e){
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).next().slideDown();
  });

  $('#gpdkSidebarMenu').on('click', function(e){
    e.preventDefault();
    if (window.matchMedia('(min-width: 1200px)').matches) {
      $('body').toggleClass('hide-sidebar');
    } else {
      $('body').toggleClass('show-sidebar');
    }
  });

  if($.fn.perfectScrollbar) {
    $('.gpdk-sidebar').perfectScrollbar({
      suppressScrollX: true
    });
  }

  $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });



});
