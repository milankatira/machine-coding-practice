# Memory Game

## Goal

To develop a classic memory matching game where players flip cards to find pairs. The game typically involves a grid of cards, each with a hidden image, and players try to match identical images.

## How to Run

1.  Navigate to the `memory-game` directory:
    ```bash
    cd memory-game
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

*   **Card States:** Managing the state of each card (face down, face up, matched).
*   **Matching Logic:** Correctly identifying when two flipped cards form a match.
*   **Game Over:** Determining when all pairs have been found and the game is complete.
*   **Turn Management:** Limiting the number of cards a player can flip at once (usually two).
*   **Shuffling:** Ensuring cards are randomly distributed at the start of each game.
*   **Resetting Game:** Providing a way to restart the game.
*   **Visual Feedback:** Clearly indicating matched pairs and incorrect guesses.