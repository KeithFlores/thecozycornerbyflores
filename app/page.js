import Image from "next/image"; // Add this line
import Link from "next/link";   // Add this line

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-stone-100 p-12 md:p-20 shadow-xl shadow-stone-200/50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-700 bg-orange-50 rounded-full mb-4">
              Now Open
            </span>
            <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
              Find your next <br /> <span className="text-orange-700 italic">quiet moment.</span>
            </h1>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Hand-picked recommendations for readers who value calm, comfort, and deep stories.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/books" className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-orange-800 transition-all hover:scale-105 shadow-lg">
                Browse Books
              </Link>
              <Link href="/about" className="px-8 py-4 border border-stone-300 rounded-full font-medium hover:bg-stone-50 transition-all">
                Our Story
              </Link>
            </div>
          </div>
          <div className="relative flex-shrink-0">
             <Image
                src="/images/book1.png"
                alt="Featured Book"
                width={200}
                height={280}
                className="relative rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                priority
              />
          </div>
        </div>
      </div>
    </div>
  );
}