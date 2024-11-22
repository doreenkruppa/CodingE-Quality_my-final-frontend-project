# My final frontend project- ReactApp CodingE-Quality

## Final Project Course-Module 3 - Single Page Application (SPA) - HTML/CSS/JavaScript/React.js

created at 29.3.23;

My App is like a Wiki on topics of inclusive Programming. There are 3 subpages, 1 about women pioneers in coding, 1 about activist groups working on gender equality in IT and 1 about events on similar topics. For each some infos already are given by me but users can also add new Infos via a Form.

For that I created a responsive ReactJS-App using different persistent layout Components and page/feature-specific Components with props, React-Router, fetch, React-Hooks (useState,useContext), EventHandler, media queries and flexbox for responsive Layout, local Storage and useContext-Hook for dynamic behavior and storing data added by user via a form etc....;

### Structure

Basierend auf einer Zeichnung, die alle geplanten Komponenten und Funktionen abbildete, erstellte ich eine ReactJS-App mit 3 persitent Layout Components - Header, Footer und Sidebar - sowie 4 Page Components - Home, Pioneers, Groups und Events.

##### Home-Page

![Desktop](./src/assets/documentation/home_view_desk.png)

##### Pioneers-Page

![Desktop](./src/assets/documentation/sub_view_pioneers_desk.png)

##### Groups-Page

![Desktop](./src/assets/documentation/sub_view_groups_desk.png)

Zu den vier Page Components wird via NavLinks verlinkt im DropdownMenu (mobile) bzw Navbar on Top( Desktop) und auf der Home-Page in der Übersicht über die verschiedenen Subpages via einzelne kurze Info-Cards.

#### DropdownMenu Mobile-Version

![DropdownMenu](./src/assets/documentation/dropdown-menu_home_view_mobile.png)

### Funktionality

While the Home-Page only gives general information of the intention of the App and shows an overview of the other Pages, the other 3 pages (Pioneer-Page, Group-Page, Event-Page) come with functionality.
The main files PioneersList.js, GroupsList.js and EventsList.js each have 2 nested feature-specific components: a Card-Component and a FormComponent, which are connected with a local data storage by using useState and useContext.
While via Form-Component the user can add data in a specific structure, the Card-Component makes sure, the stored Data is in a specific/ always same layout displayed on the Pioneers-Page or Group-Page or Event-Page.
Via UseContext the Name of every added Data-Komplex is also added to the Sidebar, which is only shown in desktop browsers but hidden in mobile.

#### Demo Functionality

![Demo_adding_data_](./src/assets/documentation/video/demo_adding_a_pioneer.gif)

Because this is my final frontend-project and there is no server/database yet the data added by the user are only shown in their own browser. Therefore after the next course modul "backend" for my final fullstack project I will add a server and database to the frontend project so all users can share all the information between each other!

### Responsive Layout

##### Home-Page

![Mobile](./src/assets/documentation/home_view_mobile.png)

##### Pioneers-Page

![Mobile](./src/assets/documentation/sub_view_pioneers_mobile.png)

##### Groups-Page

![Mobile](./src/assets/documentation/sub_view_groups_mobile.png)

### Image-Sources

image-sources: Photo by <a href="https://unsplash.com/@wocintechchat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christina @ wocintechchat.com</a> on <a href="https://unsplash.com/photos/macbook-pro-2JDDn7iSGH8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/woman-wearing-black-t-shirt-holding-white-computer-keyboard-YK0HPwWDJ1I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@thisisengineering?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ThisisEngineering</a> on <a href="https://unsplash.com/photos/woman-in-green-shirt-sitting-in-front-of-computer-64YrPKiguAE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@jakobdalbjorn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jakob Dalbjörn</a> on <a href="https://unsplash.com/photos/people-inside-conference-cuKJre3nyYc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
