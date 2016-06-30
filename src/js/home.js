﻿function getServer() {
    /// <summary>
    /// get backend server
    /// </summary>

    $.ajax({
        url: __DEVAPI__ + 'http://localhost:8888/',
        data: {},
        type: 'get',
        dataType: 'text',
        success: function (text) {
            $("#serverData").html(text);
        }, error: function () {


            var text = '';
            text += '▍if you see that,It means you have some trouble to get data by backend server. <br /> maybe it\'s the reason below:<br /> ';
            text += '1、you should start the nodejs server,cd to \'mockServer\' folder,then \' node server.js\' to start the server. like this:<br /> ';
            text +=' <pre>$ node server.js</pre>'
            text += '2、if first step is no use,may be Port 8888 is occupied! change Port 8888 to another one.';

            $("#serverData").html(text);
        }

    })
}


function initialize(params) {

    if (__DEV__) {
        console.log(params);
    }

    getServer();
}


module.exports = {

    init: initialize
}


