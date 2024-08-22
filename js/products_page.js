import { fetchProducts } from "./fetch_data.js";
import { productPageTmpl } from "./templates.js";

let products = await fetchProducts();

export function productPage() {
  const productsPageContainer = document.querySelector(
    ".product-page-container"
  );

  if (productsPageContainer) {
    let search = location.search;

    let productID = new URLSearchParams(search).get("id");

    let findProduct = products.find((product) => product.id == productID);
    productsPageContainer.insertAdjacentHTML(
      "beforeend",
      productPageTmpl(findProduct)
    );
  }
}
