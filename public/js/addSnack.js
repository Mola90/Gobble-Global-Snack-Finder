const searchAPI = async (event) => {
    event.preventDefault();

    let searchTerm = document.querySelector('#searchTerm').value;

    console.log(searchTerm);

    try{
    const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1nmm&page_size=20&`)

    if(!response.ok){
        throw new Error('Failed to fetch data from Open Food Facts API')
    }

    const data = await response.json();
    let products = data.products;

    console.log(products)

    let resultsArea = document.querySelector('#resultsArea');
    resultsArea.innerHTML = ""

    products.forEach((product)=>{
        let productDiv = document.createElement('div');
        productDiv.classList.add("flex", "flex-row", "items-center", "h-1/5", "p-4");
        productDiv.id = "parentDiv"
        productDiv.addEventListener('click', fillForm);

        let necessaryData = {
            product_name: product.product_name,
            brand: product.brands,
            img: product.image_front_url,
            countries: product.countries_tag,
            code: product.code,
            ingredients: product.ingredients_text_en
        }
        productDiv.setAttribute('data-product', JSON.stringify(necessaryData))

        let productDetailsDiv = document.createElement('div');
        productDetailsDiv.classList.add('flex', 'flex-col', 'justify-self-start');

        let productName = document.createElement('h2');
        productName.innerText = "Product Name: " + product.product_name;
        productName.classList.add('font-bold', "text-xl");

        let brandName = document.createElement('h3');
        brandName.innerText = "Product Brand: " + products.brands;

        let productImg = document.createElement('img');
        productImg.setAttribute('src', product.image_front_url)
        productImg.classList.add('justify-self-end')
        productImg.style.height = "150px";


        productDetailsDiv.append(productName, brandName)
        productDiv.append(productDetailsDiv, productImg);
        resultsArea.append(productDiv);
    })
    
} catch(err){
    console.log(err);
}
}

const fillForm = (event) => {
    let productData = JSON.parse(event.target.closest('#parentDiv').getAttribute('data-product'))

    let productInput = document.querySelector('#product_name');
    productInput.value = productData.product_name
    let brandInput = document.querySelector('#product_brand');
    brandInput.value = productData.brand
    let imgInput = document.querySelector('#imgLink');
    imgInput.value = productData.img;
    let img = document.querySelector('#formImg');
    img.src = productData.img;


    let form = document.querySelector('#submitSnack');
    form.setAttribute('data-product', JSON.stringify(productData))


}

const submitForm = async (event) => {
    event.preventDefault();

    const productName = document.querySelector('#product_name').value;
    const productCountries = document.querySelector('#product_country').value;
    const productBrand = document.querySelector('#product_brand').value;
    const productData = document.querySelector('#submitSnack').getAttribute('data-product');

    if(productName && productBrand && productData && productCountries){
        const response = await fetch('/api/snack', {
            method: 'POST',
            body: JSON.stringify(),
            headers: {'Content-Type': 'applicatoin/json'}
        });

        if(response.ok){
            window.location.replace()
        } else {
            alert('Failed to save Snack')
        }

    }
}

const imgForm = document.querySelector('#imgLink');

function handleInputChange(event){
    let newLink = event.target.value;

    let img = document.querySelector('#formImg');
    img.src = newLink;
}

imgForm.addEventListener('input', handleInputChange)

document.querySelector('#search-form').addEventListener('submit', searchAPI);
document.querySelector('#submitSnack'). addEventListener('submit', submitForm);
