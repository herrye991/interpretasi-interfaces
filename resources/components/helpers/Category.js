import React from 'react'

function Category (id) {
    const categories = [
        {
            "id": 1,
            "name": "News",
            "color": { color:"#00baff" },
            "background_color": { backgroundColor:"#00baff" },
            "image": ""
        },
        {
            "id": 2,
            "name": "Entertainment",
            "color": { color:"#ffae25" },
            "background_color": { backgroundColor:"#ffae25" },
            "image": ""
        },
        {
            "id": 3,
            "name": "Mom",
            "color": { color:"#fc16a8" },
            "background_color": { backgroundColor:"#fc16a8" },
            "image": ""
        },
        {
            "id": 4,
            "name": "Food & Travel",
            "color": { color:"#ff4f00" },
            "background_color": { backgroundColor:"#ff4f00" },
            "image": ""
        },
        {
            "id": 5,
            "name": "Tekno & Sains",
            "color": { color:"#007bff" },
            "background_color": { backgroundColor:"#007bff" },
            "image": ""
        },
        {
            "id": 6,
            "name": "Otomotif",
            "color": { color:"#00baff" },
            "background_color": { backgroundColor:"#00baff" },
            "image": ""
        },
        {
            "id": 7,
            "name": "Wanita",
            "color": { color:"#fc16a8" },
            "background_color": { backgroundColor:"#fc16a8" },
            "image": ""
        },
        {
            "id": 8,
            "name": "Lifestyle",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        }
    ];

    const category = categories.filter(categories => categories.id === id)
    return category
}

export default Category;