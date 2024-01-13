const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')

const inpBurger=document.querySelector('#burger')
const inpName=document.querySelector('#name')
const inpPhone=document.querySelector('#phone')
const orderBtn=document.querySelector('#order-btn')
const titles=document.querySelectorAll('.products-item-title')

btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}

currencyBtn.onclick = () => {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    })

    let currentCurrency = currencyBtn.innerText;//$
    let newCurrency = '$'
    let coef = 0

    if (currentCurrency === '$') {
        newCurrency = '€'
        coef = 0.91
    } else if (currentCurrency === '€') {
        newCurrency = 'som'
        coef = 89
    } else {
        newCurrency = '$'
        coef=1
    }


    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price')
        prices[i].innerText = basePrice * coef + ' ' + newCurrency
        
    } 

    currencyBtn.innerText = newCurrency
}

console.log(currencyBtn);


productsBtn.forEach((btn, i)=>{
    btn.onclick=()=>{
    inpBurger.value=`${titles[i].innerText}-${prices[i].innerText}`

    document.getElementById('order').scrollIntoView({
        behavior: 'smooth'
    })
}
})

orderBtn.onclick=() => {
    const orderTitleList = document.querySelector('.order-title')
    const burgerValue = inpBurger.value;
    const nameValue = inpName.value;
    const phoneValue = inpPhone.value;


    if (burgerValue && nameValue && phoneValue) {
       
        const orderMessage = `Ваш заказ оформлен\n\nBurger: ${burgerValue}\nName: ${nameValue}\nPhone: ${phoneValue}`;
        alert(orderMessage);
        orderTitleList.innerText='Ваш заказ оформлен'
       
        console.log(orderMessage);

        inpBurger.style.backgroundColor = '';
        inpName.style.backgroundColor = '';
        inpPhone.style.backgroundColor = '';
    } else {
        
        orderTitleList.innerText='Пожалуйста, заполните все поля'
        if (!burgerValue) {
            inpBurger.style.backgroundColor = 'red';
        }
        if (!nameValue) {
            inpName.style.backgroundColor = 'red';
        }
        if (!phoneValue) {
            inpPhone.style.backgroundColor = 'red';
        }
        
        alert('Пожалуйста, заполните все поля');
        
    }
};

