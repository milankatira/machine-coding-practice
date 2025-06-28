# Chips Input Component

## Goal

To create an input component that allows users to enter multiple items, which are then displayed as "chips" or tags. Users should be able to add new chips and remove existing ones.

## How to Run

1.  Navigate to the `chips-input` directory:
    ```bash
    cd chips-input
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

*   **Duplicate Entries:** Prevent users from adding the same chip multiple times.
*   **Empty Input:** Handle cases where the user tries to add an empty chip.
*   **Backspace to Remove:** Allow removing the last chip by pressing backspace when the input is empty.
*   **Max Chips:** Implement a limit on the number of chips that can be added.
*   **Styling for Long Chips:** How to display chips with very long text content.
*   **Accessibility:** Ensure keyboard navigation and screen reader compatibility.