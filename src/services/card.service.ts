export type CardType =
  | "Visa"
  | "MasterCard"
  | "American Express"
  | "Discover"
  | "Unknown";

export const isValidCard = (cardNumber: string): boolean => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};


// Card Type Detection
export const detectCardType = (cardNumber: string): CardType => {
  if (/^4/.test(cardNumber)) return "Visa";
  if (/^(5[1-5])/.test(cardNumber)) return "MasterCard";
  if (/^(34|37)/.test(cardNumber)) return "American Express";
  if (/^(6011|65)/.test(cardNumber)) return "Discover";

  return "Unknown";
};