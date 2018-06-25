# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

* [Project Overview: Stage 1](#project_overview:_stage_1)
* [Dependencies](#dependencies)

## Project Overview: Stage 1

This project was assigned by the udacity FEND course. The task to do were to fix the styling of the website and responsivness towards mobile screens. Add accesibility features and make the app accesible offline.

In order for the app's maps to work you will need to get a personal MapBox api key found here https://www.mapbox.com/install/. And copy that key in js/main.js and js/restaurant.js files to the 'mapBoxTok' variable found on top of the file. Now you can run the app.

In order to open the app you should navigate with your terminal or other console, and type this command-> python -m SimpleHTTPServer 8000 <-this will run a server. The next step would be to run-> http://localhost:8000 <-in your browser. Preferably the latest version, so that you could take advantage of the service worker. Here is a website to check browser compatibility. https://jakearchibald.github.io/isserviceworkerready/.

Also if you are going to make any changes to the files, you should also change a cacheName variable's, found in /sw.js, version number, in order for the effects to take place.


## Dependencies

responsive.css and styles.css are responsible for styling the page and making it responsive.

restaurants.json holds most of the restaurant data.

img folder holds all of the images.

js folder holds all of the javascript files regarding the main functionality of the application. dbhelper.js fetches data. main.js sorts out the main page and fetches some data form dbhelper.js specifically for this main page. restaurant_info.js fetches data from dbhelper.js for the restaurants info. Also adds some elements to the DOM.

index.html and restaurant.html are files for the both pages of the website. index.html is the main page and restaurant.html is the restaurant info page.

sw.js is a file where a service worker mostly operates. It caches files and intercepts requests.