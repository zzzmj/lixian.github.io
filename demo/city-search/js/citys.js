$('.datail-back').on('click', function() {        
    goBackCity()
})

var searchCitys = function() {
    $('#search-start-citys').on('keyup', function() {
        $('.citys-body').show()
        $('.citys-body .row').hide()
        $('.citys-hot').hide()
        var inputVal = $('#search-start-citys').val()
        console.log(inputVal);
        $('.citys-body .row').each(function() {
            var city = $(this)
            var code = city.data('code')
            if(inputVal != '' && code.toLowerCase().includes(inputVal.toLowerCase())) {            
                city.show()
            }
            var val = city.text()
            if(inputVal != '' && val.includes(inputVal)) {
                city.show()
            }
        })
    })
}


$('.citys-body .row').bind('click', function() {
    let l = $('.city-component-loc').text().trim()
    console.log($(this))
    var mCity = $(this)
    if (l == '出发城市') {
        $('#id-from').val(mCity.text().trim())
    } else if (l == '达到城市') {
        $('#id-to').val(mCity.text().trim())
    } else {
        console.log(`信息有误 l: ${l} city: ${mCity.text()}`);
    }
    // 清空city页输入框信息
    $('#search-start-citys').val('')
    goBackCity()
})

$('.hot-item-wrap').bind('click', function() {
    let l = $('.city-component-loc').text().trim()
    console.log($(this))
    var mCity = $(this)
    if (l == '出发城市') {
        $('#id-from').val(mCity.text().trim())
    } else if (l == '达到城市') {
        $('#id-to').val(mCity.text().trim())
    } else {
        console.log(`信息有误 l: ${l} city: ${mCity.text()}`);
    }
    $('#search-start-citys').val('')
    goBackCity()
})

var inputCity = function() {
    let idFrom = $('#id-from')
    idFrom.on('click', function() {
        console.log('click id from');
        $('.container-train').hide()
        $('.citys-body').hide()
        $('.citys-hot').show()
        $('.city-component-loc').text('出发城市')
        $('#city-component').addClass('city-component-active')
    })
    
    let idTo = $('#id-to')
    idTo.on('click', function() {
        $('.container-train').hide()
        $('.citys-body').hide()
        $('.citys-hot').show()
        $('.city-component-loc').text('达到城市')
        $('#city-component').addClass('city-component-active')
    })
}

var goBackCity = function() {
    $('#city-component').removeClass('city-component-active')
    $('.container-train').show()
}

var __main = function() {
    inputCity()
    searchCitys()
}

__main()
