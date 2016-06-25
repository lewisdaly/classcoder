
const rp = require('request-promise');

export default class Api {

  checkHtml(html) {
    //Don't know why I have to do this to get it to work... rp seems sucky so this works
    const params = 'html=' + html;
    return this.post('http://localhost:3000/checkHtml', params);
  }


  post(url, params) {
    return new Promise((resolve, reject) => {
      var http = new XMLHttpRequest();
      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4) {
          if (http.status == 200) {
            resolve(JSON.parse(http.response));
          } else {
            console.log(h)
            reject(new Error(http.status));
          }
        }  
      };
      
    http.send(params);
    });
  }
}