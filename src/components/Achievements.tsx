
import { Trophy, Award, Star, Users } from "lucide-react";
import { achievements } from "@/data/content";

const Achievements = () => {
  // Function to render the correct icon based on the icon name from the data
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case "Award":
        return <Award className="h-6 w-6 text-blue-500" />;
      case "Star":
        return <Star className="h-6 w-6 text-purple-500" />;
      case "Users":
        return <Users className="h-6 w-6 text-green-500" />;
      default:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Recognitions and milestones from my journey as a developer and founder
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {/* Achievement items */}
            {achievements.map((item, index) => (
              <div key={item.id} className="relative mb-16 last:mb-0">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Time marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-theme-blue flex items-center justify-center">
                    {renderIcon(item.icon)}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-theme-blue bg-blue-100 dark:bg-blue-900/30 rounded mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
