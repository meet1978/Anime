 var tl = gsap.timeline();
var nav = document.querySelector("nav");
var dots = document.querySelector("h2");
var dotsText = document.querySelector("h2").textContent;
var splitedText = dotsText.split("");;
var clutter = "";

splitedText.forEach(function (idx) {
    clutter += `<span class="dots" >${idx}</span>`
})

dots.innerHTML = clutter;

gsap.from("span", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
})

setTimeout(function () {
    tl.to(".Loader", {
        x: "100%",
        duration: 1,
        display:"none"
    })
    tl.to("nav", {
        height: "12.6%",
        duration: 1
    }, 2)

        .to(".page1 img", {
            y: 3,
            duration: 2,
            repeat: -1,
            yoyo: true
        })
}, 5000)

var title = document.querySelector(".title");
title.addEventListener("mouseenter", function () {
    gsap.to(".title, .cont", {
        y: "-100%",
        duration: 0.6
    })
})

var img = document.querySelector(".page1 img")
img.addEventListener("mouseenter", function () {
    if (input_state == "none") {
        gsap.to(".title, .cont", {
            y: 0,
            duration: 0.6
        })
        gsap.to(".page1 img", {
            y: 6,
            duration: 1.8,
            repeat: -1,
            yoyo: true
        })
    }
})

document.querySelector("input")
    .addEventListener("focus", function () {
        tl.to("input", {
            width: "50%",
            duration: 1,
        })
        input_state = "typing";

    })
setInterval(function () {
    if (input_state === "none") {
        swipeup();
    }
}, 5000)

var input = document.querySelector("input")
input.addEventListener("blur", function () {
    input_state = "none";
    tl.to("input", {
        width: "29%",
    })
})

var input_state = "none";
var state = 0;

function swipeup() {
    if (state == 0) {
        gsap.to(".title,.cont", {
            y: 0
        })
        state = 1
    }
    else {
        gsap.to(".title,.cont", {
            y: "-100%"
        })
        state = 0
    }
}

var img_cont = document.querySelector(".img_container");
var upper = document.querySelector(".upper");
var image = img_cont.querySelectorAll("img");
var upper_cont = document.querySelector(".upper_cont");
var logo = document.querySelector(".text_left");
var text = document.querySelector(".text_right");

var arr = [
    {
        logo:"text2.png",
        image:"2.jpg",
        title:"Saturo Gojo",
        about:`This is most powerful character in this Anime,
               for the more information hover on the second image`
    },
    {
        logo:"https://www.mastromanga.com/cdn/shop/collections/jujutsu_kaisen_hd_png_by_newjer53_dekiqwv-pre.png?v=1657372955",
        image:"3.jpg",
        title:"Saturo Gojo",
        about:`This character is famous in this Anime for the,
               his powers and Attitude he is a Independent character`
    },
    {
        logo:"text3.png",
        image:"1.jpg",
        title:"Saturo Gojo",
        about:`Saturo Gojo is have a student who is the,
         whistle of Sukoona who is the most powerful Demon in this Anime World`
    },
    {
        logo:"text4.png",
        image:"4.jpg",
        title:"Saturo Gojo",
        about:`In this Anime Gojo is very intelligent and,
               handsome also In this Anime he is also famous for his voice`
    },
    {
        logo:"text2.png",
        image:"5.jpg",
        title:"Saturo Gojo",
        about:`that's why he is the most loved and powerful,
              character in this Anime and he is playing the role of the teacher`
    },
]

image.forEach(function(elem,idx){
    elem.addEventListener("mouseenter",function(e){
        gsap.to(upper_cont,{
            opacity:1,
            duration:1,
        })
        gsap.to(".text",{
            opacity:1
        })
        setTimeout(function(){
            upper.innerHTML = `<img src="${e.target.src}" >`
            gsap.to(".upper img",{
                x:0,
                duration:0.5,
            })
            logo.innerHTML = `<img src="${arr[idx].logo}">`
            gsap.to(".text_left img",{
                x:0,
                duration:0.55
            })
            text.innerHTML = `<h3>${arr[idx].title}</h3> <p>${arr[idx].about}</p>`
            gsap.to(".text_right h3,.text_right p",{
                x:0,
                duration:0.46
            })
        },500)
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(".upper img",{
            x:"100%",
            duration:0.7
        })
        gsap.to(".text",{
            opacity:0
        })
        gsap.to(".text_left img",{
            x:"160%",
            duration:0.3
        })
        gsap.to(".text_right h3,.text_right p",{
            x:"150%",
            duration:0.6
        })
    })
    img_cont.addEventListener("mouseleave",function(){
        gsap.to(".upper_cont",{
            opacity:0,
            duration:1
        })
    })
})


