const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const password = 's1rd1rp1r1r';


const uri = "mongodb+srv://Rana-Ahammed:s1rd1rp1r1r@cluster0.yp1ox.mongodb.net/organicDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})






client.connect(err => {
 
  const productCollection = client.db("organicDb").collection("products");
    app.post('/addProducts', (req, res) => {
      const product = req.body;
      console.log(product);
    })
  
});



app.listen(3000);