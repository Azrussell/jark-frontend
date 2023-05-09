
function displayData() {
    // Make a fetch call to the data API
    fetch('https://jarj-backend.onrender.com/questions')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        
        // console.log(data)
        // Get a reference to the DOM element where the data will be displayed
        const displayElement = document.getElementById('question-field');
  
        // // Create a new DOM element to hold the data
        const slicedArray = data.slice(0,3)
        slicedArray.forEach(item => {
            const dataElement = document.createElement('p');
            dataElement.textContent = `${item.name}`
            displayElement.appendChild(dataElement);
        });
            
        // Append the new data element to the display element
        
      })
      .catch(error => console.error(error)); // Handle any errors that occur during the fetch call
  }
  
  // Get a reference to the button that will trigger the data display
  const displayButton = document.getElementById('question1');
  
  // Add an event listener to the button that will call the displayData function when it's clicked
  displayButton.addEventListener('click', displayData);


  function displayAnswer() {
    // Make a fetch call to the data API
    fetch('https://jarj-backend.onrender.com/answers')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        
        // console.log(data)
        // Get a reference to the DOM element where the data will be displayed
        const displayElement = document.getElementById('answer-field');
  
        // // Create a new DOM element to hold the data
        // const slicedArray = data.slice(0)
        
        data.forEach(item => {
            if(item.id==2){
            const dataElement = document.createElement('p');
            dataElement.textContent = `${item.choice}`
            displayElement.appendChild(dataElement);}
            
        });
            
        // Append the new data element to the display element
        
      })
      .catch(error => console.error(error)); // Handle any errors that occur during the fetch call
  }
  
  // Get a reference to the button that will trigger the data display
  const answerButton = document.getElementById('answer1');
  
  // Add an event listener to the button that will call the displayData function when it's clicked
  answerButton.addEventListener('click', displayAnswer);
  
  

