let box = document.querySelector('.gift-box')
let boxTap = document.querySelector('.gift-tap')
let loffyHeart = document.querySelector('.loffy-heart')
let title = document.querySelector('.title')
let loffyGif = document.querySelector('.loffy-gif')
let michi = document.querySelector('.michi')
let pCarcel = document.querySelector('.p-carcel')

box.addEventListener('click', function(e) {
    boxTap.style.transform = "translateX(-80px) rotate(-70deg)"
    boxTap.style.transition = "0.7s"

    box.style.animationPlayState = "paused"

    loffyHeart.style.transform = "translateY(-100px)"
    loffyHeart.style.transition = "1.5s"


    title.style.display = "block"
    title.style.margin = "auto"
    title.style.opacity = "0"

    loffyGif.style.display = "block"
    loffyGif.style.opacity = "0"

    setTimeout(function() {
        box.style.display = "none";
        loffyHeart.style.display = "none";

        title.style.transition = "opacity 2s"
        title.style.opacity = "1"
        
        loffyGif.style.transition = "opacity 2s"
        loffyGif.style.opacity = "1"

        pCarcel.style.display = "block"
    }, 4000)

    setTimeout(function() {
        michi.style.display = "block"
    }, 6000)

    
    setTimeout(function() {
        michi.style.transform = "translateY(-130px)" 
        michi.style.transition = "2s"
    }, 7000)
});