import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About SleepPulse
        </h1>
        <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Personalized sleep insights for a healthier you.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At SleepPulse, our mission is to help you sleep better and live
          healthier. We provide meaningful insights into your sleep patterns so
          you can improve rest, boost energy, and enhance your overall
          well-being. Better sleep starts here — and we’re with you every step
          of the way.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose SleepPulse?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Smart Sleep Tracking</h3>
            <p className="text-gray-600">
              Accurately monitor your sleep cycles, duration, and quality with
              powerful analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">
              Personalized Sleep Insights
            </h3>
            <p className="text-gray-600">
              Get science-backed tips and tailored suggestions to improve your
              nightly rest.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">
              Seamless, Intuitive Design
            </h3>
            <p className="text-gray-600">
              Enjoy a beautifully designed interface that works effortlessly on
              any device.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          SleepPulse was born out of a simple belief — that better sleep leads
          to a better life. Our team of sleep scientists, health experts, and
          tech innovators came together to build a smart, intuitive platform
          designed to improve how people rest. Since day one, we’ve helped
          thousands gain clarity on their sleep patterns, empowering them to
          take control of their health and well-being.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ready to Sleep Better?
        </h2>
        <p className="text-lg mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Join SleepPulse and start your journey to deeper rest, better focus,
          and lasting energy.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-white text-indigo-600 hover:text-indigo-700 px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
