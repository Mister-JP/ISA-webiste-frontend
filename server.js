const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,'build')));
    app.get('*', async (req, res)=>{
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server running on port ${port}`));