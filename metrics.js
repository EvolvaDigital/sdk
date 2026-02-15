function calculateImpact(agent) {
  return {
    id: agent.id,
    score: agent.score
  };
}

module.exports = { calculateImpact };
