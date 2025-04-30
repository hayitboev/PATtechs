# PATtechs - Professional Association of Technicians

A modern web application for managing technician associations, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure authentication with JWT
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time updates
- 📊 Dashboard for members
- 📝 Blog system
- 📅 Event management

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PATtechs.git
cd PATtechs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
JWT_SECRET=your_jwt_secret_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── contexts/        # React contexts
├── lib/            # Utility functions
├── types/          # TypeScript types
└── styles/         # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.