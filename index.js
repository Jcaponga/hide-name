export const hideName = (customerName) => {
  customerName = String(customerName)
  const parts = customerName.trim().split(/\s+/);

  if (!/^[a-zA-Z\s\.]+$/.test(customerName) || parts.length < 2) {
    return 'Input provided is not a valid name.';
  }

  const maskedParts = parts.slice(0, -1).map(part => {
    if (part.length <= 3) {
      return part.toUpperCase();
    }

    const firstTwoLetters = part.slice(0, 2);
    const lastLetter = part.slice(-1);
    const maskedLetters = '*'.repeat(part.length - 3);

    return (firstTwoLetters + maskedLetters + lastLetter).toUpperCase();
  });

  const surname = parts[parts.length - 1];
  const surnameInitial = surname.charAt(0).toUpperCase() + '.';

  return [...maskedParts, surnameInitial].join(' ');
}