const express = require('express');
console.log(1)
const cors = require('cors')
console.log(2)
const app = express();
console.log(3)
const port = 8000;
console.log(4)
require('./server/config/mongoose.config');
console.log(5)
app.use(cors())
console.log(6)
app.use(express.json());
console.log(7)
app.use(express.urlencoded({extended:true}));
console.log(8)
// require('./server/routes/product.routes')(app);
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);
console.log(9)
app.listen(port, () => {
    console.log("Listening at Port 8000")
})
console.log(10)