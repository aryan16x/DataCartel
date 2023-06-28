# Daracartel - The sole solution for Data Miners

In recent times, the remarkable advancements in AI/ML have captivated numerous individuals, drawing them towards this field. However, for **entry-level ML practitioners** seeking to work with **customized datasets, finding the ideal data** that fulfills their specific requirements can be a daunting task. Many datasets suffer from issues such as data cleaning issues, extraneous features, duplicate entries, and more. But fret not, as we are here to put an end to your data mining journey with **Datacartel**.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [How user-side works??](#how-user-side-works)
- [How backend works??](#how-backend-works)
- [Technologies Used](#technologies-used)
- [Libraries Used](#libraries-used)
- [Frameworks Used](#frameworks-used)
- [Api used](#api-used)
- [File Structure](#file-structure)
- [Concepts Used](#concepts-used)
- [Features](#features)
- [Getting Started](#getting-started)

## Problem Statement

Entry-level ML practitioners struggle to find suitable datasets that meet their specific needs, as existing datasets often suffer from issues like data cleaning problems, extraneous features, and duplicate entries. **Datacartel** aims to solve this problem by providing curated datasets to streamline the data mining process for ML practitioners.

## Proposed Solution

We are developing a website that empowers users to generate datasets on any topic of their choice. With our platform, users have the freedom to create datasets with any number of features they require. However, currently, the dataset retrieval is limited to a maximum of 1000 entries per request. Rest assured, our application offers unrestricted access, allowing users to fetch suitable datasets that precisely meet their specific needs.

## How user-side works??

* So, on the Main page, users need to give 3 parameters.
    1. dataset name or breif description about dataset around 10-15 words.
    2. Number of entries as per their requirements. Currently, website only allows upto 1000 entries.
    3. Number of features they want to add in dataset.

![Home Page](/Images/image.png)

* Once you hit next, add parameters page will popout. There, you have to add features name.

![Parameters Page](/Images/image-1.png)

* That's it. Now it's our turn. As you press next button. In a very short time, you will get your dataset. You can download it in csv or json format.

![Final Page](/Images/image-2.png)

## How backend works??

* When a user requests a dataset, we conduct a thorough analysis of the dataset details and feature names. This analysis serves as the basis for generating a suitable prompt. Leveraging OpenAI's API, we generate a response specific to the provided prompt. Once we receive the response, we carefully cross-check the data against real-world data sources. If the data aligns and appears to be accurate, we proceed to send it to the user. The user can then conveniently download the dataset in either CSV or JSON format.

## Technologies Used

- HTML5 and CSS3 for the user interface
- JavaScript for client-side interactivity

## Libraries Used

- ReactJS to build efficient, scalable, and interactive user interfaces by leveraging component-based architecture and virtual DOM.
- Material-UI to create visually appealing design for great user experience.

## Frameworks Used

- Flask to build server-side components and APIs that powers the application.
- Bootstrap to create responsive grid system, simplifying the process of creating stylish and mobile-friendly web applications.

## Api used

- OpenAI's API to generate datasets, ensuring high-quality and relavent data for users.
- RestAPI to handle user requests, providing a seamless interface for users to interect with the plateform. Users can conveniently submit their dataset generation requests through the RestAPI and retrieve the generated datasets in a format of their choice.

## File Structure

src <br>
├── App.css <br>
├── App.js <br>
├── Components <br>
│   ├── body1.css <br>
│   ├── Body1.js <br>
│   ├── body2.css <br>
│   ├── Body2.js <br>
│   ├── body3.css <br>
│   ├── Body3.js <br>
│   ├── footer.js <br>
│   ├── header.css <br>
│   ├── Header.js <br>
│   ├── reducer.js <br> 
│   └── StateProvider.js <br>
├── index.css <br>
└── index.js <br>

## Concepts Used

- <b>Prompt Engineering</b> : to elicit desired responses from AI Models based on users data demands. Crafting input instruction based on demands to give very specific and unique datasets to the users.
- <b>React Router</b> : to easily navigate through all pages like searchPage, playBack, and homePage and to provide a seamless and great user experience with smooth transition without page loading. 
- <b>Context</b> : to manage and share state across components without the need for prop drilling and to provide a consistent, personalized, and customized experience to the user. Also from the developer's point of view, data sharing and state changes are easily configured using context API.
- <b>React Props</b> : it plays a crucial role in both user interaction and developer workflow. it enables customization, interactivity, and communication within the application while promoting reusable and modular code structures. Props facilitate a smooth and efficient development process, allowing developers to create user-friendly and maintainable React applications.

## Features

- Dataset Name : Choose your own topic
- Features for dataset : Choose any number of features according to your need
- Entries : Choose upto 1000 entries as your requirements.

## Getting Started

To get started with the Datacartel project, follow the instructions below:

1. Clone the repository: `git clone [repository URL]`
2. Install the dependencies: `npm install`
3. Install requirements: `pip install -r requirements.txt`
4. Run the application: `npm start`
5. Access the web app through your browser at `http://localhost:3000`
