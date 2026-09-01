import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f1eb] px-6">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          404
        </p>

        <h1 className="mt-5 font-serif text-6xl md:text-8xl">Wrong turn.</h1>

        <p className="mx-auto mt-6 max-w-md leading-7 text-neutral-600">
          The page you're looking for doesn't exist. Let's get you back to The
          Place.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-neutral-950 px-6 py-4 text-sm font-medium text-white"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
