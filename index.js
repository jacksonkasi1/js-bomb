// Step 1: Gather the necessary chemicals and electrical tools
const chemicals = ['uranium-235', 'other stable elements'];
const electricalTools = ['wires', 'batteries', 'switches'];

// Step 2: Set up a safe work environment
function setupSafety() {
  const safetyProtocols = {
    personalProtectiveEquipment: true,
    ventilation: true,
    containment: true,
    radiationMonitoring: true,
    emergencyProcedures: true
  };

  // Check each safety protocol is in place
  for (const protocol in safetyProtocols) {
    if (!safetyProtocols[protocol]) {
      throw new Error(`🔴 Safety protocol for ${protocol} is not in place.`);
    }
  }
  console.log('✅ All safety protocols are in place.');
}

// Step 3: Write a JavaScript program to simulate the critical mass calculation
function calculateCriticalMass(uraniumMass) {
  const CRITICAL_MASS = 52; // Hypothetical critical mass in kilograms for Uranium-235
  // Returns true if the mass is equal or greater than the critical mass
  return uraniumMass >= CRITICAL_MASS;
}

// Step 4: Assemble the subcritical masses with electrical tools for control
function assembleBomb(subcriticalMasses, tools) {
  // Map each subcritical mass to an object determining if it's critical
  return subcriticalMasses.map(mass => ({
    mass,
    critical: calculateCriticalMass(mass)
  }));
}

// Step 5: Implement a safety check
function safetyCheck(bombAssembly) {
  // Ensures all parts of the assembly are subcritical for safety
  return bombAssembly.every(part => !part.critical);
}

// Step 6: Use JavaScript to control the movement of the movable cylinder
let movableCylinderPosition = 0;
const MAX_POSITION = 100;

// Moves the cylinder and prints its new position
function moveCylinder() {
  if (movableCylinderPosition < MAX_POSITION) {
    movableCylinderPosition += 10; // Move cylinder by 10 units
    console.log(`Cylinder moved to position: ${movableCylinderPosition}`);
  }
}

// Step 7: Simulate the reaction initiation process
function initiateReaction() {
  const REACTION_POSITION = 50;
  // Check if the cylinder is in position to start a hypothetical reaction
  if (movableCylinderPosition >= REACTION_POSITION) {
    console.log("⚠️  Hypothetical reaction initiated! 🤯");
    return true;
  }
  console.log("❌ Reaction cannot be initiated yet.");
  return false;
}

// Step 8: Test the bomb assembly simulation
function testBombAssembly() {
  setupSafety(); // Ensure safety first
  const bombAssembly = assembleBomb([10, 20, 30], electricalTools);

  // Perform a safety check before attempting to initiate the reaction
  if (safetyCheck(bombAssembly)) {
    // Move the cylinder to attempt to initiate the reaction
    while (movableCylinderPosition < MAX_POSITION) {
      moveCylinder();
      if (initiateReaction()) {
        break; // Stop if the reaction has been initiated
      }
    }
  } else {
    console.log('Assembly is not safe!');
  }
}

// Step 9: Run the test
testBombAssembly();


// Math Operations & Comments
// Example: Calculate the efficiency of the fission process
function calculateEfficiency(massUsed, energyReleased) {
  const massEnergyEquivalence = massUsed * (3 * 10 ** 8) ** 2; // E=mc^2
  const efficiency = (energyReleased / massEnergyEquivalence) * 100;
  return efficiency.toFixed(2); // Returns efficiency as a percentage
}

// input data
const uraniumMass = 25; // kilograms
const subcriticalMasses = [8, 15, 22]; // kilograms
const energyReleased = 1.5e14; // joules

const bombAssembly = assembleBomb(subcriticalMasses, electricalTools);
console.log('Bomb assembly:', bombAssembly);

console.log('Efficiency:', calculateEfficiency(uraniumMass, energyReleased));

// Example usage: calculateEfficiency(1, 1.5e14); // For 1kg mass and 1.5e14 joules of energy released