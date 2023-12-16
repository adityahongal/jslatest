const axios = require('axios');


const apiUrl = 'https://query.api.nansen.ai/auth';
const requestData = {
  email: 'adityahongalwork@gmail.com',
  password: 'Aditya@123'
};

axios.post(apiUrl, requestData, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });



(async() =>{ 

    try {
        
        // const apiResponse = await axios.get('https://query.nansen.ai/api/portfolio/wallet/eth3/0x64b6b4142d4D78E49D53430C1d3939F2317f9085')
        // console.log(apiResponse)
    } catch(error){
        console.log(error)
    }
})()

