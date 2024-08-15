"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/boniphace478/BONIPHACE-MD';
  const img = 'https://telegra.ph/file/88e429895edf4b088d94d.jpg,https://telegra.ph/file/3bb3cdb2a07168c287f5c.jpg,https://telegra.ph/file/f8a57806838acea510ecf.jpg,https://telegra.ph/file/c62bdf4806a1ed8ebc145.jpg,https://telegra.ph/file/669c5e73e23ebbe660cf3.jpg,https://telegra.ph/file/96f8dd2d7a87423a7c46f.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *Boniphace_md.*\n get session id *by*, *pairing code*  https://boniphace-pair-2024-61fe1310ac3b.herokuapp.com/pair

🗼 *REPOSITORY:* ${data.html_url}
🌟 *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *Boniphace tech*
💞 *THEME:* *BONIPHACE*
🥰*ONLY GOD CAN JUDGE ME!👑*
__________________________________
            *Made With Boniphace Tech*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
