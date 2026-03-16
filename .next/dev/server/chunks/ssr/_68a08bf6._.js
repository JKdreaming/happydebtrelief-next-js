module.exports = [
"[project]/data/articles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles,
    "categoryMeta",
    ()=>categoryMeta,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticlesByCategory",
    ()=>getArticlesByCategory
]);
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
function getArticleBySlug(slug) {
    return articles.find((a)=>a.id === slug);
}
function getArticlesByCategory(category) {
    return articles.filter((a)=>a.category === category);
}
const categoryMeta = {
    Strategy: {
        label: "Strategy",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    Education: {
        label: "Education",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50"
    },
    Lifestyle: {
        label: "Lifestyle",
        color: "text-purple-600",
        bgColor: "bg-purple-50"
    },
    News: {
        label: "News",
        color: "text-orange-600",
        bgColor: "bg-orange-50"
    },
    Success: {
        label: "Success Stories",
        color: "text-pink-600",
        bgColor: "bg-pink-50"
    }
};
const articles = [
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
            {
                id: "section-1",
                label: "Understanding the Trap"
            },
            {
                id: "section-2",
                label: "The Strategy Shift"
            },
            {
                id: "section-3",
                label: "Long-Term Freedom"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "What is Settlement?"
            },
            {
                id: "section-2",
                label: "The Credit Score Impact"
            },
            {
                id: "section-3",
                label: "Why Consolidation Wins"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Standard Budgeting"
            },
            {
                id: "section-2",
                label: "The Debt Modification"
            },
            {
                id: "section-3",
                label: "Automating Allocation"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The 0% APR Myth"
            },
            {
                id: "section-2",
                label: "Transfer Fees Explained"
            },
            {
                id: "section-3",
                label: "The Payoff Timeline"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Math Explained"
            },
            {
                id: "section-2",
                label: "Comparing Interest Savings"
            },
            {
                id: "section-3",
                label: "Staying Motivated"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Best of Both Worlds"
            },
            {
                id: "section-2",
                label: "When to Switch"
            },
            {
                id: "section-3",
                label: "Tracking Progress"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Calculating DTI"
            },
            {
                id: "section-2",
                label: "Why Lenders Care"
            },
            {
                id: "section-3",
                label: "Improving Your Ratio"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Defining APR"
            },
            {
                id: "section-2",
                label: "Compound Interest"
            },
            {
                id: "section-3",
                label: "Reading the Fine Print"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Payment History"
            },
            {
                id: "section-2",
                label: "Utilization Ratio"
            },
            {
                id: "section-3",
                label: "Hard Inquiries"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Collateral Basics"
            },
            {
                id: "section-2",
                label: "Risk Assessment"
            },
            {
                id: "section-3",
                label: "When to Choose Which"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Soft Pull"
            },
            {
                id: "section-2",
                label: "The Hard Pull"
            },
            {
                id: "section-3",
                label: "Minimizing Impact"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Definition & Timeline"
            },
            {
                id: "section-2",
                label: "Tax Implications"
            },
            {
                id: "section-3",
                label: "Repairing the Damage"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Anxiety Loop"
            },
            {
                id: "section-2",
                label: "Budgeting for Joy"
            },
            {
                id: "section-3",
                label: "Therapy & Finance"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "When to Disclose"
            },
            {
                id: "section-2",
                label: "Joint Finances"
            },
            {
                id: "section-3",
                label: "Planning a Future"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Grocery Hacking"
            },
            {
                id: "section-2",
                label: "Bill Negotiation"
            },
            {
                id: "section-3",
                label: "The Swap Economy"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Off-Peak Travel"
            },
            {
                id: "section-2",
                label: "Credit Card Points"
            },
            {
                id: "section-3",
                label: "Staycations"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Digital Gigs"
            },
            {
                id: "section-2",
                label: "Service Based Hustles"
            },
            {
                id: "section-3",
                label: "Avoiding Burnout"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Purge"
            },
            {
                id: "section-2",
                label: "Mindful Consumption"
            },
            {
                id: "section-3",
                label: "Investing the Difference"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Fed Announcements"
            },
            {
                id: "section-2",
                label: "Impact on APR"
            },
            {
                id: "section-3",
                label: "Locking Rates Now"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The CFPB Update"
            },
            {
                id: "section-2",
                label: "Collection Limits"
            },
            {
                id: "section-3",
                label: "Your Recourse"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Trillion Mark"
            },
            {
                id: "section-2",
                label: "Lender Tightening"
            },
            {
                id: "section-3",
                label: "Market Forecast"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The SAVE Plan"
            },
            {
                id: "section-2",
                label: "Legal Challenges"
            },
            {
                id: "section-3",
                label: "Repayment Strategies"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Global Inflation"
            },
            {
                id: "section-2",
                label: "Bank Liquidity"
            },
            {
                id: "section-3",
                label: "What It Means For You"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Crypto Bet"
            },
            {
                id: "section-2",
                label: "Tax Implications"
            },
            {
                id: "section-3",
                label: "Safer Alternatives"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Wake Up Call"
            },
            {
                id: "section-2",
                label: "The Side Hustle"
            },
            {
                id: "section-3",
                label: "Debt Free Life"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Accident"
            },
            {
                id: "section-2",
                label: "Negotiating Bills"
            },
            {
                id: "section-3",
                label: "Buying the House"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Cost of Living"
            },
            {
                id: "section-2",
                label: "Meal Planning"
            },
            {
                id: "section-3",
                label: "Teaching Kids Money"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Cash Flow Crisis"
            },
            {
                id: "section-2",
                label: "The Loan Option"
            },
            {
                id: "section-3",
                label: "Profitable Again"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "The Aggressive Plan"
            },
            {
                id: "section-2",
                label: "Downsizing"
            },
            {
                id: "section-3",
                label: "Investment Catch-Up"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
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
            {
                id: "section-1",
                label: "Strict Budgeting"
            },
            {
                id: "section-2",
                label: "Community Support"
            },
            {
                id: "section-3",
                label: "Celebrating Small Wins"
            },
            {
                id: "section-4",
                label: "Common Pitfalls"
            },
            {
                id: "section-5",
                label: "Conclusion"
            }
        ]
    }
];
}),
"[project]/components/BlogSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/articles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const BlogSection = ()=>{
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldScroll, setShouldScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const previewArticles = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["articles"].slice(0, 5);
    const scroll = (direction)=>{
        if (scrollRef.current) {
            const { current } = scrollRef;
            const cardWidth = current.firstElementChild?.clientWidth || 320;
            const gap = 24;
            const scrollAmount = cardWidth + gap;
            const maxScrollLeft = current.scrollWidth - current.clientWidth;
            if (direction === 'left') {
                if (current.scrollLeft <= 10) {
                    current.scrollTo({
                        left: maxScrollLeft,
                        behavior: 'smooth'
                    });
                } else {
                    current.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                }
            } else {
                if (current.scrollLeft >= maxScrollLeft - 10) {
                    current.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    current.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeoutId;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                timeoutId = setTimeout(()=>setShouldScroll(true), 4000);
                observer.disconnect();
            }
        }, {
            threshold: 0.1
        });
        if (scrollRef.current) observer.observe(scrollRef.current);
        return ()=>{
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shouldScroll) return;
        const intervalId = setInterval(()=>scroll('right'), 4000);
        return ()=>clearInterval(intervalId);
    }, [
        shouldScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-slate-50 overflow-hidden border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-center gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-light text-slate-900 mb-6 leading-tight",
                                children: [
                                    "Knowledge is Your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-600",
                                        children: "Best Asset."
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogSection.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8",
                                children: [
                                    "Expert-verified financial guides",
                                    "Unbiased lender reviews",
                                    "Community success stories"
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/BlogSection.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/articles",
                                className: "inline-flex px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                                children: [
                                    "View Learning Path ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogSection.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-2/3 w-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef,
                                className: "flex gap-6 overflow-x-auto py-10 px-1 snap-x snap-mandatory",
                                style: {
                                    scrollbarWidth: 'none'
                                },
                                children: previewArticles.map((article, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/articles/${article.id}`,
                                        className: "min-w-full md:min-w-[40%] h-[460px] rounded-[2.5rem] relative overflow-hidden group snap-start cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block",
                                        style: {
                                            WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: article.image,
                                                alt: article.title,
                                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 bg-gradient-to-t ${article.color} opacity-60 group-hover:opacity-80 transition-opacity`
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 p-8 text-white w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20",
                                                                children: article.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BlogSection.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    size: 14,
                                                                    className: "text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BlogSection.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BlogSection.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BlogSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-medium leading-tight mb-2",
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BlogSection.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/70 line-clamp-2 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 mt-2",
                                                        children: article.excerpt
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BlogSection.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BlogSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/BlogSection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mt-2 justify-center lg:justify-start pl-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('left'),
                                        className: "w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogSection.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('right'),
                                        className: "w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogSection.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogSection.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogSection.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogSection.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/BlogSection.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/BlogSection.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogSection;
}),
"[project]/app/calculator/CalculatorContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalculatorContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-ssr] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-ssr] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlogSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function CalculatorContent() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('consolidation');
    const [debtAmount, setDebtAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25000);
    const [currentRate, setCurrentRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(24);
    const [newRate, setNewRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mode === 'heloc' ? 8 : 12);
    const [term, setTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(36);
    const calculateLoanPayment = (principal, rate, months)=>{
        const monthlyRate = rate / 100 / 12;
        if (monthlyRate === 0) return principal / months;
        return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    };
    const currentMinPayment = calculateLoanPayment(debtAmount, currentRate, 180);
    const loanPayment = calculateLoanPayment(debtAmount, newRate, term);
    const loanSavings = currentMinPayment * 180 - loanPayment * term;
    const settlementPercentage = 0.50;
    const feePercentage = 0.20;
    const totalSettlementCost = debtAmount * (settlementPercentage + feePercentage);
    const settlementMonthlyDeposit = totalSettlementCost / term;
    const settlementSavings = debtAmount - totalSettlementCost;
    const iconList = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    ];
    const floatingIcons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: 15
        }).map((_, i)=>{
            const Icon = iconList[i % iconList.length];
            const left = Math.floor(Math.random() * 90) + 5;
            const duration = Math.floor(Math.random() * 10) + 15;
            const delay = Math.floor(Math.random() * 15);
            const size = Math.floor(Math.random() * 20) + 24;
            return {
                Icon,
                left,
                duration,
                delay,
                size
            };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-[#f8fcf5] via-[#e8f5df] to-[#d5eac4] pt-32 pb-24 relative overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
                        children: floatingIcons.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute text-brand-primary opacity-0 animate-float-up",
                                style: {
                                    left: `${item.left}%`,
                                    animationDuration: `${item.duration}s`,
                                    animationDelay: `-${item.delay}s`,
                                    top: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.Icon, {
                                    size: item.size,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-6 text-center relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-light text-slate-900 mb-6",
                                children: "Savings Calculator"
                            }, void 0, false, {
                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-slate-600 font-light max-w-2xl mx-auto",
                                children: "Compare your potential savings across all three pathways."
                            }, void 0, false, {
                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 pb-24 -mt-12 relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-1.5 rounded-2xl shadow-lg inline-flex relative border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode('consolidation'),
                                    className: `px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'consolidation' ? 'text-white' : 'text-slate-500'}`,
                                    children: "Loan"
                                }, void 0, false, {
                                    fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode('heloc'),
                                    className: `px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'heloc' ? 'text-white' : 'text-slate-500'}`,
                                    children: "HELOC"
                                }, void 0, false, {
                                    fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode('settlement'),
                                    className: `px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'settlement' ? 'text-white' : 'text-slate-500'}`,
                                    children: "Settlement"
                                }, void 0, false, {
                                    fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-1.5 bottom-1.5 w-[calc(33.33%-4px)] rounded-xl transition-all duration-300 ${mode === 'consolidation' ? 'translate-x-0 bg-brand-primary' : mode === 'heloc' ? 'translate-x-full bg-indigo-600' : 'translate-x-[200%] bg-orange-500'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/calculator/CalculatorContent.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-medium text-slate-800 mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                size: 20,
                                                className: mode === 'settlement' ? 'text-orange-500' : mode === 'heloc' ? 'text-indigo-600' : 'text-brand-primary'
                                            }, void 0, false, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            "Plan Inputs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2",
                                                        children: "Total Debt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: debtAmount,
                                                                onChange: (e)=>setDebtAmount(Number(e.target.value)),
                                                                className: "w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            mode !== 'settlement' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2",
                                                        children: "New APR (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: newRate,
                                                        onChange: (e)=>setNewRate(Number(e.target.value)),
                                                        className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-orange-50 rounded-xl text-xs text-orange-800 border border-orange-100",
                                                children: "Estimated ~50% principal reduction before program fees."
                                            }, void 0, false, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2",
                                                        children: "Plan Duration (Months)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: term,
                                                        onChange: (e)=>setTerm(Number(e.target.value)),
                                                        className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "24",
                                                                children: "24 Months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "36",
                                                                children: "36 Months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "48",
                                                                children: "48 Months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "60",
                                                                children: "60 Months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${mode === 'settlement' ? 'bg-orange-600' : mode === 'heloc' ? 'bg-indigo-900' : 'bg-slate-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-light text-white/80 mb-8 flex items-center gap-2",
                                                children: [
                                                    mode === 'heloc' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 58
                                                    }, this),
                                                    " Results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/60 text-xs mb-1",
                                                                children: "Monthly Payment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-5xl font-light",
                                                                children: [
                                                                    "$",
                                                                    Math.round(mode === 'settlement' ? settlementMonthlyDeposit : loanPayment)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/10 p-6 rounded-2xl backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/60 text-xs mb-1",
                                                                children: "Total Savings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-3xl font-bold",
                                                                children: [
                                                                    "$",
                                                                    Math.round(mode === 'settlement' ? settlementSavings : Math.max(0, loanSavings)).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/get-started",
                                            className: `block w-full py-4 rounded-xl font-bold text-center bg-white ${mode === 'settlement' ? 'text-orange-600' : mode === 'heloc' ? 'text-indigo-900' : 'text-slate-900'}`,
                                            children: "See Your Real Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/calculator/CalculatorContent.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/calculator/CalculatorContent.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/calculator/CalculatorContent.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_68a08bf6._.js.map