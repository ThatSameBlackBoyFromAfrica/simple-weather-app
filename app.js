window.addEventListener('load', () => {
    let long;
    let lat;


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'http://cors-anywhere.herokuapp.com/'

            const api = proxy + 'https://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + long + '&appid=3055aee78f153c35e0fa1c8d0afdaf90';

            // fetch(api)
            // .then(response => {
            //     return response.json();
            // })
            // .then(data => {
            //     console.log(data);
            // })

            fetch(proxy + 'http://example.com/movies.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        })
    } 
})