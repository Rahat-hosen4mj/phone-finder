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
    if(phones.length === 0){
        const div = document.createElement('div');
        div.innerHTML = `
        <h2 class="text-danger"> 404 Not found </h2>
        <p>Disclaimers : iphone samsung oppo brnad are avaiable </p>
        `;
        searchResult.appendChild(div);
    }else{
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
        });
    }
}

// load dynamic api for single phone details
const loadPhoneByName = id => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
};

// display single phone details
const displayPhoneDetails = name => {
    console.log(name)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
             <img src="${name.image}" class="card-img-top mx-auto p-3  w-100" alt="...">
            <div class="card-body">
            <h5 class="card-text text-primary">Brand: ${name.brand}</h5>
                 <h6 class="card-title text-success">Name : ${name.name}</h6>
                 <h6 class="card-text text-secondary">${name.releaseDate ? name.releaseDate : 'Release Date : Not Found'}</h6>
                 <p><b>Chipset</b>: ${name.mainFeatures.chipSet}</p>
                 <p><b>Display size</b>: ${name.mainFeatures.displaySize}</p>
                 <p><b>Memory</b> : ${name.mainFeatures.chipSet}</p>
                 <p><b>Storage</b>: ${name.mainFeatures.storage}</p>
                 <p><b>Sensors</b> : <ol>
                 <li>${name.mainFeatures.sensors[0]}</li>
                 <li>${name.mainFeatures.sensors[1]}</li>
                 <li>${name.mainFeatures.sensors[2]}</li>
                </ol>  </p>
                  
            </div>
            
        </div>
        `;
        phoneDetails.appendChild(div);
        
}