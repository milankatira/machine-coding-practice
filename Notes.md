# 🧩 Frontend Machine Coding Cheat Sheet

> A crisp cheat sheet to prep for **frontend machine coding interviews**. Covers classic patterns, starter code, and accessible design.

---

## 📜 Table of Contents
1. [🔍 Search Logic](#-search-logic)
2. [🗂️ Listing Logic](#-listing-logic)
3. [🌐 API Calls](#-api-calls)
4. [🖱️ DOM - Event Handling & Delegation](#-dom---event-handling--delegation)
5. [⏱️ Debouncing & Throttling](#-debouncing--throttling)
6. [📱 Media Queries](#-media-queries)
7. [🪟 Modal / Menu Implementation](#-modal--menu-implementation)
8. [🔁 API Data Polling](#-api-data-polling)
9. [🎲 Random Number Generation](#-random-number-generation)
10. [📅 Date Handling](#-date-handling)

---

## 🔍 Search Logic

### ⚡ Typical interview asks
- Autocomplete / type-ahead
- Search/filter lists

### ✅ Filtering an array of objects

```js
// Includes
const resultIncludes = data.filter(item =>
  item.name.includes(searchTerm) || item.role.includes(searchTerm)
);

// Regex (case-insensitive)
const regex = new RegExp(searchTerm, "i");
const resultRegex = data.filter(item =>
  regex.test(item.name) || regex.test(item.role)
);
````

### ✅ Accessibility markup

```html
<label for="search">Search:</label>
<input
  type="text"
  id="search"
  role="combobox"
  aria-autocomplete="list"
  aria-expanded="false"
  aria-controls="suggestions"
  autocomplete="off"
/>
<ul id="suggestions" role="listbox" hidden></ul>
```

---

## 🗂️ Listing Logic

### ⚡ Typical interview asks

* Autocomplete results
* Infinite Scroll
* Pagination
* Responsive product grid

### ✅ Responsive Flex/Grid layout

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.flex-card {
  width: 200px;
  /* More styling here */
}
```

### ✅ Rendering product cards

```js
products.forEach(product => {
  const card = document.createElement("div");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
    </div>
  `;
  catalog.appendChild(card);
});
```

### ✅ Infinite Scroll with Intersection Observer

```js
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadItems(batchSize);
  }
});
observer.observe(loader);
```

---

## 🌐 API Calls

### ✅ GET Request

```js
async function fetchPosts() {
  const response = await fetch("https://api.example.com/posts");
  const posts = await response.json();
  // Render posts
}
```

### ✅ POST Request

```js
async function submitPost() {
  await fetch("https://api.example.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body })
  });
}
```

### ✅ AbortController (cancel requests)

```js
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort();
```

### ✅ Parallel Requests

```js
// Promise.all
const [posts, users] = await Promise.all([
  fetch(url1).then(res => res.json()),
  fetch(url2).then(res => res.json())
]);

// Promise.allSettled
const results = await Promise.allSettled([
  fetch(url1).then(res => res.json()),
  fetch(url2).then(res => res.json())
]);
```

---

## 🖱️ DOM - Event Handling & Delegation

### ✅ Event Listeners

```js
button.addEventListener("click", handler);
button.addEventListener("dblclick", handler);
window.addEventListener("scroll", handler);
document.addEventListener("keydown", handler);
```

### ✅ Event Delegation

```js
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    handleItemClick(e.target);
  }
});
```

---

## ⏱️ Debouncing & Throttling

### ✅ Debounce

```js
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

### ✅ Throttle

```js
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

---

## 📱 Media Queries

```css
/* Desktop */
@media (min-width: 701px) {
  /* Styles here */
}

/* Tablet */
@media (max-width: 700px) and (min-width: 501px) {
  /* Styles here */
}

/* Mobile */
@media (max-width: 500px) {
  /* Styles here */
}
```

---

## 🪟 Modal / Menu Implementation

### ✅ Basic CSS

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}
```

---

## 🔁 API Data Polling

```js
function startPolling(url, interval) {
  const poll = async () => {
    const response = await fetch(url);
    // Handle response
  };
  poll();
  return setInterval(poll, interval);
}

// Start polling
const pollId = startPolling(url, 5000);

// Stop polling
clearInterval(pollId);
```

---

## 🎲 Random Number Generation

### ✅ Integer

```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### ✅ Float

```js
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
```

---

## 📅 Date Handling

### ✅ Difference Between Dates

```js
const diffMs = Math.abs(date2 - date1);
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
```

### ✅ Format Dates

```js
const now = new Date();
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
```

---

**Good luck and happy coding 🚀**

```

---

### 🧭 Notes
✅ Single **README.md** file.
✅ Proper Markdown with headings, code blocks, and emoji for modern vibe.
✅ You can copy it as-is and drop it straight into your repo.

If you want further refinements (e.g. more minimal / more emojis / sections removed), just tell me!
```
