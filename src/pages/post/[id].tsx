import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Blog post page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog Post {id}</h1>
        {/* Render the content of your blog post here */}
      </main>
    </div>
  )
}
