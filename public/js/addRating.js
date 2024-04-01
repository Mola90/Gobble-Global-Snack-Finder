let currentRating = 1;

let starOne = document.querySelector('#star_one');
let starTwo = document.querySelector('#star_two');
let starThree = document.querySelector('#star_three');
let starFour = document.querySelector('#star_four');
let starFive = document.querySelector('#star_five');

starOne.addEventListener('click', () => {
    currentRating = 1;

    starTwo.classList.remove('text-gray-300');
    starTwo.classList.remove('text-yellow-300');
    starTwo.classList.add('text-gray-300');

    starThree.classList.remove('text-gray-300');
    starThree.classList.remove('text-yellow-300');
    starThree.classList.add('text-gray-300');

    starFour.classList.remove('text-gray-300');
    starFour.classList.remove('text-yellow-300');
    starFour.classList.add('text-gray-300');

    starFive.classList.remove('text-gray-300');
    starFive.classList.remove('text-yellow-300');
    starFive.classList.add('text-gray-300');
})

starTwo.addEventListener('click', () => {
    currentRating = 2;

    starTwo.classList.remove('text-gray-300');
    starTwo.classList.remove('text-yellow-300');
    starTwo.classList.add('text-yellow-300');

    starThree.classList.remove('text-gray-300');
    starThree.classList.remove('text-yellow-300');
    starThree.classList.add('text-gray-300');

    starFour.classList.remove('text-gray-300');
    starFour.classList.remove('text-yellow-300');
    starFour.classList.add('text-gray-300');

    starFive.classList.remove('text-gray-300');
    starFive.classList.remove('text-yellow-300');
    starFive.classList.add('text-gray-300');
})

starThree.addEventListener('click', () => {
    currentRating = 3;

    starTwo.classList.remove('text-gray-300');
    starTwo.classList.remove('text-yellow-300');
    starTwo.classList.add('text-yellow-300');

    starThree.classList.remove('text-gray-300');
    starThree.classList.remove('text-yellow-300');
    starThree.classList.add('text-yellow-300');

    starFour.classList.remove('text-gray-300');
    starFour.classList.remove('text-yellow-300');
    starFour.classList.add('text-gray-300');

    starFive.classList.remove('text-gray-300');
    starFive.classList.remove('text-yellow-300');
    starFive.classList.add('text-gray-300');
})

starFour.addEventListener('click', () => {
    currentRating = 4;

    starTwo.classList.remove('text-gray-300');
    starTwo.classList.remove('text-yellow-300');
    starTwo.classList.add('text-yellow-300');

    starThree.classList.remove('text-gray-300');
    starThree.classList.remove('text-yellow-300');
    starThree.classList.add('text-yellow-300');

    starFour.classList.remove('text-gray-300');
    starFour.classList.remove('text-yellow-300');
    starFour.classList.add('text-yellow-300');

    starFive.classList.remove('text-gray-300');
    starFive.classList.remove('text-yellow-300');
    starFive.classList.add('text-gray-300');
})

starFive.addEventListener('click', () => {
    currentRating = 5;

    starTwo.classList.remove('text-gray-300');
    starTwo.classList.remove('text-yellow-300');
    starTwo.classList.add('text-yellow-300');

    starThree.classList.remove('text-gray-300');
    starThree.classList.remove('text-yellow-300');
    starThree.classList.add('text-yellow-300');

    starFour.classList.remove('text-gray-300');
    starFour.classList.remove('text-yellow-300');
    starFour.classList.add('text-yellow-300');

    starFive.classList.remove('text-gray-300');
    starFive.classList.remove('text-yellow-300');
    starFive.classList.add('text-yellow-300');
})


const addRating = async () => {
    let title_review = document.querySelector('#reviewTitleInput').value;
    let text_review = document.querySelector('#reviewTextInput').value;
    let user_rating = currentRating;
    let snack_id = document.querySelector('#snackName').getAttribute('data-snackId');

    if(title_review && text_review && user_rating && snack_id){
        const response = await fetch('/api/rating', {
            method: 'POST',
            body: JSON.stringify({title_review, text_review, user_rating, snack_id}),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            window.location.replace(`/snack/${snack_id}`)
        } else {
            alert('Failed to add review')
        }
    }
    

}

let submitRatingBtn = document.querySelector('#submitReview').addEventListener('click', addRating)

const addListItem = async () => {
    let snack_id = document.querySelector('#snackName').getAttribute('data-snackId');


    if(snack_id){
        const response = await fetch('/api/wishlist/', {
            method: 'POST',
            body: JSON.stringify({snack_id}),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            window.location.replace(`/snack/${snack_id}`)
        } else {
            alert('Failed to add to wishlist')
        }
    }
}

const removeWishlist = async () => {
    let snack_id = document.querySelector('#snackName').getAttribute('data-snackId');

    if(snack_id){
        const response = await fetch(`/api/wishlist/${snack_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    if(response.ok){
        window.location.replace(`/snack/${snack_id}`)
    } else {
        alert('Failed to remove wishlist item')
    }
    }
}

let wishlistListen = document.querySelector('#wishlistBtn')
if(wishlistListen){
    wishlistListen.addEventListener('click', addListItem)
}

let wishlistRemove = document.querySelector('#wishlistRemove')
if(wishlistRemove){
    wishlistRemove.addEventListener('click', removeWishlist)
}

const addLike = async () => {
    let snack_id = document.querySelector('#snackName').getAttribute('data-snackId');

    if(snack_id){
        const response = await fetch('/api/like', {
            method: 'POST',
            body: JSON.stringify({snack_id}),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            window.location.replace(`/snack/${snack_id}`)
        } else {
            alert('Failed to add like')
        }
    }
}

const removeLike = async () => {
    let snack_id = document.querySelector('#snackName').getAttribute('data-snackId');

    if(snack_id){
        const response = await fetch(`/api/like/${snack_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    if(response.ok){
        window.location.replace(`/snack/${snack_id}`)
    } else {
        alert('Failed to remove like')
    }
    }
}

let likeListen = document.querySelector('#likeBtn')
if(likeListen){
    likeListen.addEventListener('click', addLike);
}
let removeLikeListen = document.querySelector('#removeLike');
if(removeLikeListen){
    removeLikeListen.addEventListener('click', removeLike);
}