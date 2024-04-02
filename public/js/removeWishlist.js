const removeWishlist = async (event) => {
    let snack_id = event.target.id;

    if(snack_id){
        const response = await fetch(`/api/wishlist/${snack_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    if(response.ok){
        window.location.replace(`/dashboard/wishlist`)
    } else {
        alert('Failed to remove wishlist item')
    }
    }
}