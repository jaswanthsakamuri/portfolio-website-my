const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Save the form data to a file
    const formData = { name, email, message, date: new Date() };
    const dataPath = path.join(__dirname, 'submissions.json');

    // Read existing submissions
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('An error occurred while saving your submission.');
        }

        const submissions = data ? JSON.parse(data) : [];
        submissions.push(formData);

        // Write updated submissions back to file
        fs.writeFile(dataPath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                return res.status(500).send('An error occurred while saving your submission.');
            }

            res.status(200).send('Thank you for your submission!');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
