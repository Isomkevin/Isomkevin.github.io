
import { useState } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { insights } from "@/data/content";

const Insights = () => {
  const [activeInsight, setActiveInsight] = useState(insights[0]);

  return (
    <section id="insights" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            #ThroughTheEyesOf<span className="text-theme-blue">Kevin</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Personal insights and reflections from my experience in tech and entrepreneurship
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-theme-blue opacity-20" />
              </div>
              <blockquote className="text-xl md:text-2xl font-grotesk text-center mb-6">
                {activeInsight.content}
              </blockquote>
              <div className="text-center">
                <span className="inline-block text-theme-blue dark:text-theme-blue font-medium">
                  {activeInsight.tag}
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {insights.map((insight) => (
              <button
                key={insight.id}
                onClick={() => setActiveInsight(insight)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeInsight.id === insight.id
                    ? "bg-theme-blue text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                } transition-colors`}
              >
                {insight.tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
