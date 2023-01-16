function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = data.get()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'modelomanha.png'
        document.body.style.background = '#76C2F7'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'modelotarde.png'
        document.body.style.background = '#F98506'
    } else {
        img.src = 'modelonoite.png'
        document.body.style.background = '#5F4B76'
    }
}


