/* Selecione todos itens nav a, em que a possui o primeiro caractere "#" */
const menuItems = document.querySelectorAll('nav a[href^="#"]');

// Verifica se ocorreu algum evento nos itens selecionados, no caso, "click". Se sim, leva até a função scrollToIdOnClick
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

// event é um objeto com vários métodos inclusos, um deles, que usaremos, é o target. Diz em que alvo o evento ocorreu
function scrollToIdOnClick(event)
{
    // Tira o comportamento padrão de um evento -> padrão: scrollar no click e colocar o id na URL
    event.preventDefault();
    // Retorna <a href="#x"> </a>
    const element = event.target;
    // Seleciona o atributo 'href', no caso, o que há nele (#id)
    const id = element.getAttribute('href');
    const section = document.querySelector(id);
    
    // Podemos utilizar [elemento].offsetTop para saber quantos px está do topo
    const to = section.offsetTop;

    // scroll(x, y)
    // window.scroll(0, to);

    console.log(to);

    if(id === '#sobre')
    {
        window.scroll({
            top: to - 170,
            behavior: "smooth"
        });        
    } else if (id === '#projetos')
    {
        window.scroll({
            top: to + 30,
            behavior: "smooth"
        });
    }
    else
    {
        window.scroll({
            top: to,
            behavior: "smooth"
        });
    }
    // Também pode ser usado assim. {top (do topo): to (coordenada), behavior: "smooth" (suave)}
}