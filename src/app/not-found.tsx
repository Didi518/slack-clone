import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Page introuvable</h1>
      <p className="text-2xl mb-8">
        La page que vous recherchez n&apos;existe pas.
      </p>
      <Link className="text-sky-500" href="/">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
