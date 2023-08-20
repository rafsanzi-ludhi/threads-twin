import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css';



export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}


// rendering fonts in next.js
const inter = Inter({ subsets: ["latin"] });

// type of the object is going to be an object where the children is equal to react dot node
export default function RootLayout({
  children //prop
}: {
  children: React.ReactNode //type of prop
}) {
  return ( //wrapping the layout with a clerk provider to use clerk functionality
    <ClerkProvider>
          <html lang='en'>
              {/* apply the font across all files immeddiately across files */}
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body> 
      </html>
    </ClerkProvider>
  );
}