import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Banner Hero"
          className="w-full h-full object-cover opacity-60"
        /> */}
        <Image width={120} height={30} src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Banner Hero"
          className="w-full h-full object-cover opacity-60"></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
            Welcome to Foodian
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1]">
            Taste the <span className="text-orange-500">Difference</span> in Every Bite.
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
            Discover amazing recipes, share your culinary creations, and connect with food lovers from around the world. Your journey to gourmet excellence starts here.
          </p>

          <div className="flex gap-4 items-center">
            <Link
              href="/foods"
              className="bg-orange-500 text-white px-10 py-4 rounded-2xl hover:bg-orange-600 transition-all font-black text-lg shadow-xl shadow-orange-600/30 hover:scale-105 active:scale-95"
            >
              Explore Recipes
            </Link>

            <Link
              href="/register"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl hover:bg-white/20 transition-all font-black text-lg hover:scale-105 active:scale-95"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-1 -left-1 -right-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
