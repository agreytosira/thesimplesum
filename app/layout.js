import { Roboto } from 'next/font/google';
import './globals.css';
import './_typography.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto-sans',
  display: 'swap',
  subsets: ['latin']
});

export const metadata = {
  title: 'THE SIMPLE SUM',
  description: "Up your personal finance game with our weekly newsletter. We'll send you financial updates, personal finance tips, and advice straight to your inbox"
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${roboto.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
