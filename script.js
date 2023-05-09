// document.getElementById('quizForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get selected answers
//     const color = document.querySelector('input[name="color"]:checked').value;
//     const animal = document.querySelector('input[name="animal"]:checked').value;
//     const food = document.querySelector('input[name="food"]:checked').value;
    
//     // Display result based on answers
//     let result = '';
//     if (color === 'red') {
//       result += 'You selected red as your favorite color. ';
//       result += 'Here is some information about the color red.';
//       // Add more advice or information based on the selected answer
//     } else if (color === 'blue') {
//       result += 'You selected blue as your favorite color. ';
//       result += 'Here is some information about the color blue.';
//       // Add more advice or information based on the selected answer
//     } else if (color === 'green') {
//       result += 'You selected green as your favorite color. ';
//       result += 'Here is some information about the color green.';
//       // Add more advice or information based on the selected answer
//     }
    
//     // Repeat the same logic for other questions (animal and food)
    
//     document.getElementById('result').textContent = result;
//   });
  

// document.getElementById('quizForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get selected answers
//     const color = document.querySelector('input[name="color"]:checked').value;
//     const animal = document.querySelector('input[name="animal"]:checked').value;
//     const food = document.querySelector('input[name="food"]:checked').value;
    
//     // Display general advice
//     let result = 'Here is some advice based on your answers:';
//     result += '<br>';
//     result += 'Color: ' + color + '<br>';
//     result += 'Animal: ' + animal + '<br>';
//     result += 'Food: ' + food + '<br>';
//     // Add more advice or information based on the selected answers
    
//     document.getElementById('result').innerHTML = result;
//   });
  
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get selected answers
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    
    // Display advice based on selected answers
    let result = 'Here is some advice based on your answers:';
    result += '<br>';
    
    if (question1) {
      result += 'Answer for question 1: ' + question1.value + '<br>';
      // Add advice or information based on the selected question1
    } else {
      result += 'No question selected<br>';
    }
    
    if (question2) {
      result += 'Answer for question 2: ' + question2.value + '<br>';
      // Add advice or information based on the selected question2
    } else {
      result += 'No question selected<br>';
    }
    
    if (question3) {
      result += 'Answer for question 3: ' + question3.value + '<br>';
      // Add advice or information based on the selected question3
    } else {
      result += 'No question selected<br>';
    }
    
    document.getElementById('result').innerHTML = result;
  });
  