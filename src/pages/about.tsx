import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About page of the blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About the Blog</h1>
        {/* Render information about the blog here */}
      </main>
    </div>
  )
}
