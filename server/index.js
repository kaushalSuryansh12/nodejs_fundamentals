const express = require('express');
const { readFile }  = require('fs');

const  app = express();

app.get('/', (req,res) => {

    readFile('./home.html', 'utf8', (err,html) => {

        if(err){
            res.status(500).send('sorry out of order');
        }

        res.send(html);
    })

});

app.listen(process.env.PORT || 3000, () => console.log("App is available on localhost:3000"));


// const { readFile } = require('fs');

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// });

// console.log("This is ASPA");