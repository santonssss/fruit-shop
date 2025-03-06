import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-leaf/20 to-lemon/30 z-0" />

      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-leaf/10 text-leaf text-xs font-medium mb-4 animate-fade-in">
            Fresh Picks Daily
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-shadow-sm">
            Farm Fresh Produce
            <br />
            <span className="text-leaf">Delivered to You</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8 max-w-lg animate-fade-in">
            Experience nature's freshness, harvested at peak ripeness and
            delivered straight to your kitchen with care and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="bg-leaf hover:bg-leaf/90 text-white">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Banner;
