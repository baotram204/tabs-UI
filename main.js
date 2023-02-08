const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

const items = $$('.tab-item')
const panes = $$('.tab-pane')
const line = $('.line')


items.forEach((item, index) => {


    item.addEventListener('click', () => {
        const acti= $('.tab-item.active')
        acti.classList.remove('active')
        const activ= $('.tab-pane.active')
        activ.classList.remove('active')


        item.classList.add('active')
        panes[index].classList.add('active')

        line.style.left= item.offsetLeft + 'px'
        line.style.width= item.offsetWidth + 'px'
    
    })
})