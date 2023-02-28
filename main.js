window.arenaCallback = () => {

    let imageBlocks = document.querySelectorAll('li.image-block') 

    imageBlocks.forEach((block) => {

        block.querySelector('figure').onclick = () => {
            block.classList.add('active')
        }

        block.querySelector('aside').onclick = () => {
            block.classList.remove('active')
            }   

        })
}