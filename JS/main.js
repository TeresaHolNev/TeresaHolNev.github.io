$(document).ready(function(){
    //Menú hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},800);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},800);
    });
    //Menú hamburgesa páginas normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},800);
        $(".menu2 a").toggleClass("aparicion");
    });
    //Scroll suave
$("a").on("click", function(){
    if (this.hash !== ""){
        var hash = this.hash;
        $("html, body").animate({
            //Objeto con propiedad y valor
            scrollTop: $(hash).offset().top
        },800);
    }
    });
    //Ventana modal
    $("#open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });
});