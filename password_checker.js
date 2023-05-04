function minimumStepsToMakePasswordStrong(password) {
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  let missingConditions = 0;

  if (password.length < 6) {
    missingConditions++;
  }

  if (password.length > 20) {
    missingConditions++;
  }

  if (!lowerCaseRegex.test(password)) {
    missingConditions++;
  }

  if (!upperCaseRegex.test(password)) {
    missingConditions++;
  }

  if (!digitRegex.test(password)) {
    missingConditions++;
  }

  let repeatingCharsCount = 0;
  for (let i = 2; i < password.length; i++) {
    if (password[i] === password[i-1] && password[i-1] === password[i-2]) {
      repeatingCharsCount++;
    }
  }

  if (repeatingCharsCount > 0) {
    missingConditions++;
  }
console.log(Math.max(6 - password.length, missingConditions))
  return Math.max(6 - password.length, missingConditions);
}
minimumStepsToMakePasswordStrong("1337c0d3")
module.exports = minimumStepsToMakePasswordStrong;
