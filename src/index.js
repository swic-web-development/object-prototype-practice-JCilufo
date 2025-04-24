/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  return Object.values(monsters.demons)
    .flat()
    .map(({ name, health, damage }) => ({
      name,
      threatLevel: health * damage,
    }))
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // TODO: Extract all monster names into an array using Object methods
  return Object.values(monsters.demons)
    .flat()
    .map((demon) => demon.name)
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  // TODO: Transform the data structure to organize monsters by threat level
  // instead of difficulty
  // lowThreat: < 10,000
  // mediumThreat: between 10,000 and 50,000
  // highThreat: > 50,000
  const categories = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }

  // Get all demons and calculate their threat levels
  Object.values(monsters.demons)
    .flat()
    .forEach((demon) => {
      const threatLevel = demon.health * demon.damage
      const monsterWithThreat = { name: demon.name, threatLevel }

      // Categorize based on threat level
      if (threatLevel < 10000) {
        categories.lowThreat.push(monsterWithThreat)
      } else if (threatLevel <= 50000) {
        categories.mediumThreat.push(monsterWithThreat)
      } else {
        categories.highThreat.push(monsterWithThreat)
      }
    })

  return categories
}

export function sum(a, b) {
  return a + b
}
