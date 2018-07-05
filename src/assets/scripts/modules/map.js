function mapFunc() {
	var map;
console.log("before123")
function initMap() {
	console.log("123");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
	  
//    styles: [ {
//          "featureType": "administrative",
//          "elementType": "labels.text.fill",
//          "stylers": [
//              {
//                  "color": "#444444"
//              }
//          ]
//      },
//      {
//          "featureType": "landscape",
//          "elementType": "all",
//          "stylers": [
//              {
//                  "color": "#f2f2f2"
//              }
//          ]
//        }]
  });
};
	initMap();
};

mapFunc();



///КАРТА//

//function yMap() {
//ymaps.ready(init);
//console.log("ymap");
////var geoObjects = [];
//
//function init() {
//	var map = new ymaps.Map(document.getElementById('map'), {
//		center: [59.94, 30.32],
//		zoom: 12,
//		controls: ['zoomControl'],
//		behaviors: ['drag']
//	});
//
//
//    console.log("yamaaps")
//
////	var clusterer = new ymaps.Clusterer({
////       clusterIcons: [{
////		size: [100, 100],
////		offsset: [-50, -50]
////	}],
////		clusterIconContentLayout: null
////
////
////	});
////	
////	map.geoObjects.add(clusterer);
////
////	clusterer.add(geoObjects);
//
//};
//	
//	}
//yMap();
