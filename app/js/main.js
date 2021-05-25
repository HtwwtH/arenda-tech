$(document).ready(function () {
  // show catalog submenu on pc version
  $submenu = $(".header__catalog");
  $("#showCatalog").mouseenter(function () {
    $submenu.css({ opacity: 0 }).animate({ opacity: 1 });
    $submenu.addClass('visible');
  });
  $submenu.mouseleave(function (e) {
    if (e.relatedTarget.id) {
      if (e.relatedTarget.id == "showCatalog") { }
    }
    else {
      $submenu.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $submenu.removeClass('visible');
      }, 500)
    }

  });
  $("#showCatalog").mouseleave(function (e) {
    if ((e.relatedTarget).outerHTML.indexOf("catalog__inner") == -1) {
      $submenu.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $submenu.removeClass('visible');
      }, 500)
    }
  });

  // show search line on mobile version
  $search = $(".search__block_mobile");
  $searchBtn = $("#showSearch");
  $searchBtn.click(function () {
    if ($search.hasClass('visible')) {
      $search.css({ opacity: 1 }).animate({ opacity: 0 }, 200);
      setTimeout(function () {
        $search.removeClass('visible');
      }, 300)
    }
    else {
      $search.addClass('visible');
      $search.css({ opacity: 0 }).animate({ opacity: 1 }, 200);
    }
  })

  // slide down subcategories on catalog page on mobile version
  $catalogContent = $('.catalog-section .catalog-content');
  $catalogCategory = $('.category');
  $catalogCategory.each(function () {
    if ($(this).find('.category__list').length != 0) {
      $(this).find('.category-title').removeAttr('href');
      $(this).find('.category-title').addClass('showSubmenu');
    }

  })
  $('.showSubmenu').click(function () {
    $('.category__list').each(function () {
      if ($(this).is(':visible')) {
        $(this).slideUp(300);
      }
    })

    if ($(this).siblings('.category__list').is(':visible') == false) {
      $(this).siblings('.category__list').slideDown(300);
    }

  })

  // show sorting on mobile
  $sortingBtn = $('#showSorting');
  $sorting = $('.sort-mobile');
  $sortingBtn.click(function () {
    if ($sorting.is(':visible')) {
      $sorting.slideUp(300);
      $sortingBtn.find('.show').removeClass('d-none');
      $sortingBtn.find('.close').addClass('d-none');
    }
    else {
      $sorting.slideDown(300);
      $sortingBtn.find('.show').addClass('d-none');
      $sortingBtn.find('.close').removeClass('d-none');
    }
  })
})