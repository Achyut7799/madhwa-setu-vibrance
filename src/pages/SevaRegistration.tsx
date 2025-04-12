
import { PlusCircle, Heart, HelpCircle } from "lucide-react";

const SevaRegistration = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-header inline-block">Seva Registration</h1>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Join the movement by registering for various Seva opportunities and contribute to preserving and promoting Madhwa traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="spiritual-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Register for Seva</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-madhwa-deep-purple mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                  />
                </div>
                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-madhwa-deep-purple mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                />
              </div>

              <div>
                <label className="block text-madhwa-deep-purple mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                />
              </div>

              <div>
                <label className="block text-madhwa-deep-purple mb-1">Region</label>
                <select
                  className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                >
                  <option>Select your region</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Andhra Pradesh</option>
                  <option>Maharashtra</option>
                  <option>North America</option>
                  <option>Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-madhwa-deep-purple mb-1">Interests (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  {[
                    "Content Creation",
                    "Translation",
                    "Event Organization",
                    "Community Outreach",
                    "Technical Support",
                    "Ritual Documentation",
                    "Educational Programs",
                    "Fundraising"
                  ].map((interest, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-madhwa-purple focus:ring-madhwa-purple" />
                      <span className="text-madhwa-deep-purple/80">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-madhwa-deep-purple mb-1">Tell us a bit about yourself</label>
                <textarea
                  className="w-full p-2 border border-madhwa-light-gray rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Registration
              </button>
            </form>
          </div>

          <div>
            <div className="spiritual-card p-6 md:p-8 mb-8">
              <h2 className="text-xl font-semibold text-madhwa-deep-purple mb-4 flex items-center">
                <PlusCircle className="mr-2 text-madhwa-purple" size={20} />
                Benefits of Joining
              </h2>
              <ul className="space-y-3">
                {[
                  "Connect with like-minded individuals from the Madhwa community",
                  "Contribute to preserving ancient traditions for future generations",
                  "Gain deeper insights into Madhwa philosophy and rituals",
                  "Opportunity to share your knowledge and skills",
                  "Be part of a global network of Madhwa practitioners",
                  "Early access to new features and content"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-madhwa-purple mr-2">•</span>
                    <span className="text-madhwa-deep-purple/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spiritual-card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-madhwa-deep-purple mb-4 flex items-center">
                <Heart className="mr-2 text-madhwa-purple" size={20} />
                Types of Seva
              </h2>
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-madhwa-purple bg-madhwa-light-gray/50">
                  <h3 className="font-medium text-madhwa-deep-purple">Content Creation</h3>
                  <p className="text-sm text-madhwa-deep-purple/80">Help create bite-sized pravachans, articles, and visual guides</p>
                </div>
                <div className="p-3 border-l-4 border-madhwa-purple bg-madhwa-light-gray/50">
                  <h3 className="font-medium text-madhwa-deep-purple">Multilingual Support</h3>
                  <p className="text-sm text-madhwa-deep-purple/80">Assist with translations to regional languages</p>
                </div>
                <div className="p-3 border-l-4 border-madhwa-purple bg-madhwa-light-gray/50">
                  <h3 className="font-medium text-madhwa-deep-purple">Community Events</h3>
                  <p className="text-sm text-madhwa-deep-purple/80">Organize and coordinate community gatherings and festivals</p>
                </div>
                <div className="p-3 border-l-4 border-madhwa-purple bg-madhwa-light-gray/50">
                  <h3 className="font-medium text-madhwa-deep-purple">Technical Support</h3>
                  <p className="text-sm text-madhwa-deep-purple/80">Contribute to the technical development of MadhwaSetu</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-madhwa-light-gray rounded-lg flex items-start">
                <HelpCircle className="text-madhwa-purple mr-3 shrink-0 mt-1" size={20} />
                <p className="text-sm text-madhwa-deep-purple/80">
                  Have questions about Seva opportunities? Feel free to contact us at <a href="mailto:seva@madhwasetu.org" className="text-madhwa-purple underline">seva@madhwasetu.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevaRegistration;
