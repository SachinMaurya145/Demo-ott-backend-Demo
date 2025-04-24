const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Make sure body parsing is enabled
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
