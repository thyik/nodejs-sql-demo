const fetch = require('node-fetch');
const axios = require('axios');

// https://blog.logrocket.com/axios-or-fetch-api/
// fetch is native nodejs package
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log('fetch....')
    console.log(json);
  });


// axios is 3rd party package

// axios return data in json format
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('axios....')
    console.log(response.status);
    console.log(response.data);
  });

//
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log('fetch post...');
    console.log(json);
  });

//post(url, payload, options)
const token = 'ajskajk';
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
}, {
  headers: {
    //'Authorization': `Bearer ${token}`,
    'content-type': 'application/json; charset=UTF-8'
  }
}
)
  .then(response => {
    console.log('axios post....')
    console.log(response.status);
    console.log(response.data);
  });

const options = {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=UTF-8' },
  data: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  url: 'https://jsonplaceholder.typicode.com/posts',
};

axios(options)
  .then(response => {
    console.log('axios post option....')
    console.log(response.status);
    console.log(response.data);
  });
