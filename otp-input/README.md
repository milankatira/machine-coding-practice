# OTP Input Component

## Goal

To create a specialized input field for entering One-Time Passwords (OTPs). This often involves multiple individual input boxes, with automatic focus shifting between them.

## How to Run

1.  Navigate to the `otp-input` directory:
    ```bash
    cd otp-input
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

*   **Auto-Focus:** Automatically moving focus to the next input box as digits are entered.
*   **Backspace/Delete:** Handling backspace to clear the previous input and move focus backward.
*   **Pasting OTP:** Allowing users to paste the entire OTP into the first input box.
*   **Input Validation:** Ensuring only digits are entered and handling non-numeric input.
*   **Length of OTP:** Supporting different OTP lengths.
*   **Accessibility:** Ensuring keyboard navigation and screen reader compatibility.
*   **Form Submission:** How the complete OTP is collected and submitted.