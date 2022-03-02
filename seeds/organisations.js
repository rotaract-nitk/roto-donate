// title : {
//     type : String,
//     required : [true,'Organisation must have a title']
// },
// mission : {
//     type : String,
//     required : [true,'Organisation card needs mission to show']
// },
// description : {
//     type : String,
//     required : [true,'Organisation needs description to show in it\'s page']
// },
// thumbnail : {
//     type : imageSchema,
//     required : [true,'Organisaton card must have a thumbnail']
// },
// images : [imageSchema]

module.exports = [
    {
        title: "Nanhi",
        mission: "Fight With Hunger",
        description: "Nanhi Pari Foundation, the best child care NGO in Mumbai has helped needy people in COVID-19. We distributed dry ration kits, cooked food, water & masks to the people who were in need.",
        thumbnail: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        images: [
            {
                url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: "alt",
            },
            {
                url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: "alt",
            }
        ]
    },

    {
        title: 'The Smile Foundation',
        mission: "Help Feed A Child",
        description: 'The purpose of the Smile Foundation for Education in India was to promote education among the underprivileged. Their development program includes Education, health and livelihood.',
        thumbnail: "https://www.unitedwaymumbai.org/ngo_logos/142_logo.jpg",
        images: [
            {
                url: 'https://www.unitedwaymumbai.org/ngo_logos/142_logo.jpg'
            }
        ]
    },

    {
        title: 'Helpage India',
        mission: "Fighting poverty, isolation and neglect  ",
        description: 'HelpAge India is an Indian organisation focused on the concerns of elders. Established in 1978, its mission is to “work for the cause and care of under-aged elderly people and improve their standard of living”.',
        thumbnail: "https://globalprimenews.com/wp-content/uploads/2020/05/IMG_20200511_184505.png",
        images: [
            {
                Url: 'https://globalprimenews.com/wp-content/uploads/2020/05/IMG_20200511_184505.png'
            }
        ]
    },

    {
        title: 'CRY (Child Rights and You)',
        mission: "Ensure happier childhoods for India’s children in 2022",
        description: 'Recognized as India’s most trusted  NGO, Child Rights and You (CRY) works tirelessly to ensure happier and healthier childhoods for India’s underprivileged childrem.',
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Child_Rights_and_You_%28CRY%29_Organization_logo.png/250px-Child_Rights_and_You_%28CRY%29_Organization_logo.png",
        images: [
            {

                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Child_Rights_and_You_%28CRY%29_Organization_logo.png/250px-Child_Rights_and_You_%28CRY%29_Organization_logo.png'
            }
        ]
    },

    {
        title: 'Pratham',
        mission: "to improve the quality of education in India ",
        description: 'Pratham is one of the largest non-governmental organisations in India. Madhav Chavan and Farida Lambe founded it. It works towards the provision of quality education for underprivileged children in India.Established in Mumbai in 1994 to provide pre-school education to children in slums.',
        thumbnail: "https://www.pratham.org/wp-content/uploads/2020/03/Capture.png",

        images: [
            {
                url: 'https://www.pratham.org/wp-content/uploads/2020/03/Capture.png'
            }
        ]

    }


]