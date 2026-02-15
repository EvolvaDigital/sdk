function evolveAgent(agent) {
  agent.evolve();
  return `Agent ${agent.id} evolved.`;
}

module.exports = { evolveAgent };
