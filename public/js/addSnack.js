//Search API for similar snacks
const searchAPI = async (event) => {
    event.preventDefault();

    document.querySelector('#spinner').style.display = 'block';

    let searchTerm = document.querySelector('#searchTerm').value;

    try{
    const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1nmm&page_size=20&`)

    if(!response.ok){
        throw new Error('Failed to fetch data from Open Food Facts API')
    }

    const data = await response.json();
    let products = data.products;

    let resultsArea = document.querySelector('#resultsArea');
    resultsArea.innerHTML = "";

    document.querySelector('#spinner').style.display = 'none';

    products.forEach((product)=>{
        let productDiv = document.createElement('div');
        productDiv.classList.add("flex", "flex-row", "items-center", "h-1/5", "p-4");
        productDiv.id = "parentDiv"
        productDiv.addEventListener('click', fillForm);

        let necessaryData = {
            product_name: product.product_name,
            brand: product.brands,
            img: product.image_front_url,
            countries: product.countries_tags,
            code: product.code,
            ingredients: product.ingredients_text_en,
            categories: product.categories_hierarchy
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
document.querySelector('#search-form').addEventListener('submit', searchAPI);

//Fill form with data from chosen snack
const fillForm = (event) => {
    let productData = JSON.parse(event.target.closest('#parentDiv').getAttribute('data-product'));

    let productInput = document.querySelector('#product_name');
    productInput.value = productData.product_name
    let brandInput = document.querySelector('#product_brand');
    brandInput.value = productData.brand
    let imgInput = document.querySelector('#imgLink');
    imgInput.value = productData.img;
    let img = document.querySelector('#formImg');
    img.src = productData.img;

    let countries = productData.countries;
    let countriesDiv = document.querySelector('#generatedCountries');
    countriesDiv.innerHTML = ""
    countries.forEach((country) => {
        let countrySingular = document.createElement('li');
        let str = country.slice(3);
        countrySingular.classList.add("m-2", "cursor-pointer");
        countrySingular.setAttribute('data-country', str);
        countrySingular.id = "formCountry"
        countrySingular.innerText = str + ", ";

        countrySingular.addEventListener('click', (event) => {
            if(event.target.tagName === "LI"){
                event.target.remove();
            }
        })

        countriesDiv.append(countrySingular);
    })
    

    let categories = productData.categories
    let categoriesDiv = document.querySelector('#generatedCategories');
    categoriesDiv.innerHTML = ""
    if(categories){
        categories.forEach((category) => {
        let categorySingular = document.createElement('li');
        let str = category.slice(3);
        categorySingular.setAttribute('data-category', str);
        categorySingular.id = "formCategory";
        categorySingular.classList.add("m-2", "text-slate-500", "hover:text-red-500", "cursor-pointer");
        categorySingular.innerText = str + ", ";

        categorySingular.addEventListener('click', (event) => {
            if(event.target.tagName === "LI"){
                event.target.remove();
            }
        })

        categoriesDiv.append(categorySingular);
    })
    }
    


    let form = document.querySelector('#submitSnack');
    form.setAttribute('data-product', JSON.stringify(productData))


}

//Add selected country to list 
const addCountry = () => {
    let countryChoice = document.querySelector('#product_country').value;

    let countriesDiv = document.querySelector('#generatedCountries');
    
    let countrySingular = document.createElement('li');
    countrySingular.classList.add("m-2", "cursor-pointer");
    countrySingular.setAttribute('data-country', countryChoice);
    countrySingular.id = "formCountry"
    countrySingular.innerText = countryChoice + ", ";

    countrySingular.addEventListener('click', (event) => {
        if(event.target.tagName === "LI"){
            event.target.remove();
        }
    });

    countriesDiv.append(countrySingular);
}

let addCountryBtn = document.querySelector('#addCountry').addEventListener('click', addCountry);

const addCategory = () => {
    let categoryChoice = document.querySelector('#product_category').value;

    let categoryDiv = document.querySelector('#generatedCategories');
    
    let categorySingular = document.createElement('li');
    categorySingular.classList.add("m-2", "cursor-pointer");
    categorySingular.setAttribute('data-category', categoryChoice);
    categorySingular.id = "formCategory"
    categorySingular.innerText = categoryChoice + ", ";

    categorySingular.addEventListener('click', (event) => {
        if(event.target.tagName === "LI"){
            event.target.remove();
        }
    });

    categoryDiv.append(categorySingular);
}

let addCategoryBtn = document.querySelector('#addCategory').addEventListener('click', addCategory)

const imgForm = document.querySelector('#imgLink');

//Render new image if image link is changed
function handleInputChange(event){
    let newLink = event.target.value;

    let img = document.querySelector('#formImg');
    img.src = newLink;
}
imgForm.addEventListener('input', handleInputChange)

//Submit form
const submitForm = async (event) => {
    event.preventDefault();

    document.querySelector('#submitSpinner').style.display = "block";

    const productName = document.querySelector('#product_name').value;
    const productBrand = document.querySelector('#product_brand').value;
    const productData = JSON.parse(document.querySelector('#submitSnack').getAttribute('data-product'));
    const productImage = document.querySelector('#imgLink').value;

    const productCountries = document.querySelectorAll('#formCountry');
    let productCountriesArr = [];
    productCountries.forEach((country) => {
        productCountriesArr.push(country.getAttribute('data-country').toLowerCase());
    });

    const productCategories = document.querySelectorAll('#formCategory');
    let productCategoriesArr = [];
    productCategories.forEach((category) => {
        productCategoriesArr.push(category.getAttribute('data-category'))
    });

    if(productName && productBrand && productData && productCountriesArr && productCategoriesArr && productImage){
        const response = await fetch('/api/snack/', {
            method: 'POST',
            body: JSON.stringify({productName, productCategoriesArr, productBrand, productData, productCountriesArr, productImage}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            window.location.replace("/dashboard")
        } else {
            alert('Failed to save Snack')
        }

    }
}
document.querySelector('#submitSnack'). addEventListener('submit', submitForm);
