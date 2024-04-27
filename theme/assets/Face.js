const updateCartScroll = (cart) => {
  const cartcount = document.getElementById("cart-items-count");

  cartcount.textContent = cart.items.length;
  const cartScroll = document.getElementById("cartScroll");
  cartScroll.innerHTML = "";
  for (const [index, item] of cart.items.entries()) {
    console.log("here i am updating it from the loop of face file");
    const oneitem = document.createElement("div");
    oneitem.innerHTML = `<div class="cartProduct " >
  <div class=" flex items-center px-4 gap-4 bg-[white] w-full  text-sm ">
    <div class="border-2 border-gray-700">
      <img class="w-32" height="" width="" src="${item.image}">
    </div>

    <div class="flex flex-col py-2">
      <h1 class="mb-2">${item.title} </h1>
      <div class="flex items-center justify-between text-xs"><p>Price</p> <span> ${Math.floor(
        item.price / 100
      )} </span></div>
      <div class="flex items-center justify-between  text-xs"><p>Weight</p> <span>${
        item.grams
      }</span></div>
      <div class="flex items-center justify-between  my-1 text-xs">
        <p>Quantity</p>
        <div class="border border-gray-700 rounded-3xl mr-[-5px]">
            <div class="flex items-center justify-center gap-2  px-2">

                <div class=" rounded-r-2xl " >
                    <p class="text-center text-xs">
                      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                      </svg>
                      
                      
                    </p>
                </div>
                <div class="" >
                    <p class="text-center text-md  font-semibold">${
                      item.quantity
                    }</p>
                </div>
                <div class="  rounded-r-2xl " >
                    <p class="text-center text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                      
                    </p>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  </div>
  <hr>
  <div class="border-2  bg-[white] w-full px-2 py-2">
    <div class="flex items-center justify-between text-xs">
      <div class="flex items-center justify-center gap-2"><p>Subtotal</p> <span>₹ ${
        item.final_line_price
      }</span></div>
      <div>
        <a href="/cart/change?line=${index}&quantity=0" rel="${item.id}" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

        </a>
       
        
      </div>
    </div>
  </div>
</div>`;
    cartScroll.appendChild(oneitem);
  }
};

const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Hi , I am making a fetch request from Form ");

    // Submit form with ajax
    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });

    const res = await fetch("/cart.json");
    const cart = await res.json();
    updateCartScroll(cart);
    const sidebarCart = document.getElementById("CartSideBar");

    if (window.innerWidth > 800) {
      sidebarCart.classList.remove("hidden");
    }
  });
});

// showsidedrawer

function showsidefilter() {
  let filter = document.getElementById("filterdrawer");
  filter.style.display = "block";
}
let sidefilterbutton = document.getElementById("sidefilterbutton");
sidefilterbutton.addEventListener("click", showsidefilter);

function closesidefilter() {
  let filter = document.getElementById("filterdrawer");
  filter.style.display = "none";
}
let closefilterDrawerbutton = document.getElementById("closeDrawer");
closefilterDrawerbutton.addEventListener("click", closesidefilter);
