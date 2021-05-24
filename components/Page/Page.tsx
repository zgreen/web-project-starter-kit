import Head from "next/head";

export const Page = ({ children }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="bg-white dark:dark:bg-gray-800 dark:text-yellow-50">
      {children}
    </main>
  </>
);