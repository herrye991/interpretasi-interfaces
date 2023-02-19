import React from 'react'

function Category (id) {
    const categories = [
        {
            "id": 1,
            "name": "Kesehatan",
            "color": { color:"#00baff" },
            "background_color": { backgroundColor:"#00baff" },
            "image": ""
        },
        {
            "id": 2,
            "name": "Berita",
            "color": { color:"#ffae25" },
            "background_color": { backgroundColor:"#ffae25" },
            "image": ""
        },
        {
            "id": 3,
            "name": "Berita Internasional",
            "color": { color:"#fc16a8" },
            "background_color": { backgroundColor:"#fc16a8" },
            "image": ""
        },
        {
            "id": 4,
            "name": "Ekonomi & Bisnis",
            "color": { color:"#ff4f00" },
            "background_color": { backgroundColor:"#ff4f00" },
            "image": ""
        },
        {
            "id": 5,
            "name": "Politik",
            "color": { color:"#007bff" },
            "background_color": { backgroundColor:"#007bff" },
            "image": ""
        },
        {
            "id": 6,
            "name": "Wisata & Kuliner",
            "color": { color:"#00baff" },
            "background_color": { backgroundColor:"#00baff" },
            "image": ""
        },
        {
            "id": 7,
            "name": "Games & Esports",
            "color": { color:"#fc16a8" },
            "background_color": { backgroundColor:"#fc16a8" },
            "image": ""
        },
        {
            "id": 8,
            "name": "Olahraga",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        },
        {
            "id": 9,
            "name": "Sejarah",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        },
        {
            "id": 10,
            "name": "Teknologi",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        },
        {
            "id": 11,
            "name": "Karir & Info Loker",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        },
        {
            "id": 12,
            "name": "Hiburan",
            "color": { color:"#52a815" },
            "background_color": { backgroundColor:"#52a815" },
            "image": ""
        }
    ];

    const category = categories.filter(categories => categories.id === id)
    return category
}

export default Category;