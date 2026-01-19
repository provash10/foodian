export default function OrdersNow() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Cooking?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join Dish Hub today and discover your next favorite recipe
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Browse Recipes
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
            Create Account
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-blue-100">
          <span>Free to join</span>
          <span>No credit card required</span>
          <span>Start cooking immediately</span>
        </div>

      </div>
    </section>
  );
}
