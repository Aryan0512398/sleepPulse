import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-gray-100 pt-20'>
        <div className='flex-1 mb-8 xl:pl-10'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Welcome to SleepPulse
          </h1>
          <p className='md:text-xl mb-6'>
            Discover better sleep, improved health, and energized mornings with SleepPulse — your trusted sleep companion.
          </p>
          <SignInButton>
            <button className='w-full md:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img
            src='16729.jpg'
            alt='SleepPulse Illustration'
            className='w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Frequently Asked Questions Section */}
      <div className='py-16 px-8 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div>
            <h3 className='text-xl font-bold'>What is SleepPulse?</h3>
            <p className='text-gray-600'>
              SleepPulse is an intelligent platform that helps you monitor your sleep patterns and improve your overall wellness.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>How does it work?</h3>
            <p className='text-gray-600'>
              SleepPulse analyzes your nightly sleep data and provides personalized insights to help you rest better.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Is SleepPulse free?</h3>
            <p className='text-gray-600'>
              Yes! SleepPulse offers a free plan with essential features. Premium plans unlock advanced analytics and sleep coaching tools.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Testimonials Section */}
      <div className='py-16 px-8 bg-gray-100'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          What Our Users Say
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepPulse completely changed how I sleep. I wake up feeling refreshed and focused every day!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Sarah L.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;Thanks to SleepPulse, I’ve identified key habits affecting my rest. It’s been a game-changer.&quot;
            </p>
            <p className='text-purple-500 font-bold'>- John D.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;Easy to use, beautifully designed, and the insights are spot-on. Highly recommended!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
