const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            let arr = body.split("&");
            let tmp = [];
            let str = "POST<br><br>Array<br>{<br>";
            for (let item in arr) {
                tmp = arr[item].split("=");
                str += `[${tmp[0]}] => ${tmp[1]}<br>`;
            }
            str += "}"
            res.end(`<!doctype html>
            <html>
            <body>
            <p style="background-color: gray; padding: 10px; font-size: 25px">${str}</p>
            <h1>New Avenger application</h1>
            <form action="/" method="post">
                <p><About candidate/p>
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Tello your name" /><br /><br>
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Tello your email" /><br /><br>
                <label for="name">Age</label>
                <input type="number" name="age" /><br /><br>
                <label for="about">About</label>
                <textarea rows="5" cols="40" maxlength="500">Tell about yourself, max 500 symbols</textarea><br><br>
                <label for="photo">Your photo</label>
                <input type="file" name="photo"><br><br>
                <button>Clear</button>
                <button>Send</button>
            </form>
        </body>
        </html>
    `);
        });
    }
    else {
        res.end(`<!doctype html>
        <html>
        <body>
        <h1>New Avenger application</h1>
        <form action="/" method="post">
            <p><About candidate/p>
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Tello your name" /><br /><br>
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Tello your email" /><br /><br>
            <label for="name">Age</label>
            <input type="number" name="age" /><br /><br>
            <label for="about">About</label>
            <textarea rows="5" cols="40" maxlength="500">Tell about yourself, max 500 symbols</textarea><br><br>
            <label for="photo">Your photo</label>
            <input type="file" name="photo"><br><br>
            <button>Clear</button>
            <button>Send</button>
        </form>
    </body>
    </html>
`);
    }
})

server.listen(3000);