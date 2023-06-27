import { select, templates } from './../settings.js';
import utils from './../utils.js';

class Product {
    constructor(id, data) {
        const thisProduct = this;

        thisProduct.id = id;
   
        thisProduct.data = data;

        thisProduct.renderInMenu();
    }

    renderInMenu() {
        const thisProduct = this;

        const generatedHTML = templates.menuProduct(thisProduct.data);

        thisProduct.element = utils.createDOMFromHTML(generatedHTML);

        const menuContainer = document.querySelector(select.containerOf.menu);

        menuContainer.appendChild(thisProduct.element);

    }
}

export default Product;