const removeLike = async (event) => {
    let snack_id = event.target.id;

    if(snack_id){
        const response = await fetch(`/api/like/${snack_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    if(response.ok){
        window.location.replace(`/dashboard/likes`)
    } else {
        alert('Failed to remove like')
    }
    }
}

