import Head from 'next/head'
import path from 'path'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>DataHub.io</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
      </Head>

      <main className="prose prose-red max-w-3xl font-mono flex flex-col items-center justify-center flex-1 px-20">
        <h1 className="text-6xl font-bold text-center">
          DataHub v3
        </h1>
        <h2 className="text-center">Wrangle, Preview, Deploy</h2>
        <section>
          
        </section>
      </main>
    </div>
  )
}
