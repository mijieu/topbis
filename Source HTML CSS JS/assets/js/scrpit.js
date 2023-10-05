window.addEventListener("scroll", function () {
    const topbar = document.getElementById("top-navbar");
    const searchbarTop = topbar.querySelector(".search-bar-top");
    const logoTop = topbar.querySelector(".logo-top img");
    const logoWidth = topbar.querySelector(".top-logo-width");
    // console.log(logoWidth);
    // console.log(searchbarTop);

    if (window.scrollY > 100) {
        topbar.classList.add("shrink");
        searchbarTop.classList.add("centered-search-bar");
        logoTop.src = "assets/img/small-logo.png";
        logoWidth.style.width = "40px";
        topbar.style.height = "60px";
        searchbarTop.style.top = "32px";
        topbar.style.display = "flex";
        topbar.style.alignItems = "center";

    } else {
        topbar.classList.remove("shrink");
        searchbarTop.classList.remove("centered-search-bar");
        logoTop.src = "assets/img/logo.png";
        logoWidth.style.width = "100px";
        topbar.style.height = "100px";
        searchbarTop.style.top = "46px";
        topbar.style.display = "block";
    }
    searchbarTop.classList.add("transition-effect");
});





const followButton = document.getElementById('followButton');

let isFollowing = false;

function toggleFollow() {
    isFollowing = !isFollowing;

    if (isFollowing) {
        followButton.textContent = 'Unfollow';
        followButton.classList.remove('bg-light-green');
        followButton.classList.add("bg-light", "border-dark", "border", "text-dark");

    }
    else {
        followButton.textContent = 'Follow';
        followButton.classList.add('bg-light-green');
        followButton.classList.remove("bg-light", "border-dark", "border", "text-dark");

    }
}

followButton.addEventListener('click', toggleFollow);




