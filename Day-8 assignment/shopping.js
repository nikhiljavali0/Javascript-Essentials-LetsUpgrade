let merch = [
  {
    id: 1,
    name: "Red Kurta - Men",
    size: "L",
    color: "RED",
    price: 3800,
    image: "redkurta.jpg",
    description: "Readymade Pure Cotton Asymmetric Pleated Kurta in Red",
  },
  {
    id: 2,
    name: "Green Saree",
    size: "Free size",
    color: "Light Green",
    price: 6000,
    image: "greensaree.jpg",
    description: "Semi silk green saree for wedding function",
  },

  {
    id: 3,
    name: "Red jacket with Blakc Trouser",
    size: "XL",
    color: "Red & Black",
    price: 12000,
    image: "red_jacket_with_black_trouser.png",
    description: "This Red jacket is single-breasted,with wide notched lapels and contrasting black buttons throughout, paired with tailored black trousers",
  },
  {
    id: 4,
    name: "Watch - Men",
    size: "",
    color: "Black & Yellow",
    price: 30000,
    image: "tissot_watch.jpeg",
    description: "black metal watch with Yellow shades",
  },

  {
    id: 5,
    name: "Ray Ban Sunglasses",
    size: "16",
    color: "Gold & Green",
    price: 5000,
    image: "rayban.jpg",
    description: "Ray-Ban Round Metal RB3447 Gunmetal - Metal - Green Lenses",
  },

  {
    id: 6,
    name: "Shoes - Women",
    size: "8",
    color: "Silver",
    price: 67000,
    image: "jimmy_choo.jpg",
    description: "A classic silhouette in sparkling silver-tone lamé glitter fabric, Jimmy Choo's Romy 100 pumps prove to be a dazzling all-rounder.",
  },
  {
    id: 7,
    name: "Peter England White shirt",
    size: "M",
    color: "black",
    price: 7000,
    image: "PE_shirt.jpg",
    description: "classy white shirt from Peter England. Tailored for a comfort fit, this design is crafted from cotton",
  },
  {
    id: 8,
    name: "oxford leather shoes for Men",
    size: "7-8",
    color: "black",
    price: 5000,
    image: "oxford.jpg",
    description: "Black oxford derby shoes",
  },
  {
    id: 9,
    name: "Women Kurti",
    size: "M",
    color: "Brick Orange",
    price: 1300,
    image: "kurti.jpg",
    description: "Embroidered Kurta",
  },
  {
    id: 10,
    name: "Leather Jacket",
    size: "L",
    color: "Dark Brown",
    price: 4300,
    image: "jacket.jpg",
    description: "NLF Dark Brown Men Leather Jacket",
  },
  {
    id: 11,
    name: "Fitness collection : Gym Items",
    size: " ",
    color: " ",
    price: 2000,
    image: "gym.jpeg",
    description: "Home Gym items",
  },
  {
    id: 12,
    name: "Buffalo Jeans Pant",
    size: "32",
    color: "Dark-Blue",
    price: 3000,
    image: "buffalo_jeans.jpg",
    description: "Multi Pocket Mid Waist Regular cotton jeans",
  },
];
 let cart=[];
 let count=0;
function displaymerch(merchd, type="main", place="card") {
    console.log(merchd);
    let strmerch = "";
    let arrmerch="";
    merchd.forEach(function (ele, index) {
        if(type=="main"){
            strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
        </p>
      </div>
      </div>`;
      arrmerch+=strmerch;
        }     
    if(type=="cartd"){
                strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
        </p>
      </div>
      </div>`;   
        arrmerch += strmerch;    
        }
    });
   
document.getElementById(place).innerHTML = arrmerch;   
}

function getProductByID(mercha, id) {
  return mercha.find(function (ele) {
    return ele.id == id;
  });
}
let flag=false;
function addToCart(id) {
flag=false;
  let item = getProductByID(merch, id);
  cart.forEach(function(element){
      if(element.id==item.id){
          flag=true;
          
      }    

  })
  if (flag) {
      alert("!!! This product is already in cart !!!");
    return 0;
  }
  cart.push(item);
  count+=1;
  document.getElementById("numb").innerText=count;
  let type="cartd";
  let place="cartcard";
  displaymerch(cart, type, place);

}

function search(){
    console.log("calling");
}
function deletemerch(id){
  let item = getProductByID(merch, id);
  let index = cart.findIndex(function (item1) {
    return item1.id == id;
  });
  cart.splice(index, 1);
  count-=1;
   document.getElementById("numb").innerText = count;
   let type = "cartd";
   let place = "cartcard";
   displaymerch(cart, type, place);
}
function filter(){
    let minv=document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items= merch.filter(function(itemsl){
        return itemsl.price>=minv && itemsl.price<=maxv;
    })
     displaymerch(items);
    document.getElementById("minp").value="";
      document.getElementById("maxp").value="";
}
function search(){
    let str= document.getElementById("serstr").value;
    console.log(str);
    let items = merch.filter(function(ele) {
      return ele.name.indexOf(str)!=-1;
    });
    displaymerch(items);

}
displaymerch(merch);