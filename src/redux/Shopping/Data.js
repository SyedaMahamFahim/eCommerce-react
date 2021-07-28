const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            description:
                "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            images: [
                {
                    id: 1,
                    original: require('../../Components/Products/ProductImages/1.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/1.jpg').default,
                },
                {
                    id: 2,
                    original: require('../../Components/Products/ProductImages/2.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/2.jpg').default,
                },
                {
                    id: 3,
                    original: require('../../Components/Products/ProductImages/3.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/3.jpg').default,
                },

                {
                    id: 5,
                    original: require('../../Components/Products/ProductImages/9.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/9.jpg').default,
                },
            ]
        },
        {
            id: 2,
            title: "Large Coffee Cup",
            description:
                "Get a big cup of coffee every morning before the day starts",
            price: 20.0,
            images: [
                {
                    id: 1,
                    original: require('../../Components/Products/ProductImages/1.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/1.jpg').default,
                },
                {
                    id: 2,
                    original: require('../../Components/Products/ProductImages/2.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/2.jpg').default,
                },
                {
                    id: 3,
                    original: require('../../Components/Products/ProductImages/3.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/3.jpg').default,
                },

                {
                    id: 5,
                    original: require('../../Components/Products/ProductImages/9.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/9.jpg').default,
                },
            ]
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            description:
                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
            price: 150.0,
            images: [
                {
                    id: 1,
                    original: require('../../Components/Products/ProductImages/1.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/1.jpg').default,
                },
                {
                    id: 2,
                    original: require('../../Components/Products/ProductImages/2.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/2.jpg').default,
                },
                {
                    id: 3,
                    original: require('../../Components/Products/ProductImages/3.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/3.jpg').default,
                },

                {
                    id: 5,
                    original: require('../../Components/Products/ProductImages/9.jpg').default,
                    thumbnail: require('../../Components/Products/ProductImages/9.jpg').default,
                },
            ]
        },
    ],
    cart: [],
    currentItem: null,
};
export default INITIAL_STATE;