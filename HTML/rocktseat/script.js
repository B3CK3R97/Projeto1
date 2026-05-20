function toggleMode() {
    const html = document.documentElement
    //html.classlist.toggle('light')


    // Pegar a tag img
    const img = document.querySelector("#profile img")
    

    // Substituir a imagem

    if(html.classList.contains("light")) {

        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./Assets/Midia.jpg")
        img.setAttribute("alt", "Imagem do desenvolvedor")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./Assets/Midia-light.png")
        img.setAttribute("alt", "Imagem com oculos de sol")
    }
    
    

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    
    
    
}