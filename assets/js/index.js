const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById("value");
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Care! You are underweight!' /* Cuidado! Você está abaxio do peso */
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'You are the ideal weight!' /* Você está no peso ideial!*/
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Care! You are overweight!' /* Cuidado! Você está com sobrepeso! */
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Care! You are moderately obese!' /* Cuidado! Você está com obesidade moderada! */
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Care! You are severely obese!' /* Cuidado! Você está com obesidade severa! */
    } else {
        description = 'Care! You are morbidly obese!' /* Cuidado! Você está com obesidade morbida! */
    }

    value.textContent = bmi.replace('.', '.');
    document.getElementById('description').textContent = description;
});