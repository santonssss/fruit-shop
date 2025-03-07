import React from "react";
import Layout from "@components/Layout";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Harvest Mart</h1>

          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground mb-6">
              At Harvest Mart, we're passionate about bringing the freshest,
              locally-sourced produce directly to your table. Our journey began
              with a simple mission: to make high-quality fruits and vegetables
              accessible to everyone while supporting local farmers.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1663040589382-88caf6b2bc60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybSUyMGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Our Farm"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                  alt="Fresh Produce"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-leaf mt-2 mr-2 flex-shrink-0"></div>
                <p>
                  Quality: We carefully select each product to ensure the
                  highest quality.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-leaf mt-2 mr-2 flex-shrink-0"></div>
                <p>
                  Sustainability: We prioritize environmentally friendly farming
                  practices.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-leaf mt-2 mr-2 flex-shrink-0"></div>
                <p>
                  Community: We support local farmers and contribute to our
                  community's growth.
                </p>
              </li>
            </ul>

            <div className="mt-8">
              <Link to={"/contacts"}>
                <Button className="bg-leaf hover:bg-leaf/90 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
