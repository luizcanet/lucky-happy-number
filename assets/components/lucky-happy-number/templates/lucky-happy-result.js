export default function (number) {
  return `
  <div class="lucky-happy-result">
    <p>
      ${number.value}
      ${number.isLucky ? 'é sortudo 🍀' : 'não é sortudo 😐'}
      ${(number.isLucky === number.isHappy) ? 'e' : 'mas'}
      ${number.isHappy ? 'é feliz 😃' : 'não é feliz 😢'}
    </p>
  </div>
  `
}
