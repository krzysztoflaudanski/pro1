import { settings } from './settings.js';
import Product from './components/Product.js';

const app = {
    initMenu: function () {
        const thisApp = this;
        //console.log('thisApp.data:', thisApp.data)

        for (let productData in thisApp.data.products) {
            new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
        }
    },

    initData: function () {
        const url = settings.db.url + '/' + settings.db.products;
        this.data = {};
        fetch(url)
            .then((rawResponse) => {
                return rawResponse.json();
            })
            .then((parsedResponse) => {
                this.data.products = parsedResponse;
                //console.log(this.data.products);
                app.initMenu();
            });
    },

    init: function () {
        const thisApp = this;
        thisApp.initData();
    },
};

app.init();