// 结束时间
var countDown = function() {
    var endTime = new Date("08/18/2019 12:00:00")
    var diff = endTime.getTime() - Date.now()
    var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour * 24

    var days = Math.floor(diff / _day)
    var hours = Math.floor((diff % _day) / _hour)
    var minutes = Math.floor((diff % _hour) / _minute)
    var seconds = Math.floor((diff % _minute) / _second)

    if (days < 10) days = '00' + days
    else if (days < 100) days = '0' + days
    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours
    $('.countdown .days').innerText = days
    $('.countdown .hours').innerText = hours
    $('.countdown .minutes').innerText = minutes
    $('.countdown .seconds').innerText = seconds
    console.log(`${days} ${hours} ${minutes} ${seconds}`);
}


var countUp = function() {
    var startTime = new Date("04/23/2019 02:30:00")
    var diff = Date.now() - startTime
    var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour * 24

    var days = Math.floor(diff / _day)
    var hours = Math.floor((diff % _day) / _hour)
    var minutes = Math.floor((diff % _hour) / _minute)
    var seconds = Math.floor((diff % _minute) / _second)

    if (days < 10) days = '00' + days
    else if (days < 100) days = '0' + days
    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours
    $('.countup .days').innerText = days
    $('.countup .hours').innerText = hours
    $('.countup .minutes').innerText = minutes
    $('.countup .seconds').innerText = seconds
    console.log(`${days} ${hours} ${minutes} ${seconds}`);
}
countDown()
countUp()

setInterval(countDown, 1000);
setInterval(countUp, 1000);