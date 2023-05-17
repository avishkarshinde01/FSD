const os=require('os');
const pf=os.platform();
const td=os.tmpdir();
console.log('Platform : '+pf);
console.log('Temp Dir : '+td);