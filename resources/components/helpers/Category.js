import React from 'react'

function Category(id) {
    const categories = [
        {
            "id": 1,
            "name": "Kesehatan",
            "unique_name": "kesehatan",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 2,
            "name": "Berita",
            "unique_name": "berita",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 3,
            "name": "Mancanegara",
            "unique_name": "mancanegara",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 4,
            "name": "Ekonomi & Bisnis",
            "unique_name": "ekonomi-bisnis",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 5,
            "name": "Politik",
            "unique_name": "politik",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 6,
            "name": "Wisata & Kuliner",
            "unique_name": "wisata-kuliner",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 7,
            "name": "Games & Esports",
            "unique_name": "games-esports",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 8,
            "name": "Olahraga",
            "unique_name": "olahraga",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 9,
            "name": "Sejarah",
            "unique_name": "sejarah",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 10,
            "name": "Teknologi",
            "unique_name": "teknologi",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 11,
            "name": "Karir & Info Loker",
            "unique_name": "karir-info-loker",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        },
        {
            "id": 12,
            "name": "Entertainment",
            "unique_name": "entertainment",
            "color": { color:"#6f5ef3" },
            "background_color": { backgroundColor:"#5541f8" },
            "image": ""
        }
    ];
    if (isNaN(id)) {
        return categories.filter(categories => categories.unique_name === id)
    } else {
        return categories.filter(categories => categories.id === id)
    }
}

export default Category;