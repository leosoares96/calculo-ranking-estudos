const mongoose = require('../../database');

const AnswerSchema = new mongoose.Schema({
  ID_USUARIO: {
    type: Number
  },
  ID_ATIVIDADE: {
    type: Number
  },
  DT_RESPOSTA: {
    type: Date
  },
  NU_PORCENTAGEM_ACERTOS: {
    type: Number
  },

})
const ActivitieSchema = new mongoose.Schema({
  ID_USUARIO: {
    type: Number
  },
  ID_ATIVIDADE: {
    type: Number
  },
  NU_PESO: {
    type: Number
  },
  answers: {
    type: [AnswerSchema]
  }
})

const RoundSchema = new mongoose.Schema({
  roundId: {
    type: Number,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  roundscorebonus: {
    type: Number,
  },
  lastattemptstatus: {
    type: String,
  },
  approved: {
    type: Number,
  },
  waiting: {
    type: Boolean,
  },
  answerdate: {
    type: Date,
  },
  showstars: {
    type: Boolean,
  },
  showscore: {
    type: Boolean,
  },
  stars: {
    type: Number
  },
  activities: {
    type: [ActivitieSchema]
  }

})

const UserDetailSchema = new mongoose.Schema({

  userid: {
    type: Number
  },
  userstatus: {
    type: Boolean
  },
  maxScore: {
    type: Number
  },
  score: {
    type: Number
  },
  image: {
    type: String
  },
  position: {
    type: Number
  },
  myRanking: {
    type: Boolean
  },
  round: {
    type: String
  },
  rounds: {
    type: [RoundSchema]
  }
});

const UserDetail = mongoose.model('users_details', UserDetailSchema);

module.exports = UserDetail;
