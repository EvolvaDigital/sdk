let memoryStore = [];

function saveMemory(data) {
  memoryStore.push(data);
}

function getMemories() {
  return memoryStore;
}

module.exports = { saveMemory, getMemories };
