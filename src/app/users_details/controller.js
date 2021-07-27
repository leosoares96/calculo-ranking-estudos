const UserDetail = require('./model');

// ==> Métodos
class Controller {


  static async calcRanking(req, res) {

    const usersList = await UserDetail.find()

    // list users
    const ranking = await usersList.map((user) => {
      // list rounds
      const scoreRound = user.rounds.map((round, index) => {
        // list activities
        const totalActivitie = round.activities.map(activitie => {
          // lista as resposta e pondera os acertos
          return {
            peso: activitie.NU_PESO,
            score: activitie.answers.map(answer => {
              return answer.NU_PORCENTAGEM_ACERTOS * activitie.NU_PESO * 100;
            })
          }
        })
        // calcula a pontuação total e o peso total
        const sumScore = totalActivitie.reduce((acc, cur) => acc += Number(cur.score), 0)
        const sumPeso = totalActivitie.reduce((acc, cur) => acc += Number(cur.peso), 0)
        return Number(sumScore) / Number(sumPeso)
      })

      // soma score dos rounds
      const totalScore = scoreRound.reduce((acc, cur) => acc += Number(cur || 0), 0)

      return {
        userid: user.userid,
        score: totalScore
      }
    })
      .sort((a, b) => b.score - a.score)
      .map((user, index) => {
        return { ...user, position: index + 1 }
      })

    res.send(ranking)
  };

}

module.exports = Controller;