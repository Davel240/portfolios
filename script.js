/* ============================================
            MOBILE NAVIGATION
============================================ */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


/* ============================================
            SMOOTH SCROLL
============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({

            top: target.offsetTop - 75,

            behavior: "smooth"

        });

    });

});


/* ============================================
            NAVBAR ON SCROLL
============================================ */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.padding = "0";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
        navbar.style.background = "rgba(255,255,255,.96)";

    }

    else{

        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255,255,255,.92)";

    }

});


/* ============================================
            SCROLL REVEAL
============================================ */

const revealElements = document.querySelectorAll(

".about-text, .stat-item, .achievement-card, .skill-item, .project-card, .contact-info, .contact-form"

);

const reveal = () => {

    revealElements.forEach(item=>{

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};


window.addEventListener("load",()=>{

    revealElements.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(40px)";

        item.style.transition=".7s ease";

    });

    reveal();

});

window.addEventListener("scroll",reveal);


/* ============================================
            ACTIVE NAVIGATION
============================================ */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ============================================
        HERO IMAGE FLOATING EFFECT
============================================ */

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

    setInterval(()=>{

        heroImage.animate(

            [

                {

                    transform:"translateY(0px)"

                },

                {

                    transform:"translateY(-10px)"

                },

                {

                    transform:"translateY(0px)"

                }

            ],

            {

                duration:3500,

                iterations:1

            }

        );

    },3500);

}


/* ============================================
            CONTACT FORM
============================================ */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for your message! I'll get back to you soon.");

    form.reset();

});

}


/* ============================================
            BACK TO TOP
============================================ */

const backToTop = document.querySelector(".back-to-top");

if(backToTop){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.opacity = "1";

        backToTop.style.pointerEvents = "auto";

    }

    else{

        backToTop.style.opacity = "0";

        backToTop.style.pointerEvents = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}


/* ============================================
                PAGE LOADED
============================================ */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});