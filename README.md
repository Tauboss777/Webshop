# LowBudgetAmazonClone

Projekt von Daniel Taube im Kurs Web-Engineering 2 TINF20AI2.
Die Applikation stellt einen WebShop dar, der stark an Amazon angelegt ist.
Die Api die ich dafür genutzt hab war die Fake Store API (https://fakestoreapi.com/).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://dhbwvilas-20ai2webengii-2o7qyn5yigp.ws-eu51.gitpod.io/)

## **Quick Start Guide**

### Applikation Aufrufen

Die Empfohlenen möglichkeiten, um die Applikation zu starten sind:

1. Über Gitpod
2. Über den Link: https://webshop-fe507.web.app/
3. Lokales ausführen mit `ng serve´

### Nutzerprofil

Zum Einloggen kann der Account

- email: user@user.de
- Passwort: sh7up#KT!

verwendet werden. Alternativ kann ein neuer Account über die Registrierung erstellt werden, oder das Google-Login kann benutzt werden.

## Verwendete Technologien

- Angular 13
  - Angular Material
  - Angular Fire
- Firebase
  - Firestore
  - Firebase hosting
  - Firebase authentication
- [Fake Store Api] (https://fakestoreapi.com/)

## **Features:**

- Login
  - Firebase Login/Registrierung mit Email/Passwort oder Google
- Warenkorb
  - Hinzufügen/Entfernen zum Warenkorb
- Bestellungen
  - Abschließen einer Bestellung
- Infos zu Produkten mit Hover anzeigen lassen

## Pages

- Login/Register
- Home (Landing Page der Seite)
- Warenkorb
- Order

## **Ordner Struktur**

- components
  - Hier befinden sich alle wiederverwendbare UI Komponenten
- pages
  - In diesem Ordner befinden sich die verschiedenen Hauptseiten der Anwendung, die der Nutzer über die Routen einsehen kann
- Models und Modules
- Services

## Probleme
Leider war ich die Woche die wir nach den Klausuren extra hatten krank und konnte hinten raus nicht mehr so viel umsetzen wie ich geplant hatte. Ich hatte Gott sei dank schon recht viel am Anfang des Semesters erledigt.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
