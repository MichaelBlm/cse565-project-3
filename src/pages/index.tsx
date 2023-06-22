import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog Home</title>
        <meta name="description" content="Home page of the blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Blog Home Page</h1>
        {/* Render your list of blog posts here */}
      </main>
    </div>
  )
}
