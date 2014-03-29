Epg.kanal = function(params) {

    var naziv = ko.observable(''),
        logo = ko.observable(''),
        program = ko.observableArray([]);

    Epg.data.ucitajKanal(params.id).done(function(result) {
        naziv(result.naziv);
        logo(result.logo);
        program(result.program);
    });

    return {
        naziv: naziv,
        logo: logo,
        program: program
    };
}