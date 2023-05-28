function displayFavorableData() {
    // Get the selected category and gender values
    const category = document.getElementById('category').value;
    const gender = document.getElementById('gender').value;
    
    // Fetch the data from the CSV file
    fetch('2021nit.csv')
      .then(response => response.text())
      .then(csvData => {
        // Parse the CSV data
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => row.split(','));
        
        // Filter the data based on the selected values
        const filteredData = data.filter(row => row[3] === category && row[4] === gender);
        
        // Display the filtered data on the webpage
        const resultBody = document.getElementById('resultBody');
        resultBody.innerHTML = '';
        filteredData.forEach(row => {
          const tableRow = document.createElement('tr');
          row.forEach(cell => {
            const tableCell = document.createElement('td');
            tableCell.textContent = cell;
            tableRow.appendChild(tableCell);
          });
          resultBody.appendChild(tableRow);
        });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
  