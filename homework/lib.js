
const multiply = (a, b) => a*b;

const gradeCalculator = (input) => {
    if (isNaN(input)) {
        return 'input is not number'
    }

    if (input >= 80) {
        return 'A'
    } else if (input >= 75) {
        return 'B+'
    } else if (input >= 70) {
        return 'B'
    } else if (input >= 65) {
        return 'C+'
    } else if (input >= 60) {
        return 'C'
    } else if (input >= 55) {
        return 'D+'
    } else if (input >= 50) {
        return 'D'
    } else {
        return 'E'
    }
}

const triAngleCalculator = (a, b) => 0.5*a*b;

module.exports = {
    multiply,
    gradeCalculator,
    triAngleCalculator
}