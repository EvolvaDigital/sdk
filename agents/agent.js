const { improveStrategy } = require("./strategy");

class Agent {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }

  execute(task) {
    this.score += 1;
    return `Agent ${this.id} executed: ${task}`;
  }

  evolve() {
    improveStrategy(this);
  }
}

module.exports = Agent;
