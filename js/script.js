  // fadeOut do loader
$(window).on("load", function() {
    $(".loader-container").fadeOut("slow");
    $("body").removeClass("loading");
//     $(function() {
//       $('.lazy').Lazy({
//         onError: function(element) {
//           console.log('error loading ' +element.data('src'));
//         }
//       });
//   });
});
$('.conteudo').hide();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// botao toTop:

// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
    } else {
        $(scrollTop).css("opacity", "0");
    }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 800);
    setTimeout(() => {
        $('.conteudo').hide();
    }, "1000")
    
    return false;
});

//botao inicial
$('.inicio').click(()=> {
    $('html, body').animate({
        scrollTop: $("#tela02").offset().top
    }, 1000);
})

// links p o conteúdo
$('#link-1').click(()=>{
    $('.conteudo').hide()
    $('#conteudo-educadores').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-educadores").offset().top
    }, 1000);
})

$('#link-2').click(()=>{
    $('.conteudo').hide()
    $('#conteudo-familia').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-familia").offset().top
    }, 1000);
})

$('#link-3').click(()=>{
    $('.conteudo').hide()
    $('#conteudo-criancas').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-criancas").offset().top
    }, 1000);
})