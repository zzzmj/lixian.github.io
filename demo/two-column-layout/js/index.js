const $ = (selector) => {
    return document.querySelector(selector)
}

const link = document.querySelectorAll('link')
const leftBox = $('.left')
const rightBox = $('.right')

const showStyle = (index) => {
    // 显示第index个样式和共同样式, 隐藏其他的样式
    for (let i = 0; i < link.length; i++) {
        link[i].disabled = true
    }
    link[0].disabled = false
    link[index].disabled = false
}

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

    $('#select-style').addEventListener('change', (e) => {
        const index = e.target.value
        showStyle(index)
    })
}

const __main = () => {
    showStyle(1)
    handleClick()
}

__main()