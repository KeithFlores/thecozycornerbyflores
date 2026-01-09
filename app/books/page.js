import Image from "next/image"; // Add this line

export default function BooksPage() {
  const books = [
    { title: "Modern CSS with Tailwind", img: "/images/book1.png", tag: "Design" },
    { title: "The Next.js Handbook", img: "/images/book2.png", tag: "Tech" },
    { title: "Mindset", img: "/images/book3.jpg", tag: "Personal Growth" },
  ];

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Curated Recommendations</h2>
        <p className="text-stone-500 mt-2">Quality over quantity. Always.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <Image 
                src={book.img} 
                alt={book.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="mt-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">{book.tag}</span>
              <h3 className="text-lg font-semibold group-hover:text-orange-700 transition-colors">{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}