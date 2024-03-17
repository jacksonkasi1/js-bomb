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
  return uraniumMass >= CRITICAL_MASS;
}

// Step 4: Assemble the subcritical masses with electrical tools for control
function assembleBomb(subcriticalMasses, tools) {
  return subcriticalMasses.map(mass => ({
    mass,
    critical: calculateCriticalMass(mass)
  }));
}

// Step 5: Implement a safety check
function safetyCheck(bombAssembly) {
  return bombAssembly.every(part => !part.critical);
}

// Step 6: Use JavaScript to control the movement of the movable cylinder
let movableCylinderPosition = 0;
const MAX_POSITION = 100;

function moveCylinder() {
  if (movableCylinderPosition < MAX_POSITION) {
    movableCylinderPosition += 10;
    console.log(`Cylinder moved to position: ${movableCylinderPosition}`);
  }
}

// Step 7: Simulate the reaction initiation process
function initiateReaction() {
  const REACTION_POSITION = 50;
  if (movableCylinderPosition >= REACTION_POSITION) {
    console.log("⚠️  Hypothetical reaction initiated! 🤯");
    return true;
  }
  console.log("❌ Reaction cannot be initiated yet.");
  return false;
}

// Step 8: Test the bomb assembly simulation
function testBombAssembly() {
  setupSafety();
  const bombAssembly = assembleBomb([10, 20, 30], electricalTools);

  if (safetyCheck(bombAssembly)) {
    while (movableCylinderPosition < MAX_POSITION) {
      moveCylinder();
      if (initiateReaction()) {
        break;
      }
    }
  } else {
    console.log('Assembly is not safe!');
  }
}


// ------------------  Math Operations & Realistic Simulation Enhancements --------------

// Constants for physics calculations
const SPEED_OF_LIGHT = 3 * 10 ** 8; // Speed of light in vacuum, m/s
const AVERAGE_NEUTRON_RELEASED = 2.5; // Average neutrons released per fission
const URANIUM_ATOMIC_MASS = 235; // Approximate atomic mass of Uranium-235 in g/mol

// Enhanced Math Operations & Realistic Simulation
// Function to calculate the energy released based on mass and efficiency
function calculateEnergyOutput(mass, efficiency) {
  const massInKilograms = mass / 1000; // Convert mass from grams to kilograms
  const energy = massInKilograms * (SPEED_OF_LIGHT ** 2); // E=mc^2 to calculate energy in Joules
  const energyOutput = energy * (efficiency / 100); // Adjust energy by efficiency percentage
  return energyOutput; // Returns energy output in Joules
}

// Additional Constants
const ENERGY_PER_KM_EFFECT = 1e12; // Hypothetical energy needed to affect 1 km radius

// Function to estimate the impact radius based on energy released
function estimateImpactRadius(energyOutput) {
  return Math.sqrt(energyOutput / ENERGY_PER_KM_EFFECT); // Simplified model for educational purposes
}

// Enhanced simulation function including impact estimation
function simulateNuclearFission(uraniumMass, efficiency) {
  // Convert uranium mass from kilograms to grams for energy calculation
  const energyOutput = calculateEnergyOutput(uraniumMass * 1000, efficiency); // E=mc^2 calculation expects mass in kilograms

  const neutronsEmitted = uraniumMass * AVERAGE_NEUTRON_RELEASED / URANIUM_ATOMIC_MASS;
  const potentialFissions = neutronsEmitted * efficiency / 100;
  
  const impactRadius = estimateImpactRadius(energyOutput);

  console.log(`Simulated Fission Results:
    - Neutrons Emitted: ${neutronsEmitted.toFixed(2)}
    - Potential Fissions: ${potentialFissions.toFixed(2)}
    - Energy Output: ${energyOutput.toFixed(2)} Joules
    - Estimated Impact Radius: ${impactRadius.toFixed(2)} km`);
}


function runSimulation() {
  setupSafety();

  const uraniumMass = 25; // in kilograms
  const subcriticalMasses = [8, 15, 22]; // in kilograms
  const efficiency = 85; // percentage

  const bombAssembly = assembleBomb(subcriticalMasses, electricalTools);
  console.log('Bomb assembly:', bombAssembly);

  simulateNuclearFission(uraniumMass, efficiency);
}

runSimulation();
