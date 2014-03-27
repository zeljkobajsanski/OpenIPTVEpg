(function() {
    "use strict";

    var Epg = window.Epg = { };
    
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
              }
            ]
        });
        
        Epg.app.router.register(":view/:id", { view: "home", id: undefined });
        Epg.app.navigate();
    });
    
})();