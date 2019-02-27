const $ = (selector) => {
    return document.querySelector(selector)
}

const leftBox = $('.left')
const midBox = $('.middle')
const rightBox = $('.right')

const insertTpl = (element) => {
    const p = `
        <p>插入一些新内容</p>
    `
    element.insertAdjacentHTML('beforeend', p)
}

const handleClick = () => {
    $('.btn-left').addEventListener('click', () => {
        insertTpl(leftBox)
    })
    
    $('.btn-right').addEventListener('click', () => {
        insertTpl(rightBox)
    })

    $('.btn-middle').addEventListener('click', () => {
        insertTpl(midBox)
    })
}

const __main = () => {
    handleClick()
}

__main()