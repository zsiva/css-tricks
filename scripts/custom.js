$('.menu-link').on('click', function () {
    $( "#page-content-wrapper" ).load( "pages/" + $(this).data('content') + ".html");
})
