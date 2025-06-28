# File Explorer Component

## Goal

To build a user interface that mimics a file system, allowing users to navigate through directories, expand/collapse folders, and view files.

## How to Run

1.  Navigate to the `file-explorer` directory:
    ```bash
    cd file-explorer
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

*   **Hierarchical Data Structure:** How to represent and manage the nested structure of files and folders.
*   **Dynamic Loading:** For very large file systems, how to load content on demand (e.g., when a folder is expanded).
*   **Actions (Rename, Delete, Add):** Implementing functionality to modify the file system (even if just in memory).
*   **Search/Filter:** Adding search capabilities to find files or folders.
*   **Permissions:** How to handle cases where a user doesn't have access to certain files or folders.
*   **Visual Feedback:** Providing clear visual cues for expanded/collapsed folders and selected items.