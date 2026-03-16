
export interface Article {
  id: string;
  category: "Strategy" | "Education" | "Lifestyle" | "News" | "Success";
  title: string;
  excerpt: string;
  image: string;
  color: string;
  date: string;
  readTime: string;
  content: string; // HTML content
  outline: { id: string; label: string }[];
}

const sampleContent = `
  <p class="mb-6 text-lg leading-relaxed text-slate-600">Debt can often feel like an insurmountable obstacle, a mountain that keeps growing no matter how much you climb. It affects not just your wallet, but your mental health, your relationships, and your future planning. But the truth is, the math of debt is solvable. It requires a strategic approach, a fundamental shift in mindset, and the right tools to accelerate your progress.</p>
  <p class="mb-8 text-slate-600 leading-relaxed">In this guide, we break down the mechanics of efficient repayment. Whether you are dealing with credit cards, student loans, or personal lines of credit, the principles of debt reduction remain constant. By understanding the underlying math and behavioral psychology, you can shave years off your repayment timeline.</p>
  
  <h2 id="section-1" class="text-3xl font-light text-slate-900 mb-4 mt-8">Phase 1: Analysis & Trap Identification</h2>
  <p class="mb-4 text-slate-600 leading-relaxed">Most people stay in debt not because they are irresponsible, but because of the powerful force of compound interest. When you make minimum payments, you are essentially paying "rent" on your money without ever owning it. Credit card companies design this system to keep you profitable to them for decades. A $10,000 balance at 20% APR paying the minimum can take over 25 years to pay off, costing you more in interest than the original purchase price.</p>
  <p class="mb-4 text-slate-600 leading-relaxed">To break free, you need to drastically lower the cost of borrowing. This is where consolidation comes in—trading a 25% APR for an 8% APR isn't just a small savings; it's a mathematical game changer. It puts thousands of dollars back into your principal payment rather than lining the pockets of lenders.</p>
  <p class="mb-6 text-slate-600 leading-relaxed">Furthermore, the psychological weight of seeing multiple balances can lead to "debt fatigue." Consolidating into a single, transparent number often provides the clarity needed to stay motivated.</p>

  <h2 id="section-2" class="text-3xl font-light text-slate-900 mb-4 mt-8">Phase 2: Strategic Implementation</h2>
  <p class="mb-4 text-slate-600 leading-relaxed">Once you have structured your debt efficiently (via consolidation or refinancing), the real work begins. You must commit to a lifestyle that prevents new debt accumulation. This often involves freezing your credit cards or switching to a cash-envelope system for discretionary spending. It's about breaking the habit loop of "buy now, pay later."</p>
  <p class="mb-4 text-slate-600 leading-relaxed">Successful aggressive repayment requires a three-pronged attack:</p>
  <ul class="list-disc pl-6 mb-6 text-slate-600 space-y-2">
    <li><strong>Audit your subscriptions:</strong> Ruthlessly cancel anything you haven't used in 30 days. Streaming services, gym memberships, and box subscriptions add up.</li>
    <li><strong>Automate savings:</strong> Even $50 a month into an emergency fund prevents new debt. You need a buffer so that when the car breaks down, you don't reach for the credit card again.</li>
    <li><strong>Visual tracking:</strong> Use a chart or app to watch your balance go down. Gamifying your progress releases dopamine, replacing the "shopper's high" with a "saver's high."</li>
  </ul>
  <p class="mb-6 text-slate-600 leading-relaxed">Remember, motivation gets you started, but habit keeps you going. Automate your payments to occur on payday so you never see the money in your checking account.</p>

  <h2 id="section-3" class="text-3xl font-light text-slate-900 mb-4 mt-8">Phase 3: Long-Term Wealth Building</h2>
  <p class="mb-4 text-slate-600 leading-relaxed">The goal isn't just to be debt-free; it's to build wealth. Every dollar you used to pay in interest is a dollar that can now earn interest for you in the market. The pathway from borrower to investor is shorter than you think once you stop the interest rate bleed.</p>
  <p class="mb-4 text-slate-600 leading-relaxed">Imagine redirecting that $500 monthly debt payment into a Roth IRA. Over 20 years, that isn't just $120,000 in savings; with compound growth, it could be over $300,000. This is the opportunity cost of debt.</p>
  <p class="mb-6 text-slate-600 leading-relaxed">Your journey doesn't end when the balance hits zero. It transitions into wealth accumulation, financial independence, and the ability to live life on your own terms.</p>

  <h2 id="section-4" class="text-3xl font-light text-slate-900 mb-4 mt-8">Common Pitfalls to Avoid</h2>
  <p class="mb-4 text-slate-600 leading-relaxed">Many borrowers fall into the "consolidation trap"—they clear their credit cards with a loan, feel rich, and immediately run the balances back up. This is a disaster scenario that leads to double the debt.</p>
  <p class="mb-6 text-slate-600 leading-relaxed">To avoid this, you must close old accounts or physically destroy the cards (while keeping the account open for credit age if necessary). Discipline is the bridge between goals and accomplishment.</p>

  <h2 id="section-5" class="text-3xl font-light text-slate-900 mb-4 mt-8">Final Thoughts</h2>
  <p class="mb-6 text-slate-600 leading-relaxed">There is no magic pill for debt, but there is a proven formula. Lower your rates, increase your payments, and change your habits. You have the power to rewrite your financial story starting today.</p>
`;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.id === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((a) => a.category === category);
}

export const categoryMeta: Record<Article["category"], { label: string; color: string; bgColor: string }> = {
  Strategy: { label: "Strategy", color: "text-blue-600", bgColor: "bg-blue-50" },
  Education: { label: "Education", color: "text-emerald-600", bgColor: "bg-emerald-50" },
  Lifestyle: { label: "Lifestyle", color: "text-purple-600", bgColor: "bg-purple-50" },
  News: { label: "News", color: "text-orange-600", bgColor: "bg-orange-50" },
  Success: { label: "Success Stories", color: "text-pink-600", bgColor: "bg-pink-50" },
};

export const articles: Article[] = [
  // STRATEGY
  {
    id: "strat-1",
    category: "Strategy",
    title: "The Snowball vs. Avalanche Method",
    excerpt: "Two debt payoff strategies dominate the conversation. We break down the math and psychology behind each to help you choose.",
    image: "https://picsum.photos/400/600?random=101",
    color: "from-blue-600 to-blue-400",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Understanding the Trap" },
      { id: "section-2", label: "The Strategy Shift" },
      { id: "section-3", label: "Long-Term Freedom" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "strat-2",
    category: "Strategy",
    title: "Consolidation vs. Settlement: The Risks",
    excerpt: "Settlement sounds great until you see your credit score. Why consolidation is the safer, smarter path for 90% of borrowers.",
    image: "https://picsum.photos/400/600?random=201",
    color: "from-blue-600 to-blue-400",
    date: "Oct 15, 2024",
    readTime: "10 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "What is Settlement?" },
      { id: "section-2", label: "The Credit Score Impact" },
      { id: "section-3", label: "Why Consolidation Wins" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "strat-3",
    category: "Strategy",
    title: "The 50/30/20 Rule Adjusted for Debt",
    excerpt: "The classic budgeting rule needs a tweak when you are in repayment mode. Here is how to allocate for aggressive payoff.",
    image: "https://picsum.photos/400/600?random=202",
    color: "from-blue-600 to-blue-400",
    date: "Oct 18, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Standard Budgeting" },
      { id: "section-2", label: "The Debt Modification" },
      { id: "section-3", label: "Automating Allocation" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "strat-4",
    category: "Strategy",
    title: "Balance Transfer Hacks & Pitfalls",
    excerpt: "0% APR cards can be a tool or a trap. Learn how to use balance transfers without getting hit with deferred interest.",
    image: "https://picsum.photos/400/600?random=203",
    color: "from-blue-600 to-blue-400",
    date: "Oct 20, 2024",
    readTime: "9 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The 0% APR Myth" },
      { id: "section-2", label: "Transfer Fees Explained" },
      { id: "section-3", label: "The Payoff Timeline" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "strat-5",
    category: "Strategy",
    title: "Is the Debt Avalanche Mathematically Superior?",
    excerpt: "While the snowball method offers quick wins, the avalanche method saves you the most money. Here's why the math matters.",
    image: "https://picsum.photos/400/600?random=204",
    color: "from-blue-600 to-blue-400",
    date: "Oct 22, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Math Explained" },
      { id: "section-2", label: "Comparing Interest Savings" },
      { id: "section-3", label: "Staying Motivated" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "strat-6",
    category: "Strategy",
    title: "The Hybrid Payoff Strategy",
    excerpt: "Can't decide between Snowball and Avalanche? A hybrid approach might be the psychological and financial balance you need.",
    image: "https://picsum.photos/400/600?random=205",
    color: "from-blue-600 to-blue-400",
    date: "Oct 25, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Best of Both Worlds" },
      { id: "section-2", label: "When to Switch" },
      { id: "section-3", label: "Tracking Progress" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },

  // EDUCATION
  {
    id: "edu-1",
    category: "Education",
    title: "Understanding Your Debt-to-Income Ratio",
    excerpt: "Your DTI is the secret number lenders look at before approving a loan. Here is how to calculate and improve it.",
    image: "https://picsum.photos/400/600?random=102",
    color: "from-emerald-600 to-emerald-400",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Calculating DTI" },
      { id: "section-2", label: "Why Lenders Care" },
      { id: "section-3", label: "Improving Your Ratio" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "edu-2",
    category: "Education",
    title: "APR vs. APY: What You Are Really Paying",
    excerpt: "Banks love to confuse these two terms. We clarify the difference so you know exactly how much interest is costing you.",
    image: "https://picsum.photos/400/600?random=301",
    color: "from-emerald-600 to-emerald-400",
    date: "Oct 08, 2024",
    readTime: "5 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Defining APR" },
      { id: "section-2", label: "Compound Interest" },
      { id: "section-3", label: "Reading the Fine Print" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "edu-3",
    category: "Education",
    title: "5 Factors That Hurt Your Credit Score",
    excerpt: "It is not just about missed payments. Credit utilization and age of accounts play a huge role in your score.",
    image: "https://picsum.photos/400/600?random=302",
    color: "from-emerald-600 to-emerald-400",
    date: "Sep 25, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Payment History" },
      { id: "section-2", label: "Utilization Ratio" },
      { id: "section-3", label: "Hard Inquiries" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "edu-4",
    category: "Education",
    title: "Secured vs. Unsecured Loans",
    excerpt: "Should you put your car or home up as collateral? We explain the risks and rewards of secured debt.",
    image: "https://picsum.photos/400/600?random=303",
    color: "from-emerald-600 to-emerald-400",
    date: "Sep 22, 2024",
    readTime: "9 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Collateral Basics" },
      { id: "section-2", label: "Risk Assessment" },
      { id: "section-3", label: "When to Choose Which" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "edu-5",
    category: "Education",
    title: "Hard vs. Soft Credit Inquiries",
    excerpt: "Applying for a loan? Know the difference between a check that hurts your score and one that doesn't.",
    image: "https://picsum.photos/400/600?random=304",
    color: "from-emerald-600 to-emerald-400",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Soft Pull" },
      { id: "section-2", label: "The Hard Pull" },
      { id: "section-3", label: "Minimizing Impact" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "edu-6",
    category: "Education",
    title: "What is a Charge-Off?",
    excerpt: "When a creditor gives up on collecting, it's called a charge-off. Here is what that means for your financial future.",
    image: "https://picsum.photos/400/600?random=305",
    color: "from-emerald-600 to-emerald-400",
    date: "Oct 30, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Definition & Timeline" },
      { id: "section-2", label: "Tax Implications" },
      { id: "section-3", label: "Repairing the Damage" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },

  // LIFESTYLE
  {
    id: "life-1",
    category: "Lifestyle",
    title: "Budgeting for Mental Health",
    excerpt: "Financial stress is real. Learn how to build a budget that prioritizes your well-being alongside your bank account.",
    image: "https://picsum.photos/400/600?random=103",
    color: "from-purple-600 to-purple-400",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Anxiety Loop" },
      { id: "section-2", label: "Budgeting for Joy" },
      { id: "section-3", label: "Therapy & Finance" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "life-2",
    category: "Lifestyle",
    title: "Dating While in Debt",
    excerpt: "Money talks are awkward. Here is how to have the 'debt conversation' with a partner without killing the romance.",
    image: "https://picsum.photos/400/600?random=401",
    color: "from-purple-600 to-purple-400",
    date: "Sep 30, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "When to Disclose" },
      { id: "section-2", label: "Joint Finances" },
      { id: "section-3", label: "Planning a Future" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "life-3",
    category: "Lifestyle",
    title: "Frugal Living Tips That Actually Work",
    excerpt: "Stop buying latte? No. Real tips on grocery arbitrage, negotiation, and cutting fixed costs.",
    image: "https://picsum.photos/400/600?random=402",
    color: "from-purple-600 to-purple-400",
    date: "Sep 15, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Grocery Hacking" },
      { id: "section-2", label: "Bill Negotiation" },
      { id: "section-3", label: "The Swap Economy" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "life-4",
    category: "Lifestyle",
    title: "Travel on a Shoestring Budget",
    excerpt: "You don't have to stay home just because you have debt. How to travel for pennies on the dollar.",
    image: "https://picsum.photos/400/600?random=403",
    color: "from-purple-600 to-purple-400",
    date: "Sep 01, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Off-Peak Travel" },
      { id: "section-2", label: "Credit Card Points" },
      { id: "section-3", label: "Staycations" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "life-5",
    category: "Lifestyle",
    title: "Side Hustles to Accelerate Payoff",
    excerpt: "Your 9-to-5 covers the bills, but a side hustle crushes the debt. Ideas for flexible income in 2024.",
    image: "https://picsum.photos/400/600?random=404",
    color: "from-purple-600 to-purple-400",
    date: "Oct 29, 2024",
    readTime: "9 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Digital Gigs" },
      { id: "section-2", label: "Service Based Hustles" },
      { id: "section-3", label: "Avoiding Burnout" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "life-6",
    category: "Lifestyle",
    title: "Minimalism and Debt Freedom",
    excerpt: "Selling your stuff isn't just about quick cash. It's about reshaping your relationship with consumerism.",
    image: "https://picsum.photos/400/600?random=405",
    color: "from-purple-600 to-purple-400",
    date: "Nov 01, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Purge" },
      { id: "section-2", label: "Mindful Consumption" },
      { id: "section-3", label: "Investing the Difference" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },

  // NEWS
  {
    id: "news-1",
    category: "News",
    title: "Interest Rates: What to Expect in 2024",
    excerpt: "The Fed's decisions impact your credit card APRs. Our analysts predict where rates are heading next quarter.",
    image: "https://picsum.photos/400/600?random=104",
    color: "from-orange-600 to-orange-400",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Fed Announcements" },
      { id: "section-2", label: "Impact on APR" },
      { id: "section-3", label: "Locking Rates Now" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "news-2",
    category: "News",
    title: "New Lending Laws Protect Borrowers",
    excerpt: "Recent legislation changes how lenders can collect. Know your rights under the new consumer protection acts.",
    image: "https://picsum.photos/400/600?random=501",
    color: "from-orange-600 to-orange-400",
    date: "Oct 02, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The CFPB Update" },
      { id: "section-2", label: "Collection Limits" },
      { id: "section-3", label: "Your Recourse" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "news-3",
    category: "News",
    title: "Credit Card Debt Hits All-Time High",
    excerpt: "Americans now owe over $1 Trillion. What this macroeconomic trend means for your personal loan approval odds.",
    image: "https://picsum.photos/400/600?random=502",
    color: "from-orange-600 to-orange-400",
    date: "Sep 28, 2024",
    readTime: "5 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Trillion Mark" },
      { id: "section-2", label: "Lender Tightening" },
      { id: "section-3", label: "Market Forecast" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "news-4",
    category: "News",
    title: "Student Loan Forgiveness Updates",
    excerpt: "The landscape of student loans keeps shifting. Here is the latest on SAVE plans and forgiveness initiatives.",
    image: "https://picsum.photos/400/600?random=503",
    color: "from-orange-600 to-orange-400",
    date: "Sep 20, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The SAVE Plan" },
      { id: "section-2", label: "Legal Challenges" },
      { id: "section-3", label: "Repayment Strategies" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "news-5",
    category: "News",
    title: "Global Economic Trends Affecting Loans",
    excerpt: "How international markets and inflation rates are trickling down to affect your personal loan options.",
    image: "https://picsum.photos/400/600?random=504",
    color: "from-orange-600 to-orange-400",
    date: "Nov 02, 2024",
    readTime: "6 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Global Inflation" },
      { id: "section-2", label: "Bank Liquidity" },
      { id: "section-3", label: "What It Means For You" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "news-6",
    category: "News",
    title: "Crypto and Debt: A Volatile Mix",
    excerpt: "More people are using crypto gains to pay off debt, but market volatility poses a massive risk to this strategy.",
    image: "https://picsum.photos/400/600?random=505",
    color: "from-orange-600 to-orange-400",
    date: "Oct 26, 2024",
    readTime: "7 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Crypto Bet" },
      { id: "section-2", label: "Tax Implications" },
      { id: "section-3", label: "Safer Alternatives" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },

  // SUCCESS STORIES
  {
    id: "success-1",
    category: "Success",
    title: "How Jane Paid Off $40k in 2 Years",
    excerpt: "A deep dive into the side-hustles and budgeting hacks one user employed to become debt-free in record time.",
    image: "https://picsum.photos/400/600?random=105",
    color: "from-pink-600 to-pink-400",
    date: "Oct 01, 2024",
    readTime: "11 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Wake Up Call" },
      { id: "section-2", label: "The Side Hustle" },
      { id: "section-3", label: "Debt Free Life" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "success-2",
    category: "Success",
    title: "From Medical Debt to Mortgage Approval",
    excerpt: "Mike thought his credit was ruined forever. See how he consolidated medical bills and bought his first home.",
    image: "https://picsum.photos/400/600?random=601",
    color: "from-pink-600 to-pink-400",
    date: "Sep 18, 2024",
    readTime: "9 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Accident" },
      { id: "section-2", label: "Negotiating Bills" },
      { id: "section-3", label: "Buying the House" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "success-3",
    category: "Success",
    title: "A Family of Four, Debt Free",
    excerpt: "Raising kids is expensive. The Harrison family shares their blueprint for living well without credit cards.",
    image: "https://picsum.photos/400/600?random=602",
    color: "from-pink-600 to-pink-400",
    date: "Sep 12, 2024",
    readTime: "12 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Cost of Living" },
      { id: "section-2", label: "Meal Planning" },
      { id: "section-3", label: "Teaching Kids Money" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "success-4",
    category: "Success",
    title: "Business Debt Turnaround",
    excerpt: "Sarah's small business almost went under. How a consolidation loan saved her inventory and her credit.",
    image: "https://picsum.photos/400/600?random=603",
    color: "from-pink-600 to-pink-400",
    date: "Aug 30, 2024",
    readTime: "8 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Cash Flow Crisis" },
      { id: "section-2", label: "The Loan Option" },
      { id: "section-3", label: "Profitable Again" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "success-5",
    category: "Success",
    title: "Retiring Early After Debt",
    excerpt: "Tom and Linda were in debt in their 40s. By 55, they were debt-free and on track for early retirement. Here's how.",
    image: "https://picsum.photos/400/600?random=604",
    color: "from-pink-600 to-pink-400",
    date: "Oct 21, 2024",
    readTime: "10 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "The Aggressive Plan" },
      { id: "section-2", label: "Downsizing" },
      { id: "section-3", label: "Investment Catch-Up" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  },
  {
    id: "success-6",
    category: "Success",
    title: "The Single Parent Payoff Journey",
    excerpt: "Balancing childcare, work, and debt is tough. Mark shares how he paid off $15k while raising two kids alone.",
    image: "https://picsum.photos/400/600?random=605",
    color: "from-pink-600 to-pink-400",
    date: "Nov 03, 2024",
    readTime: "9 min read",
    content: sampleContent,
    outline: [
      { id: "section-1", label: "Strict Budgeting" },
      { id: "section-2", label: "Community Support" },
      { id: "section-3", label: "Celebrating Small Wins" },
      { id: "section-4", label: "Common Pitfalls" },
      { id: "section-5", label: "Conclusion" }
    ]
  }
];
