class LukcyHappyNumber {
  static getDigitCount (number) {
    return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1
  }

  static getDigit (number, n) {
    return Math.floor((number / Math.pow(10, this.getDigitCount(number) - n)) % 10)
  }

  static isHappy (number) {
    let i = 0
    let testNumber = number

    do {
      let sum = 0

      for (let d = 1; d <= this.getDigitCount(testNumber); d++) {
        sum = sum + (this.getDigit(testNumber, d) ** 2)
      }

      if (sum === 1) {
        return true
      } else {
        testNumber = sum
      }

      i++
    } while (i < 100)

    return false
  }

  static isLucky (number) {
    let count = number
    let numbers = []

    do {
      numbers.unshift(count)
      count--
    } while (count >= 1)

    if (numbers.length > 1) {
      let i = 2

      do {
        for (let index = numbers.length; index > 1; index--) {
          if (index % i === 0) {
            if (numbers.splice((index - 1), 1)[0] === number) {
              return false
            }
          }
        }

        i = numbers[i - 1]
      } while (i < number)

      return true
    } else {
      return true
    }
  }
}

module.exports = LukcyHappyNumber
