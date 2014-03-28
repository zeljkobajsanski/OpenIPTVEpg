(function() {
    "use strict";

    var Epg = window.Epg = {
        Constants: {
            TipoviPrograma: {
                FILM: 1,
                SERIJA: 2,
                SPORT: 3,
                OSTALO: 4
            }
        }
    };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    DevExpress.devices.current({ platform: "android" });

    $(function() {
        Epg.app = new DevExpress.framework.html.HtmlApplication({
            namespace: Epg,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "Uživo",
                action: "#home",
                icon: "clock"
              },
                {
                    title: "Film",
                    action: "#film",
                    icon: "film"
                },
                {
                    title: "Serija",
                    action: "#serija",
                    icon: "serija"
                },
                {
                    title: "Sport",
                    action: "#sport",
                    icon: "sport"
                }
            ]
        });
        
        Epg.app.router.register(":view/:id", { view: "home", id: undefined });
        Epg.app.navigate();
    });
    
})();