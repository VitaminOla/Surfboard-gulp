(function() {
  let myMap;
 
const initMap = () => {
 myMap = new ymaps.Map("map", {
   center: [55.751736, 37.575783],
   zoom: 14,
   controls: []
 });

  var myPlacemark = new ymaps.Placemark([55.751736, 37.575783], {}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: './img/icons/marker.svg',
    iconImageSize: [58, 73],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');

};
 
ymaps.ready(initMap);
})()
