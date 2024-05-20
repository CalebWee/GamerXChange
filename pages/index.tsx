import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg">This is the home page of my Next.js app.</p>
      </main>

      <footer className="text-center mt-8">
        <p>&copy; 2024 My Next.js App</p>
      </footer>
    </div>
  );
}