'use strict';
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
      </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
};



const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    //countriesContainer.style.opacity = 1;
}



const getCountryAndNeighbour = function(country) {

    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();
    
    request.addEventListener('load', function() {
        console.log(this.responseText);
    
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //Render country 1
        renderCountry(data);

        //Get neihbour country
        const [neighbour] = data.borders;

        if(!neighbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
           const data2 = JSON.parse(this.responseText);
           console.log(data2);

           renderCountry(data2, 'neighbour');
        })

    });
};

//getCountryAndNeighbour('poland');
getCountryAndNeighbour('slovakia');



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//AJAX call country 1
//const request = new XMLHttpRequest();
//request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//request.send();


//const request = fetch(`https://countries-api-836d.onrender.com/countries/name/poland`)

//const getCountryData = function(country) {
//    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(function(response) {
//        console.log(response);
//
//        return response.json();
//    }).then(function(data) {
//        console.log(data);
//        renderCountry(data[0]);
//    });
//};


//const getCountryData = function(country) {
    //Country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//   .then(response => {
//       if(!response.ok)
//           throw new Error(`Country not found (${response.status})`);
//
//       return response.json();
//   })
//   .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0]
//
//       if(!neighbour) return;
//       
//       //Country 2
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//  })
//   .then(response => response.json())
//   .then(data => renderCountry(data, 'neighbour'))
//   .catch(err => {
//      console.error(`${err} ERROR`);
//      renderError(`Something went wrong. ${err.message}. Try again`);
//  })
//   .finally(() => {
//       countriesContainer.style.opacity = 1;
//   })
//};

const getCountryData = function(country) {
    //Country 1

    getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found'
    )
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if(!neighbour) throw new Error('No neigbour found!');
        
        //Country 2
        return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        console.error(`${err} ERROR`);
        renderError(`Something went wrong. ${err.message}. Try again`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
};

btn.addEventListener('click', function() {
    getCountryData('Ireland');
});
//getCountryData('portugal');

///////////////////////////////////////////////////////////////////////////////////////////////////////// CODING CHALANGE 1

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
        if (!response.ok) throw new Error(`Something went wrong. (${response.status}).`);;
        return response.json();
    })
    .then(data => {
        console.log(`You are in ${data.city}, ${data.country}.`);

        return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`);
    })
    .then(response => {
               if(!response.ok)
                    throw new Error(`Country not found (${response.status})`);
        
               return response.json()
            })
            .then(data=> renderCountry(data[0]))
    .catch(err => {
        console.error(`${err.message}, ERROR`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}


whereAmI('52.508', '13.381');
whereAmI('19.037', '72.873');
whereAmI('-33.933', '18.474');



const lotteryPromise = new Promise(function(resolve, reject) {
    
    console.log(`Lottery draw is happening 🎆🔮`);

    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You WIN! 💰');
        } else {
            reject(new Error('You lost your money 💩'));
        }
    }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2).then(() => {
    console.log(`1 second passed`);
    return wait(1);
})
.then(() => {
    console.log(`2 second passed`);
    return wait(1);
})
.then(() => {
    console.log(`3 second passed`);
    return wait(1);
})
.then(() => {
    console.log(`4 second passed`);
    return wait(1);
})
.then(() => console.log(`I waited for 5 sec`));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('def').then(x => console.error(x));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getPosition = function() {
    return new Promise(function(resolve, reject) {
    //    navigator.geolocation.getCurrentPosition(
    //        position => resolve(position), 
    //        err => reject(err));
    navigator.geolocation.getCurrentPosition(resolve, reject)
    });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function(lat, lng) {

    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;

        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
        if (!response.ok) throw new Error(`Something went wrong. (${response.status}).`);;
        return response.json();
    })
    .then(data => {
        console.log(`You are in ${data.city}, ${data.country}.`);

        return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`);
    })
    .then(response => {
               if(!response.ok)
                    throw new Error(`Country not found (${response.status})`);
        
               return response.json()
            })
            .then(data=> renderCountry(data[0]))
    .catch(err => {
        console.error(`${err.message}, ERROR`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject)  {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found.'))
        });
    });
};

let currentImg;
createImage('img/img-1.jpg')
.then(img => {
    currentImg = img;
    console.log('Img 1 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(img => {
    currentImg = img;
    console.log('Img 2 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
})
.catch(err => console.error(err));


const getPosition = function() {
    return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
    });
};

const whereAmI = async function() {
    try{const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    //Reverse geocode
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);} catch(err) {
        console.log(err);
    }
};
whereAmI();
console.log('FIRST');

// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch(err) {
//     alert(err.message);
// }

*/

//////////////////////////////////////////////////////
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject)  {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found.'))
        });
    });
};

let currentImg;
// createImage('img/img-1.jpg')
// .then(img => {
//     currentImg = img;
//     console.log('Img 1 loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// })
// .then(img => {
//     currentImg = img;
//     console.log('Img 2 loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
// })
// .catch(err => console.error(err));

const loadAndPause = async function() {
    try {
        //Load img 1
        let img = await createImage('img/img-1.jpg');
        console.log('Img 1 loaded');
        await wait(2);
        img.style.display = 'none';

        //Loadimg 2
        img = await createImage('img/img-2.jpg');
        console.log('Img 2 loaded');
        await wait(2);
        img.style.display = 'none';


    } catch(err) {
        console.error(err);
    };
};

loadAndPause();

//PART 2
const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);
    } catch(err) {
        console.error(err);
    };
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);