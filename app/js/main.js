$(document).ready(function () {
  // выпадающее меню под хэдером на пк версии
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

  // на странице каталога catalog.html выпадающие подкатегории
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

  // раскрытие строки поиска по кнопке в мобильной версии
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

  // на странице подкатегорий subcategory.html раскрыть фильтры
  // in subcategory show filters on pc version
  $filter1 = $(".filter__block-pc-1");
  $filter2 = $(".filter__block-pc-2");
  // filter 1
  $(".filter__btn-pc-1").mouseenter(function () {
    $filter1.css({ opacity: 0 }).animate({ opacity: 1 });
    $filter1.addClass('visible');
  });
  $filter1.mouseleave(function (e) {

    if (e.relatedTarget.className.indexOf("filter__btn-pc") != -1) { }
    else {
      $filter1.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $filter1.removeClass('visible');
      }, 500)
    }

  });
  $(".filter__btn-pc-1").mouseleave(function (e) {
    if ((e.relatedTarget).outerHTML.indexOf("filter__block-pc-1") == -1) {
      $filter1.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $filter1.removeClass('visible');
      }, 500)
    }
  });
  // filter 2
  $(".filter__btn-pc-2").mouseenter(function () {
    $filter2.css({ opacity: 0 }).animate({ opacity: 1 });
    $filter2.addClass('visible');
  });
  $filter2.mouseleave(function (e) {
    if (e.relatedTarget.className.indexOf("filter__btn-pc") != -1) { }
    else {
      $filter2.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $filter2.removeClass('visible');
      }, 500)
    }

  });
  $(".filter__btn-pc-2").mouseleave(function (e) {
    if ((e.relatedTarget).outerHTML.indexOf("filter__block-pc-2") == -1) {
      $filter2.css({ opacity: 1 }).animate({ opacity: 0 });
      setTimeout(function () {
        $filter2.removeClass('visible');
      }, 500)
    }
  });

  // на странице подкатегорий subcategory.html раскрыть сортировку на мобильной вресии
  // show sorting on mobile
  $sortingBtn = $('#showSorting');
  $sorting = $('.sort-mobile');
  $sortingBtn.click(function () {
    if ($sorting.is(':visible')) {
      $sorting.slideUp(300);
      $sortingBtn.find('.show').removeClass('d-none');
      $sortingBtn.find('.close').addClass('d-none');
      if ($("#sortingApplied").is(':visible')) {
        $("#sortingApplied").hide(200);
      }
    }
    else {
      // если в этот момент открыта другая вкладка (фильтры), скрыть ее
      if ($(".filter-mobile").is(':visible')) {
        $(".filter-mobile").slideUp(300);
        $("#showFilters").find('.close').addClass('d-none');
        $("#showFilters").find('.show').removeClass('d-none');
        if ($("#filterApplied").is(':visible')) {
          $("#filterApplied").hide(200);
        }
      }
      $sorting.slideDown(300);
      $sortingBtn.find('.show').addClass('d-none');
      $sortingBtn.find('.close').removeClass('d-none');
    }
  })
  // when click radio button in sorting, show this alert, hide after 4s
  $(".sort_radio").click(function () {
    $("#sortingApplied").show(200);
    setTimeout(function () {
      $("#sortingApplied").hide(200);
    }, 4000);
  })

  // класс для хранения информации, сколько фильтров выбрано
  class CountFilters {
    constructor() {
      this.count = 0;
      this.brands = 0;
      this.volume = 0;
      this.tonn = 0;
    }
    updateValueHtml() {
      if ($('#filtersCount').is(':visible') == false) {
        $('#filtersCount').css("display", "block");
        $('#filtersCount').text(this.count);
      }
      else
        $('#filtersCount').text(this.count);
    }
    addBrands() {
      if (this.brands == 0) {
        this.brands++;
        this.count++;
        this.updateValueHtml();
      }
    }
    addVolume() {
      if (this.volume == 0) {
        this.volume++;
        this.count++;
        this.updateValueHtml();
      }
    }
    addTonn() {
      if (this.tonn == 0) {
        this.tonn++;
        this.count++;
        this.updateValueHtml();
      }
    }
    removeBrands() {
      this.brands = 0;
      if (this.count != 0)
        this.count--;
      $('#filtersCount').text(this.count);
      let allRadios = $('input[name="radio"]');
      let allBrandsRadios = $(".brands-filter").find(allRadios);
      allBrandsRadios.prop('checked', false);
    }
    removeVolume() {
      this.volume = 0;
      if (this.count != 0)
        this.count--;
      $('#filtersCount').text(this.count);
      document.querySelector('#input-min-value').value = 0;
      document.querySelector('#input-max-value').value = 40;
      filterSlider.noUiSlider.set([0, 40]);
    }
    removeTonn() {
      this.tonn = 0;
      if (this.count != 0)
        this.count--;
      $('#filtersCount').text(this.count);
      let allRadios = $('input[name="radio"]');
      let allTonnRadios = $(".tonn-filter").find(allRadios);
      allTonnRadios.prop('checked', false);
    }
    removeCount() {
      this.count = 0;
      this.brands = 0;
      this.volume = 0;
      this.tonn = 0;
      $('#filtersCount').text(0);
      $('#filtersCount').css("display", "none");
      this.removeBrands();
      this.removeTonn();
      this.removeVolume();

    }
  }
  let countFilters = new CountFilters(); //инициализация класса

  // на странице подкатегорий subcategory.html раскрыть фильтры на мобильной версии
  // show filters on mobile
  $filterBtn = $('#showFilters');
  $filters = $('.filter-mobile');
  $filterBtn.click(function () {
    if ($filters.is(':visible')) {
      // закрытие вкладки, сброс всех фильтров
      countFilters.removeCount();
      $filters.slideUp(300);
      $filterBtn.find('.show').removeClass('d-none');
      $filterBtn.find('.close').addClass('d-none');
      if ($("#filterApplied").is(':visible')) {
        $("#filterApplied").hide(200);
      }
    }
    else {
      // если открыта в этот момент другая вкладка (сортировка), скрыть ее
      if ($(".sort-mobile").is(':visible')) {
        $(".sort-mobile").slideUp(300);
        $("#showSorting").find('.show').removeClass('d-none');
        $("#showSorting").find('.close').addClass('d-none');
        if ($("#sortingApplied").is(':visible')) {
          $("#sortingApplied").hide(200);
        }
      }
      $filters.slideDown(300);
      $filterBtn.find('.show').addClass('d-none');
      $filterBtn.find('.close').removeClass('d-none');
    }
  })

  // when click radio button, swipe slider or input value in filters, show this alert, hide after 4s` 
  function showFilterAlert() {
    $("#filterApplied").show(200);
    setTimeout(function () {
      $("#filterApplied").hide(200);
    }, 4000);
  }

  // все радиокнопки
  let allRadios = $(".filter_radio");
  // выбор радиокнопки из формы фильтра брендов
  let allBrandsRadios = $(".brands-filter").find(allRadios);
  allBrandsRadios.each(function () {
    $(this).on("click", function (e) {
      countFilters.addBrands();
      showFilterAlert();
    })
  })
  // выбор радиокнопки из формы фильтра тоннажа
  let allTonnRadios = $(".tonn-filter").find(allRadios);
  allTonnRadios.each(function () {
    $(this).on("click", function (e) {
      countFilters.addTonn();
      showFilterAlert();
    })
  })
  // действия после взаимодействия с фильтр-слайдером
  $(".volume-filter").find('#input-min-value').on("input", function () {
    countFilters.addVolume();
    showFilterAlert();
  })
  $(".volume-filter").find('#input-max-value').on("input", function () {
    countFilters.addVolume();
    showFilterAlert();
  })
  $(".volume-filter").find('.noUi-handle-lower').on("touchend mouseup", function () {
    countFilters.addVolume();
    showFilterAlert();
  })
  $(".volume-filter").find('.noUi-handle-upper').on("touchend mouseup", function () {
    countFilters.addVolume();
    showFilterAlert();
  })

  // закрытие каждого из фильтров по отдельности по кнопкам close возле названия фильтра
  $("#close-brands").click(function () {
    countFilters.removeBrands();
    $("#filterApplied").show(200);
    setTimeout(function () {
      $("#filterApplied").hide(200);
    }, 4000);
  })
  $("#close-volume").click(function () {
    countFilters.removeVolume();
    $("#filterApplied").show(200);
    setTimeout(function () {
      $("#filterApplied").hide(200);
    }, 4000);
  })
  $("#close-tonn").click(function () {
    countFilters.removeTonn();
    $("#filterApplied").show(200);
    setTimeout(function () {
      $("#filterApplied").hide(200);
    }, 4000);
  })

  // в мини карточках товара смена изображений при наведении
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

  // формы обратной связи
  // validate forms
  $('input[name="phone"]').mask('+7 (000) 000-00-00');

  // заказать обратный звонок
  const Btn = $(".getcall");
  const form = $(".validate_fade.getcall-form");
  const closeBtn = $(".form-close");
  const mcloseBtn = $(".m-form-close");
  var validator = form.find(".validate").validate(
    {
      rules: {
        cname: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        cname: {
          required: "*не заполненное поле",
          minlength: "*слишком короткое имя"
        },
        phone: {
          required: "*не заполненное поле",
          minlength: "*слишком короткий номер"
        }
      }
    }
  );
  Btn.click(function () {
    form.fadeIn(300);
  });
  closeBtn.click(function () {
    form.fadeOut(300);
    validator.resetForm();
  });
  mcloseBtn.click(function () {
    form.fadeOut(300);
    validator.resetForm();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27)
      form.fadeOut(300);   // esc
    validator.resetForm();
  });
  $(document).mouseup(function (e) {
    var div = $(".validate-form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      form.fadeOut(300);
      validator.resetForm();
    }
  });

  // получить консультацию
  const BtnConsult = $(".getconsult");
  const formConsult = $(".validate_fade.getconsult-form");
  var validatorConsult = formConsult.find(".validate").validate(
    {
      rules: {
        cname: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        cname: {
          required: "*не заполненное поле",
          minlength: "*слишком короткое имя"
        },
        phone: {
          required: "*не заполненное поле",
          minlength: "*слишком короткий номер"
        }
      }
    }
  );
  BtnConsult.click(function () {
    formConsult.fadeIn(300);
  });
  closeBtn.click(function () {
    formConsult.fadeOut(300);
    validatorConsult.resetForm();
  });
  mcloseBtn.click(function () {
    formConsult.fadeOut(300);
    validatorConsult.resetForm();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27)
      formConsult.fadeOut(300);   // esc
    validatorConsult.resetForm();
  });
  $(document).mouseup(function (e) {
    var div = $(".validate-form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      formConsult.fadeOut(300);
      validatorConsult.resetForm();
    }
  })

  // арендовать / узнать цену
  const BtnProduct = $(".getproduct");
  const formProduct = $(".validate_fade.getproduct-form");
  var validatorProduct = formProduct.find(".validate").validate(
    {
      rules: {
        cname: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        cname: {
          required: "*не заполненное поле",
          minlength: "*слишком короткое имя"
        },
        phone: {
          required: "*не заполненное поле",
          minlength: "*слишком короткий номер"
        }
      }
    }
  );
  BtnProduct.click(function () {
    if ($(".validate-form__title2")) {
      $(".validate-form__title2").remove();
    }
    if ($("#form_product")) {
      $("#form_product").remove();
    }
    const formName = ($(this).text());
    const productName = $(this).attr("name");

    $(".validate-form__title span").text(formName);
    $(".validate-form__button button span").text(formName);

    if (productName) {
      $(".validate-form__title").after(function () {
        return '<p class="validate-form__title2">' + productName + '</p>';
      });
      $("#form_theme").after(function () {
        return '<input id="form_product" type="hidden" name="product" value="' + productName + '" />';
      });
    }
    formProduct.fadeIn(300);
  });
  closeBtn.click(function () {
    formProduct.fadeOut(300);
    validatorProduct.resetForm();
  });
  mcloseBtn.click(function () {
    formProduct.fadeOut(300);
    validatorProduct.resetForm();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27)
      formProduct.fadeOut(300);   // esc
    validatorProduct.resetForm();
  });
  $(document).mouseup(function (e) {
    var div = $(".validate-form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      formProduct.fadeOut(300);
      validatorProduct.resetForm();
    }
  })

  // click checkbox in form - disable button
  $('.custom-checkbox').click(function () {
    if ($(this).prop("checked")) {
      $('.terms-error').css('display', 'none');
      $('button[type="submit"]').removeAttr('disabled');
      $('button[type="submit"]').css('opacity', '1');
    }
    else {
      $('.terms-error').css('display', 'block');
      $('button[type="submit"]').prop('disabled', 'true');
      $('button[type="submit"]').css('opacity', '.5');
    }
  })

  // скрывать длинные хлеб крошки на мобильной версии
  if ($(document).width() < 768) {
    var bread = $('.breadcrumbs');
    var breadMobile = bread.clone().removeClass('container').addClass('bread-mobile');
    var length = bread.children('.item').length;
    if (length > 2) {
      $.each(bread.children('.item'), function (index, elem) {
        var text = $(elem).find('span').text();
        if (index == 0)
          $(elem).after('<button id="showBread" class="show-bread"><span>...</span></button>')
        if (index != 0 && index != length - 1)
          $(elem).css('display', 'none');
      })

      bread.after(breadMobile);
    }
  }
  $('#showBread').click(function () {
    if ($('.bread-mobile').is(':visible'))
      $('.bread-mobile').slideUp(300);
    else
      $('.bread-mobile').slideDown(300);
  })
})