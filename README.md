# 📂 jsd12_week_06 - Asynchronous JavaScript & API Fetching

This week's focus is on mastering **Asynchronous Programming** in JavaScript, specifically handling data from external sources using Promises and the Fetch API.

---

## 📑 Topics Covered

### 1. The Power of Promises 🤝
- Understanding the lifecycle of a Promise: **Pending**, **Fulfilled**, and **Rejected**.
- Avoiding "Callback Hell" by using `.then()` and `.catch()` for cleaner code flows.

### 2. Fetch API & Data Integration 🌐
- Implementing `fetch()` to retrieve data from RESTful APIs.
- **Data Formats**: Converting raw HTTP responses into usable JSON objects.
- **Dynamic Content**: Practicing with real-world data, including stock exchanges, cryptocurrency prices, and anime databases.

### 3. Error Handling 🛡️
- Using `.catch()` and checking `response.ok` to manage network errors and 404/500 status codes gracefully.

---

## 📁 Repository Structure

### 📡 `/MyFetch`
- `fetch_01.js` to `fetch_04.js`: Incremental exercises on basic API calling.
- `fetch_05.js`: Implementation of stock exchange and BTC price tracking logic.
- `fetch_06.js`: **Anime Search Feature** – Utilizing an API to fetch and display anime-related information. 🌸
- `what-i-dont-understand.md`: Self-reflection and technical debt tracking.

### 📜 Other Sections
- `/js-promises`: Deep dive into Promise syntax and state management.
- `/oop` & `/refactored_oop_zoo`: Applying Object-Oriented principles to clean up and organize code structures.

---

## 💻 Code Highlight: Fetching Anime Data

```javascript
// A glimpse into the anime search logic practiced this week
const searchAnime = (title) => {
  fetch(`https://api.jikan.moe/v4/anime?q=${title}`)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log("Anime Found:", data.data[0].title);
    })
    .catch((error) => console.error("Error fetching anime:", error));
};
