/*Write code for a random message generator, I have chosen one that gives inspiration quotes and 
also tells you an interesting fact about success and 
also gives you an message for things to do that can to improve your life. 
*/


//Created an object that contains arrays with the messages stored. 
const messages = {
    quotes : [  'Quote : When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
                'Quote : \'The only way to do great work is to love what you do.\' - Steve Jobs', 
                'Quote : \'Success is not final, failure is not fatal: it is the courage to continue that counts.\' - Winston Churchill',
                'Quote : \'What you get by achieving your goals is not as important as what you become by achieving your goals.\' - Zig Ziglar',
                'Quote : \'The best way to predict the future is to invent it.\' - Alan Kay',
                'Quote : \'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.\' - Christian D Larson',
                'Quote : \'If you want to live a happy life, tie it to a goal, not to people or things.\' - Albert Einstein',
                'Quote : \'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\' - Albert Schweitzer',
                'Quote : \'Challenges are what make life interesting and overcoming them is what makes life meaningful.\' - Joshua J. Marine',
                'Quote : \'You must be the change you wish to see in the world.\' - Mahatma Gandhi',
                'Quote : \'Your time is limited, don\'t waste it living someone else\'s life.\'  - Steve Jobs',
                'Quote : \'The only person you are destined to become is the person you decide to be.\' - Ralph Waldo Emerson',
                'Quote : \'You miss 100% of the shots you don\'t take.\' - Wayne Gretzky',
                'Quote : \'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.\' - William James'
            ],
    facts : [
                'Fact : Success is subjective and can mean different things to different people.',
                'Fact : Success is not an overnight phenomenon; it takes time, effort, and dedication.',
                'Fact : Success is often a result of hard work, persistence, and perseverance.',
                'Fact : Success requires a positive mindset, optimism, and the willingness to take risks.',
                'Fact : Success often involves taking calculated risks and learning from failures.',
                'Fact : Success is not only measured by material wealth but also by personal fulfillment and happiness.',
                'Fact : Successful people often have a clear vision and goals, and they work towards achieving them.',
                'Fact : Success requires discipline, self-control, and the ability to stay focused on the task at hand.',
                'Fact : Successful people often have a strong support network of family, friends, and mentors.',
                'Fact : Success is often the result of continuous learning, self-improvement, and personal growth.',
                'Fact : Success can be achieved at any age or stage of life.',
                'Fact : Success is not always easy, and there will be obstacles and challenges along the way.',
                'Fact : Success requires flexibility and adaptability to changing circumstances.',
                'Fact : Success often involves developing good habits and routines.',
                'Fact : Success is a journey, not a destination, and it requires ongoing effort and commitment to maintain.'
            ],
    tips : [
        'Tip - Set clear goals: Define what success means to you and set specific and measurable goals to achieve it.',
        'Tip - Create a plan: Develop a roadmap to achieve your goals and break it down into actionable steps.',        
        'Tip - Take action: Take consistent and purposeful action towards your goals, and don\'t let fear or self-doubt hold you back.',        
        'Tip - Stay focused: Avoid distractions and stay focused on your goals, even when faced with setbacks or obstacles.',        
        'Tip - Develop good habits: Cultivate habits that support your success, such as regular exercise, good sleep habits, and a healthy diet.',        
        'Tip - Learn from failure: Embrace failure as an opportunity to learn and grow, and use those lessons to make improvements and adjustments.',        
        'Tip - Surround yourself with positive influences: Seek out people who inspire and motivate you, and avoid negative or toxic people who drain your energy.',        
        'Tip - Continuously learn and improve: Read, take courses, seek out mentorship, and always strive to expand your knowledge and skills.',        
        'Tip - Take risks: Don\'t be afraid to take calculated risks, try new things, and step outside of your comfort zone.',        
        'Tip - Be resilient: Develop a resilient mindset that allows you to bounce back from setbacks and challenges.',        
        'Tip - Practice self-care: Take care of your physical, emotional, and mental health by practicing self-care and self-compassion.',        
        'Tip - Be persistent: Don\'t give up when faced with obstacles or challenges, and maintain a strong sense of determination and perseverance.',        
        'Tip - Be accountable: Take ownership of your actions and decisions, and hold yourself accountable for your success.',        
        'Tip - Build a support system: Surround yourself with a network of supportive friends, family, and colleagues who can provide encouragement and guidance.',        
        'Tip - Celebrate your successes: Take time to acknowledge and celebrate your achievements along the way, and use that positive energy to fuel your continued success.'
           ],
}

/*
console.log(messages.quotes[Math.round(Math.random() * messages.quotes.length)]);
console.log(messages.facts[Math.round(Math.random() * messages.facts.length)]);
console.log(messages.tips[Math.round(Math.random() * messages.tips.length)]);

console.log(Math.round(Math.random() * messages.quotes.length));
*/

//Create an index of messages to use when randomly generating 
const quotesIndex = messages.quotes.length - 1;
const factsIndex = messages.facts.length - 1;
const tipsIndex = messages.tips.length - 1;

//Creating a function that generates a random message (excuse me for putting this all oon one line, I )
function generateMessage(){
    console.log(`${messages.quotes[Math.round(Math.random() * quotesIndex)]} \n${messages.facts[Math.round(Math.random() * factsIndex)]} \n${messages.tips[Math.round(Math.random() * tipsIndex)]}`)
    }
    
generateMessage();
