
var fetchDirection = function() {
  const serverUrl = '127.0.0.1:3000';
  
  readAll();
};

var readAll = function(successCB, errorCB = null) {
  $.get({
    url: 'http://127.0.0.1:3000/1',
    contentType: 'application/json',
    success: (data) => {
      
      if (data.length === 0) {
        console.log('No directions in server');
      } else {
        let swimQue = JSON.parse(data);
        SwimTeam.move(swimQue);
      }
      
    },
    error: errorCB || function(error) {
      console.error('Failed to fetch', error);
    }
  });
}