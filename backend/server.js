// backend/server.js

const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);

})
