const date_ob = new Date();

const date = ('0' + date_ob.getDate()).slice(-2);
const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
const year = date_ob.getFullYear();

console.log(year + '-' + month + '-' + date);
