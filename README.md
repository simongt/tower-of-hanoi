# Towers of Hanoi 🗼

| In this project, I use <a href="https://reactjs.org/">React</a>, <a href="https://redux.js.org/">Redux</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> to implement a clone of the classic puzzle game, <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi/">Towers of Hanoi</a>. |
|:-|

## Game Objective

Towers of Hanoi consists of three towers and at least three disks of different sizes, which can slide onto any tower. The puzzle starts with the disks in a neat stack in ascending order of size on one tower, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the stack to another tower following these simple rules:
* Only one disk can be moved at a time.
* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty tower.
* No larger disk may be placed on top of a smaller disk.

<p align="center">
  <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi/">
    <img src="./public/img/towers-of-hanoi-solved.gif" alt="Towers of Hanoi" />
  </a>
</p>

---

# Implementation

## Analysis

Before attempting to code the solution, my first step is break the problem down into smaller, easier-to-manage parts. Then, I prioritize the project's features and designate some for post-MVP completion.

Here is my implementation overview (along with an ongoing post-MVP backlog):

1. Implement a responsive, grid system and add minimal styling.
   * Build a 24-column grid with a floor base and three standing towers.
     <details>
     <summary>Grid Mockup (Diagram)</summary>
     <img src="./public/img/towers-of-hanoi-grid-mockup-1.jpg" alt="Grid Mockup">
     </details> 
   * Integrate with [SASS](https://sass-lang.com/) to handle CSS styling. ***Post-MVP***
   * Integrate with [Styled Components](https://www.styled-components.com/) to handle React component styling. ***Post-MVP***

2. Implement component(s) for disks and their mechanics, e.g. drag-and-drop feature.
   * Upon release, lock to nearest standing tower and drop to the bottom.
     * Use [SyntheticEvent](https://reactjs.org/docs/events.html) wrappers to handle drag-and-drop.
   * Generate at least three disks stacked on the first tower.
     * Implement difficulty levels according to the number of disks, where the user can select a starting number of disks (the minimum / default is 3).

3. Implement gameplay logic.
   * Only the upper (top-most) disk from any tower can be moved.
   * Allow only valid moves:
     * a disk may be dropped over a larger disk within another tower,
     * or a disk may be dropped into an empty tower (containing no disks).
   * Game is won when disks are stacked conically on either the second or third tower (the first tower is empty).
     * Implement an option to continue to next difficulty level (add one more disk). ***Post-MVP***
   * Implement a restart button to move all the disks back to the first tower and reset number of moves played for the round so far. ***Post-MVP***

4. Implement an AI logic component. ***Post-MVP***
   * Compare algorithms for any number of disks.
      * Design iterative solution.
      * Design recursive solution.
   * Implement feature where user can click a button at any point of the game and step through the solution. ***Post-MVP***
   * Implement feature where user can click a button at any point of the game and animate the remaining portion of the solution. ***Post-MVP***

5. Integrate with [React-Redux](https://react-redux.js.org/) to manage state.

6. Test thoroughly for cross-browser compatibility, responsiveness and performance.
   * Since I'm taking a desktop-first, responsive design approach, the next step in this regard would be to adapt everything for mobile-readiness. ***Post-MVP***

---

## Dependencies

| API | Description |
|:-|:-|
| [gh-pages](https://pages.github.com/) | Deployment tool that publishes GitHub repo as a static website directly to GitHub Pages. |
| [styled-components](https://www.styled-components.com/) | Styling tool that utilizes tagged template literals and the power of CSS for writing actual CSS code to style components. |
| [node-sass](https://sass-lang.com/) | An extension of CSS that adds power and elegance to it. It allows you to use variables, nested rules, mixins and inline imports. |
| [react-redux](https://react-redux.js.org/) | Official React bindings for Redux. Performant and flexible. |
| [react-modal](https://reactcommunity.org/react-modal/) | Accessible modal dialog component for React. |
| [react-dnd](https://react-dnd.github.io/react-dnd/) | Set of higher-order components for React that help build complex drag-and-drop interfaces. |
| [react-dnd-html5-backend](http://react-dnd.github.io/react-dnd/docs/backends/html5) | Official HTML5 backend for React DnD. Currently depracated (integrated into [react-dnd](https://react-dnd.github.io/react-dnd/)). |

<details>
<summary>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.
</summary><br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for ptoweruction to the `build` folder.<br>
It correctly bundles React in ptoweruction mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

</details>
