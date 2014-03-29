Epg.home = function (params) {

    var timestamp;
    
    var viewModel = {
        emisije: new DevExpress.data.DataSource({
            load: function (opts) {
                var d = $.Deferred();
                window.Epg.data.ucitajProgram(timestamp).done(function(result) {
                    //timestamp = result.timestamp;
                    d.resolve(result);
                });
                return d.promise();
            }
        })
    };

    return viewModel;
};