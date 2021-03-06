# JavaScript client for the Directions API

First step to play with the code is to get this repository:

```bash
git clone https://github.com/graphhopper/directions-api-js-client/
```

## Dependencies

Currently all JavaScript clients require jQuery (tested with 2.1.0) and the
small file [GHUtil.js](./js/GHUtil.js), both included in this repository.

## GraphHopper Routing API

### Demo

Run a simple demo with your own key via:

 1. edit demo-routing.js and replace YOUR_KEY with your own API key
 2. open index-routing.html in the browser
 3. click on the map to create routes

Also see how we integrated this API to build a fully featured maps application 
called [GraphHopper Maps](https://graphhopper.com/maps/)

![GraphHopper Routing API screenshot](./img/screenshot-routing.png)

### Integrate the Routing API client in your products                

You need [the routing client](./js/GraphHopper.js). See demo-routing.js on how
to integrate and use it.

There is also a different client developed from the community [here](https://www.npmjs.com/package/lrm-graphhopper).

## GraphHopper Matrix API

### Demo

Run a simple demo with your own key via:

 1. edit demo-matrix.js and replace YOUR_KEY with your own API key
 2. open index-matrix.html in the browser 
 3. press 'Search' to see the result
 4. click on one matrix entry to see the full route on GraphHopper Maps

![GraphHopper Matrix API screenshot](./img/screenshot-matrix.png)

### Integrate the Matrix API client in your products

You need [the matrix client](./js/GraphHopperMatrix.js). See demo-matrix.js on how
to integrate and use it.

## GraphHopper Geocoding API

### Demo

Run a simple demo with your own key via:

 1. edit demo-geocode.js and replace YOUR_KEY with your own API key
 2. open index-geocode.html in the browser
 3. type something and hit enter

Also see how we integrated this API to build a fully featured maps application 
called [GraphHopper Maps](https://graphhopper.com/maps/)

![GraphHopper Geocoding API screenshot](./img/screenshot-geocoding.png)

### Integrate the Geocoding API client in your products                

You need [the geocoding client](./js/GraphHopperGeocoding.js). See demo-geocoding.js on how
to integrate and use it.

## License

Code stands under Apache License 2.0

