class ScoreCard {
  constructor() {
    this.data = {
      homeScore: 0,
      awayScore: 0,
      isBatting: 'away',
      homeOuts: 0,
      awayOuts: 0,
      homeBasesRuns: 0,
      awayBasesRuns: 0,
    };

    this.baseRuns = {
      single: 1,
      double: 2,
      triple: 3,
    };
  }

  incrementScore() {
    if (this.data.isBatting === 'home') {
      this.data = {
        ...this.data,
        homeScore: this.data.homeScore + 1,
        homeBasesRuns: 0,
      };
    } else {
      this.data = {
        ...this.data,
        awayScore: this.data.awayScore + 1,
        awayBasesRuns: 0,
      };
    }
  }

  incrementBases(score) {
    let { isBatting, homeBasesRuns, awayBasesRuns } = this.data;
    if (isBatting === 'home') {
      homeBasesRuns += score;
      if (homeBasesRuns > 3) {
        this.incrementScore();
        homeBasesRuns = 0;
      }
      this.data = {
        ...this.data,
        homeBasesRuns,
      };
    } else {
      awayBasesRuns += score;
      if (awayBasesRuns > 3) {
        this.incrementScore();
        awayBasesRuns = 0;
      }
      this.data = {
        ...this.data,
        awayBasesRuns,
      };
    }
  }

  changeInnings() {
    const isBatting = this.data.isBatting === 'home' ? 'away' : 'home';
    this.data = {
      ...this.data,
      isBatting,
    };
  }

  updateOnOut() {
    if (this.data.isBatting === 'home') {
      this.data = {
        ...this.data,
        homeOuts: this.data.homeOuts + 1,
        homeBasesRuns: 0,
      };
    } else {
      this.data = {
        ...this.data,
        awayOuts: this.data.awayOuts + 1,
        awayBasesRuns: 0,
      };
    }

    if (this.data.homeOuts === 3 || this.data.awayOuts === 3) {
      this.changeInnings();
    }
  }

  addEntry(entry) {
    if (entry === 'homerun') {
      this.incrementScore();
    } else if (entry === 'out') {
      this.updateOnOut();
    } else {
      this.incrementBases(this.baseRuns[entry]);
    }
  }

  getScore() {
    const { homeScore, awayScore } = this.data;
    return `Home: ${homeScore} Away: ${awayScore}`;
  }
}

var scoreCard = new ScoreCard();

scoreCard.addEntry('homerun');
console.log(scoreCard.getScore(), 'Home: 0 Away: 1');

// home single double triple

scoreCard.addEntry('double');
scoreCard.addEntry('double');
console.log(scoreCard.getScore(), 'Home: 0 Away: 2');
scoreCard.addEntry('out');
scoreCard.addEntry('out');
scoreCard.addEntry('homerun');
console.log(scoreCard.getScore(), 'Home: 0 Away: 4');

// scoreCard.addEntry('single');
// scoreCard.addEntry('triple');
// console.log(scoreCard.getScore(), 'Home: 0 Away: 3');
// scoreCard.addEntry('out');
// scoreCard.addEntry('out');
// scoreCard.addEntry('triple');
// scoreCard.addEntry('triple');
// scoreCard.addEntry('triple');
// console.log(scoreCard.getScore(), 'Home: 1 Away: 3');
