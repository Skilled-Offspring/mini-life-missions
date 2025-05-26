
export interface Mission {
  id: number;
  title: string;
  category: "Money Smart" | "Healthy Habits" | "Confidence & Connection";
  description: string;
  whyThisMatters: string;
  parentTip?: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Coin Match-Up",
    category: "Money Smart",
    description: "Ask your child to find one penny, one nickel, one dime and one quarter. Together, line them up by value, and say their names out loud.",
    whyThisMatters: "Kids need repeated hands-on exposure to understand money.",
    parentTip: "This quick activity builds coin recognition and value comparison. Saying the coin names out loud reinforces vocabulary, while lining them up helps kids connect size, color, and value. Do it regularly—at home, in the car, or before a purchase—so they start to see coins as tools, not just shiny objects."
  },
  {
    id: 2,
    title: "Grocery Decision Duo",
    category: "Money Smart",
    description: "At the store, pick two snacks—one around $3 meant for one person, and one around $5 meant for two people. Ask your child: \"We can only choose one snack. Which one would you pick and why?\"",
    whyThisMatters: "Real-time trade-off thinking builds budgeting instincts.",
    parentTip: "This mission helps your child think through everyday money decisions. It's not just about choosing the cheaper snack—it's about learning to consider value, sharing, and how choices affect future options. They might choose the $3 snack and say, \"Let's save the $2 for something else.\" Or they might choose the $5 snack and say, \"We can both enjoy it, and it's cheaper than buying two $3 snacks.\" These tiny decisions build real budgeting instincts over time."
  },
  {
    id: 3,
    title: "The $5 Wishlist",
    category: "Money Smart",
    description: "Let your child write down three things they want under $5. Then ask, \"Which one would you use the most?\"",
    whyThisMatters: "Helps kids prioritize based on value, not impulse.",
    parentTip: "This mission teaches kids to compare wants with a purpose. It nudges them to think about how much use or joy they'll get out of something—not just how fun it sounds in the moment. It also opens up great conversations about smart spending, delayed gratification, and making thoughtful choices with limited money."
  },
  {
    id: 4,
    title: "Jar Challenge",
    category: "Money Smart",
    description: "Give your child 6 jars or cups labeled: Needs, Wants, Education, Emergency, Giving, and Investment. Hand them $1 in coins and let them decide how to divide it. Ask, \"Why did you choose to put the money there?\"",
    whyThisMatters: "Visual budgeting is powerful at this age—it helps kids internalize the idea that money has different jobs.",
    parentTip: "This mission introduces your child to real-world money categories. Each jar teaches a purpose: \"Needs for essentials,\" \"Wants for fun and extras,\" \"Education for learning tools or experiences,\" \"Emergency for surprise problems,\" \"Giving to help others,\" and \"Investment to grow money over time.\" Let your child decide how to divide the $1 and explain why. There's no right or wrong—just insight into how they think. The goal is to spark thoughtful conversations and lay the foundation for lifelong money confidence."
  },
  {
    id: 5,
    title: "Money Memory Game",
    category: "Money Smart",
    description: "Show your child five items with prices (toys or household items). Then cover the prices and ask: Which one was the most expensive?",
    whyThisMatters: "Builds price awareness and memory.",
    parentTip: "This game sharpens your child's awareness of how much things cost—a skill that leads to better decision-making. Use everyday objects like cereal, soap, socks, or snacks with their prices. Ask which was most expensive, least expensive, or which item felt \"worth it.\" These short memory games build price-checking habits they'll use for life."
  },
  {
  id: 6,
  title: "Change Maker Mission",
  category: "Money Smart",
  description: "Give your child a challenge: \"Can you make 25 cents using only four coins?\" Let them experiment with real or play coins. Ask, \"Is there more than one way to do it?\"",
  whyThisMatters: "Strengthens coin value recognition and flexible problem-solving.",
  parentTip: "This hands-on puzzle helps your child understand how different coins add up to the same value. It's not just about memorizing—it’s about thinking creatively with money. If they find one solution (two dimes and one nickel), prompt them to try another (one quarter). Let them explain their thinking—it boosts both math and money skills."
},
{
  id: 7,
  title: "Label Detective",
  category: "Healthy Habits",
  description: "Grab two snacks and read the sugar grams together. Ask, \"Which has more sugar?\"",
  whyThisMatters: "Builds early nutrition label awareness.",
  parentTip: "This mission introduces your child to the idea that not all snacks are the same, even if they look similar. Learning to read nutrition labels helps kids make smart choices early. Start with sugar, then later explore fat, fiber, or ingredients. You don't need to ban sugary snacks—just start asking, \"Is this an everyday food or a sometimes treat?\" It plants the seed for mindful eating."
},
{
  id: 8,
  title: "Snack Switch",
  category: "Healthy Habits",
  description: "Offer a sugary snack one day and a whole food snack (like fruit or cheese) another day. About 20 minutes after eating, ask: \"How does your body feel?\" Bonus tip for parents: Set a timer if needed! You could say: \"Let’s check in with your body in 20 minutes and see what it tells us.\"",
  whyThisMatters: "Teaches kids to notice how different foods affect their energy and mood.",
  parentTip: "Split this mission across two snack times or days. First, let them enjoy a sweet snack, then later try something whole and nourishing. Ask simple reflection questions after each one: \"Do you feel full or still hungry?\" \"Do you feel ready to play or kind of sleepy?\" This builds body awareness and helps kids notice how food affects focus, energy, and emotions—without guilt or pressure."
},
{
  id: 9,
  title: "Water Buddy",
  category: "Healthy Habits",
  description: "Set a timer for two hours. Ask your child to drink one glass of water before it rings. You can name the timer something fun, like \"The Water Dragon!\"",
  whyThisMatters: "Forms healthy hydration habits.",
  parentTip: "Kids often forget to drink water unless it's part of a game or routine. This mission helps make hydration fun and easy. Drinking water regularly supports focus, digestion, mood, and energy. You can set a few \"Water Buddy\" timers throughout the day, especially during screen time or outdoor play. Let your child track how many times they beat the timer with a sticker or tally!"
},
{
  id: 10,
  title: "Make-a-Plate Game",
  category: "Healthy Habits",
  description: "Have your child draw a plate with healthy foods for breakfast. Ask them to explain their choices—what’s on it, and why they picked it!",
  whyThisMatters: "Planning meals builds food literacy and confidence.",
  parentTip: "This mission helps kids think ahead and recognize what a balanced meal might look like. Encourage them to include items from multiple food groups: fruit (energy and vitamins), grain (like toast or oatmeal for fuel), protein (like eggs or yogurt to build muscles), veggies (like spinach or tomatoes—even at breakfast!), and dairy or healthy fats (like cheese, milk, or nut butter). Let them get creative—this isn't about perfection. Drawing and explaining builds both nutrition knowledge and decision-making skills."
},
{
  id: 11,
  title: "Compliment Challenge",
  category: "Confidence & Connection",
  description: "Ask your child to give one genuine compliment to someone today. Reflect at bedtime: \"How did they react?\"",
  whyThisMatters: "Builds empathy and verbal courage.",
  parentTip: "Compliments are powerful tools for connection. This mission teaches kids how words can affect others. Praise specific compliments, like, 'I liked how you noticed your friend’s drawing.' At bedtime, reflect on how giving the compliment made them feel—it helps them internalize the joy of kindness."
},
{
  id: 12,
  title: "Feelings Freeze Frame",
  category: "Confidence & Connection",
  description: "Say an emotion (happy, mad, sad, worried) and ask your child to show it with their face and body—no words.",
  whyThisMatters: "Boosts emotional intelligence and nonverbal skills.",
  parentTip: "Nonverbal expression is a key part of emotional intelligence. This game helps kids connect body language to feelings. Make it fun—join in, guess each other's emotions, and use it later when big feelings show up by saying, \"Can you show me how you feel with your body?\""
},
{
  id: 13,
  title: "Mirror Talk",
  category: "Confidence & Connection",
  description: "Look in a mirror and say one nice thing about yourself. You go first.",
  whyThisMatters: "Builds self-esteem and expressive language.",
  parentTip: "Many kids struggle to say kind things about themselves out loud. Go first and model it: \"I like that I kept trying today.\" This sets the tone. Mirror talk may feel silly at first, but over time it helps kids create a kind inner voice they’ll carry into tough moments."
},
{
  id: 14,
  title: "Tell Me More",
  category: "Confidence & Connection",
  description: "At dinner, ask a question like, \"What was something weird that happened today?\" and follow up with: \"Tell me more.\"",
  whyThisMatters: "Teaches deeper sharing.",
  parentTip: "This mission helps shift from surface-level talk to real connection. Avoid jumping in with advice or reactions—just say, 'Tell me more' and really listen. The goal is to help your child feel heard, which builds trust and opens the door to future conversations."
},
{
  id: 15,
  title: "Voice Volume Practice",
  category: "Confidence & Connection",
  description: "Play with voice volume — whispering, soft, medium, and loud. Ask: \"When would each be okay to use?\"",
  whyThisMatters: "Helps kids self-regulate and understand tone.",
  parentTip: "Many kids get \"too loud\" warnings without ever being taught what \"loud\" or \"soft\" really means. Practicing volume playfully helps them internalize control. Link each volume to a real setting: whisper for the library, loud for the playground. This builds social awareness and self-regulation."
},
  {
  id: 16,
  title: "The Green Challenge",
  category: "Healthy Habits",
  description: "Eat one green fruit or veggie today. Ask: \"Can you name it and learn what it does for your body?\"",
  whyThisMatters: "Green foods support growing brains and bones.",
  parentTip: "Green foods like spinach, broccoli, and peas are full of chlorophyll, folate, and fiber. These nutrients support brain development, strong bones, and healthy digestion. Invite your child to pick a green food and talk about its 'superpower.'"
},
{
  id: 17,
  title: "The Orange Power-Up",
  category: "Healthy Habits",
  description: "Find and eat something orange (like a carrot or sweet potato). What does it do for your body?",
  whyThisMatters: "Orange foods help build strong eyesight and immunity.",
  parentTip: "Orange foods like carrots, sweet potatoes, and oranges are packed with beta-carotene, which the body converts to vitamin A. This nutrient supports healthy vision, immune function, and skin. Make it fun by asking, 'What do you think this orange food does for your eyes?' Let them guess before explaining that orange foods help us see better, especially in dim light!"
},
{
  id: 18,
  title: "The Red Boost",
  category: "Healthy Habits",
  description: "Pick a red food and eat it today. Why might it be good for your heart?",
  whyThisMatters: "Red foods protect the heart and keep blood healthy.",
  parentTip: "Red foods like tomatoes, strawberries, and red peppers contain lycopene and anthocyanins—powerful antioxidants that support heart health and circulation. Ask your child to put their hand on their heart and feel it beating, then explain: 'Red foods help keep your heart strong and your blood healthy!' Make the connection between the red color and their red blood."
},
{
  id: 19,
  title: "The Blue-Purple Protector",
  category: "Healthy Habits",
  description: "Eat a blue or purple food today—bonus points if it stains your tongue!",
  whyThisMatters: "These foods protect the brain and help the body heal.",
  parentTip: "Blue and purple foods like blueberries, grapes, and eggplant contain anthocyanins—the same compounds that make them colorful! These nutrients protect brain cells and help with memory. After eating, ask: 'Do you feel smarter?' It's playful, but these foods genuinely support brain development and cognitive function."
},
{
  id: 20,
  title: "The White Energy Boost",
  category: "Healthy Habits",
  description: "Try a white or light brown food like garlic, cauliflower, or bananas. How does it help you move and think?",
  whyThisMatters: "White foods often give the body energy and fight germs.",
  parentTip: "White foods like bananas, cauliflower, and garlic contain potassium, allicin, and other compounds that support energy production and immune function. Bananas are especially great before physical activity. Ask: 'How do you feel after eating this?' Help them notice sustained energy rather than a sugar crash."
},
  {
  id: 21,
  title: "Brown Power Fuel",
  category: "Healthy Habits",
  description: "Eat something brown today—like whole grain bread, oats, or lentils. Ask: \"What do you think this food does for your body?\"",
  whyThisMatters: "Brown foods give lasting energy and support digestion.",
  parentTip: "Brown whole grains and legumes provide complex carbohydrates and fiber—the body's preferred fuel for sustained energy. Unlike simple sugars that cause energy spikes and crashes, these foods provide steady fuel for hours. Perfect for before school or activities when kids need lasting focus and energy."
},
{
  id: 22,
  title: "Black Brain Boost",
  category: "Healthy Habits",
  description: "Try a black-colored food like blackberries, black beans, or chia seeds. Ask: \"How does this food help your brain or body?\"",
  whyThisMatters: "Black foods are rich in antioxidants and support brain health.",
  parentTip: "Black foods are antioxidant powerhouses! Blackberries, black beans, and chia seeds contain some of the highest levels of brain-protective compounds. These nutrients help with memory, focus, and protecting developing brain cells. Make it memorable: 'Black foods make your brain happy!'"
},
{
  id: 23,
  title: "Fruit Finder",
  category: "Healthy Habits",
  description: "Today, try a new fruit or build a \"fruit rainbow\" on your plate. Can you name what each color does for your body?",
  whyThisMatters: "Fruits are full of vitamins and natural energy that help the body stay healthy and strong.",
  parentTip: "Fruits provide natural sugars for quick energy, plus vitamins, minerals, and fiber for sustained health. Creating a 'fruit rainbow' teaches kids that variety matters—different colors provide different nutrients. This visual approach makes nutrition concrete rather than abstract. Let them be the 'rainbow detective' finding each color."
},
{
  id: 24,
  title: "Veggie Explorer",
  category: "Healthy Habits",
  description: "Eat a vegetable today you don’t usually eat—try it raw, dipped, or cooked a new way. Can you guess what its color does?",
  whyThisMatters: "Vegetables give your child the building blocks to grow, fight off sickness, and stay energized.",
  parentTip: "Trying vegetables in different forms (raw, cooked, dipped) helps kids discover preferences and reduces food aversion. The key is exposure without pressure. If they don't like it this time, try again in a few weeks prepared differently. It often takes 10+ exposures to a new food before kids accept it."
},
{
  id: 25,
  title: "Grain Brain Boost",
  category: "Healthy Habits",
  description: "Choose a whole grain food today—like oatmeal, brown bread, or popcorn. What kind of energy do you think it gives you?",
  whyThisMatters: "Whole grains give long-lasting energy and keep the brain focused.",
  parentTip: "Whole grains contain B vitamins and complex carbohydrates that fuel brain function and help maintain steady blood sugar. This prevents the afternoon energy crash many kids experience. Point out the difference: 'This gives you energy that lasts, not energy that disappears quickly.'"
},
 {
  id: 26,
  title: "Protein Power-Up",
  category: "Healthy Habits",
  description: "Eat a protein-rich food today—like eggs, beans, or chicken. Ask: \"How does protein help your body?\"",
  whyThisMatters: "Protein helps muscles grow, repairs the body, and gives strength.",
  parentTip: "Protein provides amino acids—the building blocks for muscles, organs, and even brain chemicals that affect mood and focus. Kids need protein throughout the day, not just at dinner. After eating protein, ask: 'Can you feel your muscles getting stronger?' It helps them connect food to function."
},
{
  id: 27,
  title: "Dairy Strong Bones",
  category: "Healthy Habits",
  description: "Drink milk or eat cheese or yogurt today. Then do five jumps and say, \"I’ve got strong bones!\"",
  whyThisMatters: "Dairy builds strong bones, teeth, and muscles.",
  parentTip: "Calcium and vitamin D in dairy products are essential for growing bones and teeth. The jumping activity makes the connection physical and memorable. For non-dairy families, emphasize calcium-rich alternatives like fortified plant milks, leafy greens, or canned fish with soft bones."
},
{
  id: 28,
  title: "Healthy Fat Hero",
  category: "Healthy Habits",
  description: "Try a food today with healthy fat—like avocado, peanut butter, or seeds. Ask: \"What does this do for your brain?\"",
  whyThisMatters: "Healthy fats help brains grow, boost focus, and protect organs.",
  parentTip: "Healthy fats from sources like avocados, nuts, and seeds are crucial for brain development, hormone production, and absorbing fat-soluble vitamins. Many parents fear all fats, but growing brains need these nutrients. Explain: 'Your brain is mostly fat, so it needs good fats to grow and work well!'"
},
{
  id: 29,
  title: "Quarter Challenge",
  category: "Money Smart",
  description: "Give your child 10 quarters and ask: 'How many different ways can you group these?' Let them make piles of 2s, 4s, 5s, or 10s. Then ask: 'Which groups help you count faster?'",
  whyThisMatters: "Learning to group and skip-count with money builds mental math skills and efficiency.",
  parentTip: "This mission teaches the foundation of multiplication and efficient counting. When they group by 4s, they learn skip-counting patterns that make handling larger amounts easier later. Four quarters are $1. Praise different grouping strategies: 'I love how you found good ways to organize the same quarters!'"
},
{
  id: 30,
  title: "Price Detective",
  category: "Money Smart",
  description: "At home or in stores, ask your child to find three items and guess which costs the most. Then reveal the actual prices. Ask: 'What clues helped you guess?'",
  whyThisMatters: "Developing price intuition helps kids make smarter spending decisions throughout life.",
  parentTip: "This game sharpens their ability to estimate value and notice pricing patterns. Common clues kids discover: size, brand, packaging quality, or where items are placed in stores. Don't worry about being exactly right—the goal is building awareness of how much things cost relative to each other."
},
{
  id: 31,
  title: "The Snack Shop Budget",
  category: "Money Smart",
  description: "Create a pretend snack shop at home. Give your child $5 in pretend money. Offer five snack options with different prices (e.g., popcorn: $1, apple slices: $2, juice box: $3, cookie: $2, trail mix: $4). Let them choose how to spend their money and ask, 'Do you want to spend it all or save some?'",
  whyThisMatters: "This hands-on game teaches kids to prioritize, weigh options, and make trade-offs—key parts of budgeting.",
  parentTip: "This mission helps kids practice decision-making with limited money. Use real snacks and paper price tags to make it fun. Afterward, reflect with them: 'Why did you pick those snacks?' or 'Would you make different choices next time?' This builds their understanding of value, spending limits, and saving."
}
];

export const categoryColors = {
  "Money Smart": "money",
  "Healthy Habits": "health",
  "Confidence & Connection": "communication"
};

export const getRandomMission = (): Mission => {
  const randomIndex = Math.floor(Math.random() * missions.length);
  return missions[randomIndex];
};
