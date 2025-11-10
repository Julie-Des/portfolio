# My Portfolio Website 🚀

This project is a personal portfolio website built with Next.js, designed to showcase my skills, projects, and experience. It features a clean, responsive design with internationalization (i18n) support, allowing users to view the content in either English or French. The website includes sections for an introduction (Header), about me, projects, skills, and contact information. A contact form is integrated to allow visitors to send messages directly.

## 🌟 Key Features

- **Internationalization (i18n):** Supports both English and French languages, with easy switching between them.
- **Responsive Design:**  The layout adapts seamlessly to different screen sizes, providing an optimal viewing experience on desktops, tablets, and mobile devices.
- **Project Showcase:**  Displays a curated list of projects with descriptions, technologies used, and links to live demos and GitHub repositories.
- **Skills Section:** Highlights technical skills with logos and descriptions.
- **Contact Form:**  Allows visitors to send messages directly through the website, with backend integration for email delivery.
- **Modern Tech Stack:** Built with Next.js, React, and Tailwind CSS for a fast, efficient, and visually appealing experience.
- **SEO Optimized:** Includes metadata for search engine optimization and social sharing.
- **Reusable Components:** Utilizes reusable React components for maintainability and scalability.

## 🛠️ Tech Stack

| Category    | Technology          | Description                                                                 |
|-------------|-----------------------|-----------------------------------------------------------------------------|
| **Frontend**  | Next.js             | React framework for building server-rendered and statically generated web apps |
|             | React               | JavaScript library for building user interfaces                               |
|             | Tailwind CSS        | Utility-first CSS framework for rapid UI development                         |
|             | Next/image          | Image optimization and delivery                                             |
| **Backend**   | Node.js             | JavaScript runtime environment                                              |
|             | Nodemailer          | Library for sending emails from Node.js                                     |
| **Data**      | JSON                | Used for storing project and skill data                                     |
| **i18n**      | React Context       | Manages application's internationalization                                  |
| **Build Tools** | npm/yarn/pnpm       | Package manager                                                             |
| **Fonts**     | Google Fonts        | Used for custom fonts (Poppins, Leckerli)                                   |

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm
- Basic knowledge of React and Next.js

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Julie-Des/portfolio-julie-deshayes
    ```

2.  Navigate to the project directory:

    ```bash
    cd portfolio
    ```

3.  Install dependencies using npm, yarn, or pnpm:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  Set up environment variables:

    - Create a `.env.local` file in the root directory.
    - Add the following environment variables, replacing the placeholders with your actual values:

    ```
    EMAIL_USER=<your-gmail-email>
    EMAIL_PASS=<your-gmail-app-password>
    EMAIL_TO=<recipient-email>
    ```

    **Note:** For `EMAIL_PASS`, it's recommended to use an "App Password" if you're using Gmail. You can generate one in your Google Account settings under Security.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:3000` to view the website.

## 📂 Project Structure

```
portfolio
├── .next/                  # Next.js build output
├── node_modules/           # Node.js dependencies
├── public/                 # Static assets (images, fonts, etc.)
│   ├── icons/              # Icons used in the project
│   ├── images/             # Project images
│   └── ...
├── src/                    # Source code
│   ├── app/                # Next.js app directory (pages, layouts, API routes)
│   │   ├── api/            # API routes
│   │   │   └── contact/    # Contact form API endpoint
│   │   ├── components/     # React components
│   │   │   ├── About.tsx   # About section component
│   │   │   ├── Contact.tsx # Contact section component
│   │   │   ├── Footer.tsx  # Footer component
│   │   │   ├── Header.tsx  # Header component
│   │   │   ├── Nav.tsx     # Navigation component
│   │   │   ├── ProjectCard.tsx # Project card component
│   │   │   ├── Projects.tsx  # Projects section component
│   │   │   ├── Skills.tsx    # Skills section component
│   │   │   └── ...
│   │   ├── layout.tsx      # Root layout for the application
│   │   ├── page.tsx        # Homepage component
│   │   └── globals.css     # Global CSS styles
│   ├── context/            # React Contexts
│   │   └── TranslationContext.tsx # Translation Context for i18n
│   ├── data/               # Data files
│   │   ├── projectsData.ts # Project data
│   │   └── skillsData.json # Skills data
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript types
├── next.config.js          # Next.js configuration file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration file
```

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

Deshayes Julie - julie.deshayes14@gmail.com

## 💖 Thanks

Thank you for checking out my portfolio website! I hope you find it informative and visually appealing. Your interest is greatly appreciated!

This README file is generated by [readme.ai](https://readme-generator-phi.vercel.app/).
