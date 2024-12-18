const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const rewardsRoutes = require('./routes/rewards');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/rewards', rewardsRoutes);

app.get('/', (req, res) => res.send('Backend Running'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
