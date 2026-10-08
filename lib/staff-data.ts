export type Founder = {
  name: string
  image: string
  roles: string[]
  bio: string[]
  funFacts: string[]
}

export type TeamMember = {
  name: string
  image: string
  role: string
  bio: string
  funFacts: string[]
}

export const founders: Founder[] = [
  {
    name: "Haley",
    image: "/haley.png",
    roles: ["Co-Founder", "Co-Owner", "Client Experience Coordinator", "Marketing Queen"],
    bio: [
      "When Gina and I started 1513, we weren't just building a wedding venue - we were building a place where people would feel welcomed, loved, celebrated, and cared for. Seeing that dream come to life has been one of the greatest blessings of my life.",
      "Honestly, I can't choose a favorite part of the day. From the groom's face as his bride walks down the aisle, to dads fighting back tears, to the grand send-off - I love every moment in between.",
    ],
    funFacts: [
      "Before weddings, I was a Labor & Delivery OB Tech and Certified Surgical Technologist.",
      "Blessed with a wonderful husband and four amazing kiddos (one of whom is waiting for us in Heaven).",
      "You'll rarely catch me without a large Black Mountain coffee with salted caramel cold foam - or an Alani.",
      "Wedding cake is my weakness - especially our marble cake with salted caramel and toffee ganache.",
    ],
  },
  {
    name: "Gina",
    image: "/gina.png",
    roles: ["Co-Founder", "Co-Owner", "Staff Coordinator", "Floral Queen"],
    bio: [
      "When Haley and I started 1513, we dreamed of creating more than just a beautiful venue. We wanted a space where couples feel like family - where you know you're loved, cared for, and never just another wedding on the calendar.",
      "My favorite part of it all is the relationships. Walking alongside our couples for a year means that by the time wedding day arrives, it doesn't feel like work anymore - it feels like celebrating friends, even family. (And yes, I will cry at every wedding at some point.)",
    ],
    funFacts: [
      "Coffee is almost always in my hand - or a Lime or Cotton Candy Alani for the long wedding days.",
      "Flowers are one of my favorite creative outlets - bringing someone's vision to life with blooms.",
      "Married 20 years, with three grown kids - two of whom work alongside us here at 1513.",
      "When I'm not at the venue, you'll find me serving teenagers in student ministry with my husband.",
    ],
  },
]

export const team: TeamMember[] = [
  {
    name: "Jaymi",
    image: "/jaymi.png",
    role: "Wedding Coordinator",
    bio: "Jaymi's mission is simple: to make every couple feel celebrated, cared for, and completely at peace from the moment they arrive until the very last dance. She loves the quiet, intimate moments - the first look and the private last dance.",
    funFacts: [
      "Has a heart for adventure and would travel the world if she could.",
      "Wedding day must-have: an iced mocha.",
      "Every couple is prayed over and treated like royalty in her care.",
    ],
  },
  {
    name: "April",
    image: "/april.png",
    role: "Tour Specialist",
    bio: "April knows our property inside and out and understands every one of our package offerings. Whether you're dreaming big or keeping it intimate, she's gifted at piecing it all together to create an experience that feels just right for you.",
    funFacts: [
      "A camping enthusiast with a goal of visiting every campground in Georgia.",
      "If it has mint, she's all in - peppermint mochas and Mint Milanos are always a yes.",
      "Loves helping couples feel excited, confident, and cared for from the very first visit.",
    ],
  },
  {
    name: "Kinley",
    image: "/kinley.png",
    role: "House Manager & Team Member",
    bio: "Kinley wears many hats - from serving guests at the bar to making sure everything is set up beautifully. Her favorite part of every wedding is listening to the heartfelt speeches and watching everyone hit the dance floor.",
    funFacts: [
      "Dreams of traveling the world and experiencing new cultures.",
      "One day she'd love to own her own business in the esthetics industry.",
      "Favorite drink: anything with white chocolate, caramel, or brown sugar cold foam.",
    ],
  },
  {
    name: "Ryleigh",
    image: "/ryleigh.png",
    role: "House Manager & Team Member",
    bio: "Ryleigh is always on the move - helping with setup, serving guests, and jumping in wherever she's needed with a servant's heart and a positive attitude. Her favorite part is watching the bride walk down the aisle.",
    funFacts: [
      "One day she hopes to open her own mobile dirty soda shop.",
      "Her wedding day fuel is an Alani energy drink.",
      "Believes the little things make the biggest difference.",
    ],
  },
  {
    name: "Lucy Grace",
    image: "/lucy.png",
    role: "Team Member",
    bio: "Long before guests arrive, Lucy Grace is hard at work making sure every table is perfect, every floral is in place, and every detail looks just as you envisioned. She believes the little details create an unforgettable experience.",
    funFacts: [
      "If you're meeting at 3:00, she'll probably be there by 2:50 - being early is part of being prepared.",
      "An iced caramel latte is her wedding day favorite.",
      "She's the type of person who notices the little things.",
    ],
  },
  {
    name: "Jordan",
    image: "/jordan.png",
    role: "Team Member",
    bio: "Every wedding needs someone who brings the energy - and that's Jordan. Whether he's serving guests or keeping the celebration going, he brings joy, positivity, and a contagious smile to every wedding day. His favorite part? The reception.",
    funFacts: [
      "If he had it his way, he'd be at the beach every chance he got.",
      "Usually powered by homemade coffee - but a Monster Energy handles the busy days.",
      "His goal is simple: make sure everyone feels welcomed and has a great time.",
    ],
  },
  {
    name: "Blayton",
    image: "/blayton.png",
    role: "Team Member",
    bio: "Whether he's preparing the venue before guests arrive, serving dinner, or resetting spaces, Blayton is always working behind the scenes to make sure every wedding unfolds just the way it should. His favorite part is the reception.",
    funFacts: [
      "When he's not at 1513, you'll usually find him out on the golf course.",
      "Football season means one thing - cheering on the Georgia Bulldogs.",
      "His go-to wedding day meal? A Chick-fil-A sandwich with a sweet tea.",
    ],
  },
  {
    name: "Branson",
    image: "/branson.png",
    role: "Team Member",
    bio: "Branson helps set up for your big day, serves dinner, takes down décor, and is always ready to lend a hand. If something needs to be done, he's probably already on it. His favorite part of every wedding is the reception.",
    funFacts: [
      "A huge Atlanta Braves fan who loves all things baseball.",
      "Wedding day go-to meal: a Culver's Deluxe (no tomato!) with half Blue Powerade and half Sprite.",
      "If there's a chance to make someone laugh, he's already working on it.",
    ],
  },
]
