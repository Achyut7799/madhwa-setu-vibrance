const FestivalAlerts = () => {
  const handleSetAlert = (festival) => {
    alert(✅ Alert set for ${festival.name} on ${festival.date});
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-header inline-block">Festival Alerts</h1>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Never miss an important ritual or festival with our calendar and alert system, customized for your region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6 flex items-center">
              <CalendarIcon className="mr-2 text-madhwa-purple" />
              Calendar
            </h2>
            <CalendarView />
            <div className="mt-6">
              <button className="btn-secondary">
                Download Full Calendar
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6 flex items-center">
              <Bell className="mr-2 text-madhwa-purple" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingFestivals.map((festival) => (
                <div
                  key={festival.id}
                  className="spiritual-card p-4 hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center"
                >
                  <div className="md:mr-4 mb-2 md:mb-0">
                    <div className="bg-madhwa-light-gray p-2 rounded-lg text-center min-w-24">
                      <span className="text-sm text-madhwa-deep-purple/70">2024</span>
                      <div className="text-lg font-bold text-madhwa-purple">{festival.date.split(",")[0]}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-madhwa-deep-purple">{festival.name}</h3>
                    <p className="text-sm text-madhwa-deep-purple/70">{festival.description}</p>
                  </div>
                  <div className="ml-auto mt-2 md:mt-0">
                    <button
                      onClick={() => handleSetAlert(festival)}
                      className="bg-madhwa-light-gray text-madhwa-purple px-3 py-1 rounded-full text-sm hover:bg-madhwa-purple hover:text-white transition-colors"
                    >
                      Set Alert
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="spiritual-card p-6 mt-8">
              <h3 className="text-xl font-semibold text-madhwa-deep-purple mb-4">Subscribe to Alerts</h3>
              <p className="text-madhwa-deep-purple/80 mb-4">
                Get notifications for upcoming festivals and rituals specific to your region.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-madhwa-deep-purple mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
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
                <button type="submit" className="btn-primary w-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
