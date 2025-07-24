// 'use client';

// import './globals.css';
// import { FaReact } from 'react-icons/fa';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Image from 'next/image'

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'About the Coalition', href: '/about' },
//   { label: 'Members', href: '/Members' },
//   { label: 'Impact Stories', href: '/Impact Stories' },
//   { label: 'Blog', href: '/Blog' },
//   { label: 'Zustand', href: '/components' },
//   { label: 'Login', href: '/login' },
//   { label: 'Tanstack', href: '/tanstack' },
//   { label: 'CreatePost', href: '/create' },
//   { label: 'SearchPost', href: '/search' },
// ];

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [queryClient] = useState(() => new QueryClient());

//   const glassHoverClass =
//     'pl-10 py-2 rounded-xl hover:bg-white/50 hover:backdrop-blur-md transition';

//   return (
//     <html lang="en">
//       <body className="bg-gray-100 min-h-screen flex flex-col">
//         <QueryClientProvider client={queryClient}>
//           {/* Top Header */}
//           <Header />

//           {/* Sidebar + Main */}
//           <div className="flex flex-1 ">
//             {/* <Sidebar navItems={navItems} glassHoverClass={glassHoverClass} /> */}
//             <main className="flex-1  bg-white">{children}</main>
//           </div>
//           <ReactQueryDevtools initialIsOpen={false} />
//           {/* React Query Devtools */}
//           {/* {process.env.NODE_ENV === 'development' && (
//             <ReactQueryDevtools initialIsOpen={false} />
//           )} */}
//         </QueryClientProvider>

        
//       </body>
//     </html>
//   );
// }

// // ✅ Top Header component
// function Header() {
//   return (
//     <header className="bg-white  p-4 ">
//       <div className="max-w-7xl mx-auto flex justify-between flex flex-col text-cyan-800 ">
//         <Brand />
//         <nav className=' mt-10'>
//           <ul className="flex space-x-10  ">
//             {navItems
//               .filter((item) =>
//                 ['Login', 'About the Coalition', 'Members', 'Impact Stories', 'CreatePost'].includes(item.label)
//               )
//               .map((item) => (
//                 <li key={item.href}>
//                   <Link href={item.href} className="text-cyan-800 hover:text-gray-200">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// // ✅ Brand logo component
// function Brand() {
//   return (
//     <div className="flex space-x-2">
//       {/* <FaReact className="text-5xl" /> */}

//     <Image
//       src="/logo.svg"
//       width={30}
//       height={50}
//       alt="Picture of the author"
//     />

//       <div className="flex flex-col ">
//         <h1 className="text-xl  text-cyan-800"> SheRAA</h1>
//         <h1 className="text-xs   text-cyan-800"> Women’s Climate Resilience and Adaptation Alliance</h1></div>

//     </div>
//   );
// }

// // ✅ Sidebar component
// function Sidebar({
//   navItems,
//   glassHoverClass,
// }: {
//   navItems: { label: string; href: string }[];
//   glassHoverClass: string;
// }) {
//   const filteredItems = navItems.filter((item) =>
//     ['Home', 'About', 'Members', 'Impact Stories', 'Blog', 'Zustand', 'Tanstack', 'SearchPost'].includes(
//       item.label
//     )
//   );

//   return (
//     <aside className="w-64 bg-blue-900 text-white flex flex-col px-6 py-8 shadow-md">
//       <div className="flex items-center space-x-2 mb-10">
//         <FaReact className="text-3xl" />
//         <h1 className="text-xl font-semibold">Kutu kutu React</h1>
//       </div>
//       <nav className="flex flex-col space-y-4">
//         {filteredItems.map((item) => (
//           <Link key={item.href} href={item.href} className={glassHoverClass}>
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }

'use client';

import './globals.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About the Coalition', href: '/about' },
  { label: 'Members', href: '/members' },
  { label: 'Impact Stories', href: '/impact-stories' },
  { label: 'Blog', href: '/blog' },
  { label: 'Login', href: '/login' },
  { label: 'CreatePost', href: '/create' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          <Header />

          <main className="flex-1 bg-white">{children}</main>

          <ReactQueryDevtools initialIsOpen={false} />

          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}

// ─── HEADER ─────────────────────────────────────────────────────────

function Header() {
  const glassHoverClass =
    'pl-4 py-2 rounded-xl hover:bg-white/50 hover:backdrop-blur-md transition';

  return (
    <header className="bg-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Brand />

        <nav>
          <ul className="flex space-x-6">
            {navItems
              .filter((item) =>
                [
                  'About the Coalition',
                  'Members',
                  'Impact Stories',
                  'Login',
                ].includes(item.label)
              )
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cyan-800 hover:text-cyan-600">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Brand() {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.svg" width={32} height={32} alt="SheRAA Logo" />
      <div>
        <h1 className="text-xl font-bold text-cyan-800">SheRAA</h1>
        <p className="text-xs text-cyan-800">
          Women’s Climate Resilience and Adaptation Alliance
        </p>
      </div>
    </div>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className=" bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & description */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" width={40} height={40} alt="SheRAA logo" />
            <div>
              <h3 className="text-xl font-bold">SheRAA</h3>
              <p className="text-sm">Women’s Climate Resilience and Adaptation Alliance</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Informed by decades of experience and deep local expertise, our work across the region is focused on good governance, women’s empowerment and gender equality, inclusive economic growth, environment and climate action, and regional and international relations.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {['About', 'Leadership', 'Blog', 'Careers', 'Referral Program', 'Community'].map(item => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            {['Overview', 'Features', 'Pricing', 'Documentation', 'Tools & Integration', 'Releases'].map(item => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {['Help centre', 'FAQ', 'Contact', 'Press', 'Status'].map(item => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow us</h4>
          <div className="flex space-x-4 text-xl">
            <Link href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="https://twitter.com" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="https://youtube.com" aria-label="YouTube"><FaYoutube /></Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-900">
          <div className="flex flex-wrap gap-6">
            {['Terms of Service', 'Privacy Policy', 'Security', 'Sitemap'].map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
          <p className="mt-4 md:mt-0">© 2023 The Asia Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

