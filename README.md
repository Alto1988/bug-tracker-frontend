# Bug Tracker

<img src="/src/assets/images/OG-Spring.png" height="200" width="300"/> <img src="/src/assets/images/Java-Logo.png" height="200" width="300"/>
<img src="/src/assets/images/Angular_full_color_logo.svg.png" height="200" width="300"/>

[Bug Tracker Backend](https://github.com/Alto1988/bug-tracker-backend)

## How to Setup

- First clone both the [this repo](https://github.com/Alto1988/bug-tracker-frontend)
- Then clone the repo [Bug Tracker Backend](https://github.com/Alto1988/bug-tracker-backend)
- Once cloned navigate to the backend and open up [PgAdmin4](https://www.pgadmin.org/). If this is your first time using PgAdmin then you will need to download and install it
- Using PgAdmin create a new database and name it bugtracker. Make sure your user name and password for the database is the same as the credentials in the application-dev.properties file, or change the credential to match yours.
- Then open up [intellij](https://www.jetbrains.com/idea/) and open up the backend project.
- If your database and credential are all setup correctly run the project and your database should have the tables generated for you.
- Then in a new terminal window navigate to the frontend project and make sure to run [npm install](https://nodejs.org/en/download/), or [yarn install](https://classic.yarnpkg.com/en/docs/getting-started) wait for the installation of the packages first, and then run ng serve.
- You should see the site running on localhost:4200 for the frontend and localhost:9092 for the backend.

## User Stories

- User should be able to see a main page when navigating to the site.
- User should see options/nav bar with the options that are available.
- User should see an option to log in.
- User should be able to log in and get their token.
- User should then be able to see the bugs that are tied to them/ assigned to them.
- User should be able to click on a bug and be able to see the bug details.
- User should be able to create a bug from the dashboard.
- User should be able to perform crud operations on the bug.

## Accomplishments

- I was able to hit the MVP for the project.
- I used a technology for css that I hadn't used before [Clarity](https://clarity.design/)
- I also was also able to at least start the beginnings of the websocket implementation (Just a basic controller and config file).
- Being able to talk from frontend to backend this time around without a major issue I consider an accomplishment.

## Future Work

- I would like to further design this out for teams not just individual users.
- I would like to also finish the websocket implementation after having done the teams implementation so that users can talk to each other.
- I would probably use a different css framework for this project as well the one I used was kind of buggy and I would like to use something else in the future.

  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.
