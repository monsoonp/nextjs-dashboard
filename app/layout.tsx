import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* {children}
        <span className="text-blue-500">test</span> */}
        <body className={`${inter.className} antialiased`}>{children}</body>

      </body>
    </html>
  );
}
