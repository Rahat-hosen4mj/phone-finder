const searchPhone = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

const displayPhones = phones => {
    const searchResult = document.getElementById('display-phone');
    searchResult.textContent ='';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
             <img src="${phone.image}" class="card-img-top mx-auto p-3  w-75" alt="...">
            <div class="card-body">
                 <h6 class="card-title ">${phone.phone_name}${phone.brand}</h6>
                 <h5 class="card-text text-primary">${phone.brand}</h5>
                 <button onclick="" class="btn btn-outline-primary my-2">Explore</button>
            </div>
            
        </div>
        `;
        searchResult.appendChild(div)
       console.log(phone)
    })
}