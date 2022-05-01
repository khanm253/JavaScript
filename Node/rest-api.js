const JOI = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT ||  3000;

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

app.get('/app/courses/:id', (req, res) => {
    const course = courses.find(c => c.id ==  parseInt(req.params.id));
    if(!course){
        res.status(404).send('course not found');
    }else{
        res.send(course);
    }
});

app.post('/api/courses', (req, res) => {
    
    const schema = JOI.object({
        name: JOI.string().min(3).required()
    })


    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/app/courses', (req, res) => {

});

app.listen(port , () => {console.log(`Listening to port ${port}`)})