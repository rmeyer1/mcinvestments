import React from 'react';

const About = () => {
  return (
    <section className="bg-black">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
              Who we are.
            </h1>

            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Highly skilled and motivated operators with a passion for finance,
              real estate, and technology. We bring over two decades of work
              experience in a variety of industries and disciplines. We thrive
              in adverse and complex environments and are not afraid of
              challenging investments and projects if a positive financial
              outcome is attainable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-contain rounded-xl aspect-square"
                src="/mc.png"
                alt=""
              ></img>
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
                Matt
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                CEO | Founder
              </p>
              <img
                className="object-contain rounded-xl aspect-square"
                src="/robAvatar.png"
                alt=""
              ></img>
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
                Rob
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                COO | Founder
              </p>
            </div>
            {/*}
            <div>
              <a
                className="twitter-timeline"
                data-theme="dark"
                href="https://twitter.com/BleacherReport?ref_src=twsrc%5Etfw"
                data-tweet-limit="3"
              >
                Tweets by BleacherReport
              </a>{' '}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
            ></script> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
