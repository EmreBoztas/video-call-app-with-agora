const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require('cookie-parser')



const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors(
    {
        origin: true, 
        methods: ["POST, GET"],
        credentials: true,
    }
));



const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "0000",
    database: "loginsystem"
})




app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/loginform", (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    con.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "Server Side Error" });
        if (data.length > 0) {
          const username = data[0].username;
          const token = jwt.sign({ username }, "our-jsonwebtoken-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ Status: "Success" });
        } else {
          return res.json({ Message: "NO Records existed" });
        }
    });
});

const verifyUser = (req, res, next) => {//next is a middleware
    const token = req.cookies.token;    
    if (!token) {
        return res.json({Message: "we need token please provide it."})
    } else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
            if (err) {
                return res.json({Message: "Authentication error"})
            } else {
                req.username = decoded.username;
                next(); // app.get e geri dönmesini sağlıyor
            }
        })
    }
}

app.get('/',verifyUser, (req, res) => {
    return res.json({Status: "Success", username: req.username})
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

app.listen(8001, () => {
    console.log("running backend server");
})