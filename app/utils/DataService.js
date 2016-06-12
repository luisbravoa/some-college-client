var $ = require('jquery');
var api_token;
function DataService() {
    this.base_url = "http://localhost:8000";


}

function beforeSend(xhr){
    xhr.setRequestHeader('Autorization', 'Bearer '+ api_token);
}

DataService.prototype.login = function (email='', password=1) {

    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: this.base_url+'/login',
            data: {
                email: email,
                password: password
            },
            success: function (data) {
                api_token = data.api_token;
                resolve(data);
            },
            error: reject
        });
    });

};

module.exports = DataService;