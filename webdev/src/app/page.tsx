// Add the "use client" directive to mark this as a Client Component
'use client';

import Head from 'next/head';

export default function Page() {
    return (
        <>
          <Head>
            <title>Welcome to My Website</title>
            <meta name="description" content="Your go-to platform for amazing content and services." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="min-h-screen bg-gray-100 text-gray-900">

    
            <section className="bg-gray-300 text-black py-20">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to hunting coder</h2>
                <p className="text-lg mb-6">
                  Discover amazing features and content tailored just for you.
                </p>
                <a
                  href="#get-started"
                  className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100"
                >
                  Get Started
                </a>
              </div>
            </section>
    
            <section id="features" className="py-16">
              <div className="container mx-auto px-6">
                <h3 className="text-3xl font-bold mb-6 text-center">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
                    <h4 className="font-bold text-xl mb-2">Feature One</h4>
                    <p className="text-gray-700">
                      Detailed information about the first feature of your website.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
                    <h4 className="font-bold text-xl mb-2">Feature Two</h4>
                    <p className="text-gray-700">
                      Detailed information about the second feature of your website.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
                    <h4 className="font-bold text-xl mb-2">Feature Three</h4>
                    <p className="text-gray-700">
                      Detailed information about the third feature of your website.
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
          </main>
        </>
      );
}
