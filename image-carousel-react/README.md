# Image Carousel (React)

## Goal

To create an image slider or carousel component, typically with navigation controls (next/previous buttons, dots) and optional automatic playback.

## How to Run

1.  Navigate to the `image-carousel-react` directory:
    ```bash
    cd image-carousel-react
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

*   **Image Loading States:** Handling cases where images are still loading.
*   **Responsiveness:** Ensuring the carousel adapts well to different screen sizes.
*   **Infinite Loop:** Seamlessly transitioning from the last image back to the first (and vice-versa).
*   **Accessibility:** Keyboard navigation, ARIA attributes for screen readers.
*   **Performance:** Optimizing image loading and transitions for smooth performance.
*   **User Interaction during Autoplay:** What happens if a user manually navigates during autoplay?