# BookmarksApp

## Overview

This app allows users to add bookmarks to their favourite Urls. At the submission, an Http request will be sent to the service [LinkPreview](www.linkpreview.net) to receive basic info about the submitted link.
Users can also delete or edit links that have been previously submitted.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## App Structure

The app is divided in two main routes, Overview and Result. The Overview page is the main page, it contains an input form and the list of submitted bookmarks.
The results page displays a thank you message and basic data about the bookmark created.

### Data flow

The data flow is handled by the LinkStore generated with [NgXs](https://www.ngxs.io/). It is the single source of truth for the application and updates every time the user performs a CRUD action. Moreover, it is connected to the Localstorage so that the submitted bookmarks are not lost on page refresh.

When the app starts, the app.component.ts performs a check on the LocalStorage and if bookmarks are found, they are saved in the Store. In the same way, every time the store is updated, the localstorage is updated too.

The communication between components and store is handled by a facade service for separation of concerns.

The input form is build with Angular Material and is validated with a Regular Expression.
The url's existence is checked through the httpRequest to Linkpreview. If the Url does not exist, a 425 error is returned.

Some websites like Facebook or Netflix do not allow to grab info through the service, therefore they will return an error.
These are the only two cases I've discovered so far.

### Pagination

The pagination is handled through the library [ngx-pagination](https://github.com/michaelbromley/ngx-pagination#readme)

### Animations

The app contains some very basic fade animations and a routing Angular Animation.

Coded by [Alessia Amitrano](https://github.com/alessiaAmitrano)
