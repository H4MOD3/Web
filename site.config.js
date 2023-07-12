module.exports = {
    base: 'https://benedev.netlify.app',
    siteMetadata: {
        title: 'Benedev',
        description: 'Ich bin Bene, ein professioneller Fullstack-Developer',
        author: 'Bene',
        authorImage: "https://media.discordapp.net/attachments/1028203607419535430/1093227627147436063/bene.png",
        image: '/banner.png',
        favicon: '/favicon.png',
        url: 'https://benedev.netlify.app',
        themeColor: '#cc00ff',
        email: 'benediktrromankiewicz@gmail.com',
    },
    
    IndexPage: {
        lanyard: {
            enabled: true,
            id: '948643323118223390',
        }
    },

    AboutMePage: {
        yourLand: 'Deutschland',
        developerGrade: 'Developer',
        developerGrade2: 'Full Stack',
    },

    github: {
        enabled: true,
        username: 'invalidbene',
    },

    social: {
        twitter: 'https://twitter.com/benedeveloper',
        github: 'https://github.com/invalidbene',
        linkedin: 'https://www.linkedin.com/in/benedev/',
        instagram: 'https://www.instagram.com/bene.dev/',
        facebook: 'https://www.facebook.com/benedev',
        discord: 'https://discord.gg/bene',
    },

    projects: {
        enabled: false,
        data: [
            { 
                id: 1,
                image: "",
                slug: "",
                name: "",
                github: false,
                githubLink: "",
                website: true,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                description: "",
              },
            ]
    },

    skills: {
        enabled: true,
        data: [
        { name: "HTML", src: "/images/html.svg" },
        { name: "CSS", src: "/images/css.svg" },
        { name: "Javascript", src: "/images/javascript.svg" },
        { name: "Node.js", src: "/images/nodejs.svg" },
        { name: "Sass", src: "/images/sass.svg" },
        { name: "C#", src: "/images/csharp.svg" },
        { name: "Mongo DB", src: "/images/mongodb.svg" },
        { name: "PHP", src: "/images/php.svg" },
        { name: "TailwindCSS", src: "/images/tailwindcss.svg" },
        { name: "Next.js", src: "/images/nextjs.svg" },
        { name: "MySQL", src: "/images/mysql.svg" },
        { name: "Express", src: "/images/expressjs.svg" },
        { name: "React", src: "/images/react.svg" },
        { name: "Git", src: "/images/git.svg" },
        { name: "Yarn", src: "/images/yarn.svg" },
        { name: "Figma", src: "/images/figma.svg" },
        { name: "Photoshop CC", src: "/images/photoshop.svg" },
        { name: "Github", src: "/images/github.svg" },
        { name: "Heroku", src: "/images/heroku.svg" },
        { name: "pnpm", src: "/images/pnpm.svg" },
        { name: "Webpack", src: "/images/webpack.svg" },
        { name: "Iconscout", src: "/images/iconscout.png" },
        { name: "Typescript", src: "/images/typescript.svg" },
        ]
    },

    socials: [
        { name: "Discord", src: "/images/discord.svg", link: "https://discord.gg/2Z8Y4Z9" },
        { name: "Twitter", src: "/images/twitter.svg", link: "https://twitter.com/benedev" },
        { name: "Github", src: "/images/github.svg", link: "https://github.com/benedev" },
        { name: "Instagram", src: "/images/instagram.svg", link: "https://instagram.com/benedev" },
        { name: "Twitch", src: "/images/twitch.svg", link: "https://twitch.tv/benedev" },
    ],

    pages: [
        {
            id: 1,
            name: "Home",
            href: "/",
            icon: {
                default: 'fal fa-home',
                active: 'fas fa-home'
            },
            current: false,
        },
        {
            id: 2,
            name: "Über mich",
            href: "/about",
            icon: {
                default: 'fal fa-user',
                active: 'fas fa-user'
            },
            current: false,
        },
        {
            id: 3,
            name: "Projekte",
            href: "/projects",
            icon: {
                default: 'fal fa-project-diagram',
                active: 'fas fa-project-diagram'
            },
            current: false,
        },
        {
            id: 4,
            name: "Kontakt",
            href: "/contact",
            icon: {
                default: 'fal fa-envelope',
                active: 'fas fa-envelope'
            },
            current: false,
        }
    ],
};
