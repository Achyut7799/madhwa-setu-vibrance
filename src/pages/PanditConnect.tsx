
import { Calendar, MapPin, Phone, Mail, UserCheck } from "lucide-react";

const panditProfiles = [
  {
    id: 1,
    name: "Pandit Raghavendra Sharma",
    region: "Bengaluru, Karnataka",
    expertise: ["Gruhapravesham", "Upanayanam", "Shraddha"],
    image: "public/lovable-uploads/bfd71402-1307-4f8c-8b39-b114d83e993f.png"
  },
  {
    id: 2,
    name: "Pandit Vishnu Bhatt",
    region: "Chennai, Tamil Nadu",
    expertise: ["Marriage", "Naming Ceremony", "Housewarming"],
    image: "public/lovable-uploads/bd17618b-08ad-4e33-9708-139e56aab9be.png"
  }
];

const PanditConnect = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-header inline-block">Pandit Connect</h1>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Connect with verified Madhwa pandits for ceremonies and rituals. Find the right pandit based on your region and specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="spiritual-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Find a Pandit</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Region</label>
                  <select
                    className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                  >
                    <option>Select your region</option>
                    <option>Bengaluru</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Ceremony Type</label>
                  <select
                    className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                  >
                    <option>Select ceremony type</option>
                    <option>Gruhapravesham (Housewarming)</option>
                    <option>Upanayanam (Thread Ceremony)</option>
                    <option>Vivaha (Marriage)</option>
                    <option>Namakarana (Naming Ceremony)</option>
                    <option>Annaprashana (First Solid Food)</option>
                    <option>Shraddha (Ancestor Worship)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Date</label>
                  <div className="flex">
                    <input
                      type="date"
                      className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Search Pandits
                </button>
              </form>
            </div>

            <div className="spiritual-card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-madhwa-deep-purple mb-4 flex items-center">
                <UserCheck className="mr-2 text-madhwa-purple" size={20} />
                Request Ceremony Services
              </h2>
              <p className="text-madhwa-deep-purple/80 mb-6">
                If you can't find a pandit for your specific needs, submit a request and we'll help connect you.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-madhwa-deep-purple mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-madhwa-deep-purple mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-madhwa-deep-purple mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-madhwa-deep-purple mb-1">Event</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-madhwa-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Event Details</label>
                  <textarea
                    className="w-full p-2 border border-madhwa-light-gray rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-madhwa-purple"
                  ></textarea>
                </div>

                <button type="submit" className="btn-secondary w-full">
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Available Pandits</h2>
            <div className="space-y-6">
              {panditProfiles.map((pandit) => (
                <div key={pandit.id} className="spiritual-card p-4 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:mr-4 mb-4 md:mb-0">
                      <img 
                        src={pandit.image} 
                        alt={pandit.name}
                        className="w-full md:w-32 h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-madhwa-purple mb-2">{pandit.name}</h3>
                      <div className="flex items-center text-madhwa-deep-purple/70 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{pandit.region}</span>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-medium text-madhwa-deep-purple">Expertise:</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {pandit.expertise.map((item, index) => (
                            <span key={index} className="bg-madhwa-light-gray text-madhwa-deep-purple px-2 py-1 rounded-full text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center text-sm bg-madhwa-purple text-white px-3 py-1.5 rounded-md hover:bg-madhwa-dark-purple transition-colors">
                          <Calendar size={14} className="mr-1" />
                          Schedule
                        </button>
                        <button className="flex items-center text-sm bg-white border border-madhwa-purple text-madhwa-purple px-3 py-1.5 rounded-md hover:bg-madhwa-light-gray transition-colors">
                          <Phone size={14} className="mr-1" />
                          Contact
                        </button>
                        <button className="flex items-center text-sm bg-white border border-madhwa-purple text-madhwa-purple px-3 py-1.5 rounded-md hover:bg-madhwa-light-gray transition-colors">
                          <Mail size={14} className="mr-1" />
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-madhwa-light-gray rounded-lg">
              <h3 className="text-lg font-semibold text-madhwa-deep-purple mb-2">Are you a Pandit?</h3>
              <p className="text-madhwa-deep-purple/80 mb-4">
                If you are a qualified Madhwa pandit and would like to be listed on our platform, please register by clicking the button below.
              </p>
              <button className="btn-primary">
                Register as a Pandit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanditConnect;
