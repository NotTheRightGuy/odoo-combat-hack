# Library Management System

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Overview

The Library Management System is a web application designed to manage the operations of a library. It allows administrators to manage the book catalog and users to borrow books. The system includes separate dashboards for administrators, librarians, and users to facilitate their specific tasks.

## Features

- **User Authentication:** Users can log in as either an admin, librarian, or a regular user.
- **Admin Dashboard:**
  - Add books to the catalog using ISBN numbers.
  - Manage the book inventory.
  - View borrowed books.
- **Librarian Dashboard:**
  - Assist in managing the book inventory.
  - Oversee book borrowing and returns.
- **User Dashboard:**
  - Browse available books.
  - Borrow books.
  - View borrowed books and due dates.

## Installation

### Prerequisites

- Node.js (v14.x or later)

### Steps

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/NotTheRightGuy/odoo-combat-hack
   cd odoo-combat-hack
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and configure the following variables:

   ```env
   AUTH_SECRET=""
   NEXT_PUBLIC_SUPABASE_KEY=""
   NEXT_PUBLIC_SUPABASE_URL=""
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""
   ```

4. **Start the Application:**

   ```sh
   npm run dev
   ```

5. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Login as Admin:**

   - Navigate to `/auth/sign-in`.
   - Enter your admin credentials.
   - username: admin@gmail.com
   - password: admin123
   - Navigate to `/admin/dashboard`.

2. **Login as User:**

   - Navigate to `/auth/sign-in`.
   - Enter your user credentials.
   - username: user@gmail.com
   - password: user123
   - Navigate to `/user/dashboard`.

3. **Login as Librarian:**
   - Navigate to `/auth/sign-in`.
   - Enter your librarian credentials.
   - username: librarian@gmail.com
   - password: librarian123
   - Navigate to `/librarian/dashboard`.
