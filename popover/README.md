# Popover Component

## Goal

To build a small, contextual overlay that appears when a user interacts with an element (e.g., hovers over, clicks). It typically displays additional information or actions related to the trigger element.

## How to Run

1.  Navigate to the `popover` directory:
    ```bash
    cd popover
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

*   **Positioning:** Ensuring the popover appears correctly relative to the trigger element, considering screen boundaries and scroll.
*   **Visibility Control:** How and when the popover appears and disappears (e.g., on hover, on click, on focus loss).
*   **Accessibility:** Proper ARIA attributes, keyboard navigation (e.g., Tab key), and focus management.
*   **Content Overflow:** What happens if the popover content is too large?
*   **Interaction within Popover:** Allowing interaction with elements inside the popover without closing it prematurely.
*   **Multiple Popovers:** How to handle multiple popovers on the same page.