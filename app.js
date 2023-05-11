const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
      <script>
        const url='https://demo.fusionauth.io/oauth2/authorize?client_id=c2202021-6a4f-4570-98f6-4a72ffa05b59&response_type=code&redirect_uri=https%3A%2F%2Ffusionauth.io';


// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    redirect: "manual", // manual, *follow, error
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
  });
  return response.status;
}

async function postDataJWT(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    redirect: "manual", // manual, *follow, error
    headers: {
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJUWGNkOW9WdG5ZT0RpZXNPdDhITXlxaXpua3NpQ2xyIn0.eyJleHAiOjE2ODM4NTA2ODcsImlhdCI6MTY4Mzg0NzA4NywiaXNzIjoiZnVzaW9uYXV0aC5pbyIsInN1YiI6IjlkOWZhZDA5LWNmOGItNDFlNC05OGNhLTg5NzJmOWM2ZmE3MSIsImp0aSI6ImI4ZmVlYWNjLWVkNDYtNDJkZS05NTFjLTUwNTU2ZDliNmJkOSIsImF1dGhlbnRpY2F0aW9uVHlwZSI6IlBBU1NXT1JEIiwiZW1haWwiOiJhZG1pbkBmdXNpb25hdXRoLmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF1dGhfdGltZSI6MTY4Mzg0NzA4NywidGlkIjoiMzA2NjMxMzItNjQ2NC02NjY1LTMwMzItMzI2NDY2NjEzOTM0In0.vY3MCEkmw-tBgHR57RJkotVMMH8sRGXMbcdxfcGUaVk"
    },
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData(url).then((data) => {
  console.log(data); 
  if (data == 200) {
    console.log("user not logged in");
  } else {
    console.log("user IS logged in");
    // could grab user data if JWT is in cookie
  }
}); 

const url2 ='https://demo.fusionauth.io/api/user'
postDataJWT(url2).then((data) => {
  console.log(data); 
}); 

      </script>
    </section>
  </body>
</html>
`
