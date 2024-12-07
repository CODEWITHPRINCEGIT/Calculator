const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === '=') {
      result.value = eval(result.value);
    } else if (value === 'C') {
      result.value = '';
    } else {
      result.value += value;
    }
  });
});