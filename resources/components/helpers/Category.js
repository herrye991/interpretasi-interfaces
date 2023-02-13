import React from 'react'

function Category (id) {
    const categories = [
        {
            "id": 1,
            "name": "News"
        },
        {
            "id": 2,
            "name": "Entertainment"
        },
        {
            "id": 3,
            "name": "Mom"
        },
        {
            "id": 4,
            "name": "Food & Travel"
        },
        {
            "id": 5,
            "name": "Tekno & Sains"
        },
        {
            "id": 6,
            "name": "Otomotif"
        },
        {
            "id": 7,
            "name": "Wanita"
        },
        {
            "id": 8,
            "name": "Lifestyle"
        }
    ];

    const category = categories.filter(categories => categories.id === id)
    return category[0].name
}

export default Category;