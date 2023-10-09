





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

if(followButton) {
    followButton.addEventListener('click', toggleFollow);
}




