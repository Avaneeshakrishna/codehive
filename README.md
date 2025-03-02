# CodeHive - Video Interviewing Platform

A Next.js-based video interviewing application with authentication, database integration, and real-time communication.

## Description

CodeHive is a Next.js-based video interviewing platform designed to streamline remote hiring and technical interviews. It integrates real-time video calling, screen sharing, authentication, and interactive features to enhance the hiring experience.
### 🚀 Features
✔️ Video Calls with Stream.io<br>
✔️ Screen Sharing & Recording<br>
✔️ Authentication & Authorization via Clerk<br>
✔️ Database & Real-time Sync using Convex<br>
✔️ Server & Client Components<br>
✔️ Dynamic & Static Routes<br>
✔️ Modern UI with Tailwind CSS & Shadcn<br>
✔️ Webhooks for Automation<br>

### 🛠️ Tech Stack
* Frontend: Next.js (App Router) + TypeScript
* UI Components: TailwindCSS + Shadcn
* Auth & User Management: Clerk
* Database: Convex (real-time database)
* Video Calls & Screen Sharing: Stream.io Video SDK
* Storage & API Integration: Convex HTTP API
* Deployment: Vercel / Any Cloud Provider

## Getting Started
1. Clone the Repository
   ```
   git clone https://github.com/Avaneeshakrishna/codehive.git
   cd codehive
   ```
2. Install Dependencies
   ```
   npm install
   ```
3. Configure Environment Variables
   - Create a .env.local file in the root directory and add the required API keys.
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Convex Database
   CONVEX_DEPLOY_KEY=your_convex_deploy_key
   
   # Stream Video API
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET=your_stream_secret
   
   # Clerk Webhooks
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
   ```
   -  Go to Clerk Dashboard to get the API keys
   -  Go to GetStream.io, Create an App and Save the Key & Secret to .env:
4. Run the Development Server
   ```
   npm run dev
   ```
   The app will be available at: http://localhost:3000
5. Start Convex Database
   ```
   npx convex dev
   ```
   - Keep this running in a separate terminal.
6. Test the Setup
   - Visit http://localhost:3000
   - Register/Login using Clerk authentication.
   - Check Convex Database (npx convex dev should be running).
   - Start a Video Call and test features like screen sharing and recording.



### Dependencies
CodeHive is built using modern web technologies and libraries to provide real-time video interviews with authentication, database management, and screen recording. Below is a breakdown of all the dependencies used in this project.
## Core Dependencies
| Package   | Version  |  Description |
| --------- | -------- |  ----------- |
| next      | ^14.2.23 |  React framework for SSR & SSG |
| react     | ^18.3.1  | Core library for building UI |

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```


## 🎯 Conclusion
This project is a full-featured video interviewing platform built using Next.js, Clerk, Convex, and GetStream to provide real-time video calls, authentication, and database management.

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
