// Helper function to create elements with styles
function createStyledElement(tag, styles) {
  const element = document.createElement(tag);
  Object.assign(element.style, styles);
  return element;
}

// Base styles
const baseStyles = {
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
};

// Create the main UI container
const container = createStyledElement('div', {
  ...baseStyles,
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '350px',
  maxWidth: '90vw',
  padding: '20px',
  background: '#e0e0e0', // Base background
  borderRadius: '20px',
  fontFamily: 'Roboto, sans-serif',
  zIndex: '10000',
  color: '#333',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2), inset 0 -1px 4px rgba(0,0,0,0.1)', // Neumorphism effect
});

// Create the header
const header = createStyledElement('div', {
  ...baseStyles,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  borderBottom: '2px solid #ccc',
  paddingBottom: '10px',
});

const title = createStyledElement('h2', {
  ...baseStyles,
  margin: '0',
  fontSize: '24px',
  color: '#007bff', // Primary blue
  fontWeight: '700',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
title.textContent = 'VeS BlackJack Script for WPD';

const colorPickerLabel = createStyledElement('label', {
  ...baseStyles,
  display: 'flex',
  alignItems: 'center',
  color: '#007bff',
  fontSize: '14px',
  marginLeft: '10px',
});
colorPickerLabel.textContent = 'Customize Color: ';

const colorPicker = createStyledElement('input', {
  ...baseStyles,
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 0 5px rgba(0,0,0,0.3)',
  cursor: 'pointer',
});
colorPicker.type = 'color';
colorPicker.value = '#e0e0e0';

colorPicker.addEventListener('input', function() {
  container.style.backgroundColor = colorPicker.value;
});

// Create options section
const optionsSection = createStyledElement('div', {
  ...baseStyles,
  marginTop: '20px',
  fontSize: '14px',
  borderTop: '2px solid #ccc',
  paddingTop: '10px',
});

// Create game stats section
const optionsTitle = createStyledElement('span', {
  ...baseStyles,
  display: 'block',
  marginBottom: '10px',
  color: '#007bff',
  fontWeight: '700',
});
optionsTitle.textContent = 'Game Stats:';

const statsContainer = createStyledElement('div', {
  ...baseStyles,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const statStyle = {
  ...baseStyles,
  margin: '0',
  fontSize: '16px',
  padding: '10px',
  borderRadius: '8px',
  background: '#f5f5f5', // Light background for stats
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

const winCount = createStyledElement('p', {
  ...statStyle,
  color: '#28a745', // Green for wins
});
winCount.textContent = 'Wins: 0';

const loseCount = createStyledElement('p', {
  ...statStyle,
  color: '#dc3545', // Red for losses
});
loseCount.textContent = 'Losses: 0';

const drawCount = createStyledElement('p', {
  ...statStyle,
  color: '#ffc107', // Yellow for draws
});
drawCount.textContent = 'Draws: 0';

statsContainer.appendChild(winCount);
statsContainer.appendChild(loseCount);
statsContainer.appendChild(drawCount);

optionsSection.appendChild(optionsTitle);
optionsSection.appendChild(statsContainer);

// Create currency options section
const currencySection = createStyledElement('div', {
  ...baseStyles,
  marginTop: '20px',
  fontSize: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const currencyTitle = createStyledElement('span', {
  ...baseStyles,
  display: 'block',
  marginBottom: '10px',
  color: '#007bff',
  fontWeight: '700',
});
currencyTitle.textContent = 'Currency Options:';

// Create checkboxes for currency selection
const createCurrencyOption = (id, text) => {
  const label = createStyledElement('label', {
    ...baseStyles,
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'color 0.3s ease',
  });
  
  const checkbox = createStyledElement('input', {
    ...baseStyles,
    appearance: 'none',
    width: '20px',
    height: '20px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '2px solid #007bff',
    backgroundColor: '#fff',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  });
  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.value = id;
  checkbox.classList.add('currency-checkbox');

  const span = createStyledElement('span', {});
  span.textContent = text;

  // Custom checkbox styles for checked state
  checkbox.addEventListener('change', () => {
    document.querySelectorAll('.currency-checkbox').forEach(cb => {
      if (cb.id !== id) cb.checked = false;
    });
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkbox.style.backgroundColor = '#007bff';
      checkbox.style.borderColor = '#007bff';
    } else {
      checkbox.style.backgroundColor = '#fff';
      checkbox.style.borderColor = '#007bff';
    }
  });

  label.appendChild(checkbox);
  label.appendChild(span);
  
  return { label, checkbox };
};

const coinOption = createCurrencyOption('coins', 'Coins');
const marseybucksOption = createCurrencyOption('marseybucks', 'Marseybucks');

currencySection.appendChild(currencyTitle);
currencySection.appendChild(coinOption.label);
currencySection.appendChild(marseybucksOption.label);

// Create amount input
const amountSection = createStyledElement('div', {
  ...baseStyles,
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const amountLabel = createStyledElement('label', {
  ...baseStyles,
  color: '#007bff',
  fontSize: '16px',
});
amountLabel.textContent = 'Amount: ';

const amountInput = createStyledElement('input', {
  ...baseStyles,
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  width: '100%',
  fontSize: '16px',
  color: '#333',
  backgroundColor: '#f9f9f9',
  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
});

amountInput.addEventListener('focus', () => {
  amountInput.style.boxShadow = '0 0 8px rgba(0,0,0,0.2)';
  amountInput.style.borderColor = '#007bff';
});
amountInput.addEventListener('blur', () => {
  amountInput.style.boxShadow = 'none';
  amountInput.style.borderColor = '#ccc';
});

amountInput.type = 'number';
amountInput.min = '0';
amountInput.placeholder = 'Enter amount';

amountSection.appendChild(amountLabel);
amountSection.appendChild(amountInput);

currencySection.appendChild(amountSection);

// Append elements to the container
header.appendChild(title);
header.appendChild(colorPickerLabel);
header.appendChild(colorPicker);
container.appendChild(header);
container.appendChild(optionsSection);
container.appendChild(currencySection);

// Select the div with the class 'blackjack-cardset-value' containing "Player has"
const elements = document.querySelectorAll('.blackjack-cardset-value');
let playerValue = '';

elements.forEach(function(element) {
  if (element.textContent.includes('Player has')) {
    const match = element.textContent.match(/Player has (\d+)/);
    if (match) {
      playerValue = match[1];
    }
  }
});

// Create the player value text
const playerValueText = createStyledElement('p', {
  ...baseStyles,
  margin: '0',
  fontSize: '18px',
  color: '#28a745',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
playerValueText.textContent = playerValue ? `Player has ${playerValue}` : 'Player value not found';
container.appendChild(playerValueText);

// Append the container to the body
document.body.appendChild(container);
