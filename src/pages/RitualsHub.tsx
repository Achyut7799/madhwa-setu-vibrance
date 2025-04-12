import { BookOpen, Check } from "lucide-react";
import { useState } from "react";

const ritualCategories = [
  {
    id: 1,
    title: "Daily Rituals",
    count: 5
  },
  {
    id: 2,
    title: "Festival Rituals",
    count: 12
  },
  {
    id: 3,
    title: "Life Stage Rituals",
    count: 8
  }
];

const RitualsHub = () => {
  const [showDailyDetails, setShowDailyDetails] = useState(false);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-header inline-block">Rituals Hub</h1>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Visual step-by-step guides to practice Madhwa rituals with proper context and understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ritualCategories.map((category) => (
            <div key={category.id} className="spiritual-card overflow-hidden group cursor-pointer">
              <div className="relative h-48 bg-madhwa-purple/10 flex items-center justify-center">
                <p className="text-madhwa-purple">Ritual Guide Category</p>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-madhwa-purple text-white rounded-full p-3 transform hover:scale-110 transition-transform">
                    <BookOpen />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-madhwa-deep-purple">{category.title}</h3>
                <p className="text-sm text-madhwa-deep-purple/70 mt-1">{category.count} rituals</p>
                {category.title === "Daily Rituals" ? (
                  <button
                    onClick={() => setShowDailyDetails(true)}
                    className="mt-3 text-madhwa-purple hover:text-madhwa-dark-purple text-sm font-medium"
                  >
                    Explore Guides →
                  </button>
                ) : (
                  <button className="mt-3 text-madhwa-purple hover:text-madhwa-dark-purple text-sm font-medium">
                    Explore Guides →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Daily Rituals Block */}
        {showDailyDetails && (
          <div className="spiritual-card p-6 md:p-8 mb-16">
            <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Daily Rituals – Expanded Guide</h2>
            <ul className="space-y-4 list-disc list-inside text-madhwa-deep-purple/80">
              <li>Waking up early in the morning</li>
              <li>Performing pooja</li>
              <li>Perform Sandhyavandana daily if possible</li>
              <li>Learn the meaning behind each ritual step</li>
              <li>Maintain physical purity during rituals</li>
              <li>Recite mantras with correct pronunciation</li>
              <li>Prepare proper offerings as prescribed</li>
            </ul>
          </div>
        )}

        <div className="bg-madhwa-light-gray rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Do's & Don'ts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-madhwa-purple mb-4">What to Do</h3>
              <ul className="space-y-3">
                {[
                  "Perform Sandhyavandana daily if possible",
                  "Learn the meaning behind each ritual step",
                  "Maintain physical purity during rituals",
                  "Recite mantras with correct pronunciation",
                  "Prepare proper offerings as prescribed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-600 mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-madhwa-deep-purple/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-madhwa-purple mb-4">What to Avoid</h3>
              <ul className="space-y-3">
                {[
                  "Rushing through rituals without understanding",
                  "Performing rituals during prohibited time periods",
                  "Missing essential steps in the procedure",
                  "Using incorrect materials for offerings",
                  "Neglecting mental purity and concentration"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-red-600 mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-madhwa-deep-purple/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="spiritual-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Visual Guide Example</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-madhwa-purple/10 h-[200px] flex items-center justify-center rounded-lg">
              <p className="text-madhwa-purple">Visual Guide Coming Soon</p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-medium text-madhwa-purple mb-3">Daily Sandhyavandana</h3>
              <p className="text-madhwa-deep-purple/80 mb-4">
                A step-by-step visual guide to performing the Sandhyavandana ritual, an essential daily practice in the Madhwa tradition.
              </p>
              <div className="space-y-4">
                <div className="p-3 bg-madhwa-light-gray rounded-md">
                  <h4 className="font-medium text-madhwa-deep-purple">Step 1: Preparation</h4>
                  <p className="text-sm text-madhwa-deep-purple/80">Gather necessary materials: water, kusha grass, tilak, etc.</p>
                </div>
                <div className="p-3 bg-madhwa-light-gray rounded-md">
                  <h4 className="font-medium text-madhwa-deep-purple">Step 2: Achamana</h4>
                  <p className="text-sm text-madhwa-deep-purple/80">Ritual sipping of water for purification.</p>
                </div>
                <div className="p-3 bg-madhwa-light-gray rounded-md">
                  <h4 className="font-medium text-madhwa-deep-purple">Step 3: Pranayama</h4>
                  <p className="text-sm text-madhwa-deep-purple/80">Control of breath to prepare the mind.</p>
                </div>
              </div>
              <button className="btn-primary mt-6">
                View Full Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualsHub;
