export const select = {
    templateOf: {
        menuProduct: '#template-menu-product',
        contact: '#template-contact'
    },
    containerOf: {
        menu: '#product-list',
        pages: '#pages'
    }, 

    nav: {
        links: '.header__nav ul li a'
    }
};

export const classNames = {
    nav: {
        active: 'active',
    },
    pages: {
        active: 'active',
    }
};

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3132' : ''),
        products: 'products',
    }
};

export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};