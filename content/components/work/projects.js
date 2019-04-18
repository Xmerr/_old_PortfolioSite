var list = root => [
    {
        title: "Avatar Craft",
        link: `http://avatar.${root}`,
        repo: "https://github.com/Xmerr/AvatarCraft",
        type: "image crafting",
        description: "A 100% client browser based method to create svg avatars."
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