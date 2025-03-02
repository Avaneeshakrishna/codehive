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
1. Install Next.js
   ```python
   npx create-next-app@14.2.23 .
   npm run dev  # Start the development server
   ```
2. Install UI Components (Shadcn)
   ```python
   npx shadcn@latest init
   npx shadcn@latest add button card dropdown-menu dialog input switch resizable avatar calendar scroll-area select
   ```
3. Setup Authentication (Clerk)
   ```python
   npm install @clerk/nextjs
   ```
   Go to Clerk Dashboard. Get the API keys and add them to .env
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
4. Setup Database with Convex
   ```
   npm install convex
   npx convex dev  # Always open in a separate terminal
   ```
5. Setup Video Calling with GetStream
   ```
   npm install @stream-io/video-react-sdk
   npm install @stream-io/node-sdk  # Backend SDK for creating tokens
   ```
   Go to GetStream.io, Create an App and Save the Key & Secret to .env:
   ```
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET=your_stream_secret
   ```
6. Setup JWT for Authentication
   Goto this [link](https://docs.convex.dev/auth/clerk) and follow step 3 and step 4

7. Create Convex Clerk Provider: Create ConvexClerkProvider.tsx This provider will sync Clerk users with Convex.
8. Webhooks for Syncing Users:
   - Go to Clerk Dashboard → Create a Webhook Endpoint.
   - Update .env with Webhook Secret
     ```
     CLERK_WEBHOOK_SECRET=your_webhook_secret
      ```
   - Convex will listen for new users and save them automatically
   
9. Install Webhook Service (svix)
    ```
    npm install svix
    ```
    




### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
