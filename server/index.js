import express from 'expresss';

const app = express();
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("Server is running on the port : " + PORT);
});