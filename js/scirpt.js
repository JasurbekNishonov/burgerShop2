const product = {
    crazy: {
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "Light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: "Cheeseburger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: "dburger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    shopImg = document.querySelector('.shop__img'),
    basketClose = document.querySelector('.basket__close'),
    basket = document.querySelector('.basket'),
    shopItem = document.querySelector('.shop__item'),
    backImg = document.querySelectorAll('.card__img');

///////////////////////////////////////////////////////////////////

    backImg.forEach(bg => {
        bg.addEventListener("click", function () {
            const headerImg=document.querySelector(".header__img")
            const cardSrc =bg.getAttribute('src')
            headerImg.setAttribute("src", cardSrc)
            console.log(cardSrc);
        })
    });

///////////////////////////////////////////////////////////////////


btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const parent = btn.closest('.card'),
            cardId = parent.getAttribute('id')
        product[cardId].amount++
        basketInfo()
    })
});
function basketInfo() {
    const productArr = []
    for (const key in product) {
        const pk = product[key],
            productCard = document.querySelector(`#${key}`),
            span = productCard.querySelector('.card__item')
        if (pk.amount) {
            span.classList.add('active')
            span.innerHTML = pk.amount
            productArr.push(pk)
        } else {
            span.classList.remove('active')
        }
    }
    if (totalAmount()) {
        shopItem.classList.add('active')
        shopItem.innerHTML = totalAmount()
    } else {
        shopItem.classList.remove('active')
    }
}

function totalAmount() {
    let amount = 0
    for (const key in product) {
        amount += product[key].amount
    }
    return amount
}

shopImg.addEventListener('click', () => {
    basket.classList.add("active")
})
basketClose.addEventListener('click', () => {
    basket.classList.remove("active")
})
