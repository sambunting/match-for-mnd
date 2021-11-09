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
        siteUrl: `https://match-for-mnd.netlify.app`,
        players: loadPlayers(),
        lastUpdated: new Date().toLocaleString('en-gb'),
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'G-YYRSGF39EF'
            }
        }
    ]
}