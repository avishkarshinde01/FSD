const fs = require('fs');

const file1 = './file1.txt';
const file2 = './file2.txt';

fs.readFile(file1, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file 1:', err);
    return;
  }
 

  fs.appendFile(file2, data, 'utf8', (err) => {
    if (err) {
      console.error('Error appending file 1 contents to file 2:', err);
      return;
    }
    
    console.log('File contents appended successfully!');
  });
});
