# Dark/Light Mode Switcher

## Goal

To implement a theme switcher that allows users to toggle between dark and light visual modes for a web application. This often involves dynamically changing CSS variables or classes.

## How to Run

1.  Navigate to the `dark-light-mode` directory:
    ```bash
    cd dark-light-mode
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    # or yarn dev
    ```
4.  Open your browser to the address provided (e.g., `http://localhost:5173`).

## Edge Cases to Consider

*   **Persistence:** How to remember the user's preferred theme across sessions (e.g., using `localStorage`).
*   **System Preference:** Respecting the user's operating system's dark/light mode preference (`prefers-color-scheme`).
*   **Dynamic Content:** Ensuring dynamically loaded content also adheres to the selected theme.
*   **Image/Icon Adjustments:** How to handle images or icons that might need different versions for dark vs. light mode.
*   **Flash of Unstyled Content (FOUC):** Preventing a brief flash of the default theme before the preferred theme is applied.