const wrapper = document.querySelector(".sliderwrapper");
const manuitems = document.querySelectorAll(".manuitems");

manuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log(`Menu item ${index + 1} clicked!`);
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
    });
});

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 199,
        colors: [
            {
                img: "airforce.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDAN",
        price: 190,
        colors: [
            {
                img: "jordan.png",
            },
        ],
    },
    {
        id: 3,
        title: "KATER",
        price: 150,
        colors: [
            {
                img: "CAT.png",
            },
        ],
    },
    {
        id: 4,
        title: "HIPPIE",
        price: 180,
        colors: [
            {
                img: "hippie.png",
            },
        ],
    },
    {
        id: 5,
        title: "BLAZER",
        price: 129,
        colors: [
            {
                img: "BLAZZER.png",
            },
        ],
    },
];

let choosenproduct = products[0];


const currentproductimg = document.querySelector(".productimg");
const currentproductitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductsizes = document.querySelectorAll(".size");

manuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(-${index * 100}vw)`;

        // Change chosen product
        choosenproduct = products[index];

        // changge details
        currentproductitle.textContent = choosenproduct.title;
        currentproductimg.src = choosenproduct.colors[0].img;
        currentproductprice.textContent = `$${choosenproduct.price}`;
    });
});

currentproductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
    
        currentproductsizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productbtn = document.querySelector(".productbtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbtn.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
