import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MemberCard {
  title: string;
  description: string;
  color: 'blue' | 'red' | 'coral';
}

interface CoalitionMembersProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  members?: MemberCard[];
}

const CoalitionMembers: React.FC<CoalitionMembersProps> = ({
  sectionTitle = "Coalition Members",
  sectionSubtitle = "The leadership and staff play key roles in implementing its programs and projects throughout Asia.",
  members = [

    
    {
      title: "Research",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "blue"
    },
    {
      title: "Policy & Advocacy", 
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "red"
    },
    {
      title: "Development",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "blue"
    },
    {
      title: "Feminist Leadership",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "red"
    },
    {
      title: "Media",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "red"
    },
    {
      title: "Youth",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "red"
    },
    {
      title: "Donors",
      description: "This paper details the opportunities and challenges facing civil society actors working in peacebuilding or peace activism in South and Southeast Asia...",
      color: "blue"
    }
  ]
}) => {
  const getCardColors = (color: 'blue' | 'red' | 'coral') => {
    switch (color) {
      case 'blue':
        return {
          title: 'text-blue-600',
          link: 'text-blue-600 hover:text-blue-700'
        };
      case 'red':
        return {
          title: 'text-red-500',
          link: 'text-blue-600 hover:text-blue-700'
        };
      case 'coral':
        return {
          title: 'text-coral-500',
          link: 'text-blue-600 hover:text-blue-700'
        };
      default:
        return {
          title: 'text-blue-600',
          link: 'text-blue-600 hover:text-blue-700'
        };
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-red-500 text-sm font-medium uppercase tracking-wide mb-2">
            MEMBERS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Member Cards */}
          {members.map((member, index) => {
            const colors = getCardColors(member.color);
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <h3 className={`text-xl font-bold mb-4 ${colors.title} group-hover:text-opacity-80 transition-colors`}>
                  {member.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                <button className={`inline-flex items-center space-x-2 ${colors.link} font-medium text-sm transition-all group-hover:translate-x-1`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}

          {/* All Members CTA Card */}
          <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex items-center justify-center min-h-[280px]">
            <button className="inline-flex items-center space-x-3 text-white font-semibold text-lg transition-all group-hover:translate-x-2">
              <span>All Members</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoalitionMembers;