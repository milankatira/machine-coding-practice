# Pagination Component

## Goal

To implement controls that allow users to navigate through large sets of data by displaying a limited number of items per page. This includes displaying page numbers, next/previous buttons, and potentially first/last page buttons.

## How to Run

1.  Navigate to the `pagination` directory:
    ```bash
    cd pagination
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

*   **Total Items/Pages:** Correctly calculating the total number of pages based on the total items and items per page.
*   **Current Page State:** Managing the active page and updating the displayed content accordingly.
*   **Navigation Limits:** Disabling next/previous buttons when on the first/last page.
*   **Empty Data:** What happens if there are no items to paginate?
*   **Performance:** Efficiently fetching and rendering data for the current page, especially with large datasets.
*   **URL Parameters:** Optionally reflecting the current page in the URL for shareability and bookmarking.
