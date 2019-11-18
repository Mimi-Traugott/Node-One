const express = require('express')
const PORT = 4040

const app = express()


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))