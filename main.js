const history = [];

function revertColorBack(id) {
  const element = document.getElementById(id);
  
  if (id === 6) {
    history.length = 0
  } 
  
  return element.style.backgroundColor = '';
}

function square(id) {
  let square = document.getElementById(id);
  
  // Add id to history array
  history[history.length] = id;
  
  if (history.length === 6) {
    setTimeout(() => {
      // Shallow copy of the original array (!avoid mutation)
      const revertHistory = [...history].reverse();
      
      revertHistory.forEach((num, index) => {
        setTimeout(() => {
          revertColorBack(num);
        },index * 1000);
      });
    }, 500);
  } 

  return square.style.backgroundColor = "green";
}