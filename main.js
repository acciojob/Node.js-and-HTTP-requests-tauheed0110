const http = require('http');
const fetch = require('node-fetch'); // Ensure `node-fetch` is installed

// Create an HTTPS server
const server = http.createServer((req, res) => {
  // Fetch data from external API
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    res.end(data.title);
  })
  .catch(error => {
    console.log(error)
  })
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
