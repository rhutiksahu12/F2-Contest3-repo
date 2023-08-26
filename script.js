window.onload = function () {
    fetchData();
}

let menu =''
async function fetchData() {
    const apiUrl = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json'

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data', data)
        populateCard(data);
        return menu=data;
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

// const populateCard = (data) => {

//     const cardTitle = document.getElementById('#card-title');
//     const cardPrice = document.getElementById('#item-price');
//     const itemImg = document.getElementById('#item_img');

//     cardTitle
// }

// const card =()=> `<div class="card border border-0 rounded-0 " style="width: 15rem; height: 15rem;">
// <div class="p-1 bg-black-light">
//     <img src="./assets/menu-item.png" class="card-img-top" alt="...">
// </div>
// <div class="card-body bg-black-light d-flex justify-content-between">
//     <div class="text-white">
//         <h5 class="card-title mb-1">Burger</h5>
//         <p>Rs. 199/-</p>
//     </div>
//     <div class="p-2 bg-black fs-2 text-white">
//         +
//     </div>
// </div>
// </div>`


const createCard = (item) => {
    const card = document.createElement('div');
    card.classList.add('card', 'border', 'border-0', 'rounded-0', 'card-width')
    card.innerHTML = `
        <div class="p-1 bg-black-light">
            <img src="${item.imgSrc}" class="card-img-top" alt="...">
        </div>
        <div class="card-body bg-black-light d-flex justify-content-between">
            <div class="text-white">
                <h5 class="card-title mb-1">${item.name}</h5>
                <p>${item.price}</p>
            </div>
        <div class="p-2 bg-black fs-2 text-white">
            +
        </div>`;

return card;
}

// fetch data for other function



const populateCard =(data) =>{
    const cardContainer = document.getElementById('card-container')
    data.forEach(item => {
        const newCard = createCard(item);
        cardContainer.appendChild(newCard)
    });

}


// Take Order

const takeOrder =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            const shuffledOrder = menu.slice().sort(()=> Math.random() - 0.5)
            const selectedOrder = shuffledOrder.slice(0,3)

            const order = {
                dishs: selectedOrder,
                totalPrice: selectedOrder.reduce((total, dish)=> total + dish.price, 0)
            }
            resolve(order)
        }, 2500)
    })
}

async function processTakeOrder () {
    try{
        const order = await takeOrder();
        console.log(order)
    }catch(error){
        console.log(error)
    }
}

// Order Preparation

const orderPrep= () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const orderInfo = {
                order_status: true,
                paid: false
            };

            resolve(orderInfo);
        }, 1500)
    })
}

async function processOrderPrep(){
    try{
        const orderInfo = await orderPrep();
        console.log(orderInfo)
    }catch(error){
        console.log(error)
    }
}

// pay Order
const payOrder= () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const orderInfo = {
                order_status: true,
                paid: false
            };
            resolve(orderInfo)
        },1000)
    })
}

async function processPayOrder (){
    try{
        const orderInfo = await payOrder();
        console.log('orderInfo', orderInfo)
    }catch(error){
        console.log(error)
    }
}

// Thank You display
const orderCompletion = () =>{
    alert('Thank you for your order');
}