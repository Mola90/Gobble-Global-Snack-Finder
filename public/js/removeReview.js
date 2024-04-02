const removeReview = async (event) => {
    let snack_id = event.target.id;

    if(snack_id){
        const response = await fetch(`/api/rating/${snack_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    if(response.ok){
        window.location.replace(`/dashboard/review`)
    } else {
        alert('Failed to remove like')
    }
    }
}