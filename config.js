const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVS5OiSBj8L3XVHnkKGNERCwqKaPtEkI05FFA8BAGLAsQO//sG2hPdh53Z3htRUFlZmfkl7yDL4xIZqAWjd1DguIYEdY+kLRAYAaUKAoRBH/iQQDAC42XZ4K2e5+dpE9rbgbFTp2K2lfJr/cZkpZPeZtSOrhiRLV/BvQ+Kyk1j7w+AWJivUMqO5c2CqpiAyvPc2e8HMlmkKdpbkr4MysFtorup+AruHSKMcZyFahGhM8IwNVC7hjH+Hn24EHOx9gJcJRY5stNkcJG3c2V2jtZ2aL7RK27NTmRNS1Lze/RZPVhV7LmXaSejcupA2pRxNYcSlZpB41rscpbVPR5HjeI96ZdxmCFf91FGYtJ+W/ezNjlEmtJSfD6rl3V9kEwCE7u4ldaAo7h1M18HqW9yM+abums7Oj1zSGhpI2pUwRpITbQ+a34wnIf8cOycZmv1dBWs25j6SnyNf2Ul+T+6W5qaR8uLn9G3q3IK46mK0kivQuXIbE3PqE9RC1tXq+zsm/SjlagNdFq6DeFyMOOgZl1IPcGOmSaOVraMnQ4UyzaE5Zb7pA9Jhf/EcuIu9sxbIaYDI6t3hp8fjViUqZvi6oKeXmTTMfltUVD0iXF2lkStdGPm+GpvMocWz7j7eqBYiaTZcuDI87cIe/R1EW5eHzdKUKv7YETf+wCjMC4JhiTOs8caL/QB9Osd8jAiD3nBvJwew4AIoawOT/OdemAY3tXki2Er+lK3NpQ81QrhYiuL5hX0QYFzD5Ul8mdxSXLcLlFZwhCVYPT3zz7I0JU8jeuOY+k+CGJcEjOrijSH/i9Xf72EnpdXGdm1mTfuHhAGI+pzGRESZ2HZ6VhlEHtRXKNxBEkJRgFMS3TvAx/VsYc6PDAc0snhtjvu4uoU3WBTEFzMw45ylGfPT2iJdn2P91/8wGNfOFrkX9zAC14CYcgzEitSIs2CPog/Zqbb81sLabK6bpQJs7N3PL/ycOnz4bUZ3mZm/rDhqT3CyAcjgivUBy70kqrY5wnK/oC7pGuDHElKofXbkUuXUZA6Kyu+zk35C+7TUzB6/+ypce53eKL8JsjHqQP64PyIYNzdnOGHgkDRgijQ0ojh/ip/NJ2QsCh+ZIh0uB+idzt8RGCclo8SZqPW4xR1VZmlK06nshrK41AGnyb9SvszTXxm9+Im6Un8QV5PtQPUVZu3bxVnOvnRL08FV4RSjZcXa/P6LyBdTQeOnFJInKem3YYlHM/sIeOjQCuSBJ+vPrsMJgtVlA0n2XqGOt46J6nie3Pp2Btumelm0WZk0eyjhcFYec6wqJfXSvPanfYMy9fD8navLm9TdaMdonGNB95sN66DRV5daI335gkz7G2aTVKzwTot1NWbVwkKX8W3oy6PKfvs9gJ4Etf4krZTboKuJxEbu1PznMNHD6Qf/Rs/JuT9I1pBjB51lsHOov8y52vKqXv/C8ZHQf4mSQpy6EFeztc1Omwm1+hgxYrWO4hCpU3hdObqQ2Qc1+7wZqQJuN9/9kGRQhLk+Nz9vzIf57EP+iCFJZE/B3Ufn1FJ4LkAI1rgWJ4VRUq6/wM4MTn03gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "SEGZILLOR",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "256770178719",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

