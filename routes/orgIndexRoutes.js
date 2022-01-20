const express = require('express')

const router = express.Router()

const orgIndex = [
    {
        title: 'Nanhi Kali',
        description: 'Nanhi Kali is an Indian non-governmental organization that supports education for underprivileged girls in India. Founded by Anand Mahindra in 1996, it is jointly managed by Naandi Foundation and KC Mahindra Education Trust, part of the Mahindra Group’s corporate social responsibilities.',
        imgUrl: 'https://www.rotary-ribi.org/upimages/PageMainPics/Nanhi%20Kali%20Image.jpg'
    },
    {
        title: 'The Smile Foundation',
        description: 'The purpose of the Smile Foundation for Education in India was to promote education among the underprivileged. Their development program includes Education, health, livelihood for children and women, provision to be equally affected by lack of resources. Some of his programs are Smile on Wheels, Mission Education and Smile Twin e-learning programs.',
        imgUrl: 'https://www.unitedwaymumbai.org/ngo_logos/142_logo.jpg'
    },
    {
        title: 'Helpage India',
        description: 'HelpAge India is an Indian organisation focused on the concerns of elders. Established in 1978, its mission is to “work for the cause and care of under-aged elderly people and improve their standard of living”. HelpAge is taking action against universal, pension, healthcare, Elder Abuse at the national, state and social levels with the central and state governments and advocates for the needy. It runs various age care programs to cater to the more significant needs. It aims to serve the disadvantaged elders holistically to lead an active, dignified and healthy life.',
        imgUrl: 'https://globalprimenews.com/wp-content/uploads/2020/05/IMG_20200511_184505.png'
    },
    {
        title: 'CRY (Child Rights and You)',
        description: 'Recognized as India’s most trusted  NGO, Child Rights and You (CRY) works tirelessly to ensure happier and healthier childhoods for India’s underprivileged children. CRY addresses children’s critical needs of healthcare, nutrition, education and protection from child labour and child marriage by working with parents, teachers, Anganwadi workers, communities, district and state-level governments as well as the children themselves. In the last 42 years, CRY has impacted the lives of over 3 million children across 19 states in India.',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Child_Rights_and_You_%28CRY%29_Organization_logo.png/250px-Child_Rights_and_You_%28CRY%29_Organization_logo.png'
    },
    {
        title: 'Pratham',
        description: 'Pratham is one of the largest non-governmental organisations in India. Madhav Chavan and Farida Lambe founded it. It works towards the provision of quality education for underprivileged children in India.Established in Mumbai in 1994 to provide pre-school education to children in slums, Pratham has today intervened in 23 states and union territories in India and supported chapters in the United States, Britain, Germany, and Sweden.',
        imgUrl: 'https://www.pratham.org/wp-content/uploads/2020/03/Capture.png'
    }
]


router.get('/', (req, res) => {
    res.render('organizations/index.ejs', { orgIndex: orgIndex });
})

module.exports = router