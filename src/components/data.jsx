import axios from 'axios';

export const antibiticOptions = [ 
    axios.get('/patient/getAntibiotic').then(res => {
    const listAntiobiotics = res.data.map(function (obj) {
      let rObj = {'value': obj.name, 'label': obj.name}
      return rObj;
    });
    console.log(listAntiobiotics)
  })
];
