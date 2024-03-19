$(document).ready(function(){
    $(".toggle-button").click(function () { 
        $(".links").toggleClass("active");
    });
});

$(function(){
    
    let text = "On all Products"
    let HeaderIndex = 0;

    function typeWriter() { 
        HeaderIndex++;
        $(".left-hero-section h2").html(text.slice(0, HeaderIndex));

        HeaderIndex > text.length ? HeaderIndex = 0 : HeaderIndex = HeaderIndex
     }

    setInterval(typeWriter, 150);
});

$(document).ready(function(){

    const hidden = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           console.log(entry)
           if(entry.isIntersecting){
               entry.target.classList.add("show");
           } else{
               entry.target.classList.remove("show")
           }
        })
    });

    hidden.forEach((el) => observer.observe(el));
});

$(document).ready(function(){
    window.onscroll = function(){
        scrollY >= 600 ? $(".toTop").css("display", "block") : $(".toTop").css("display", "none")
    }
    $(".toTop").click(function(){
        scroll({
            top:0,
        })
    })
});   