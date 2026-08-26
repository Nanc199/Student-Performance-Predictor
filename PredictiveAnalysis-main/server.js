

const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/predict', (req, res) => {
    const pythonProcess = spawn('python', ['src/predict.py', JSON.stringify(req.body)]);
    let result = '';
    pythonProcess.stdout.on('data', (data) => { result += data.toString(); });
    pythonProcess.on('close', () => {
        res.json({ predicted_G3: parseFloat(result.trim()) });
    });
});

app.listen(5000, () => console.log('Backend running on port 5000'));