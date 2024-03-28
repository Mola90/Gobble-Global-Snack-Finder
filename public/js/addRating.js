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
    let snack_id = document.querySelector('snackName').getAttribute('data-snackId')

    if(reviewTitle && reviewText && rating){
        const response = await fetch('/api/rating', {
            method: 'POST',
            body: JSON.stringify({reviewTitle, reviewText, rating}),
            headers: {'Content-Type': 'application/json'}
        });
    }
}