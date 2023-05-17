const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (username === password) {
        resolve('Login successfully');
      } else {
        reject(new Error('Login failed'));
      }
    });
  };
  
  const username = 'admin';
  const password = 'admn';
  
  login(username, password)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    });
  