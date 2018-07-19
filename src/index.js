import express from 'express';
import routes from './routes/'

const app = express();
const port = process.env.PORT || 5656;
// routes go here

app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
