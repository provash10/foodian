export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Foodian
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover amazing recipes, share your culinary creations, and connect with food lovers from around the world
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Explore Recipes
          </button>

          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
