var list = root => [
    {
        title: "Avatar Craft (WIP)",
        link: `http://avatar.${root}`,
        repo: "https://github.com/Xmerr/AvatarCraft",
        type: "image crafting",
        description: "A 100% client browser based method to create svg avatars. Still a work in progress"
    },
    {
        title: "Wooly Willy Online",
        link: `http://willy.${root}`,
        repo: "https://github.com/Xmerr/WoolyWilly",
        type: "entertainment",
        description: "An online SVG based wooly willy"
    },
    {
        title: "This Site",
        link: `http://www.${root}`,
        repo: "https://github.com/Xmerr/PortfolioSite",
        type: "web design",
        description: "This site is used just to tell the world who I am. The design is simple and the features are minimal."
    },
]

export default list(window.location.host.substr(window.location.host.indexOf('.')+1));