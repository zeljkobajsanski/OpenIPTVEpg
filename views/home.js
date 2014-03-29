Epg.home = function (params) {

    var timestamp;
    
    var viewModel = {
        emisije: new DevExpress.data.DataSource({
            load: function (opts) {
                var d = $.Deferred();
                if (opts.refresh) timestamp = undefined;
                window.Epg.data.ucitajProgram(null, opts, timestamp).done(function (result) {
                    timestamp = result.timestamp;
                    d.resolve(result.program);
                });
                return d.promise();
            }
        })
    };

    return viewModel;
};