import scrollama from 'scrollama';
import $ from 'jquery';
import { Header } from './components/header';
import { LocalSection } from './components/location-section';
import { Mapbox } from './components/map';

const gwangju = [126.8526, 35.1595];
const busan = [129.0756, 35.1796];

const seoulMapJson = {
    "region": "seoul",
    "coordinates": [126.9780, 37.5665],
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Seoul Tower",
                "data": "seoul-tower",
                "iconSize": [10, 10]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    126.9882,
                    37.5512
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Gyeongbok Palace",
                "data": "gyeongbok-palace",
                "iconSize": [10, 10]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    126.9770,
                    37.5796
                ]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Seoul Forest",
                "iconSize": [10, 10]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    127.0385,
                    37.5450
                ]
            }
        },
    ]
};

const jeollaMapJson = {
    "region": "jeolla",
    "coordinates": [126.9541, 35.3564],
};

const seoulLocalData = [
    {
        id: 0,
        name: 'Seoul Tower',
        tag: 'seoul-tower',
        text: 'The quick brown fox jumps over the lazy dog',
        hero: './assets/gifs/seoul-tower-1.gif',
    },
    {
        id: 1,
        name: 'Gyeongbok Palace',
        tag: 'gyeongbok-palace',
        text: 'Hello!',
        hero: './assets/gifs/seoul-temple-2-1.gif'
    },    {
        id: 2,
        name: 'Seoul Forest',
        tag: 'seoul-forest',
        text: 'Hello 123!',
        hero: './assets/gifs/seoul-forest-1-1.gif'
    }
];

const jeollaLocalData = [];

function showInnerNav() {
    $('.korea__inner-nav').css('display', 'flex');
}

function hideInnerNav() {
    $('.korea__inner-nav').css('display', 'none');
}

$(document).ready(function() {
    let korea = new Mapbox('korea__map', 'mapbox://styles/mapbox/light-v9',  [127.7669, 35.9078], 6);
    let seoulSection = new LocalSection(seoulLocalData, 'Seoul');
    let jeollaSection = new LocalSection(jeollaLocalData, 'Jeolla');

    korea.addFeatures(seoulMapJson);
    korea.addFeatures(jeollaMapJson);
    // Nav click
    $('.js-home').on('click', function() {
        hideInnerNav();
        korea.flyTo( [127.7669, 35.9078], 6, $('.js-location'), $('.korea__header'));
    });

    $('.js-seoul-nav').on('click', function() {
        showInnerNav();
        seoulSection.updateVue(1);
        korea.flyTo(seoulMapJson.coordinates, 10, $('.korea__header'), $('.marker--seoul, .js-location'));
    });

    $('.js-jeolla-nav').on('click', function() {
        showInnerNav();
        jeollaSection.updateVue(1);
        korea.flyTo(jeollaMapJson.coordinates, 8, $('.korea__header'), $('.js-location'));
    });

    // Maker click
    $('body').on('click', '.marker', function() {
        $('.marker').removeClass('active');
        $(this).addClass('active');
        
        $('.korea__content').animate({
            scrollTop: $('#' + $(this).data('place')).offset().top
        }, 500);
    });

    // Marker hover 
    $('body').on('mouseover', '.marker', function() {
        console.log($(this).data('place'));
    });
});
