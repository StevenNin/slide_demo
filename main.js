// var allButtons = $('#buttons > span')

// for (let i = 0; i < allButtons.length; i++) {
//     $(allButtons[i]).on('click',function(x){
//         // console.log('hi')
//         var index = $(x.currentTarget).index()
//         var p = index * -300
//         $('#images').css({
//             transform: 'translate('+p+'px)'
//         })
//         n =index
//         // allButtons.eq(n)
//         // .addClass('red')
//         // .siblings('.red').removeClass('red')
        
//         //优化代码  高亮控制
//         activeButton(allButtons.eq(n))
//     })
    
// }

// var n = 0;
// var size = allButtons.length



// // allButtons.eq(n%size).trigger('click')
// //     // .addClass('red')
// //     // .siblings('.red').removeClass('red')

// // var timeId = setInterval(() => {
// //     n++
// //     allButtons.eq(n%size).trigger('click')
// //     .addClass('red')
// //     .siblings('.red').removeClass('red')
// // },1000)

// //要从状态机角度来理解轮播的动作变换，已经初步朝状态机机制的结构优化
// var timeId = setTimer()
// function setTimer(){
//     return setInterval(() => {
//         n ++
//         allButtons.eq(n % size).trigger('click')
//     }, 3000);
// }
// function activeButton($button){
//     $button
//     .addClass('red')
//     .siblings('.red').removeClass('red')
// }


// $('.window').on('mouseenter',function(){
//     window.clearInterval(timeId)
// })

// // $('.window').on('mouseleave',function(){
// //     timeId = setInterval(() => {
// //         n++
// //         allButtons.eq(n % size).trigger('click')
// //       .addClass('red')
// //       .siblings('.red').removeClass('red')
// //     },3000)
// // })

// $('.window').on('mouseleave',function(){
//     timeId = setTimer()
// })

let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0


makeFakeSlides()
$slides.css({transform:'translateX(-300x)'})
bindEvents()
$(next).on('click',function(){
    goToSlide(current+1)
})
$(previous).on('click',function(){
    goToSlide(current+1)
})

let timer = setInterval(function(){
    goToSlide(current+1)
},2000)
$('.container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleace',function(){
    timer =etInterval(function(){
        goToSlide(current+1)
    },2000)
})

function bindEvents(){
    $('#buttonWrapper').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index){
    if(index > $buttons.length-1){
        index = 0
    }else if(index  < 0 ){
        index = $buttons.length-1
    }
    if(current === $buttons.length-1 && index ===0){
        $slides.css({transform:`translateX(${-($buttons.length-1)*300}px)`})
        .one('transitionend',function(){
            $slides.hide()
            $slides.offset()
            $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
        })
    }else if(current === 0 && index === $buttons.length-1){
        $slides.css({transform:`translateX(0px)`})
        .one('transitionend',function(){
            $slides.hide()
            $slides.offset()
            $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
        })
    }else{
        $slides.css({transform:`translateX(${-(index+1)*300}px)`})
    }

    current = index
 

}

function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.append($lastCopy)
}