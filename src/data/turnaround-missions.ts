
export interface TurnAroundMission {
  id: number;
  title: string;
  category: "Everyday Battles" | "Big Emotions" | "Power Struggles";
  description: string;
  whyThisMatters: string;
  parentTip?: string;
}

export const categoryColors = {
  "Everyday Battles": "mission-money",
  "Big Emotions": "mission-health",
  "Power Struggles": "mission-communication"
};

export const turnAroundMissions: TurnAroundMission[] = [
  {
    id: 1,
    title: "The Buy Me This Trap",
    category: "Everyday Battles",
    description: "Before heading to the store, set expectations. Let your child know if today is a \"treat trip\" or a \"no-treat trip.\" If it is a treat day, ask, \"What treat would you like today for [x amount of money]?\" Then write down the treat choice together before leaving. If it is a no-treat day, say, \"We are just here for what we need today. No extras this time.\" Then write it down together: \"Today is a no-treat day.\" Bring the note with you.",
    whyThisMatters: "Planning ahead builds your child’s self-control, reduces impulse requests, and makes shopping smoother for everyone.",
    parentTip: "If your child asks for something in the store, just show them the note and calmly say, \"Look what we wrote before we left.\" It is a visual reminder that helps avoid arguments."
  },
{
  id: 2,
  title: "Toothbrush Standoff",
  category: "Everyday Battles",
  description: "1. Let your child choose a superhero name (like \"Plaque Buster\" or \"Tooth Defender\").  2. Pick a favorite 2-minute song—this becomes their Brushing Anthem.  3. Write this on a card and tape it to the bathroom mirror: \"Your Final Mission: Brush until your anthem ends. Defeat the plaque. Protect your smile.\"  4. Explain the reason during setup: \"Brushing removes plaque—the sticky stuff left on your teeth after eating. If we leave it too long, it can cause cavities—tiny holes that hurt and need fixing. Not everyone with plaque gets cavities, but brushing every night keeps your teeth strong—like a superhero’s shield.\"",
  whyThisMatters: "When kids feel in charge, they're more likely to build routines they enjoy.",
  parentTip: "Make brushing part of their routine (after pajamas or dinner). Each night, simply ask: \"What's your final mission tonight?\" Let them switch superhero names or songs every few weeks for extra excitement. "
},
  {
    id: 3,
    title: "Dressing Time Drama",
    category: "Everyday Battles",
    description: "1. Together with your child, choose 5 to 7 pre-approved school outfits that they like and that you are happy with.  2. Place them in a special drawer, bin, or section of the closet labeled the \"Yes Zone.\" Make the label fun and visible.   3.Tell your child: \"Each morning, you get to pick anything you want from your Yes Zone. All choices are good ones!\" Celebrate their choice to encourage independence.",
    whyThisMatters: "Giving kids limited choices helps them feel in control without becoming overwhelmed. This reduces morning resistance, builds confidence in decision-making, and turns chaos into calm.",
    parentTip: "Let your child help restock the Yes Zone every Sunday. This builds routine, a sense of responsibility, and ownership over their choices."
  },
  {
    id: 4,
    title: "The Why Machine",
    category: "Everyday Battles",
    description: "When your child asks \"Why?\", respond with: \"Hmm, great question. What do you think?\" Let them guess before you answer. Even if their guess is way off, praise their effort: \"I love how you are thinking it through!\"",
    whyThisMatters: "Encouraging children to guess turns endless \"why\" questions into chances for critical thinking. It helps kids build reasoning skills and reduces parent frustration by shifting the moment from reaction to reflection.",
    parentTip: "Treat it like a game. Each guess earns one \"brain point.\" When they reach 10 points, they get a high five or badge for being a curious thinker."
  },
  {
  id: 5,
  title: "The Bored Button",
  category: "Everyday Battles",
  description: "Create a 'Boredom Box' with three go-to activities your child can choose without asking you.",
  whyThisMatters: "Kids learn to take responsibility for their own time and decisions. This fosters independence and problem-solving skills.",
  parentTip: "Let your child pick three new boredom-buster activities every month. This gives them ownership and keeps the choices fresh."
},
{
  id: 6,
  title: "Leaving Without Tears",
  category: "Big Emotions",
  description: "Give a 5-minute warning and let your child help decide how to say goodbye to the place or people.",
  whyThisMatters: "Rituals make transitions feel safe and predictable for children. This helps reduce anxiety and emotional outbursts during goodbyes.",
  parentTip: "Practice saying goodbye at home during pretend play. When it’s time to leave in real life, say: \"Let's do our goodbye plan!\" Familiarity calms tears."
},
{
  id: 7,
  title: "Losing Isn't the End",
  category: "Big Emotions",
  description: "Before starting a game, talk about trying your best and cheering for others—win or lose. Competition and wanting to win help form character, and learning to accept losing is important.",
  whyThisMatters: "Games are great opportunities to learn resilience and emotional control.",
  parentTip: "After the game, ask: \"What did you learn today?\" Help them name one thing they did well."
},
  {
    id: 8,
    title: "I Want It My Way!",
    category: "Big Emotions",
    description: "Help your child take three deep breaths, name their feeling, and choose one calming action.",
    whyThisMatters: "Naming emotions is the first step toward emotional regulation.",
    parentTip: "Model the same strategy yourself during tough moments. Say out loud: \"I feel frustrated. I need to take three deep breaths and walk outside.\" They will follow your lead."
  },
  {
    id: 9,
    title: "Sorry Not Sorry",
    category: "Big Emotions",
    description: "Act out a short story where a character makes a mistake, apologizes, and is forgiven.",
    whyThisMatters: "Stories and play help kids understand real empathy without shame.",
    parentTip: "When your child struggles to apologize, try role-playing with toys. Let the stuffed animals say the words first."
  },
{
  id: 10,
  title: "The Jealous Jab",
  category: "Big Emotions",
  description: "When your child feels left out, talk about things they're proud of and what makes them special.",
  whyThisMatters: "Helping kids recognize their strengths eases envy and boosts self-worth.",
  parentTip: "Start a 'Proud Poster' with your child. Every time they feel left out, add something they are good at. Celebrate progress, not perfection."
},
{
  id: 11,
  title: "No Everything!",
  category: "Power Struggles",
  description: "Offer two choices within your boundary, like: \"Do you want to brush your teeth now or in two minutes?\"",
  whyThisMatters: "Giving controlled choices supports autonomy while maintaining limits.",
  parentTip: "Use the same two-choices format in many situations: meals, clothes, screen time. Consistency builds trust and cuts down on arguments."
},
  {
  id: 12,
  title: "I Do It Myself!",
  category: "Power Struggles",
  description: "Break the task into steps and use a 'Help Ladder,' where your child chooses when to ask for help.",
  whyThisMatters: "A clear scaffold lets kids build independence without feeling overwhelmed.",
  parentTip: "Create a 'Help Ladder' chart together. It can be a simple drawing with steps like: 1. Try it alone, 2. Ask a friend, 3. Ask a parent. This visual guide helps them see their progress."
},
  {
    id: 13,
    title: "Master Negotiator",
    category: "Power Struggles",
    description: "When your child wants to negotiate, use a \"Yes, Maybe, No\" list and explain your reasoning.",
    whyThisMatters: "Kids feel heard when they know why, even if the answer is no.",
    parentTip: "Write the list together. Use colors to show: \"Yes\" (green), \"Maybe\" (yellow), and \"No\" (red). This visual helps them understand your decisions and feel involved. Let them add ideas - they will feel heard even if the answer is no."
  },
  {
    id: 14,
    title: "Sharing Showdown",
    category: "Power Struggles",
    description: "Set a timer and clear turn-taking rules using a kitchen bell or hourglass during shared play.",
    whyThisMatters: "Sharing feels safer when the rules are clear and fair to everyone.",
    parentTip: " Prevent arguments during playtime by giving kids a structure they understand and trust. They will learn turn-taking, patience, fairness, and conflict resolution."
  },
  {
    id: 15,
    title: "The Bedtime Push",
    category: "Power Struggles",
    description: "Create a bedtime chart that your child decorates, with a three-step wind-down routine they control.",
    whyThisMatters: "Predictable routines help children feel safe and fall asleep more easily.",
    parentTip: "Let your child pick the bedtime chart design. It can be a drawing, stickers, or even a digital chart. This makes it fun and personal. Each night, let them choose the order of the three steps. This gives them ownership and makes bedtime smoother."
  }
];

export const getRandomTurnAroundMission = (): TurnAroundMission => {
  const randomIndex = Math.floor(Math.random() * turnAroundMissions.length);
  return turnAroundMissions[randomIndex];
};
