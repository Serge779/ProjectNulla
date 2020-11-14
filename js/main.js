const NAVIGATON = document.querySelectorAll(".nav__item");
const WISHLIST_CONTAINER = document.querySelectorAll(".wishlist_container");
const ADD_BASKET = document.querySelectorAll(".products__add_basket");
const BASKET_LIST = document.querySelector(".basket__list");



for (let i = 0; i < NAVIGATON.length; i++) {
    NAVIGATON[i].addEventListener("click", () => {
        for (let j = 0; j < NAVIGATON.length; j++) {
            NAVIGATON[j].classList.remove("active");
            WISHLIST_CONTAINER[j].classList.remove("active");
        }
        NAVIGATON[i].classList.add("active");
        WISHLIST_CONTAINER[i].classList.add("active");
    })
}

ADD_BASKET.forEach(element => {

    element.addEventListener("click", () => {
        let img = element.parentElement.querySelector("img").getAttribute("src");
        let name = element.parentElement.querySelector(".products__name").innerHTML;
        let price = element.parentElement.querySelector(".products__price").innerHTML;

        let basket_item = document.createElement("li");
        let about_product = document.createElement("ul");
        let about_product_item_img = document.createElement("li");
        let about_product_item_image = document.createElement("img");
        let about_product_item_name = document.createElement("li");
        let about_product_item_count = document.createElement("li");
        let about_product_item_price = document.createElement("li");

        basket_item.classList.add("basket__item");
        about_product.classList.add("about_product");
        about_product_item_img.classList.add("about_product__item");
        about_product_item_name.classList.add("about_product__item");
        about_product_item_count.classList.add("about_product__item");
        about_product_item_price.classList.add("about_product__item");
        about_product_item_price.classList.add("about_product__item--price");


        about_product_item_image.src = img;
        about_product_item_name.innerHTML = name;
        about_product_item_price.innerHTML = price;
        about_product_item_count.innerHTML = 1;

        about_product_item_img.append(about_product_item_image);

        about_product.append(about_product_item_img);
        about_product.append(about_product_item_name);
        about_product.append(about_product_item_count);
        about_product.append(about_product_item_price);

        basket_item.append(about_product);

        BASKET_LIST.append(basket_item);
    })

})