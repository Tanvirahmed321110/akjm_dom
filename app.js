
const settings = {
    isHeading: true,
    headingText: "Popular Text_",
    headingAlignment: "start"
}
// This function create for select element
const selectElementById = (id) => {
    return document.getElementById(id)
}



// All Select element
const selectElement = {
    header: selectElementById('header'),
    productsItems: selectElementById('products_items')
}

const { header, productsItems } = selectElement;

/***
 * start heading operation
***/
if (header) {
    !settings.isHeading && (header.style.display = 'none');
    settings.headingAlignment && (header.style.textAlign = settings.headingAlignment);
    const heading = createElement({ tagName: "h2", id: "h2", className: "xxl-title" });
    heading.innerText = settings.headingText;
    header.appendChild(heading);
}

/***
 * start create product card
***/
if (productsItems) {
    const card = createElement({ tagName: "div", className: "popular-product-item product-cart flex-column-25" });
    /* product image */
    let imageWrapper = createElement({ tagName: "div", className: "product-image text-center" });
    let cardLink = createElement({ tagName: "a", href: "./product-page.html" });
    let img = createElement({ tagName: "IMG", src: "image/product3.jpeg", alt: "product image" });
    let baseWrapper = createElement({ tagName: "div", className: "product-base" });
    let base = createElement({ tagName: "small" });

    base.innerText = "sale";

    let iconsWrapper = createElement({ tagName: "div", className: "hide-icons d-flex-10" });

    let viewIcon = iconGenerate({ className: "hide-icon", icon: "ri-eye-line", link: "#" });
    let heartIcon = iconGenerate({ className: "hide-icon", icon: "ri-heart-line", link: "#" });
    let threeLineIcon = iconGenerate({ className: "hide-icon", icon: "ri-equalizer-3-line", link: "#" });


    // product content
    let productContent = createElement({ tagName: 'div', className: 'product-cart-content flex-column-10 w-100' })
    let productCatagory = createElement({ tagName: 'div', className: 'product-catagory-name flex-column-5' })

    let catagoryName = createElement({ tagName: 'p' })
    catagoryName.innerText = 'RA &amp; Mumchies '
    let productName = createElement({ tagName: 'h4', className: "sm-title" })
    productName.innerText = 'NutriChoice Digestive'

    // all rating
    const allRating = createElement({ tagName: 'div', className: 'all-rating flex-start-10' })
    const rating = createElement({ tagName: 'div', className: 'rating' })
    const totalRatingContent = createElement({ tagName: 'div' })
    const totalRatingSmall = createElement({ tagName: 'small' })
    totalRatingSmall.innerText = ' 4.9(11)'

    totalRatingContent.appendChild(totalRatingSmall)

    const rating1 = iconGenerate({ link: "#", icon: "ri-star-fill" })
    const rating2 = iconGenerate({ link: "#", icon: "ri-star-fill" })
    const rating3 = iconGenerate({ link: "#", icon: "ri-star-fill" })
    const rating4 = iconGenerate({ link: "#", icon: "ri-star-fill" })
    const rating5 = iconGenerate({ link: "#", icon: "ri-star-half-line" })

    rating.appendChild(rating1)
    rating.appendChild(rating2)
    rating.appendChild(rating3)
    rating.appendChild(rating4)
    rating.appendChild(rating5)

    allRating.appendChild(rating)
    allRating.appendChild(totalRatingContent)


    // card bottom
    let cardBottom = createElement({ tagName: 'div', className: 'flex-between w-100' })
    let price = createElement({ tagName: "div", className: "price flex-start-10" })
    let newPrice = createElement({ tagName: 'div', className: "new-price" })
    let newPriceP = createElement({ tagName: 'p' })
    newPriceP.innerText = '$17'
    newPrice.appendChild(newPriceP)
    price.appendChild(newPrice)

    let oldPrice = createElement({ tagName: 'div', className: 'old-price' })
    let oldPriceP = createElement({ tagName: 'p' })
    oldPriceP.innerText = '$22'
    oldPrice.appendChild(oldPriceP)
    price.appendChild(oldPrice)


    // add to cart btn
    let addToCart = createElement({ tagName: 'div' })
    let addToCartBtn = createElement({ tagName: 'a', href: '#', className: 'btn-fill-orange' })
    let addToCartBtnI = createElement({ tagName: 'i', className: 'ri-add-line' })
    let addToCartSpan = createElement({ tagName: 'span' })
    addToCartSpan.innerText = ' Add'
    addToCartBtn.appendChild(addToCartBtnI)
    addToCartBtn.appendChild(addToCartSpan)
    addToCartBtn.innerHTML
    addToCart.appendChild(addToCartBtn)

    cardBottom.appendChild(price)
    cardBottom.appendChild(addToCart)

    iconsWrapper.appendChild(viewIcon)
    iconsWrapper.appendChild(heartIcon)
    iconsWrapper.appendChild(threeLineIcon)

    baseWrapper.appendChild(base);
    cardLink.appendChild(img);
    imageWrapper.appendChild(iconsWrapper)
    imageWrapper.appendChild(baseWrapper);
    imageWrapper.appendChild(cardLink);
    card.appendChild(imageWrapper);

    card.appendChild(productContent)
    productContent.appendChild(productCatagory)
    productCatagory.appendChild(catagoryName)
    productCatagory.appendChild(productName)
    productContent.appendChild(allRating)
    productContent.appendChild(cardBottom)



    productsItems.appendChild(card);
}



function iconGenerate({ className, icon, link }) {
    let a = createElement({ tagName: "a", href: link, className: className });
    let iconElem = createElement({ tagName: "i", className: icon })
    a.appendChild(iconElem)
    return a
}

// This function use for create element
function createElement({ tagName, id, className, href, src, alt }) {
    let tag = document.createElement(tagName);
    if (tag) {
        id && (tag.id = id);
        href && (tag.href = href);
        src && (tag.src = src);
        alt && (tag.alt = alt);
        className && (tag.className = className);
    }

    return tag;
}
