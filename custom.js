const searchPhone = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

const displayPhones = phones => {
    const searchResult = document.getElementById('display-phone');
    searchResult.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
             <img src="${phone.image}" class="card-img-top mx-auto p-3  w-75" alt="...">
            <div class="card-body">
                 <h6 class="card-title ">${phone.phone_name}</h6>
                 <h5 class="card-text text-primary">${phone.brand}</h5>
                 <button onclick="loadPhoneByName('${phone.slug}')" class="btn btn-outline-primary my-2">Explore</button>
            </div>
            
        </div>
        `;
        searchResult.appendChild(div);
        //    console.log(phone)
    });

}

// load dynamic api for single phone details
const loadPhoneByName = id => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
};

// display single phone details
const displayPhoneDetails = name => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
             <img src="${name.image}" class="card-img-top mx-auto p-3  w-100" alt="...">
            <div class="card-body">
                 <h6 class="card-title ">Phone name : ${name.name}</h6>
                 <h5 class="card-text text-primary">${name.brand}</h5>
                 <h5 class="card-text text-primary">${name.releaseDate}</h5>
            </div>
            
        </div>
        `;
        

        phoneDetails.appendChild(div);
        console.log(name.releaseDate)

}