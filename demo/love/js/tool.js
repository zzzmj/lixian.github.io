var $ = function(selector) {
    var list = document.querySelectorAll(selector)
    if (list.length > 1) {
        return list
    } else {
        return document.querySelector(selector)
    }
}

