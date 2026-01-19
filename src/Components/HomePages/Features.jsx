import {
  FaUtensils,
  FaUsers,
  FaStar,
  FaMobileAlt,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Easy Recipes",
      description: "Step-by-step guides for delicious meals anyone can make",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Connect with fellow food enthusiasts and share experiences",
    },
    {
      icon: <FaStar />,
      title: "Reviews",
      description: "Honest reviews and ratings from real home cooks",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description: "Cook anywhere with our responsive mobile design",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Dish Hub?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to discover, cook, and share amazing food experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
