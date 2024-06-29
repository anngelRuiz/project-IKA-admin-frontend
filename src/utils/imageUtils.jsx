import clientWomanImg1 from '../images/users-profile/client-woman-1.png';
import clientManImg1 from '../images/users-profile/client-man-1.png';
import clientOtherImg from '../images/users-profile/client-other.png';

const womanImages = [clientWomanImg1];
const manImages = [clientManImg1];

export function getRandomImage(gender){
    if (gender === 'Male') {
        return manImages[Math.floor(Math.random() * manImages.length)];
    } else if (gender === 'Female') {
        return womanImages[Math.floor(Math.random() * womanImages.length)];
    } else if (gender === 'Other') {
        return clientOtherImg;
    }
    return null;
}