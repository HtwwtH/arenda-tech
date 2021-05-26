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

  // change photo hover effect on product card, for pc
  function findParent(elem) {
    if (elem.attr('class').indexOf('hover-block') != -1) {
      return elem.parent('.product__photo').parent('a').parent('.product-card');
    }
    else if (elem.attr('class').indexOf('pagin') != -1) {
      return elem.parent('.photo-pagination').parent('.product-card');
    }
  }

  $showPhoto1 = $(".showPhoto1");
  $showPhoto2 = $(".showPhoto2");
  $showPhoto3 = $(".showPhoto3");
  var parent;

  $showPhoto1.hover(function () {
    parent = findParent($(this));
    parent.find('.photo-1').css({ opacity: 1 });
    parent.find('.photo-2').css({ opacity: 0 });
  }, function () { })

  $showPhoto2.hover(function () {
    parent = findParent($(this));
    parent.find('.photo-1').css({ opacity: 0 });
    parent.find('.photo-2').css({ opacity: 1 });
    parent.find('.pagin-1').removeClass('active');
    parent.find('.pagin-2').addClass('active');
  }
    , function (e) {
      if ((e.relatedTarget).className.indexOf("showPhoto1") != -1) {
        parent.find('.photo-1').css({ opacity: 1 });
        parent.find('.photo-2').css({ opacity: 0 });
        parent.find('.pagin-1').addClass('active');
        parent.find('.pagin-2').removeClass('active');
      }
      else if ((e.relatedTarget).className.indexOf("showPhoto3") != -1) {
        parent.find('.photo-2').css({ opacity: 0 });
        parent.find('.photo-3').css({ opacity: 1 });
        parent.find('.pagin-2').removeClass('active');
        parent.find('.pagin-3').addClass('active');
      }
      else {
        parent.find('.photo-1').css({ opacity: 1 });
        parent.find('.photo-2').css({ opacity: 0 });
        parent.find('.pagin-1').addClass('active');
        parent.find('.pagin-2').removeClass('active');
      }
    }
  )
  $showPhoto3.hover(function () {
    parent = findParent($(this));
    parent.find('.photo-1').css({ opacity: 0 });
    parent.find('.photo-2').css({ opacity: 0 });
    parent.find('.photo-3').css({ opacity: 1 });
    parent.find('.pagin-1').removeClass('active');
    parent.find('.pagin-2').removeClass('active');
    parent.find('.pagin-3').addClass('active');
  }, function (e) {
    if ((e.relatedTarget).className.indexOf("showPhoto2") != -1) {
      parent.find('.photo-2').css({ opacity: 1 });
      parent.find('.photo-3').css({ opacity: 0 });
      parent.find('.pagin-2').addClass('active');
      parent.find('.pagin-3').removeClass('active');
    }
    else {
      parent.find('.photo-1').css({ opacity: 1 });
      parent.find('.photo-3').css({ opacity: 0 });
      parent.find('.pagin-1').addClass('active');
      parent.find('.pagin-3').removeClass('active');
    }
  })
})