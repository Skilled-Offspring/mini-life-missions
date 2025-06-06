
import React from 'react';
import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mission, categoryColors } from '../data/missions';
import { useMission } from '../context/MissionContext';
import { useChild } from '../context/ChildContext';
import { cn } from '@/lib/utils';

interface MissionCardProps {
  mission: Mission;
}

const MissionCard: React.FC<MissionCardProps> = ({
  mission
}) => {
  const { selectedChild } = useChild();
  const { toggleMissionCompletion, isMissionCompleted } = useMission();
  
  const categoryColor = categoryColors[mission.category as keyof typeof categoryColors] || "mission-health";
  const isCompleted = selectedChild ? isMissionCompleted(mission.id, selectedChild.id) : false;
  
  const handleComplete = () => {
    if (selectedChild) {
      toggleMissionCompletion(mission.id, selectedChild.id);
    }
  };

  return (
    <div className={cn("border rounded-lg p-4 transition-all duration-300 hover:shadow-md", 
      isCompleted ? "mission-completed border-green-500" : `border-${categoryColor}`)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{mission.title}</h3>
        <Badge variant="outline" className={`category-${categoryColor} border px-2 py-1 text-xs`}>
          {mission.category}
        </Badge>
      </div>
      
      <p className="text-gray-700 mb-4">{mission.description}</p>
      
      <Accordion type="single" collapsible className="mb-4">
        <AccordionItem value="why-matters">
          <AccordionTrigger className="text-sm font-semibold text-lime-600">
            Why this matters
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-600 italic">
            {mission.whyThisMatters}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="parent-tip">
          <AccordionTrigger className="text-sm font-semibold text-lime-600">
            Parent Tip
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-600 italic">
            {mission.parentTip || "This mission helps your child develop important skills through everyday experiences. Guide the conversation by asking open-ended questions and allowing them to explain their thinking."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-end">
        <Button 
          variant={isCompleted ? "default" : "outline"} 
          size="sm" 
          className={cn("transition-colors", isCompleted ? "bg-green-500 hover:bg-green-600" : "")} 
          onClick={handleComplete} 
          disabled={!selectedChild}
          type="button"
        >
          {isCompleted ? (
            <>
              <Check className="mr-1 h-4 w-4" />
              Completed
            </>
          ) : "Mark Complete"}
        </Button>
      </div>
    </div>
  );
};

export default MissionCard;
