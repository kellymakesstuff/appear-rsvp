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

APPEAR is a full-service, customizable wedding RSVP app, complete with household and guest management, response tracking, food ordering and specifications,  and more. APPEAR integrates easily with a QR code on your paper invitations for a smooth and green RSVP experience. Let your guests upload photos with the bride and groom before, during, and after the big day! 


<br>

## MVP and Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Axios   | _Lorem ipsum dolor sit amet, consectetur._ |
| Ruby on Rails | _Lorem ipsum dolor sit amet, consectetur._ |
|     React Bootstrap      | _Lorem ipsum dolor sit amet, consectetur._ |

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
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![APPEAR ERD](https://i.imgur.com/BTT8yRi.png)

The backend will be built with Ruby on Rails and PostgreSQL.

<br>

***

## Post-MVP



***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
