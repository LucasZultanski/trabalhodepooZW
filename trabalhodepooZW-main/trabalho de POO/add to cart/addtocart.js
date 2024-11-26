const product = [
    {
        id: 0,
        image: 'image/zw_alphaboost.png',
        title: 'Alpha Boost',
        price: 120,
    },
    {
        id: 1,
        image: 'image/zw_bulkmaster.png',
        title: 'Bulk Master',
        price: 60,
    },
    {
        id: 2,
        image: 'image/zw_crazyclown.png',
        title: 'crazy clown',
        price: 230,
    },
    {
        id: 3,
        image: 'image/zw_madwild.png',
        title: 'mad wild',
        price: 245,
    },
    {
        id: 4,
        image: 'image/zw_maxgrow.png',
        title: 'zw maxgrow',
        price: 79,
    },
    {
        id: 5,
        image: 'image/zw_megagrow.png',
        title: 'mega grow',
        price: 70,
    },
    {
        id: 5,
        image: 'image/zw_muscleboost.png',
        title: 'muscle boost',
        price: 100,
    },
    {
        id: 6,
        image: 'image/zw_musclextreme.png',
        title: 'muscle extreme',
        price: 77,
    },
    {
        id: 7,
        image: 'image/zw_nitroforce.png',
        title: 'nitro force',
        price: 45,
    },
    {
        id: 8,
        image: 'image/zw_powermax.png',
        title: 'power max',
        price: 87,
    },   
    {
        id: 9,
        image: 'image/zw_problulk.png',
        title: 'pro blulk',
        price: 99,
    },
    {
        id: 10,
        image: 'image/zw_titanfuel.png',
        title: 'titan fuel',
        price: 77,
    },
    {
        id: 11,
        image: 'image/zw_ultragain.png',
        title: 'ultra gain',
        price: 90,
    },
    {
        id: 12,
        image: 'image/zw_utrapower.png',
        title: 'ultra power',
        price: 45,
    },



];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}