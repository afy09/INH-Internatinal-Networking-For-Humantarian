import React from "react";

const FlotillaTracker = () => {
  return (
    <section className="relative w-full h-[80vh] py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Flotilla Tracker</h2>
        <div className="w-full h-[70vh] rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://inhforhumanity.org/proxy/flotilla" className="w-full h-[80vh] border-0 rounded-lg shadow-lg" title="Flotilla Tracker" allowFullScreen loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default FlotillaTracker;
