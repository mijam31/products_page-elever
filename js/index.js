import { productsList } from "./products_list.js";
import { productPage } from "./products_page.js";

const app = {};

app.init = async () => {
  productsList();
  productPage();
};

app.init();
