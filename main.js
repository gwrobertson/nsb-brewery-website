var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.370244, lng: -1.262716 },
        zoom: 7
    });

    // Array of markers
    var markers = [
        {
            coords: { lat: 53.471946, lng: -2.291686 },
            content: '<h4>Manchester</h4>'
        },
        {
            coords: { lat: 52.486244, lng: -1.890401 },
            content: '<h4>Birmingham</h4>'
        },
        {
            coords: { lat: 51.539188, lng: -0.142500 },
            content: '<h4>London</h4>'
        },
        {
            coords: { lat: 53.800755, lng: -1.549077 },
            content: '<h4>Leeds</h4>'
        },
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
        }

        marker.addListener('mouseover', function () {
            infoWindow.open(map, marker);
        });

        marker.addListener('mouseout', function () {
            infoWindow.close(map, marker);
        });

        marker.addListener('click', function () {
            map.setZoom(12);
            map.setCenter(marker.getPosition());
        });

        marker.addListener('dblclick', function () {
            map.setZoom(7);
            map.setCenter(marker.getPosition());
        });
    }

}

window.onload = function () {
    document.getElementById('body').classList.add('loaded');
  }
  
  const elem = selector => {
    return document.querySelector(selector)
  }
  // SMOOTH SCROLLING --------------------
  let scrollLink = $('.scroll');
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  // PARALLAX --------------------
  let nav = elem('nav')
  let introHeight = elem('.section--intro').offsetHeight
  let missionOffset = elem('#mission').offsetTop - $(window).height()
  let breweryOffset = elem('#brewery').offsetTop - ($(window).height() / 1.2)
  let footerOffset = elem('footer').offsetTop - ($(window).height() / 4)
  let beerOffset = elem('#beer').offsetTop - ($(window).height() / 1.6)
  
  $(window).scroll(function () {
    let wScroll = $(window).scrollTop()
  
    // NAVIGATION
    if (wScroll > introHeight) { nav.classList.add('alone') }
    if (wScroll < introHeight) { nav.classList.remove('alone') }
  
    // FLOATING CARDS
    if (wScroll > missionOffset) {
      var offset = (Math.min(0, wScroll - elem('.section--mission').offsetTop + $(window).height() - 350)).toFixed();
      $('.section--mission .card').css({ 'transform': 'translate(' + offset + 'px,0)' });
    }
  
    if (wScroll > missionOffset) {
      var offset = (Math.min(0, wScroll - $('.section--taproom').offset().top + $(window).height() - 350)).toFixed();
      $('.section--taproom .card--img').css({ 'transform': 'translate(' + Math.abs(offset) + 'px,0)' });
    }
  
    // LANDING ELEMENTS
    if (wScroll > beerOffset) {elem('#beer .section__title').classList.add('is-showing');}
    if (wScroll > beerOffset - 50) {elem('#beer .section__subtitle').classList.add('is-showing');}
  
    if (wScroll > breweryOffset*1.2) {elem('#brewery .section__title').classList.add('is-showing');}
    if (wScroll > breweryOffset) {elem('#brewery .section__image').classList.add('is-showing');}
    if (wScroll > breweryOffset) {elem('#brewery .section__subtitle').classList.add('is-showing');}
    if (wScroll > footerOffset) {
      elem('footer .logo').classList.add('is-showing');
      // console.log('shownmf')
    }
    console.log(wScroll, footerOffset)
  
  });
