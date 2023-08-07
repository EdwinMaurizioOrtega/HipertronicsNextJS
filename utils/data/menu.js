export const mainMenu = {
    "shop": {
        "variation1": [
            {
                "title": "Samsung",
                "url": "shop/banner-sidebar"
            },
            {
                "title": "Infinix",
                "url": "shop/boxed-banner"
            },
            {
                "title": "Xiaomi",
                "url": "shop/infinite-scroll"
            },
            {
                "title": "Honor",
                "url": "shop/horizontal-filter"
            },
            {
                "title": "Nokia",
                "url": "shop/navigation-filter",
                "hot": true
            },
            {
                "title": "Blu",
                "url": "shop/off-canvas-filter"
            },
            {
                "title": "TCL",
                "url": "shop/right-sidebar"
            }
        ],
        "variation2": [
            {
                "title": "3 Columns Mode",
                "url": "shop/grid/3cols",
                "new": true
            },
            {
                "title": "4 Columns Mode",
                "url": "shop/grid/4cols"
            },
            {
                "title": "5 Columns Mode",
                "url": "shop/grid/5cols"
            },
            {
                "title": "6 Columns Mode",
                "url": "shop/grid/6cols"
            },
            {
                "title": "7 Columns Mode",
                "url": "shop/grid/7cols"
            },
            {
                "title": "8 Columns Mode",
                "url": "shop/grid/8cols"
            },
            {
                "title": "List Mode",
                "url": "shop/?type=list"
            }
        ]
    },
    "product": {
        "pages": [
            {
                "title": "Samsung",
                "url": "product/default/fashionable-overnight-bag"
            }
        ],
        "layout": [
            {
                "title": "Grid Images",
                "url": "product/grid/fashionable-leather-satchel",
                "new": true
            },
            {
                "title": "Masonry",
                "url": "product/masonry/fashionable-hooded-coat"
            },
            {
                "title": "Gallery Type",
                "url": "product/gallery/fashionable-leather-satchel"
            },
            {
                "title": "Full Width Layout",
                "url": "product/full-width/fashionable-leather-satchel"
            },
            {
                "title": "Sticky Info",
                "url": "product/sticky-info/fashionable-leather-satchel"
            },
            {
                "title": "Left & Right Sticky",
                "url": "product/sticky-both/fashionable-leather-satchel"
            },
            {
                "title": "Horizontal Thumb",
                "url": "product/horizontal/fashionable-leather-satchel"
            },
            {
                "title": "Build Your Own",
                "url": ""
            }
        ]
    },
    "other": [
        {
            "title": "Samsung",
            "url": "pages/about-us"
        },
        {
            "title": "Nokia",
            "url": "pages/contact-us"
        }
    ],
    "blog": [
        {
            "title": "SmartWatch",
            "url": "blog/classic"
        },
        {
            "title": "Buds",
            "url": "blog/listing"
        },


        {
            "title": "Cargadores",
            "url": "blog/mask/grid",

        },
        {
            "title": "Case",
            "url": "blog/single/pellentesque-fusce-suscipit"
        }
    ],
    "element": [
        {
            "title": "Products",
            "url": "elements/products"
        },
        {
            "title": "Typography",
            "url": "elements/typography"
        },
        {
            "title": "Titles",
            "url": "elements/titles"
        },
        {
            "title": "Product Category",
            "url": "elements/product-category"
        },
        {
            "title": "Buttons",
            "url": "elements/buttons"
        },
        {
            "title": "Accordions",
            "url": "elements/accordions"
        },
        {
            "title": "Alert & Notification",
            "url": "elements/alerts"
        },
        {
            "title": "Tabs",
            "url": "elements/tabs"
        },
        {
            "title": "Testimonials",
            "url": "elements/testimonials"
        },
        {
            "title": "Blog Posts",
            "url": "elements/blog-posts"
        },
        {
            "title": "Instagrams",
            "url": "elements/instagrams"
        },
        {
            "title": "Call to Action",
            "url": "elements/cta"
        },
        {
            "title": "Icon Boxes",
            "url": "elements/icon-boxes"
        },
        {
            "title": "Icons",
            "url": "elements/icons"
        }
    ]
}

export const elementsList = [
    {
        "url": "accordions",
        "class": "element-accordian",
        "title": "accordions"
    },
    {
        "url": "blog-posts",
        "class": "element-blog",
        "title": "blog posts"
    },
    {
        "url": "buttons",
        "class": "element-button",
        "title": "buttons"
    },
    {
        "url": "cta",
        "class": "element-cta",
        "title": "call to action"
    },
    {
        "url": "icon-boxes",
        "class": "element-icon-box",
        "title": "icon boxes"
    },
    {
        "url": "icons",
        "class": "element-icon",
        "title": "Icons"
    },
    {
        "url": "instagrams",
        "class": "element-portfolio",
        "title": "instagrams"
    },
    {
        "url": "categories",
        "class": "element-category",
        "title": "product categories"
    },
    {
        "url": "products",
        "class": "element-product",
        "title": "products"
    },
    {
        "url": "tabs",
        "class": "element-tab",
        "title": "tabs"
    },
    {
        "url": "testimonials",
        "class": "element-testimonial",
        "title": "testimonials"
    },
    {
        "url": "titles",
        "class": "element-title",
        "title": "titles"
    },
    {
        "url": "typography",
        "class": "element-typography",
        "title": "typography"
    },
    {
        "url": "alerts",
        "class": "element-video",
        "title": "Notification"
    }
]

export const headerBorderRemoveList = [
    "/",
    "/shop",
    "/shop/infinite-scroll",
    "/shop/horizontal-filter",
    "/shop/navigation-filter",
    "/shop/off-canvas-filter",
    "/shop/right-sidebar",
    "/shop/grid/[grid]",
    "/pages/404",
    "/pages/about-us",
    "/pages/account",
    "/pages/cart",
    "/pages/checkout",
    "/pages/order",
    "/pages/wishlist",
    "/product/default/[slug]",
    "/blog/single/[slug]",
    "/vendor",
    "/vendor/list",
    "/vendor/single",
    "/elements",
    "/elements/products",
    "/elements/typography",
    "/elements/titles",
    "/elements/product-category",
    "/elements/buttons",
    "/elements/accordions",
    "/elements/alerts",
    "/elements/tabs",
    "/elements/testimonials",
    "/elements/blog-posts",
    "/elements/instagrams",
    "/elements/cta",
    "/elements/icon-boxes",
    "/elements/icons"
]