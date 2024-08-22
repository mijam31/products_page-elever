// Template functions - hver function opfører sig som en HTML template. 

export const productListTmpl = (product) => 

    `
        <p><b>${product.title}</b></p>
        <p><i>${product.price} kr</i></p>
        <img src="${product.image}${product.id}">
    <button><a href="">Se produkt</a></button> 
    `;

