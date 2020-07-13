![APPEAR banner](https://i.imgur.com/DK06k2a.png)
# APPEAR - Wedding RSVP Management


- [Overview](#overview)
- [MVP and Goals](#mvp-and-goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

APPEAR is a full-service, customizable wedding RSVP app, complete with household and guest management, response tracking, food ordering and specifications,  and more. APPEAR integrates easily with a household code on your paper invitations for a smooth and green RSVP experience. Let your guests upload photos with the lucky couple before, during, and after the big day! 


<br>

## MVP and Goals

- User can register for an account using household code on paper invitation
- User can RSVP and designate attendance, contact info, etc for each individual guest
- User can specify entrée order and dietary restrictions
- User can add pictures and label with guest names from household
- User can view larger gallery of all included photos

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end built with React utlizing Hooks |
|   React Router   | Router used for scaleable linking |
|   Axios   | Axios used to access deployed backend |
| Ruby on Rails | Rails with PostgreSQL database for backend |
|     CSS Grid      | Grid for main styling for three devices |
|     React Bootstrap      | Bootstrap used for extended responsive design |

<br>

### Client (Front End)

#### Wireframes

![APPEAR wireframes](https://i.imgur.com/xWRKkji.png)

#### Component Tree

![APPEAR Component Tree](https://i.imgur.com/roCva9A.png)

#### Component Hierarchy



``` structure

src
|__ assets/
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ shared/
        |__ Header.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ Main.jsx
      |__ RSVP.jsx
      |__ SingleGuest.jsx
      |__ SingleOrder.jsx
      |__ AddPhoto.jsx
      |__ Gallery.jsx
      |__ SinglePhoto.jsx

|__ services/
      |__ ApiHelper.js
      |__ CRUDFunctions.js

```

#### Component Breakdown

All components will be functional components utilizing React Hooks for passing of state and props.

|  Component     | Description                              |
| :----------:   | :--------------------------------------- |
|    Header      | Banner with Login and Register options |
|    Main        | Main component to house state declaration |
|    Register    | Allows user to register their code to an account |
|    Login       | Allows user to login to existing account |
|    RSVP        | Allows user to complete RSVP for all household |
|    SingleGuest | Component with options for each guest |
|    SingleOrder | Component with each guest's food order |
|    AddPhoto    | User can add photos to main gallery |
|    Gallery     | Main gallery that maps SinglePhoto |
|    SinglePhoto | Single instance of photo from database |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend boilerplate    |    H     |     1 hrs      |     TBD     |    TBD    |
| Frontend boilerplate |    H     |     1 hrs      |     TBD     |     TBD     |
| Build API services and functions    |    H     |     3 hrs      |     TBD     |    TBD    |
| Build full backend and deploy    |    H     |     4 hrs      |     TBD     |    TBD    |
| Build login and register components    |    M     |     2 hrs      |     TBD     |    TBD    |
| Header styling    |    M     |     2 hrs      |     TBD    |    TBD    |
| Build SinglePhoto component    |    M     |     3 hrs      |     TBD     |    TBD   |
| Build and style gallery    |    L     |     6 hrs      |     TBD     |    TBD    |
| Build RSVP view    |    H     |     6 hrs      |     TBD     |    TBD    |
| Build order view    |    H     |     6 hrs      |     TBD     |    TBD    |
| Build AddPhoto view    |    H     |     4 hrs      |     TBD     |    TBD    |
| Media queries    |    M     |     6 hrs      |     TBD     |    TBD    |
| Full styling    |    H    |     4 hrs      |     TBD     |    TBD    |
| TOTAL               |          |     48 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![APPEAR ERD](https://i.imgur.com/BTT8yRi.png)

The backend will be built with Ruby on Rails and PostgreSQL.

<br>

***

## Post-MVP
- Each individual guest can register as users to share pictures
- Integrating QR code that routes to the correct household code
- Guests can add songs to requests playlist
- Guests receive emails to confirm registration, RSVP and order submission
- Admin account for hosts
- Hosts can download Excel file of guests, guest info, order info


***

## Code Showcase

To be updated upon app completion. 

## Code Issues & Resolutions

To be updated upon app completion. 
