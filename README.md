# Marvel backend - React Application

<h1 align="center">
<br>
<img
		width="450"
		alt="Marvel - React App"
		src="preview\Marvel-Comics-Logo.575beca3.png">

<br>
<br>
A server application to protect Marvel APIs callings to get comics and characters datas
<br>
<br>

</h1>

## General info

This project, carried out as part of the Le Reacteur training, aims to put into practice our knowledge in React on the backend part.

The Marvel project is composed of 2 parts the frontend and the backend (application treated here).
The latter exposes own APIs (used by the frontend) to get data from Marvel APIs.

## Overview

This application provides data on :

- the characters and the comic strips in which they appear
- the comic strips and characters involved

## Features

This project proposes the following APIs :

### - /characters

- /characters

| HTTP Verb | Description                                                    | Query Param                            |
| --------- | -------------------------------------------------------------- | -------------------------------------- |
| `Get`     | Return a characters page depend on indicated criteria and sort | offset, limit, nameStartsWith, orderBy |

- /characters/characterId

| HTTP Verb | Description                  | Fields Param |
| --------- | ---------------------------- | ------------ |
| `Get`     | Return a specified character | None         |

- /characters/characterId/comics

| HTTP Verb | Description                             | Query Param            |
| --------- | --------------------------------------- | ---------------------- |
| `Get`     | Return comics for a specified character | offset, limit, orderBy |

### - /comics

- /comics

| HTTP Verb | Description                                                | Query Param                             |
| --------- | ---------------------------------------------------------- | --------------------------------------- |
| `Get`     | Return a comics page depend on indicated criteria and sort | offset, limit, titleStartsWith, orderBy |

- /comics/comicId

| HTTP Verb | Description              | Fields Param |
| --------- | ------------------------ | ------------ |
| `Get`     | Return a specified comic | None         |

- /comics/comicId/characters

| HTTP Verb | Description                             | Query Param            |
| --------- | --------------------------------------- | ---------------------- |
| `Get`     | Return characters for a specified comic | offset, limit, orderBy |

## Technologies

- cors - version 2.8.5
- dotenv - version 8.2.0
- crypto-js - version 4.0.0
- uid2 - version 0.0.3
- express - version 4.17.1
- express-formidable - version 1.2.0
- axios - version 0.21.0

## Setup

Clone the repository then install the dependencies using `npm install`.

Then create an .env file with the following global parameters:

- PORT,
- MARVEL_API_SECRET_KEY,
- MARVEL_API_PUBLIC_KEY,
- MARVEL_URL

Use `npm start` to launch the server.

You can also visit the demo server, by following the url below and completing the final part of the route :

https://reacteur-marvel.herokuapp.com/

## Status

Project is _finished_.

## Cautionary note

This project was carried out in a limited time with predefined guidelines. Also, this project may contain improvement points to comply with good practices.

## Inspiration

[official marvel website](https://www.marvel.com/).

## 📈 Stats

<br>
<br> 
<img align="center" src="https://wilclauzel-activitycounter.herokuapp.com/counter/GitHub/MarvelS?kind=SVG"/>
<br>
<br>
