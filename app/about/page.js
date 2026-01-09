export default function AboutPage() {
  return (
    <section className="py-16 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-tight text-stone-900">
        Our Story
      </h2>
      <div className="w-20 h-1 bg-orange-700/30 mb-10 rounded-full"></div>
      
      <div className="max-w-3xl space-y-6">
        <p className="text-stone-600 text-xl leading-relaxed font-light">
          The Cozy Corner is more than just an online bookstore; it is a digital sanctuary 
          built for those who find solace in the turn of a page. In an increasingly 
          fast-paced world, we believe in the power of slow reading and the 
          comfort of a well-told story.
        </p>
        
        <p className="text-stone-600 text-lg leading-relaxed">
          Our mission is to curate a collection that acts as a gentle escape. 
          We hand-pick every recommendation with a focus on stories that inspire 
          quiet reflection, foster inner growth, and provide the ultimate 
          relaxation. Whether it’s a rainy afternoon or a quiet midnight, 
          we’re here to help you find your next meaningful journey.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100">
          <h4 className="font-semibold text-orange-900 uppercase text-xs tracking-widest mb-2">Curated</h4>
          <p className="text-sm text-stone-500">Only the most meaningful titles make it to our shelf.</p>
        </div>
        <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200">
          <h4 className="font-semibold text-stone-900 uppercase text-xs tracking-widest mb-2">Calm</h4>
          <p className="text-sm text-stone-500">A distraction-free experience designed for readers.</p>
        </div>
        <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100">
          <h4 className="font-semibold text-orange-900 uppercase text-xs tracking-widest mb-2">Comfort</h4>
          <p className="text-sm text-stone-500">Finding your next favorite book should feel like home.</p>
        </div>
      </div>
    </section>
  );
}