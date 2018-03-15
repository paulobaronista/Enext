// Menu hamburger
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}

$(document).ready(function(){
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.busca').toggle();
    });

    $('#ModalProdutos').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var id = button.data('produto-id');
        var modal = $(this);
        //console.log(id);
        $.get('potions.json', function(potions){
           //console.log(potions.potions[id]) 
           var potion = potions.potions[id];
            //console.log(potion.image);
            $('#produto-image').attr('src', 'img/products/' + potion.image);
            $('#produto-nome').text(potion.name);
            $('#produtos-ingredients').html('<li>' + potion.ingredients.join('</li><li>') + '</li>');
        },'json');
    });
});