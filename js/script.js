/*-------------------- navbar --------------------*/
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

/*-------------------- print --------------------*/
document.querySelector("#printButton").addEventListener("click", function() {
    window.print();
});