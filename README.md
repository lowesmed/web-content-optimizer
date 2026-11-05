# Web Content Optimizer

Optimize images and text for many different web use cases. Web Content Optimizer transforms large, high-resolution images to smaller versions for faster loading and makes sure your text fit the intended use optimally.

## Overview

Web Content Optimizer makes it easy for you to turn images and text into web-ready versions using recommendations for file size and character count.

### User Requirements

#### Images

- R1.1 Select a JPEG image from a valid url
- R1.2 Choose a max file size of the compressed image
- R1.3 Choose name of the output image
- R1.4 Get a message if the image couldn't be compressed
- R1.5 Generate 3 variants of the image with different widths
- R1.6 Download the compressed images

#### Text

- R2.1 Create a meta title (30-80 characters)
  - Get feedback when too short/ok/too long
- R2.2 Create a meta description (60-120 characters)
  - Get feedback when too short/ok/too long
- R2.3 Create an H1 heading (12-40 characters)
  - Get feedback when too short/ok/too long
  - Get feedback on whether the page title occurs in heading once, never or more than once
  - (Known limit: only single-word page titles are matched)

## Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project structure](#project-structure)
- [License & Author](#license--author)

## Features

### Images

- **Image URL** Load a JPEG from an URL.
- **Size limit:** Choose a maximum file size between 60-800 KB (default 400KB).
- **Download:** Download the compress images.

### Text

- **Meta title, meta description and H1 heading:** Live feedback on length.
- **Page title check:** Checks that the page title occurs in the H1 heading.

## Getting Started

### Prerequisites

**Node.js** version 24.12.0 or later (see `engines` in `package.json`).

### Installation

```bash
npm install
```

### Run the app

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to test out the app.

## Project Structure

```text
web-content-optimizer
├─ app                                # Pages, layouts & API routes
├─ components                         # UI components
├─ controllers                        # Handles HTTP requests into service calls
├─ domain                             # Domain types, rules & errors
├─ services                           # App logic using the modules
├─ tests                              # Vitest tests
├─ public                             # Public resources (images etc)
├─ services                           # App logic using the modules
├─ package.json                       # Scripts & dependencies
├─ tsconfig.json                      # TypeScript config (strict mode)
├─ vitest.config.mts                  # Vitest config
├─ TEST_REPORT.md                     # Test report
└── LICENSE                           # Unlicense (public domain)
```

## License & Author

This project was created by Lowe Smed during the course Introduction to software quality (1DV610) as part of the program Web Development Programme at Linneuniversitetet 2026 and is released into the public domain under the [**Unlicense**](https://unlicense.org). You are free to copy, modify, publish, and distribute this boilerplate code in any way you see fit without any restrictions.
