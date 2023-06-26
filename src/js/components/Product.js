import { select, templates } from './../settings.js';
import utils from './../utils.js';

class Product {
    constructor(id, data) {
        const thisProduct = this;

        thisProduct.id = id;
        //console.log(id);
        thisProduct.data = data;
        //console.log(data);

        thisProduct.renderInMenu();

        //thisProduct.getElements();
    }

    renderInMenu() {
        const thisProduct = this;

        //generate HTML based on template 

        const generatedHTML = templates.menuProduct(thisProduct.data);

        // create element using utils.createElementFromHTML 

        thisProduct.element = utils.createDOMFromHTML(generatedHTML);

        // find menu container 

        const menuContainer = document.querySelector(select.containerOf.menu);
        //console.log(menuContainer);
        // add element to menu 

        menuContainer.appendChild(thisProduct.element);

    }
}

export default Product;