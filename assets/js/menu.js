
//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})
document.addEventListener('DOMContentLoaded', function() {
    const imagemLightbox = document.querySelector('.imagem-drop-zone');
    const lightbox = document.querySelector('.drop-zone');
    const imagemAmpliada = document.querySelector('.Parceria-Lacoste');
    const fecharLightbox = document.querySelector('.fechar');
  
    if (imagemLightbox) {
      imagemLightbox.addEventListener('dblclick', function() {
        lightbox.style.display = 'flex';
        imagemAmpliada.src = this.src;
      });
    }
  
    if (fecharLightbox) {
      fecharLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
      });
    }
  });