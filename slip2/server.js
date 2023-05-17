// Simulated user data
const users = [
    { username: 'john', password: 'password1' },
    { username: 'jane', password: 'password2' },
    { username: 'joe', password: 'password3' }
  ];
  
  // Simulated login function
  function login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.username === username);
        if (user && user.password === password) {
          resolve('Login successfully');
        } else {
          reject(new Error('Login failed'));
        }
      }, 1000); // Simulate asynchronous login process with a timeout
    });
  }
  
  // Usage example
  const username = 'john';
  const password = 'password1';
  
  login(username, password)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error.message);
    });
  