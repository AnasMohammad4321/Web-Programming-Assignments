const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/leaderboard";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const teamSchema = new mongoose.Schema({
  rank: Number,
  teamName: String,
  gamesPlayed: Number,
  score: String,
  avatar: String
});

const Team = mongoose.model('Team', teamSchema);

app.get('/leaderboard', async (req, res) => {
    try {
      const teams = await Team.find().sort({ rank: 1 });
      console.log(teams);
      res.json(teams);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
