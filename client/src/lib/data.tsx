// ============================================================
// Peninsula Disc Golf Club — Site Data
// Design: Outdoor Adventure Editorial
// ============================================================

import { ReactNode } from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "tournament" | "league" | "clinic" | "doubles" | "volunteer";
  description: string;
  longDescription: ReactNode;
  registrationUrl?: string;
  registrationLabel?: string;
  directionsUrl?: string;
  customDateDisplay?: string;
  dateRange?: string;
  maxPlayers?: number;
  entryFee?: string;
  divisions?: string[];
  image?: string;
  featured?: boolean;
}

export interface BoardMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  yearsServing?: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: "news" | "tournament-recap" | "course-update" | "community" | "tips";
  excerpt: string;
  content: string;
  image?: string;
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: "spring-league",
    title: "Tuesday / Thursday Spring Season",
    date: "2026-03-10",
    time: "Flex start",
    location: "Emerald Hills Disc Golf Course, Redwood City",
    category: "league",
    description: "Flex start league every Tuesday and Thursday. All skill levels welcome. Play solo or in groups.",
    longDescription: (
      <>
        <p><b>League Info</b></p>
        <p>The Peninsula Disc Golf Club Weekly is taking the Bay Area by storm! A UDisc Handicap league, this flex start league invites players of all skills levels to compete for both bag tags and cash prizes.</p>
        <p><b>Finding a Group</b></p>
        <p>Email <a className="underline" href="mailto:peninsuladiscgolf@gmail.com">peninsuladiscgolf@gmail.com</a> to find a group or get more information.</p>
        <p><b>Finances</b></p>
        <p>Bag tag: $25/year (also gets you discounted greens fees)</p>
        <p>League fee: $5 per round</p>
        <p>Ace pot: $1 per round (optional)</p>
        <p>Greens fees: $10 per round (with bag tag), $18 otherwise</p>
        <p>Please send league payments to <a className="underline" href="https://venmo.com/code?user_id=1771204499210240334&created=1752794879">@Michael-Regula</a> on Venmo.</p>
        <p>You are required to pay the league fee for the first round that you play in the league, which will establish your handicap. You will not be eligible for the payouts in your first round. You will be eligible for payouts in all subsequent rounds.</p>
        <p>Payments must be made before you start your round to be eligible for payouts and the ace pot.</p>
        <p><b>Bag Tags</b></p>
        <p>Work your way all the way up to #1 tag by the end of the year! Bag tags should be swapped within groups based on the raw (non-handicap) score.</p>
        <p><b>Payouts</b></p>
        <p>Top 40% payout (PDGA flat curve)</p>
        <p>Payouts are calculated based on the UDisc handicap scores.</p>
        <p><b>Group Requirements</b></p>
        <p>You are able to play in this league solo and be eligible for the league payouts. You must play in a group of 3 or more to be eligible for the ace pot.</p>
      </>
    ),
    entryFee: "$5 league + $10 green fees (with bag tag)",
    registrationUrl: "https://udisc.com/events?courseId=9gK8YyTJsy3wBMwNX&quickFilter=league",
    registrationLabel: "Udisc Event",
    directionsUrl: "https://maps.app.goo.gl/jCxhowx5SmVsJvvE6",
    customDateDisplay: "Tuesdays and Thursdays from March 10 to June 11, 2026",
    image: "/manus-storage/eh_conrad_hole16_154a8af3.jpg",
    featured: true,
  },

  {
    id: "monday-doubles",
    title: "Monday Doubles League",
    date: "2026-03-23",
    time: "5:00 PM",
    location: "Villa Maria Disc Golf Course, Cupertino",
    category: "doubles",
    description: "Weekly Doubles league every Monday. All skill levels welcome. Play in pairs and compete for weekly prizes.",
    longDescription: (
      <>
        <p><b>League Info</b></p>
        <p>People are saying it's the best dubs in the Peninsula!</p>
        <p>All skills levels are welcome to enjoy the good vibes and the beautiful disc golf at Villa Maria Disc Golf Course at Stevens Creek County Park.</p>
        <hr />
        <p><i>We offer a COMPETITIVE division and a RECREATIONAL division.</i></p>
        <p><b>COMPETITIVE</b></p>
        <p>Players will have partners drawn randomly.</p>
        <p>Top 20% payout based on modified Steep-Pro PDGA payout calculator (b = -2).</p>
        <p><b>RECREATIONAL</b></p>
        <p>RECREATIONAL players are welcome to bring their own partners (BYOP) or get randomly drawn a partner also playing Recreational.</p>
        <p>COMPETITIVE and RECREATIONAL teams will still be mixed on cards.</p>
        <p>COMPETITIVE teams and starting tee assignments for both divisions are drawn promptly at 5:00pm at the practice baskets.</p>
        <hr />
        <p><b>Fees</b></p>
        <p>$6 parking fee (<a className="underline" href="https://gooutsideandplay.org/reservations/pass_sales.asp?actiontype=park_passes">Annual Passes available</a>)</p>
        <p>$5 buy in (COMPETITIVE players)</p>
        <p>$1 for the ace pot (optional for all players)</p>
        <p>Cash is accepted. <b>Venmo, Zelle, or Paypal</b> are preferred for payment tracking purposes.</p>
      </>
    ),
    // longDescription: `The Monday Doubles league is a great opportunity to meet up with a great community of disc golfers in a more casual format. Fun is guaranteed.\n\nDivisions:\n\nCompetitive Division: Join to get paired with a partner to compete for the full payout of the $5 entry fee from each competitor.\n\nRecreation Division: Play for free with a partner that you bring or get paired with another person in the division.\n\nFees:\nCompetitive Division: $5 per round\nRecreation Division: Free\nDaily parking pass: $6 per car\nAce pot: $1 per round (optional)`,
    entryFee: "$5 (Competitive) or Free (Recreation) + $6 parking",
    divisions: ["Competitive", "Recreation"],
    registrationUrl: "https://udisc.com/events?courseId=Ju4Aqz5FFNoinH4ZA&quickFilter=league",
    registrationLabel: "Udisc Event",
    directionsUrl: "https://maps.app.goo.gl/a3NoNVeX1eCMUioi7",
    customDateDisplay: "Mondays from March 23 to September 14, 2026",
    image: "/manus-storage/vm_doubles_7009cbd4.webp",
    featured: true,
  },
];

export const boardMembers: BoardMember[] = [
  {
    id: "president",
    name: "Sarah Whitmore",
    title: "President",
    bio: "Sarah has been playing disc golf for over 15 years and has been instrumental in establishing three new courses on the Peninsula. She brings a background in non-profit management and a deep passion for growing the sport in our community.",
    yearsServing: "2019 – Present",
  },
  {
    id: "vice-president",
    name: "Marcus Chen",
    title: "Vice President",
    bio: "Marcus is a PDGA-certified tournament director with experience running regional and national-level events. He oversees our tournament program and works closely with parks departments to secure and maintain course permits.",
    yearsServing: "2021 – Present",
  },
  {
    id: "treasurer",
    name: "Linda Okafor",
    title: "Treasurer",
    bio: "Linda brings 20 years of financial management experience to the club. She manages our annual budget, grant applications, and ensures our non-profit status remains in good standing. She is also an avid recreational player.",
    yearsServing: "2020 – Present",
  },
  {
    id: "secretary",
    name: "Tom Reyes",
    title: "Secretary",
    bio: "Tom handles club communications, meeting minutes, and membership records. A retired teacher, he also leads our youth outreach program that introduces disc golf to local schools and after-school programs.",
    yearsServing: "2022 – Present",
  },
  {
    id: "course-director",
    name: "Priya Nair",
    title: "Course Director",
    bio: "Priya coordinates all course maintenance, improvement projects, and new course development. She has a background in landscape architecture and has designed two of the club's most beloved holes at Bayview Park.",
    yearsServing: "2021 – Present",
  },
  {
    id: "events-coordinator",
    name: "Jake Sullivan",
    title: "Events Coordinator",
    bio: "Jake organizes the club's full calendar of events, from weekly leagues to our flagship tournaments. His energy and attention to detail have made Peninsula events some of the most well-run in the region.",
    yearsServing: "2023 – Present",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "handicap-leagues",
    title: "Handicap Leagues",
    date: "2026-04-26",
    author: "Peninsula Disc Golf Club",
    category: "community",
    excerpt: "You've probably seen it happen. A newer player shows up to a casual round, eager and enthusiastic, only to watch more experienced players card scores they can't come close to matching. A handicap league changes everything.",
    content: `You've probably seen it happen. A newer player shows up to a casual round, eager and enthusiastic, only to watch more experienced players card scores they can't come close to matching. They smile, they finish the round — and sometimes they never come back. It doesn't have to be that way. A handicap league changes everything.

The Peninsula Disc Golf Club runs a handicap league with rounds every Tuesday and Thursday, and we want every player — from first-timers to seasoned competitors — to understand why this is one of the most exciting things we can offer our community. Here's the case for it.

## What Is a Disc Golf Handicap League?

At its core, a handicap system gives every player a numerical adjustment based on their skill level, so that competition is equalized across the field. The better you play relative to your own baseline, the better you finish — regardless of whether you're a UDisc 260-rated player or a 150-rated beginner.

A handicap is designed to enable athletes of differing skill levels to compete on an even playing field. In practice, this means a newer player throwing a personal best round can walk away with a top finish on the same day that an advanced player cards a technically superior score. The competition isn't just player vs. player — it's each player vs. themselves.

## Every Round Is a Competitive Round

One of the greatest things about a handicap format is that it makes every round matter for every player in the field.

Handicap leagues allow everyone to participate in one handicap division, while players still earn official ratings based on their raw scores. That means even while competing against players at a completely different skill level, beginners are building their rating history that can track their improvement over time.

## A Pathway for New Players

Ask any experienced disc golfer and they'll tell you the same thing: the early rounds are the hardest — not because the game is hard, but because it can feel discouraging to play alongside people who make it look effortless.

A handicap league removes that barrier entirely. Beginners aren't just along for the ride; they're legitimate competitors with a real chance to win on any given week. A newcomer who shoots six strokes better than their personal best can out-finish a tournament veteran who had an average day. That kind of moment is transformative. It builds confidence, creates investment, and turns casual participants into passionate members of the disc golf community.

Leagues with a handicap are especially appealing to recreational players, and give people with jobs, families, and busy lives the opportunity to remain active participants in the sport. A weekly or bi-weekly league is far less intimidating than signing up for a tournament — and for many players, it becomes the gateway to doing exactly that.

## A Challenge for Advanced Players, Too

Experienced players might wonder: what's in it for me?

Plenty. A handicap league pushes advanced players to compete against their own standard, not just the field. When your handicap is low, there's no comfortable cushion. A top-rated player who has an off day will find themselves out-scored by beginners who played the round of their lives — and that's exactly the kind of competitive pressure that sharpens your game.

Beyond the competition, experienced players in a mixed-skill league become natural mentors. The casual tips, the encouragement after a tough hole, the example of how to handle a bad lie with composure — these small moments are how disc golf culture gets passed on and how a club becomes a real community.

## Your Handicap Is Your Progress Report

One of the most compelling aspects of a handicap league is what it gives you over time: a living, breathing record of your improvement.

As soon as a player has at least one round recorded, a handicap can be calculated — and it updates automatically with each subsequent round, giving players an ongoing measure of their development. Over the course of a season, you can look back and see exactly how far you've come. That kind of tangible progress tracking is rare in recreational sports and deeply motivating.

For players who eventually want to compete in PDGA-sanctioned tournaments, a league handicap also serves as a roadmap. By earning ratings through league play, players can determine which PDGA division they're best suited for in sanctioned tournaments. The league becomes a training ground, not just a social activity.

## Community Over Competition

At the end of the day, the strongest argument for a handicap league isn't about scoring systems or rating points. It's about what happens when a grandmother and a college student and a weekend warrior and a seasoned tournament player all tee off together — and all of them have something real at stake.

That's the Peninsula we want to build. A disc golf community where you don't need to be good to belong, but where belonging makes you better. Where showing up every week is worth something, and where your best round of the season is the one people remember, regardless of what it looked like on the scorecard.

## Join Us

The Peninsula Disc Golf Club runs a handicap league, which is played every Tuesday and Thursday at Emerald Hills Disc Golf Course. If you're interested in playing — whether you've never picked up a disc or you've been throwing for twenty years — we want you to join the fun.`,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/community-event-D6xB3opW72GX3UimDuQH5d.webp",
    featured: false,
  },
  {
    id: "disc-golf-san-mateo-county",
    title: "Disc Golf in San Mateo County - We Need Your Voice",
    date: "2026-04-27",
    author: "Peninsula Disc Golf Club",
    category: "news",
    excerpt: "Disc golf is one of the fastest-growing sports in America. So why doesn't San Mateo County have a single public disc golf course? That may be about to change. Three exciting proposals are gaining momentum, and we need your voice.",
    content: `Disc golf is one of the fastest-growing sports in America — accessible to all ages, free to play, and perfectly suited to the open spaces of the San Mateo Peninsula. So why doesn't San Mateo County have a single public disc golf course?

That may be about to change. Two exciting proposals are gaining momentum, and the Peninsula Disc Golf Club is here to help make them a reality.

## Coyote Point, Burlingame: Bay and City Views

Coyote Point Recreation Area — the stunning 670-acre bayfront park straddling the border of Burlingame and San Mateo — has long been one of the Peninsula's crown jewels. With sweeping views of the San Francisco Bay, towering eucalyptus groves, and ample open space, it may also be one of the most spectacular settings for a disc golf course anywhere in Northern California.

The San Mateo County Parks Commission has taken notice. Disc golf was raised as a potential addition to Coyote Point as part of the county's ongoing Revitalize Coyote Point planning process — a community-driven effort to reimagine the park's recreational offerings for the next generation. You can follow that planning process on the County's website.

The County launched its first community survey in summer 2024, gathering public input on new park activities and features, with the planning process continuing into 2025. Disc golf was among the activities residents expressed interest in — and this is exactly the kind of community signal that moves projects forward.

Imagine teeing off through a eucalyptus canopy with views of the Bay, planes gliding into SFO overhead, and the San Mateo Bridge on the horizon. Coyote Point could become a destination course — not just for Peninsula locals, but for players across the Bay Area.

## Quarry Park, El Granada: A Coastal Masterpiece

On the other side of the Peninsula — along the rugged Pacific Coast — another disc golf dream has been proposed.

The Mirada East and Quarry Park properties in El Granada are zoned for recreational use, sitting seven miles north of Half Moon Bay and just 30 minutes south of San Francisco. And the vision for a course here is breathtaking.

The two adjoining properties offer 40 acres of majestic coastal terrain, including views of the Mavericks big wave break, El Granada Jetty harbor, and the iconic NORAD radar station. With 200 feet of elevation change — from near the beach at Highway 1 all the way up to the "Top of the Quarry" — the proposed layout would be unlike anything else in the region.

From the top tee pad, players would launch a 400-foot drive with panoramic views of the Pacific Ocean, looking out through swaying eucalyptus trees over what locals call the "Mid-Coast's million dollar view."

This isn't a new idea — the Half Moon Bay Disc Golf Club and Mid-Coast community have been working toward this for over a decade. Measure G was passed in 2014 specifically to fund recreational expansion in El Granada, including a disc golf course, and an environmental impact review for the Quarry Park site was completed in 2019. The groundwork is laid. What's needed now is community pressure and political will to finally build it.

## Junipero Serra Park, San Bruno: A Wooded Gem

Tucked into the hills above San Bruno, Junipero Serra County Park offers 108 acres of wooded terrain, open meadows, hiking trails, and sweeping views of San Francisco Bay. For Peninsula disc golfers, it has long felt like an ideal location for disc golf. The park's dramatic topography traces back to decades of quarrying for Franciscan Sandstone, leaving behind the kind of elevation changes, natural corridors, and varied terrain that disc golf course designers dream about. In the dense stands of oak, bay laurel, eucalyptus, and cypress, you have a setting that rivals any disc golf destination in the Bay Area.

San Mateo County Parks agreed, at least long enough to explore it seriously. In 2010, the department developed a formal proposal for a permanent disc golf course at Junipero Serra and held a public meeting in San Bruno to gather community input. Parks Commissioners attended both the meeting and personal site visits, with one commissioner noting that the terrain was "fascinating" and that disc golf was exactly the kind of activity that families could enjoy together. The department committed to a follow-up public meeting after reviewing comments — but that meeting never appeared on the agenda, and the proposal quietly went dormant.

The concerns raised in 2010 — safety, environmental sensitivity, park aesthetics — are real conversations worth having, and they're ones disc golf communities have successfully navigated in parks across the country. The terrain is still ideal. And with renewed discussions about disc golf at Coyote Point and Quarry Park, the timing has never been better to revisit what Junipero Serra could be.

A permanent course at Junipero Serra Park would give the Peninsula its most accessible and community-rooted disc golf destination — close to neighborhoods, easy to reach, and built on years of history between this club and this land. We haven't given up on it. We're just getting started.

## Why Public Disc Golf Courses Matter

Disc golf courses are among the most cost-effective recreational investments a county can make. Once installed, they require minimal maintenance and draw players of all ages, backgrounds, and income levels. They're especially powerful tools for youth engagement — giving schools, clubs, and families a free outdoor activity that builds focus, sportsmanship, and a genuine love of the outdoors. A permanent course at Quarry Park could expand athletic curriculum at local middle schools and Half Moon Bay High School to include disc golf. The same is true at Coyote Point — a bayside installation could introduce thousands of Peninsula residents to a sport they've never tried. And a course at Junipero Serra Park would bring all of that to the neighborhoods of San Bruno and Millbrae — accessible, free, and already supported by years of community play on temporary layouts.

What makes the absence of permanent courses in San Mateo County so striking is what surrounds it. San Mateo County is currently the only major county in the core Bay Area without a single permanent public disc golf course — despite being flanked on every side by well-established, heavily utilized public courses in neighboring counties. Local players who want regular access to a permanent layout have no choice but to leave the county entirely, creating a clear and unnecessary recreation gap for Peninsula residents.

The most telling comparison is just 20 miles north. San Francisco's 18-hole public course in Golden Gate Park — established in 2007 — has become one of the most heavily used disc golf facilities in the country. In 2025 alone, it recorded nearly 30,000 rounds from approximately 5,000 unique players, making it the second most-played course in California. It hosts weekly leagues drawing 50 to 100 participants, and the annual San Francisco Safari — a PDGA A-Tier tournament held there — reached its 208-player capacity within hours of registration opening. Players from all 50 states and more than two dozen countries recorded rounds at the course in 2025.

San Mateo County has the parks, the terrain, the community, and the demand. What it needs is the will to act. Coyote Point, Quarry Park, and Junipero Serra aren't just proposals — they're opportunities to build something that will serve this county for generations. The Peninsula Disc Golf Club is here to help make that happen, and we need your voice alongside ours.

## How You Can Help

The Peninsula Disc Golf Club is committed to advocating for all three of these projects. Here's what you can do right now:

1. Follow the Revitalize Coyote Point process and submit comments in favor of disc golf at smcgov.org
2. Join the Peninsula Disc Golf Club Facebook Group and add your voice to a growing community of Peninsula disc golfers
3. Spread the word — share this post with anyone who loves parks, outdoor recreation, or just wants more free things to do on the Peninsula

The discs are ready. The courses are waiting to be built. Let's make it happen.`,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/course-scenic-f5bzDYBHMESqz9UzBZnzrH.webp",
    featured: true,
  },

  {
    id: "disc-selection-tips",
    title: "Choosing Your First Disc: A Beginner's Guide",
    date: "2026-02-28",
    author: "Jake Sullivan",
    category: "tips",
    excerpt: "Walking into a disc golf shop for the first time can be overwhelming. Here's a straightforward guide to help new players choose the right discs to start their journey.",
    content: `One of the most common questions we hear from new players is: "Which disc should I buy?" With hundreds of options on the market, it's easy to feel overwhelmed. Here's our simple guide to getting started.\n\nFor beginners, we recommend starting with just three discs: a putter, a mid-range, and a fairway driver. Resist the urge to buy a distance driver right away — they require significant arm speed to fly correctly and often cause frustration for newer players.\n\nFor a putter, look for something with a comfortable grip and a straight flight path. The Innova Aviar and Discraft Banger GT are perennial favorites. For a mid-range, the Innova Mako3 or Discraft Buzzz are excellent choices that fly predictably. For a fairway driver, consider the Innova Leopard or Dynamic Discs Escape.\n\nMost importantly, visit your local disc golf shop and ask to hold the discs before buying. Comfort in the hand matters as much as flight characteristics.`,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/action-throw-8i7pxpEA3rThZDTMFnR7Xm.webp",
  },
  {
    id: "winter-league-recap",
    title: "Winter League Recap",
    date: "2026-03-06",
    author: "Peninsula Disc Golf Club",
    category: "tournament-recap",
    excerpt: "We completed our very first season using the Udisc Handicap ratings calculator. Congratulations to our handicap and overall score podium finishers!",
    content: `We completed our very first season using the Udisc Handicap ratings calculator. Having your handicap for the round assigned immediately when checking in the Weekly event and being able to see live scoring with handicaps has been a fun change. Congratulations to our handicap and overall score podium finishers!

## Handicap

🥇 Jim Kelly: 60
🥈 Danny Rosen: 55
🥉 Andy Clark: 55

Jim came up clutch yesterday with an impressive bogey-free -3 (59, UDisc 222) in blustery conditions to hold off Danny and Andy for the crown.

## Overall

🥇 Conrad Damon: 92
🥈 Jim Kelly: 74
🥉 Devin Rowell: 68

Conrad has been on a tear all winter. His -12 (52, UDisc 265) on Tuesday matched Jon Sturholm's layout record from February 12.

The Spring League starts on Tuesday March 10th. The league standings are reset. Get on out to the course and stake your claim as a 2026 Peninsula Disc Golf Club Spring League champion!`,
    image: "/manus-storage/eh_pond_hole3_c6545346.jpg",
  }
];

export const categoryColors: Record<string, string> = {
  tournament: "bg-amber-100 text-amber-800",
  league: "bg-green-100 text-green-800",
  clinic: "bg-blue-100 text-blue-800",
  doubles: "bg-indigo-100 text-indigo-800",
  volunteer: "bg-orange-100 text-orange-800",
  news: "bg-red-100 text-red-800",
  "tournament-recap": "bg-amber-100 text-amber-800",
  "course-update": "bg-green-100 text-green-800",
  community: "bg-blue-100 text-blue-800",
  tips: "bg-teal-100 text-teal-800",
};

export const categoryLabels: Record<string, string> = {
  tournament: "Tournament",
  league: "League",
  clinic: "Clinic",
  doubles: "Doubles",
  volunteer: "Volunteer",
  news: "News",
  "tournament-recap": "Recap",
  "course-update": "Course Update",
  community: "Community",
  tips: "Tips & Technique",
};

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
