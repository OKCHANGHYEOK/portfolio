function greetingHandler() {
    const greetings = "안녕하세요! 백엔드 개발자 옥창혁의 포트폴리오 입니다."
    const greetingBox = document.querySelector('.typed-text')
    greetingBox.innerHTML = ''

    for(let i = 0; i < greetings.length; i++) {
        setTimeout(() => {
            greetingBox.innerHTML += greetings[i]
        }, i * 100)
    }
}

function readMeHandler(event) {
    const readme = document.getElementById("readme_container")
    readme.classList.remove('hidden')

    let url = event.target.getAttribute("value") + '.jpg'
    const content = document.getElementById("readme_content")
    content.style.backgroundImage = 'url("/image/' + url + '\")'
}

function imageSortHandler() {
    const imageArea = document.querySelectorAll('.project-item_inner_images')
    imageArea.forEach(e => {
        const first = e.querySelector('.project-item_inner_images_box')
        first.style.zIndex = '10'
    })
}

function imageSlideHandler(event) {
    const slide = event.target.parentNode
    let current = slide.querySelector('.current_slide')
    const images = slide.parentNode.querySelectorAll('.project-item_inner_images_box')

    let next = event.target.classList.contains('left_arrow') ? +current.innerText - 1 : +current.innerText + 1

    if(next === 0 || next > +slide.querySelector('.total_slide').innerText) {
        return
    }

    images.forEach((element, index) => {
        if(index === next - 1) {
            element.style.zIndex = '10'
        }
        else {
            element.style.zIndex = '0'
        }
    })

    current.innerText = next
}