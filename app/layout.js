import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/projects">Add Project</Link>
          <Link href="/pipeline">Pipeline</Link>
          <Link href="/login">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
