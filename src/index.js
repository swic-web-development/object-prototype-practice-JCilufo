import data from './data.js'
console.log(calculateThreatLevels(data))
console.log(extractMonsterNames(data))

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  // and return an array of monsters with their threat levels
  const threatLevels = []

  // Iterate through each difficulty level in the demons object
  Object.values(monsters.demons).forEach((difficulty) => {
    difficulty.forEach((demon) => {
      // Calculate threat level (health × damage)
      const threatLevel = demon.health * demon.damage

      // Add the demon's name and threat level to the result array
      threatLevels.push({ name: demon.name, threatLevel })
    })
  })

  return threatLevels
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
}

export function sum(a, b) {
  return a + b
}
