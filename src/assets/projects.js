export const projects =
[
    {
        name: 'Didact Front End',
        repoURL: 'https://github.com/Lambda-School-Labs/didact-fe',
        secondRepoURL: 'https://github.com/Lambda-School-Labs/didact-be',
        docsURL: 'https://didactlms.herokuapp.com/api/docs/',
        liveSiteURL: 'https://didactlms.com/landing',
        imgsrc: 'assets/images/didact.jpg',
        description: [`The Didact app is an online learning management system,
            and enabled students to track their progress in online courses,
            as well as create and join learning paths, essentially playlists of courses on a topic.`,
            `The front end app was made with React, and used redux, material-ui, styled-components, formik,
            and other libraries.`, `The back end is an Express server, using postgreSQL for the deployed database.`,
            `We used passportJS, as well as jsonwebtoken for both social and native login.`],
    },
    {
        name: 'Bucket List',
        repoURL: 'https://github.com/Build-Week-Bucket-List/Front-end',
        liveSiteURL: 'https://bw-bucketlist.netlify.com/',
        imgsrc: 'assets/images/bucketList.jpg',
        description: [`Bucket list is essentially a fancy todo app. A small team made it in a week,
        using react, redux, formik, material-ui, and other libraries.`, `The app lets you add items to your list,
        upload pictures, add journal entries to track your progess for a list item, mark items as complete,
        view your completed items, friend other users, and view your friends' lists.`],
    },
    // {
    //     name: 'Airlytics',
    //     repoURL: 'https://github.com/airbnb-price-opt/front-end',
    //     liveSiteURL: 'https://airlytics.netlify.com/',
    //     imgsrc: '',
    //     description: `Airlytics is an AirBnB price optimization app, which provides the user with an optimized listing price,
    //     based on the data for their unit. I worked on the front end, which was made in react, and used styled-components.`,
    // },
    {
        name: 'Use My Tools',
        repoURL: 'https://github.com/lambda-usemytools/EliLandingPage',
        liveSiteURL: 'https://lambda-usemytools.github.io/EliLandingPage/',
        imgsrc: 'assets/images/useMyTools.jpg',
        description: [`Use My Tools is an app that enables you to loan, borrow, or rent tools to others in your community.`,
        `My work was on the landing, about, and FAQ pages, which were made with html, css, and js, and used the greensock animation library.`],
    },
    {
        name: 'Lambda MUD',
        repoURL: 'https://github.com/Team-Chaotic-Lamba',
        liveSiteURL: 'https://client.johnlawschneider.now.sh/',
        imgsrc: 'assets/images/lambdaMud.jpg',
        description: [`Lambda MUD is a multi-user maze traversal game.`,
        `It was made in python, using Django, on the backend,
        and the front end client was made with react.`,
        `For chat web sockets, we used Pusher.`],
    },
    {
        name: 'Better Reads',
        repoURL: 'https://github.com/better-reads-9-20/Back-End',
        docsURL: 'https://better-reads-bw.herokuapp.com/api/docs/',
        liveSiteURL: 'https://betterreads.now.sh/',
        imgsrc: 'assets/images/betterReads.jpg',
        description: [`Better reads is a natural language processing app,
        which lets users type in some words, and returns a list of books they may be interested in.`,
        `The app used data from the good reads api.`,
        `My work was on the back end, which was an Express server, using jsonwebtoken for authentication,
        and postgreSQL for the deployed server.`],
    },
]