const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('./server/config/mongoose.config');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// require('./server/routes/product.routes')(app);
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);
app.listen(port, () => {
    console.log("Listening at Port 8000")
})
