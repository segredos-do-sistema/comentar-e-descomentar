function azul(){
    var azul = document.body
    azul.style.background = 'blue'

    var cor_da_caixa = document.getElementsByTagName('button')[0]
    cor_da_caixa.style.background = 'blue'

    var neutro = document.getElementById('cor-amarelo')
    neutro.style.background = ''
    var neutro = document.getElementById('cor-vermelho')
    neutro.style.background = ''

     /*  */var cor = document.getElementById('cor') 
    cor.innerText=('você mudou para a cor azul')
    // cor.style.fontSize ='25px'
    cor.style.color = 'white'
    cor.style.background = 'rgb(71, 89, 245)'
    
}