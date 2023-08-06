const toggle = document.getElementById('dark')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const highlights = document.querySelector('.highlights')
const highlight = document.querySelector('.card .highlights')
const card = document.querySelector('.card')
const dark = document.querySelector('#dark')
const button = document.querySelector('.stream')
const link = document.querySelector('#SLink')

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-sun');
    if (this.classList.toggle('bi-moon')) {
       
        body.style.background = '#e4f0fa'
        body.style.transition = '0.5s'
        highlights.style.color = '#ff7c7c'
        highlights.style.transition = '1s'
        dark.style.color = '#ff7c7c'
        dark.style.transition = '1s'
        highlight.style.color = '#ff7c7c'
        highlight.style.transition = '1s'
        h1.style.color = '#2b3c5b'
        h1.style.transition = '0.5s'
        p.style.color = '#7a8aa3'
        p.style.transition = '1s'
        card.style.background = '#e6eef8'
        card.style.transition = '0.5s'
        button.style.background = 'linear-gradient(160deg, rgb(250, 177, 135) 0%, rgb(246, 117, 117) 100%)'
        button.style.color = '#2b3c5b'
        button.style.transition = '0.5s'
        link.style.background = '#d3dee3'
        link.style.transition = '0.5s'
        link.style.color = '#2b3c5b'
        
    }
    else {
        body.style.background = '#121215'
        body.style.transition = '0.5s'
        highlights.style.color = 'rgb(125, 90, 242)'
        highlights.style.transition = '1s'
        highlight.style.color = 'rgb(125, 90, 242)'
        highlight.style.transition = '1s'
        dark.style.color = 'rgb(125, 90, 242)'
        dark.style.transition = '1s'
        h1.style.color = '#dfe0fb'
        h1.style.transition = '1s'
        p.style.color = '#84849d'
        p.style.transition = '1s'
        card.style.background = '#18181c'
        card.style.transition = '0.5s'
        button.style.background = 'linear-gradient(160deg, rgb(145, 114, 247) 0%, rgb(104, 61, 247) 100%)'
        button.style.color = '#dfe0fb'
        button.style.transition = '0.5s'
        link.style.background = '#2f2d36'
        link.style.color = '#dfe0fb'
        link.style.transition = '0.5s'

   
    }
})