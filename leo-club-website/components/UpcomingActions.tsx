import Image from "next/image";

const upcomingActions = [
  {
    title: "Tree Plantation Drive",
    date: "July 20, 2025",
    tag: "Volunteer",
    description: "Join us to plant 500+ saplings in North Chennai. Open to all.",
    image: "/actions/tree.jpg",
  },
  {
    title: "Eye Camp Awareness",
    date: "August 2, 2025",
    tag: "Awareness Drive",
    description: "Distribute pamphlets and help with registrations in your locality.",
    image: "/actions/eye-camp.jpg",
  },
  {
    title: "School Supplies Distribution",
    date: "August 10, 2025",
    tag: "Community Outreach",
    description: "Help us deliver books and supplies to 3 government schools.",
    image: "/actions/school.jpg",
  },
];

export default function UpcomingActions() {
  return (
    <section className="py-12 px-4 bg-leoBlue/5" id="upcoming-actions">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-leoBlue mb-8">
          Upcoming Actions
        </h2>
        <div className="space-y-6">
          {upcomingActions.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative w-full sm:w-1/2 h-48 sm:h-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between w-full sm:w-1/2">
                <div>
                  <span className="inline-block text-xs font-medium bg-leoAccent text-white px-3 py-1 rounded-full mb-2">
                    {event.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-leoBlue">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {event.description}
                  </p>
                </div>
                <div className="mt-4 text-sm font-medium text-leoGold">
                  📅 {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

