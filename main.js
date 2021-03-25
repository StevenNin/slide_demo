var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click',function(x){
        // console.log('hi')
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate('+p+'px)'
        })
        n =index
        // allButtons.eq(n)
        // .addClass('red')
        // .siblings('.red').removeClass('red')
        
        //优化代码  高亮控制
        activeButton(allButtons.eq(n))
    })
    
}

var n = 0;
var size = allButtons.length



// allButtons.eq(n%size).trigger('click')
//     // .addClass('red')
//     // .siblings('.red').removeClass('red')

// var timeId = setInterval(() => {
//     n++
//     allButtons.eq(n%size).trigger('click')
//     .addClass('red')
//     .siblings('.red').removeClass('red')
// },1000)

//要从状态机角度来理解轮播的动作变换，已经初步朝状态机机制的结构优化
var timeId = setTimer()
function setTimer(){
    return setInterval(() => {
        n ++
        allButtons.eq(n % size).trigger('click')
    }, 3000);
}
function activeButton($button){
    $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}


$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})

// $('.window').on('mouseleave',function(){
//     timeId = setInterval(() => {
//         n++
//         allButtons.eq(n % size).trigger('click')
//       .addClass('red')
//       .siblings('.red').removeClass('red')
//     },3000)
// })

$('.window').on('mouseleave',function(){
    timeId = setTimer()
})