document.addEventListener("DOMContentLoaded", () => {
    // burger
    const body = document.querySelector("body");
    const menu = body.querySelector(".nav-mobile");
    const burger = body.querySelector(".burger");
    const overlay = body.querySelector(".overlay");
    const close = menu.querySelector(".close");
    const headerLogin = document.getElementById("headerLogin");
    const mobileLogin = document.getElementById("mobileLogin");
    const signIn = document.getElementById("signIn");
    const register = document.getElementById("register");
    const logInPopup = document.getElementById("logInPopup");
    const popup = body.querySelector(".popup");

    burger.addEventListener("click", () => {
        showItem(menu);
    });

    close.addEventListener("click", () => {
        hideItem(menu);
    });

    register.addEventListener("click", () => {
        togglePopup(register, "signOn");
    });

    logInPopup.addEventListener("click", () => {
        togglePopup(logInPopup, "signUp");
    });

    function togglePopup(item, flag) {
        let parent = item.closest(".popup");
        let title = parent.querySelector(".popup-title");
        let signInWrap = parent.querySelector(".signIn-wrap");
        let forgot = parent.querySelector(".forgot");
        let popupRegQues = parent.querySelector(".popup-reg-ques");
        let logInPopup = parent.querySelector("#logInPopup");

        signInWrap.classList.toggle("active");
        forgot.classList.toggle("active");
        register.classList.toggle("active");
        logInPopup.classList.toggle("active");

        if (flag === "signOn") {
            title.innerText = "Create account";
            popupRegQues.innerText = "Already have an account?";
        }

        if (flag === "signUp") {
            title.innerText = "Log in to your account";
            popupRegQues.innerText = "Don’t have an account?";
        }
    }

    overlay.addEventListener("click", () => {
        let activeItem = body.querySelector(".active");
        hideItem(activeItem);
    });

    headerLogin.addEventListener("click", () => {
        showItem(popup);
    });

    menu.querySelectorAll(".nav-item").forEach((link) => {
        link.addEventListener("click", () => {
            if (link == mobileLogin) {
                hideItem(menu);
                showItem(popup);
            } else {
                hideItem(menu);
            }
        });
    });

    signIn.addEventListener("click", () => {
        hideItem(popup);
        let parent = signIn.closest(".popup");
        let email = parent.querySelector('input[name="email"]').value;
        let password = parent.querySelector('input[name="password"]').value;
        alert(`E-mail: '${email}', Password: '${password}'`);
    });

    function showItem(item) {
        item.classList.add("active");
        overlay.classList.add("active");
        body.classList.add("lock");
    }

    function hideItem(item) {
        item.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("lock");
    }

    // smooth scroll

    const anchors = document.querySelectorAll('a.nav-link[href*="#"]');

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();

            const blockID = anchor.getAttribute("href").substring(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // slider

    const dotsArr = document.querySelectorAll(".dot");
    const slider = document.querySelector(".slider");
    const slides = slider.querySelector(".slides");
    const slidesArr = slides.querySelectorAll(".slide");
    const slide = slides.querySelector(".slide");

    dotsArr.forEach((dot) => {
        dot.addEventListener("click", () => {
            let id = dot.dataset.slide;

            slideItems(id);
        });
    });

    const nextArrow = slider.querySelector(".next");
    nextArrow.addEventListener("click", () => {
        let activeSleder = slider.querySelector(".slide.active");
        let id = +activeSleder.dataset.id + 1;

        id > slidesArr.length ? (id = id - slidesArr.length) : "";

        slideItems(id);
    });

    const preArrow = slider.querySelector(".pre");
    preArrow.addEventListener("click", () => {
        let activeSleder = slider.querySelector(".slide.active");
        let id = +activeSleder.dataset.id - 1;

        id < 1 ? (id = slidesArr.length - id) : "";

        slideItems(id);
    });

    function moveSlider(id) {
        const gapPX = getComputedStyle(slides).gap;
        const slideWidthPX = getComputedStyle(slide).width;

        const gap = +gapPX.slice(0, gapPX.length - 2);
        const slideWidth = +slideWidthPX.slice(0, slideWidthPX.length - 2);

        const centerScreen = window.screen.width / 2;
        const halfSlide = slideWidth / 2;
        const wholeSlide = gap + slideWidth;

        const translation = centerScreen - (wholeSlide * (id - 1) + halfSlide);

        slides.style.transform = `translateX(${translation}px)`;
    }

    function setActive(id) {
        let activeDot = slider.querySelector(`.dot[data-slide="${id}"]`);
        activeDot.classList.add("active");
        let activeSlide = slider.querySelector(`.slide[data-id="${id}"]`);
        activeSlide.classList.add("active");
    }

    function removeActive() {
        slidesArr.forEach((slide) => {
            slide.classList.remove("active");
        });
        dotsArr.forEach((dot) => {
            dot.classList.remove("active");
        });
    }

    function slideItems(id) {
        removeActive();
        moveSlider(id);
        setActive(id);
    }

    slideItems(2);
    
});