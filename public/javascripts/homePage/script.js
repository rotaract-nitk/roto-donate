// ||||||||||SECTION-DONATION-INFO||||||||||


const topDonationButton = document.getElementsByClassName('top-donation-button')[0];
const recentDonationButton = document.getElementsByClassName('recent-donation-button')[0];
const recentDonationInfo = document.getElementsByClassName('recent-donation-info')[0];
const topDonationInfo = document.getElementsByClassName('top-donation-info')[0];

console.log(topDonationButton);

topDonationButton.addEventListener('click', (e) => {
    e.preventDefault();
    recentDonationButton.classList.remove('donation-info-active');
    recentDonationInfo.classList.add('visually-hidden');
    topDonationButton.classList.add('donation-info-active');
    topDonationInfo.classList.remove('visually-hidden');
})

recentDonationButton.addEventListener('click', (e) => {
    e.preventDefault();
    topDonationButton.classList.remove('donation-info-active');
    topDonationInfo.classList.add('visually-hidden');
    recentDonationButton.classList.add('donation-info-active');
    recentDonationInfo.classList.remove('visually-hidden');
})


const donationFilterSelect = document.getElementsByClassName('donation-filter-select')[0];
donationFilterSelect.addEventListener('change', (e) => {
    const currFilter = donationFilterSelect.options[donationFilterSelect.selectedIndex].value;
    if (currFilter == "Top Donations")
        topDonationButton.click();
    else if (currFilter == "Recent Donations")
        recentDonationButton.click();
})
