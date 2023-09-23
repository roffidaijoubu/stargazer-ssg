

$('.slideshow').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
});

function setCurrencyToggle(currency) {
    //set currency toggle to checked if localStorage.getItem('currency') == 'IDR', else set to unchecked

    if (currency == 'IDR') {
        $('#currency_toggle, #currency_toggle_mobile').prop('checked', true).change();
    } else {
        $('#currency_toggle, #currency_toggle_mobile').prop('checked', false).change();
    }
}

function changeCurrency(currency) {
    // hide .price and only show .price-[currency]
    console.log(currency);
    $('.price').hide();
    $('.price-' + currency).show();

}
$(document).ready(function () {
    // save current currency in localStorage
    var currentCurrency = localStorage.getItem('currency');
    // if currentCurrency is null, set currentCurrency to 'usd'
    if (currentCurrency == null) {
        currentCurrency = 'USD';
        localStorage.setItem('currency', currentCurrency);
    }



    $currentPage = $('[data-page]').data('page');
    // Load and include footer content
    $('[data-menu="' + $currentPage + '"]').addClass('active');
    // add class active to data-currency = currentCurrency, 
    $('[data-currency="' + currentCurrency + '"]').addClass('active');

    $('#navButton').on('click', function () {
        //toggle slideIn() and slideOut() for $('#navMenu')
        $('#navMenu').slideToggle();
    });
    // call setCurrencyToggle()
    setCurrencyToggle(localStorage.getItem('currency'));
    changeCurrency(currentCurrency);
    $("#currency_toggle, #currency_toggle_mobile").on("change", function () {
        // if checked, set currentCurrency to 'IDR', else set currentCurrency to 'USD'
        currentCurrency = $(this).is(':checked') ? 'IDR' : 'USD';
        // save currentCurrency to localStorage
        localStorage.setItem('currency', currentCurrency);
        // call changeCurrency(currentCurrency)
        changeCurrency(currentCurrency);

    })



});

