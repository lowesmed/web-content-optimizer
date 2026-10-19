# Web Content Optimizer

Optimize images and text for many different web use cases. Web Content Optimizer transforms large, high-resolution images to smaller versions for faster loading and makes sure your text fit the intended use optimally.

## Overview

Web Content Optimizer makes it easy for you to turn images and text into web-ready versions using recommendations for file size and character count.

### User Requirements

#### Images
- R1.1 Select an image from url
- R1.2 Choose max file size of compressed image

#### Text
- R2.1 Create not to long meta titles
- R2.1 Create not to long meta descriptions

## Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project structure](#project-structure)
- [License & Author](#license--author)

## Features

### Images
- **Files & URLs:** Load images stored locally or online.
- **Size limit:** Set a maximum file size in KB.
- **Resizing:** Set the output width in pixels.
- **Sensible defaults:** Width 1200 px and max size 400 KB unless you say otherwise.

### Text
- **Meta title:** Make sure your meta title is the correct length
- **Meta description:** Make sure your meta description is the correct length

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
wco-seo-dashboard
├─ app                                # Pages & layouts
├─ components                         # Reusable components
├─ lib
│  └─ issues
│     └─ fetch-issues.ts              # Fetches from Ahrefs or sample data
│     └─ sync-issues.ts               # Maps and writes issues to MongoDB
│     └─ index.ts                     # fetchAndSync — ties fetch and sync together
│  ├─ mongodb.ts                      # Database config
│  ├─ sample
│  │  └─ ahref-issues.json            # Ahref JSON sample data
│  ├─ scheduler.ts                    # node-cron weekly job
│  ├─ seo-score.ts                    # Calculates task weight
│  └─ utils.ts                        # Helper functions
├── public                            # Public resources
├── package.json                      # Scripts and dependencies
├── tsconfig.json             # TypeScript config (strict mode)
├── TEST_REPORT.md                    # Test report
└── LICENSE                           # Unlicense (public domain)
```

## License & Author

This project was created by Lowe Smed during the course Introduction to software quality (1DV610) as part of the program Web Development Programme at Linneuniversitetet 2026 and is released into the public domain under the [**Unlicense**](https://unlicense.org). You are free to copy, modify, publish, and distribute this boilerplate code in any way you see fit without any restrictions.