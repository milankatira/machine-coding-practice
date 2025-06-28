# Custom Modal Component

## Goal

To create a reusable and accessible modal (dialog) component that can display arbitrary content and be opened/closed programmatically.

## How to Run

1.  Navigate to the `custome-modal` directory:
    ```bash
    cd custome-modal
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

*   **Accessibility:** Ensure proper ARIA attributes, keyboard navigation (e.g., Esc key to close), and focus management (focus trapping within the modal).
*   **Overlay Behavior:** How does clicking outside the modal affect its state (should it close)?
*   **Scroll Behavior:** Prevent background content from scrolling when the modal is open.
*   **Multiple Modals:** How to handle opening multiple modals (e.g., stacking, only one active).
*   **Content Overflow:** What happens if the modal content is too large for the screen?
*   **Programmatic Control:** How to open and close the modal using JavaScript functions.