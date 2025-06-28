# Auto-Complete Component

## Goal

To build an input field that provides real-time suggestions as the user types. This typically involves fetching data (e.g., from a mock API or local data set) and filtering it based on the input.

## How to Run

1.  Navigate to the `auto-complete` directory:
    ```bash
    cd auto-complete
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

*   **Debouncing Input:** How to prevent excessive API calls as the user types rapidly.
*   **No Suggestions:** What happens when there are no matching suggestions?
*   **Keyboard Navigation:** Allow users to navigate suggestions using arrow keys and select with Enter.
*   **Asynchronous Data:** Handling loading states and errors when fetching suggestions.
*   **Highlighting Matches:** Visually indicating the part of the suggestion that matches the user's input.
*   **Clearing Input:** Behavior when the input is cleared or loses focus.