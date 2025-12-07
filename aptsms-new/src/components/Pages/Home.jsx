import React from "react";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section inspired by reference image */}
      <section
        className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl w-full px-6 py-10">
          <div className="border-2 border-white/70 rounded-[28px] px-6 sm:px-10 py-10 sm:py-14 backdrop-blur-[1px] bg-white/5">
            <h1 className="font-bold text-white tracking-[0.15em] text-lg sm:text-xl md:text-2xl mb-3 uppercase">
              Welcome to
            </h1>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
              The Official Website of
              <br />
              <span className="font-bold block mt-3">
                Andhra Pradesh & Telangana Society for Mathematical Sciences
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              A forum for research workers, young and old, to present their
              findings and to review the state of the art in their specialized
              areas of
              <b> Mathematical Sciences</b>, while bringing together academics
              for camaraderie and intellectual interaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
