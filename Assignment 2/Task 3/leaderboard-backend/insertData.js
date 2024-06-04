const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/leaderboard";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const teamSchema = new mongoose.Schema({
  rank: Number,
  teamName: String,
  gamesPlayed: Number,
  score: String
});

const teamsData = [
    { rank: 1, teamName: "The Avengers", gamesPlayed: 29, score: "+51,5678" },
    { rank: 2, teamName: "Skale", gamesPlayed: 29, score: "+50,9873" },
    { rank: 3, teamName: "One Million Bugs", gamesPlayed: 27, score: "+49,6677" },
    { rank: 4, teamName: "The Musketeers", gamesPlayed: 29, score: "+41,33249" },
    { rank: 5, teamName: "Bugs killer", gamesPlayed: 29, score: "+35,67841" },
    { rank: 6, teamName: "Foo Fighters", gamesPlayed: 25, score: "+29,55667" },
    { rank: 7, teamName: "The Ultimate", gamesPlayed: 25, score: "+25,99851" }
  ];

const Team = mongoose.model('Team', teamSchema);

Team.insertMany(teamsData)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  });
