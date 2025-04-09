
import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero
        title="Our Story"
        subtitle="From a single highway stop to a nationwide chain - how we became travelers' favorite food destination"
        ctaText="Learn About Our Journey"
        ctaLink="#story"
        backgroundImage="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop"
        overlayColor="bg-black/60"
      />

      <section id="story" className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">About Us</h2>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 2005, we began with a simple idea: highway food doesn't have to be boring or unhealthy. Our founder, Michael Thompson, was tired of limited options during his frequent road trips and decided to create something better.
              </p>
              <p>
                Starting with a single location on Highway 95, we focused on serving fresh, delicious food prepared quickly but with care. Our commitment to quality and speed quickly made us a favorite among travelers.
              </p>
              <p>
                Today, we have grown to over 75 locations across the country, but our mission remains the same: to provide travelers with convenient, high-quality food options that make their journey more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pitstop-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-pitstop-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pitstop-red text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-diner text-pitstop-darkblue mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use fresh ingredients and prepare food daily to ensure the highest quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-pitstop-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pitstop-red text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-diner text-pitstop-darkblue mb-3">Speed & Convenience</h3>
              <p className="text-gray-600">
                We know you're on the go, so we make ordering and pickup quick and easy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-pitstop-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pitstop-red text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-diner text-pitstop-darkblue mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we strive to make every visit enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pitstop-darkblue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-diner mb-6">Join Us on Our Journey</h2>
          <p className="text-lg text-pitstop-cream max-w-2xl mx-auto mb-8">
            We're always looking for passionate people to join our team. Visit our careers page to learn more about opportunities at JR's Corner.
          </p>
          <a href="#" className="bg-white text-pitstop-darkblue py-2 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
