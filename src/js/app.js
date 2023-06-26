import { select, settings, classNames } from './settings.js';
import Product from './components/Product.js';

const app = {
    initMenu: function () {
        const thisApp = this;

        for (let productData in thisApp.data.products) {
            new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
        }
    },

    initPages: function () {

        const thisApp = this;

        thisApp.pages = document.querySelector(select.containerOf.pages).children;
        thisApp.navLinks = document.querySelectorAll(select.nav.links);
        thisApp.activatePage(thisApp.pages[2].id);

        for (let link of thisApp.navLinks) {
            link.addEventListener('click', function (event) {
                const clickedElement = this;
                event.preventDefault();

                const id = clickedElement.getAttribute('href').replace('#', '');

                thisApp.activatePage(id);
            });
        }
    },

    activatePage: function (pageId) {
        const thisApp = this;

        for (let page of thisApp.pages) {

            page.classList.toggle(classNames.pages.active, page.id == pageId);

            if (thisApp.pages[2].classList.contains(classNames.pages.active))
                thisApp.pages[0].classList.add(classNames.pages.active);
        }

        for (let link of thisApp.navLinks) {
            link.classList.toggle(
                classNames.nav.active,
                link.getAttribute('href') == '#' + pageId
            );
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
                app.initMenu();
            });
    },

    init: function () {
        const thisApp = this;
        thisApp.initData();
        thisApp.initPages();
    },
};

app.init();