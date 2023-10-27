import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "65393360251439d863328115"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id)
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkzMzYwMjUxNDM5ZDg2MzMyODExNSIsImlhdCI6MTY5ODI0ODgyMiwiZXhwIjoxNjk4MzMxNjIyfQ.bfl1qdSGbPNGicQkk5fqP3Nl-0qLcX2Qes7OvyADCOK";
    jwt.verify(invalidToken, JWT_SECRET)
}
catch(error) {
    console.log(error.message)
}