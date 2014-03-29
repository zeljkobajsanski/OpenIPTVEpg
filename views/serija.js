Epg.serija = function(params) {
    var timestamp;
    return {
        program: new DevExpress.data.DataSource({
            load: function(opts) {
                var d = $.Deferred();
                if (opts.refresh) timestamp = undefined;
                Epg.data.ucitajProgram(Epg.Constants.TipoviPrograma.SERIJA, opts, timestamp).done(function (result) {
                    timestamp = result.timestamp;
                    d.resolve(result.program);
                });
                return d.promise();
            }
        })
    };
}