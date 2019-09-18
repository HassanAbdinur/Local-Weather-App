window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/1bbc884e3f7c087b75ea6706120e932a/${lat},${long}`;
        });

        
    } 
});