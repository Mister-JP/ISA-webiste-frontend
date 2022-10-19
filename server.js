const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req, res)=>{
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));