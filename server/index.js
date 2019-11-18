const express = require('express')
const cors = require('cors')
const PORT = 4040

const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
        "id": 1,
        "first_name": "Raul",
        "last_name": "Wynter",
        "email": "rwynter0@google.com"
    },
    {
        "id": 2,
        "first_name": "Demetri",
        "last_name": "Dakin",
        "email": "ddakin1@google.com"
    },
    {
        "id": 3,
        "first_name": "Lira",
        "last_name": "Collishaw",
        "email": "lcollishaw2@google.com"
    },
    {
        "id": 4,
        "first_name": "Jennette",
        "last_name": "O'Brollachain",
        "email": "jobrollachain3@msn.com"
    },
    {
        "id": 5,
        "first_name": "Annaliese",
        "last_name": "Marishenko",
        "email": "amarishenko4@msn.com"
    },
    {
        "id": 6,
        "first_name": "Delano",
        "last_name": "Millins",
        "email": "dmillins5@yahoo.com"
    },
    {
        "id": 7,
        "first_name": "Allister",
        "last_name": "Rizzetti",
        "email": "arizzetti6@yahoo.com"
    },
    {
        "id": 8,
        "first_name": "Yul",
        "last_name": "Slite",
        "email": "yslite7@yahoo.com"
    },
    {
        "id": 9,
        "first_name": "Stu",
        "last_name": "Liveing",
        "email": "sliveing8@devmountain.com"
    },
    {
        "id": 10,
        "first_name": "Carla",
        "last_name": "Gisbye",
        "email": "cgisbye9@devmountain.com"
    }
];

//ENDPOINTS
app.get('/api/users/:id', function(req, res, next){
    for(let i = 0; i<users.length; i++){
        if(users[i].id === +req.params.id){
            res.status(200).send([users[i]])
        } 
    }
})



app.listen(PORT, () => console.log(`server is running on ${PORT}, you better catch it!`))