// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  ` <div class="wrap">
        <p><b>${product.title}</b></p>
        
        <img src="${product.image}">
        <p><i>${product.price} kr</i></p>
    <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
    </div>
    `;

export const productPageTmpl = (product) =>
  `
              <h2><b>${product.title}</b></h2>
              
              <img src="${product.image}">
              <p><i>${product.price} kr</i></p>
                <p>${product.description}</p>
          <button><a href="index.html"</a>Tilbage</button> 
          `;
