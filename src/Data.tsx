import port from './img/port/portofolio.jpg'
import port2 from './img/port/portofolio2.jpg'
import dyn from './img/port/DynamicTextProj1.jpg'
import dyn2 from './img/port/DynamicTextProj2.jpg'
import dyn3 from './img/port/DynamicTextProj3.jpg'
import ado from './img/port/adooboo.jpg'
import ado2 from './img/port/adooboo2.jpg'
import ado3 from './img/port/adooboo3.jpg'

import total from './img/port/totalReward.jpg'
import total2 from './img/port/totalReward2.jpg'
import quiz from './img/port/quizWorld.png'
import quiz1 from './img/port/quizWorld1.jpg'
import quiz2 from './img/port/quizWorld2.jpg'
import itask from './img/port/christ.jpg'
import unity from './img/port/unityGame.jpg'
import unity2 from './img/port/unityGame2.png'
import unity3 from './img/port/unityGame3.png'
import elec from './img/port/elecTrip.png'
import mess from './img/port/messengerProject.png'
import fire from './img/port/firefoxUI.jpg'
import fire2 from './img/port/firefoxUI2.jpg'
import mock from './img/port/mock.png'
import mock2 from './img/port/mock2.jpg'
import mock3 from './img/port/mock3.jpg'
import mock4 from './img/port/mock4.jpg'
import mock5 from './img/port/mock5.png'
import mock6 from './img/port/mock6.jpg'
import adooboo from './img/logos/adooboo.png'
import oonio from './img/logos/oonio.png'
import stellar from './img/logos/stellar.png'
import totalreward from './img/logos/totalreward.png'
import yourphoner from './img/logos/yourphoner.png'

import crypWhite from './img/portDesign/cryp-white.png'
import crypBlack from './img/portDesign/cryp - blek.png'
import crypBlackGlass from './img/portDesign/cryp-blek glass.png'
import salesMock from './img/portDesign/sales perspective mock.png'
import sales1 from './img/portDesign/Sales.png'
import sales2 from './img/portDesign/Visitors.png'
import iso from './img/portDesign/isoprod 1.jpg'
import iso2 from './img/portDesign/isoprod 2.jpg'
import iso3 from './img/portDesign/isoprod 3.jpg'
import mis from './img/portDesign/shoeInsta.jpg'
import mis2 from './img/portDesign/business cards.jpg'
import mis3 from './img/portDesign/collection1.jpg'
import mis4 from './img/portDesign/poster design.jpg'
import mis5 from './img/portDesign/postcard.png'
import mis6 from './img/portDesign/thumbnail1.jpg'
import mis7 from './img/portDesign/pizza1.jpg'
import mis8 from './img/portDesign/logomock2.jpg'
import cs from './img/portDesign/deviceMockup.png'
import cs1 from './img/portDesign/phoneMock2.png'
import cs2 from './img/portDesign/DashboardMock.png'
import cs3 from './img/portDesign/CalendarMock.png'


export const data4 = [{ text: 'Design', value: 230 }, { text: 'Figma', value: 70 }, { text: 'Use Case', value: 40 },
{ text: 'Product Design', value: 90 }, { text: 'SaaS', value: 50 }, { text: 'Wireframe', value: 60 }, { text: 'Adobe Suite', value: 60 },
{ text: 'UI/UX', value: 80 }, { text: 'Prototyping', value: 80 }, { text: 'A/B Testing', value: 40 }, { text: 'Responsive', value: 40 },
{ text: 'Usability Research', value: 30 }, { text: 'Mockups', value: 40 }, { text: 'Advertisement', value: 20 }];

export const data3 = [{ text: 'Development', value: 210 }, { text: 'Full-Stack', value: 50 }, { text: 'Front-End', value: 60 },
{ text: 'Back-End', value: 40 }, { text: 'React', value: 50 }, { text: 'HTML', value: 60 }, { text: 'CSS', value: 90 },
{ text: 'SASS', value: 30 }, { text: 'JavaScript', value: 80 }, { text: 'TypeScript', value: 40 }, { text: 'Bootstrap', value: 60 },
{ text: 'jQuery', value: 40 }, { text: 'NodeJS', value: 40 }, { text: 'Express', value: 40 }, { text: '.NET', value: 40 },
{ text: 'Java', value: 20 }, { text: 'PHP', value: 30 }, { text: 'MySQL', value: 50 }];


let i: number = 0;
export const data = [
  {
    id: i++,
    title: "SaaS - Crypto White Glaciar",
    tipo: ['Design', "Product Design", "Figma", "SaaS", "Adobe Suite", 'UI/UX', 'Prototyping'],
    content: "This concept showcases a seamless fusion of sleek aesthetics and ergonomic functionality, catering to the modern user's needs with intuitive features.",
    img: [crypWhite],
    dri: 'https://dribbble.com/shots/22117252-Product-Design-SaaS-Crypto-White-Glass'
  },
  {
    id: i++,
    title: "Seller Management Platform - Case Study",
    tipo: ['Design', "Product Design", "Figma", "SaaS", "Adobe Suite", 'UI/UX', 'Prototyping', 'SaaS', 'Mockups', 'Responsive', 'Use Case','A/B Testing', 'Wireframe', 'Usability Research'],
    content: 'The fascinating case study of my collaboration with a budding startup, where they needed inventive solutions, ultimately leading to a series of impactful outcomes.',
    img: [cs, cs1, cs2, cs3],
    case: 'https://dribbble.com/shots/22224413-Seller-Management-Platform-Case-Study'
  }, {
    id: i++,
    title: "Dynamic Learning System",
    tipo: ['Development', "Full-Stack", "React", 'SASS', 'NodeJS', 'Express', 'Bootstrap', 'JavaScript', 'TypeScript', 'MySQL'],
    content: 'This project enables the creation of courses through a WYSIWYG editor, allowing for editing and subsequent storage of the content in a MySQL database.',
    img: [dyn, dyn2, dyn3],
    git: 'https://github.com/axydavid/DynamicLearnSystem'
  },
  {
    id: i++,
    title: "SaaS - Crypto Royal Black A/B Test",
    tipo: ['Design', "Product Design", "Figma", "SaaS", "Adobe Suite", 'UI/UX', 'Prototyping', 'A/B Testing'],
    content: 'Through A/B testing, the dark frosted glass variant of the product demonstrated a significant increase in user engagement and retention compared to the plain version.',
    img: [crypBlackGlass, crypBlack],
    dri: 'https://dribbble.com/shots/22115978-Product-Design-SaaS-Crypto'
  },
  {
    id: i++,
    title: "Innovative Portfolio",
    tipo: ['Development', "Front-End", "React", 'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'Bootstrap'],
    content: 'My portfolio page, developed utilizing cutting-edge technologies.',
    img: [port, port2],
    git: 'https://github.com/axydavid/PortfolioReacTS'
  },
  {
    id: i++,
    title: "SaaS - Sales Operation",
    tipo: ['Design', "Product Design", "Figma", "SaaS", "Adobe Suite", 'UI/UX', 'Prototyping'],
    content: 'This design presents data in a clear and straightforward manner, enabling sales teams to make informed decisions quickly and effortlessly.',
    img: [salesMock, sales1, sales2],
    dri: 'https://dribbble.com/shots/22114029-Product-Design-Sales-Operation-SaaS'
  },
  {
    id: i++,
    title: "TotalReward",
    tipo: ['Development', 'Full-Stack', "Back-End", "Front-End", 'HTML', 'CSS', 'jQuery', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    content: 'An innovative web application tailored for both sellers and management teams, offering seamless data computation and incentivization solutions for direct selling enterprises.',
    img: [total, total2],
    git: 'https://github.com/axydavid/TotalReward',
    loc: 'https://axydavid.com/TotalReward/'
  },
  {
    id: i++,
    title: "Isometric Product Showcase",
    tipo: ['Design', "Adobe Suite", 'UI/UX', 'Prototyping', 'Responsive', 'Mockups', 'Advertisement'],
    content: 'This concept captivates viewers with its elegant simplicity, presenting the products trough various themes and moods, offering a visually engaging experience that caters to diverse preferences and aesthetics.',
    img: [iso, iso2, iso3],
    dri: 'https://dribbble.com/shots/22095368-Isometric-Product-Showcase'
  },
  {
    id: i++,
    title: "Adooboo",
    tipo: ['Development', 'Front-End', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Bootstrap', 'Concept'],
    content: 'Crafted an isometric product showroom using the Adobe Suite, followed by a prototype using the React framework.',
    img: [ado2, ado3, ado],
    link: '/adooboo'
  },
  {
    id: i++,
    title: "Other Designs",
    tipo: ['Design', "Adobe Suite", 'Prototyping', 'Responsive', 'Mockups', 'Advertisement'],
    content: 'Various design projects showcasing a versatile range of captivating styles and solutions that cater to diverse clients and industries.',
    img: [mis, mis2, mis3, mis4, mis5, mis6, mis7, mis8],
    dri: 'https://dribbble.com/axy_david'
  },
  {
    id: i++,
    title: "QuizWorld",
    tipo: ['Development', 'Full-Stack', "Back-End", "Front-End", 'HTML', 'CSS', 'jQuery', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    content: 'This quiz not only stores and categorizes various questions and tests but also delivers finely-grained feedback that is tailored to specific courses and even individual topics within those courses.',
    img: [quiz, quiz1, quiz2],
    git: 'https://github.com/axydavid/QuizWorld'
  },
  {
    id: i++,
    title: ".NET Web Application with C# and CSS",
    tipo: ['Development', 'Full-Stack', "Back-End", "Front-End", '.NET', 'C#', 'CSS'],
    content: 'A web application utilizing the .NET platform, developed with C# and CSS to ensure optimal performance and design integrity.',
    img: [itask],
    git: 'https://github.com/axydavid/ITtask'
  },
  {
    id: i++,
    title: "Other",
    tipo: ['Development', 'Web Design', 'HTML', "CSS", 'JavaScript'],
    content: 'Various websites, prototypes and mockups.',
    img: [mock6, mock5, mock, mock2, mock3, mock4]
  },
  {
    id: i++,
    title: "Multiplayer Game - Unity",
    tipo: ['Development', 'Game Development', "C#", '.NET', "Unity"],
    content: 'A project involving the integration of multiplayer functionality into a core game alongside various enhancements to improve the foundational experience and achieve an optimal multiplayer gameplay experience.',
    img: [unity, unity2, unity3],
    git: 'https://github.com/axydavid/UnityDev'
  },
  {
    id: i++,
    title: "Firefox UI",
    tipo: ['Development', 'CSS', "UserChrome", "skin"],
    content: 'A modded version of the Australis Firefox UI.',
    img: [fire, fire2],
    git: 'https://github.com/axydavid/FirefoxUI'
  },
  {
    id: i++,
    title: "Native Messenger Project",
    tipo: ['Development', '.NET', 'C#', "JavaScript", "NodeJS"],
    content: 'Facebook messenger application built with C# and JS.',
    img: [mess],
    git: 'https://github.com/axydavid/messengerProject'
  },
  {
    id: i++,
    title: "ElecTrip",
    tipo: ['Development', 'Mobile Development', "Android", "Java"],
    content: 'Android app that can track EV parameters such as speed, battery and make predictions such as KM left before the battery dies.',
    img: [elec],
    git: 'https://github.com/axydavid/ElecTrip'
  }
];


export const data2 = [adooboo, oonio, totalreward, stellar, yourphoner];
export const buttons = ['All', 'Design', 'Development'];

