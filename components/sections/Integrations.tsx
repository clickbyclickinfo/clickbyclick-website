'use client';

import { Slack, Mail, Calendar, MessageSquare, FileText, Video, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Integrations() {
  const integrations = [
    { name: 'Slack', icon: Slack, color: 'from-pink-500 to-rose-500' },
    { name: 'Gmail', icon: Mail, color: 'from-red-500 to-orange-500' },
    { name: 'Calendar', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { name: 'Chat', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
    { name: 'Docs', icon: FileText, color: 'from-yellow-500 to-orange-500' },
    { name: 'Video', icon: Video, color: 'from-purple-500 to-pink-500' },
    { name: 'Database', icon: Database, color: 'from-indigo-500 to-blue-500' },
    { name: 'Share', icon: Share2, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}
                style={{
                  animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <integration.icon className="w-8 h-8 text-white" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Integrate Your Demo
              <br />
              With Any Tool
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Supercharge your workflow by connecting ClickByClick with your favorite tools. Embed demos directly in Notion, Slack, or any platform.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
            >
              Explore integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
