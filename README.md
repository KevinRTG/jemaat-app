✝️ Jemaat App

A web-based application built with Next.js and Prisma, designed to support church communities in managing member data, activities, and spiritual resources. This project reflects a blend of technical skill and community values.

🚀 Features

- Member management system
- Responsive UI with Tailwind CSS
- API integration for dynamic content
- Role-based access control (middleware)
- Optimized for SEO and deployment on Vercel

🛠️ Tech Stack

| Frontend     | Backend      | Styling       | Deployment |
|--------------|--------------|---------------|------------|
| Next.js      | Prisma ORM   | Tailwind CSS  | Vercel     |
| TypeScript   | PostgreSQL   | PostCSS       |            |

📦 Installation

`bash

Clone the repository
git clone https://github.com/KevinRTG/jemaat-app.git
cd jemaat-app

Install dependencies
npm install

Run development server
npm run dev
`

Open http://localhost:3000 to view the app.

🧩 Project Structure

`
jemaat-app/
├── prisma/         # Prisma schema and migrations
├── public/         # Static assets
├── scripts/        # Utility scripts
├── src/            # Main application code
│   ├── pages/      # Page components
│   ├── components/ # Reusable UI components
│   ├── lib/        # Helper functions
│   └── middleware/ # Access control logic
├── types/          # TypeScript definitions
├── vercel.json     # Vercel deployment config
└── README.md
`

🔐 Security

- Middleware implementation for route protection
- Admin page access control
- Environment variable handling for sensitive data

📚 Resources

- Next.js Documentation
- Prisma Documentation
- Tailwind CSS

✍️ Author

Developed by KevinRTG — passionate about building meaningful applications that serve real communities.