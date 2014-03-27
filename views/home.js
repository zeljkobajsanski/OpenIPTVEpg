Epg.home = function (params) {

    var timestamp;
    
    var viewModel = {
        emisije: new DevExpress.data.DataSource({
            load: function (opts) {
                var d = $.Deferred();
                $.getJSON("data/data.json", function(result) {
                    timestamp = result.timestamp;
                    d.resolve(result.program);
                }).fail(function(err) {
                    alert('Failed');
                });
                return d.promise();
            }
        })
    };

    return viewModel;
};