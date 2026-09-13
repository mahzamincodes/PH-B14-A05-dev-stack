# Dev Stack

## About This Project

Dev Stack is a simple website where users can see different technologies and add their favorite technologies to their stack.

## Technologies I Used

* React
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify
* Vite

## 3 Features

1. Users can see different technologies and their details.
2. Users can add technologies to their own stack.
3. Users can remove technologies from their stack and see a success toast when they add a technology.



# -------------------------------------------------❌----------------------------------------------------



### React Questions & Answers 

# 1. What is JSX, and why is it used in React?
Ans : JSX is a way to write HTML-like code inside JavaScript. It makes React code easy to write and understand.


# 2. What is the difference between props and state?
Ans : Props are used to send data from one component to another. State is used to store data that can change.


# 3. What does the `useState` hook do, and where did you use it in this project?
Ans : `useState` is used to store and change data. I used it to store the technologies that I added to my stack.


# 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Ans : `useEffect` is used to do some work after a component loads. It can be used to load data from an API or JSON file.


# 5. Why does every item in a `.map()` list need a unique `key` prop?
Ans : The `key` helps React know which item is which. It helps React update the list correctly.


# 6. What is conditional rendering?
Ans : Conditional rendering means showing something based on a condition.
For example, I used it to show `Your stack is empty` when no technology is selected.


# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans : A parent sends data to a child using props. A child can send data back by calling a function that the parent gives through props.
