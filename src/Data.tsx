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


export const data = [
    {
        id: 0,
        title: "Dynamic Learning System",
        tipo: ["React", "Full-Stack", 'SASS', 'NodeJS', 'Express', 'Bootstrap', 'JavaScript', 'TypeScript', 'MySQL'],
        content: 'This project renders a course, which can be edited by a WYSIWYG editor then saved to a MySQL DB.',
        img: [dyn, dyn2, dyn3],
        url: 'https://github.com/axydavid/DynamicLearnSystem'
    },
    {
        id: 1,
        title: "PortofolioTS",
        tipo: ["React", "Front-End", 'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'Bootstrap'],
        content: 'My portofolio page, made with the latest technology available.',
        img: [port, port2],
        url: 'https://github.com/axydavid/PortfolioReacTS'
    },
    {
        id: 2,
        title: "TotalReward",
        tipo: ['Full-Stack', "Back-End", "Front-End", 'HTML', 'CSS', 'jQuery', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
        content: 'Web App that can handle direct sellers data calculation and reward.',
        img: [total, total2],
        url: 'https://github.com/axydavid/TotalReward',
        loc: 'https://axydavid.com/TotalReward/'

    },
    {
        id: 3,
        title: "Adooboo",
        tipo: ['Front-End', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Bootstrap', 'Concept'],
        content: 'Designed an isometric product showroom in photoshop, then builded the app with react.',
        img: [ado2, ado3, ado],
        link: '/adooboo',

    },
    {
        id: 4,
        title: "QuizWorld",
        tipo: ['Full-Stack', "Back-End", "Front-End", 'HTML', 'CSS', 'jQuery', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
        content: 'Specialized quiz test web app, can store and categorize different questions and tests.',
        img: [quiz, quiz1, quiz2],
        url: 'https://github.com/axydavid/QuizWorld'
    },
    {
        id: 5,
        title: "iTask",
        tipo: ['Full-Stack', "Back-End", "Front-End", '.NET', 'C#', 'CSS'],
        content: 'A Web App built using the .NET platform, I used C# and CSS.',
        img: [itask],
        url: 'https://github.com/axydavid/ITtask'
    },
    {
        id: 6,
        title: "Other",
        tipo: ['HTML', "CSS", 'JavaScript'],
        content: 'Various websites, prototypes and mockups.',
        img: [mock6, mock5, mock, mock2, mock3, mock4]
    },
    {
        id: 7,
        title: "UnityDev",
        tipo: ['Game Development', "C#", "Unity"],
        content: 'Multiplayer experience for unity game.',
        img: [unity, unity2, unity3],
        url: 'https://github.com/axydavid/UnityDev'
    },
    {
        id: 8,
        title: "FirefoxUI",
        tipo: ['CSS', "UserChrome", "skin"],
        content: 'A modded version of the Australis Firefox UI.',
        img: [fire, fire2],
        url: 'https://github.com/axydavid/FirefoxUI'
    },
    {
        id: 9,
        title: "messengerProject",
        tipo: ['C#', "JavaScript", "NodeJS"],
        content: 'Facebook messenger application built with C# and JS.',
        img: [mess],
        url: 'https://github.com/axydavid/messengerProject'
    },
    {
        id: 10,
        title: "ElecTrip",
        tipo: ['Mobile Development', "Android", "Java"],
        content: 'Android app that can track EV parameters such as speed, battery and make predictions such as KM left before the battery dies.',
        img: [elec],
        url: 'https://github.com/axydavid/ElecTrip'
    }
];
export const data2 = [adooboo, oonio, totalreward, stellar, yourphoner];
export const buttons = [
    'All', 'Full-Stack', 'Front-End', 'Back-End', 'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'Bootstrap',
    'React', 'jQuery', 'Java', 'C#', '.NET', 'PHP', 'MySQL', 'NodeJS', 'Express', 'Game Development'];
