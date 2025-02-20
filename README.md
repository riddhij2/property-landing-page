🔹 Project Setup Guide
1️⃣ Install Node.js (if not installed)
Download & install Node.js from nodejs.org (Recommended: LTS version).
Verify installation by running:
node -v
npm -v

2️⃣ Set Up Your React Project
# Create a new React project with Vite
npx create-vite@latest property-constructor-landing --template react-ts

# Navigate into the project folder
cd property-constructor-landing

# Install dependencies
npm install

3️⃣ Install Required Packages
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p

4️⃣ Configure Tailwind CSS
Open tailwind.config.js, replace content with:
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

Open src/index.css, add:
@tailwind base;
@tailwind components;
@tailwind utilities;

5️⃣ Add Your Components
Replace src/App.tsx with the final App.tsx I provided.
Create the components folder and add all the component files.


6️⃣ Start the Development Server
npm run dev
Open http://localhost:5173/ in your browser.



# Here we get error in installing npx tailwindcss init -p
To resolve this: 
1) we install npm install tailwindcss@3.4.17
2) then we run the code npx tailwindcss init -p which will Create Tailwind CSS config file: tailwind.config.js &
Created PostCSS config file: postcss.config.js.
and also check the version of node and npm which should be above 16 & 8 respectively.
