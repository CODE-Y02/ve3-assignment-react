# ve3 Jr. full stack developer assignment (Client)

> This readme contains project information and important links
> This is full stack appliction with backend

## urls :-

- [Live URL 1](https://ve3.onrender.com)
- [Live URL 2 vercel](https://ve3.vercel.app/)

- [backend repo here](https://github.com/CODE-Y02/ve3-assignment-backend)

## stack used

<h3>Frontend</h3>

<img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" style='margin:10px'  height="50px" />
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--60EL_RNJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gkgxaoegocynro97ipsz.png" style='margin:10px'  height="50px" />
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg" style='margin:10px'  height="30px" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="50px" style='margin:10px' />
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height="60px" style='margin:10px' />
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="60px" style='margin:10px' />

<br>

<h3>Backend </h3>

<img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" style='margin:10px;background:white;padding:0.5rem'  height="40px" />
<h1 style='margin:10px;background:white;color:black;padding:0.5rem;width:fit-content'>Express Js </h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" style='margin:10px;background:white;padding:0.5rem'  height="40px" />
<h1 style='margin:10px;background:white;color:red;padding:0.5rem;width:fit-content'>Mongoose </h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="50px" style='margin:10px' />

# Setup Instruction

    This is guide to setup client side to setup backend visit it's repo from above link;

## Client setup :-

- clone this repo

  ```bash
  #copy current repo link
  git clone <repolink>

  # open folder
  cd <repo name>
  ```

- Once cloned open folder and do

```bash
    #install packages
    npm install

```

- create .env in root of application (same folder as readme) and add follwing

        REACT_APP_BASE_URL=Your_Backend_URL

- start application with
  ```bash
  npm start
  ```

## Project Overview

_Main Focus was not on UI its on Functionality of applcation_

> All logic lies in '/src' folder

> All components lies in "/src/components"

> "/src/pages" --> contains components that acts as page

- This applisction is generic in nature.

- we have modules and each of them contain some data

- when user click on start , we fetch module list from backend and render it on screen.

- When user select module its data is fetched and rendered on ModulePage .

- ModulePage data of featched module is displayed with help of tabs .

- TabCard is component to provide tab functionality.

- there's go back button on every page helps to navigate user.

- Search Page is just for display (no functionality)

### Possible Improvements

- We can speed up application with caching, rather than doing fetch call every time.

- If data is not changing very frequently, ex-> Portfolio data or Landing page.
  In that case we can do fetch call on app load in background and save data in global store with context api or redux.

- On UI I have not used and additional framework or library, A lot of UI improvement is possible.

- Iam able to use MUI, typescript, bootstrap, Antd but as focus is on feature I have not used additional thing that we dont need.
