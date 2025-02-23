// backend/server.js

const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);

})
