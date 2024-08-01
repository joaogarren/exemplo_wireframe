document.querySelector('button').addEventListener('click',function(){
 alert('Ação de clique realizada!');
});

//Adicionando funcionalidade ao menu expansível
document
.querySelector("menu-container h3").addEventListener("click",function(){
    const menuList = document.querySelector(".menu-container ul");
    menuList.classList.toggle("show-menu");
});
// Adiciondo funcionalidade ao formulário
document.querySelector("form").addEventListener("submit", function (event){
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  
  alert('Formulário enviado!\nNome:${nome}\nEmail:${email}');

});

