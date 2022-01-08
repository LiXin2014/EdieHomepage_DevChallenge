const mobileNav = document.querySelector(".mobile-navigation");
const openMobileButton = document.querySelector(".open-mobile-nav");
const closeMobileButton = document.querySelector(".close-mobile-nav");

openMobileButton.addEventListener("click", () => openMobileNav());
closeMobileButton.addEventListener("click", () => closeMobileNav());

const openMobileNav = () => {
    mobileNav.style.transition = "all 0.5s ease-in-out";
    mobileNav.style.right = 0;
};

const closeMobileNav = () => {
    mobileNav.style.transition = "all 0.5s ease-in-out";
    mobileNav.style.right = "-100vw";
};

const closeMobileNavWithoutAnimation = () => {
    mobileNav.style.transition = "none";
    mobileNav.style.right = "-100vw";
}