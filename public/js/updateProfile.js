const updateProfilePic = async () => {
    let newUrl = document.querySelector('#updateProfileInput').value;

    if(newUrl){
        const response = await fetch("/api/user/update", {
            method: "PUT",
            body: JSON.stringify({newUrl}),
            headers: {'Content-Type': 'application/json'}
        });
        console.log(response)
        if(response.ok){
            console.log('hi')
            window.location.replace(`/dashboard`)
        } else {
            alert('Failed to update profile picture')
        }
    }
}

document.querySelector('#updatePic').addEventListener('submit', updateProfilePic)