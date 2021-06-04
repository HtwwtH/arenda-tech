$(document).ready(function ($) {
  $('input[name="phone"]').mask('+7 (000) 000-00-00');

  var validator = $(".validate").validate(
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

  // заказать обратный звонок
  const Btn = $(".getcall");
  const form = $(".validate_fade.getcall-form");
  const closeBtn = $(".form-close");
  const mcloseBtn = $(".m-form-close");

  Btn.click(function () {
    // if ($(".validate-form__title2")) {
    //   $(".validate-form__title2").remove();
    // }
    // if ($("#form_product")) {
    //   $("#form_product").remove();
    // }
    // if ($("#form_productHref")) {
    //   $("#form_productHref").remove();
    // }
    // console.log($(this).text());
    // const formName = ($(this).text());
    // const productName = $(this).attr("name");

    // $(".validate-form__title").text(formName);
    // $(".validate-form__button button span").text(formName);
    // // $("#form_theme").val(formName);

    // if (productName) {
    //   $(".validate-form__title").after(function () {
    //     return '<p class="validate-form__title2" style="color: #FFAB00; font-size: 24px; line-height: 29px; margin-top: -16px; margin-bottom: 32px;">' + productName + '</p>';
    //   });
    //   $("#form_theme").after(function () {
    //     return '<input id="form_product" type="hidden" name="product" value="' + productName + '" />';
    //   });
    // }

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
  BtnConsult.click(function () {
    formConsult.fadeIn(300);
  });
  closeBtn.click(function () {
    formConsult.fadeOut(300);
    validator.resetForm();
  });
  mcloseBtn.click(function () {
    formConsult.fadeOut(300);
    validator.resetForm();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27)
      formConsult.fadeOut(300);   // esc
    validator.resetForm();
  });
  $(document).mouseup(function (e) {
    var div = $(".validate-form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      formConsult.fadeOut(300);
      validator.resetForm();
    }
  })

  // арендовать / узнать цену
  const BtnProduct = $(".getproduct");
  const formProduct = $(".validate_fade.getproduct-form");
  BtnProduct.click(function () {
    if ($(".validate-form__title2")) {
      $(".validate-form__title2").remove();
    }
    if ($("#form_product")) {
      $("#form_product").remove();
    }
    console.log($(this).text());
    const formName = ($(this).text());
    const productName = $(this).attr("name");

    $(".validate-form__title span").text(formName);
    $(".validate-form__button button span").text(formName);
    // $("#form_theme").val(formName);

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
    validator.resetForm();
  });
  mcloseBtn.click(function () {
    formProduct.fadeOut(300);
    validator.resetForm();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27)
      formProduct.fadeOut(300);   // esc
    validator.resetForm();
  });
  $(document).mouseup(function (e) {
    var div = $(".validate-form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      formProduct.fadeOut(300);
      validator.resetForm();
    }
  })
});