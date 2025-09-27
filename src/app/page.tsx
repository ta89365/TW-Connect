export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">TW Connect</h1>
      <p className="mt-4">Environment: {process.env.NEXT_PUBLIC_ENV}</p>
    </main>
  );
}

