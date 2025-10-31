// Simple Lab 1 — Variables & Functions

// Task 1: formatFullName(firstName, lastName)
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) return "Invalid name input.";
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return `${cap(lastName)}, ${cap(firstName)}`;
}

// Task 2: calculateTotalCost(price, quantity, taxRate)
function calculateTotalCost(price, quantity, taxRate) {
  if ([price, quantity, taxRate].some(v => typeof v !== 'number' || Number.isNaN(v))) {
    return "Invalid input.";
  }
  const total = (price * quantity) * (1 + taxRate);
  return Number(total.toFixed(2));
}

// Task 3: checkEligibility(age, isEmployed)
function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) return "Eligible for the program.";
  if (age > 18 && !isEmployed) return "Conditionally eligible for the program.";
  return "Not eligible for the program.";
}

// Task 4: calculateTotalCostWithDiscount(price, quantity, taxRate, discount=0)
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount = 0) {
  if ([price, quantity, taxRate, discount].some(v => typeof v !== 'number' || Number.isNaN(v))) {
    return "Invalid input.";
  }
  const subtotal = price * quantity - discount;
  const total = subtotal * (1 + taxRate);
  return Number(total.toFixed(2));
}

// --- Example Runner ---
function runExamples(){
  const lines = [];
  const log = (...args) => { console.log(...args); lines.push(args.join(' ')); };

  log('Task 1:', formatFullName('john', 'doe'));
  log('Task 1 (invalid):', formatFullName('', 'doe'));
  log('Task 2:', calculateTotalCost(10, 3, 0.07));
  log('Task 2 (invalid):', calculateTotalCost('a', 2, 0.07));
  log('Task 3:', checkEligibility(25, true));
  log('Task 3:', checkEligibility(25, false));
  log('Task 3:', checkEligibility(16, true));
  log('Task 4 (no discount):', calculateTotalCostWithDiscount(50, 2, 0.1));
  log('Task 4 (discount 10):', calculateTotalCostWithDiscount(50, 2, 0.1, 10));

  const pre = document.getElementById('out');
  if (pre) pre.textContent = lines.join('\\n');
}
