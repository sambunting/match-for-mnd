const fs = require('fs');

const loadPlayers = () => {
    const returnValue = [];

    const files = fs.readdirSync('./players');

    files.forEach((file) => {
        returnValue.push(
            JSON.parse(fs.readFileSync(`./players/${file}`)),
        )
    })

    return returnValue;
}

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        players: loadPlayers()
    },
    plugins: [
        `gatsby-plugin-styled-components`
    ]
}