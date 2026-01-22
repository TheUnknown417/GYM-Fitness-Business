import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold lowercase tracking-tight mb-4">
          404
        </h1>
        <p className="text-xl text-gray-medium mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

