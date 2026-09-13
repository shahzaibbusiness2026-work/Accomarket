import { Account, PlatformCategory } from "@/types";

export const KARMA_ACCOUNTS: Account[] = [
  {
    id: "RDT-A492",
    title: "Established Account",
    subtitle: "3.2 Years • High Trust Score & Clean History",
    registrationDate: "14 May 2023",
    sku: "RDT-3YR-EST-25K",
    ageYears: 3.2,
    ageDisplay: "3.2 years",
    price: 149.00,
    stock: 1,
    tier: "Established Authority",
    types: ["aged", "high-comment", "verified"],
    postKarma: 4200,
    commentKarma: 21140,
    totalKarma: 25340,
    totalKarmaDisplay: "25,340",
    postsCount: 420,
    commentsCount: 3120,
    badge: "Verified",
    badgeType: "verified",
    emailStatus: "Transferable (OG Mail Clean)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "10K+ Karma", "Verified Email", "Active"],
    communities: [
      { name: "r/technology", karma: 8400, percent: "33.1%", color: "bg-[#FF4500]" },
      { name: "r/AskReddit", karma: 7200, percent: "28.4%", color: "bg-[#FF6B35]" },
      { name: "r/science", karma: 4800, percent: "18.9%", color: "bg-[#FFA07A]" },
      { name: "r/programming", karma: 3100, percent: "12.2%", color: "bg-gray-400" },
      { name: "r/webdev", karma: 1840, percent: "7.4%", color: "bg-gray-300" }
    ],
    badges: [
      { title: "Three-Year Club", date: "Granted May 2026", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2023", icon: "verified_user", color: "text-green-600" },
      { title: "Active Contributor", date: "Verified Community", icon: "grade", color: "text-amber-500" },
      { title: "Clean Ledger", date: "No Infractions", icon: "shield", color: "text-blue-600" }
    ],
    trajectory: [
      { year: "'23", height: "35%", val: "4.2k" },
      { year: "'24", height: "65%", val: "12.8k" },
      { year: "'25", height: "85%", val: "19.4k" },
      { year: "'26", height: "100%", val: "25.3k" }
    ],
    hash: "#0x889F...7AC1",
    vaultPasskey: "K9#mX$79pQ_Vault!",
    vaultUsername: "u/established_curator",
    vaultEmail: "vault-transfer-8921@accomarket.net",
    vaultToken: "tk_live_8941_9921_x82f"
  },
  {
    id: "RDT-B104",
    title: "Active Community User",
    subtitle: "1.8 Years • Organic Discussion & High Engagement",
    registrationDate: "10 Oct 2024",
    sku: "RDT-2YR-ACT-12K",
    ageYears: 1.8,
    ageDisplay: "1.8 years",
    price: 89.00,
    stock: 3,
    tier: "Active Contributor",
    types: ["active", "balanced", "low-price"],
    postKarma: 3100,
    commentKarma: 9460,
    totalKarma: 12560,
    totalKarmaDisplay: "12,560",
    postsCount: 310,
    commentsCount: 1890,
    badge: "Verified",
    badgeType: "verified",
    emailStatus: "Transferable (Instant Auth)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "10K+ Karma", "Active", "Low Price"],
    communities: [
      { name: "r/AskReddit", karma: 4800, percent: "38.2%", color: "bg-[#FF4500]" },
      { name: "r/gaming", karma: 3200, percent: "25.5%", color: "bg-[#FF6B35]" },
      { name: "r/news", karma: 2400, percent: "19.1%", color: "bg-[#FFA07A]" },
      { name: "r/movies", karma: 1400, percent: "11.1%", color: "bg-gray-400" },
      { name: "r/books", karma: 760, percent: "6.1%", color: "bg-gray-300" }
    ],
    badges: [
      { title: "One-Year Club", date: "Granted Oct 2025", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2024", icon: "verified_user", color: "text-green-600" },
      { title: "Active Commenter", date: "Top 5% Engagement", icon: "forum", color: "text-blue-600" }
    ],
    trajectory: [
      { year: "'24", height: "40%", val: "3.5k" },
      { year: "'25", height: "75%", val: "8.9k" },
      { year: "'26", height: "100%", val: "12.5k" }
    ],
    hash: "#0x33A2...9EF4",
    vaultPasskey: "M4$wQ#42vL_Shield!",
    vaultUsername: "u/community_spark",
    vaultEmail: "vault-transfer-104@accomarket.net",
    vaultToken: "tk_live_3301_1048_z91a"
  },
  {
    id: "RDT-C882",
    title: "High Karma Account",
    subtitle: "4.5 Years • Top Tier Authority & Frontpage Veteran",
    registrationDate: "15 Mar 2022",
    sku: "RDT-5YR-HIK-48K",
    ageYears: 4.5,
    ageDisplay: "4.5 years",
    price: 299.00,
    stock: 1,
    tier: "VIP Power Profile",
    types: ["aged", "high-post", "high-comment", "verified"],
    postKarma: 24100,
    commentKarma: 24120,
    totalKarma: 48220,
    totalKarmaDisplay: "48,220",
    postsCount: 1200,
    commentsCount: 5430,
    badge: "Verified",
    badgeType: "verified",
    emailStatus: "Transferable (Original Mailbox)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "10K+ Karma", "Verified Email", "Active"],
    communities: [
      { name: "r/pics", karma: 18400, percent: "38.1%", color: "bg-[#FF4500]" },
      { name: "r/memes", karma: 14200, percent: "29.4%", color: "bg-[#FF6B35]" },
      { name: "r/aww", karma: 8600, percent: "17.8%", color: "bg-[#FFA07A]" },
      { name: "r/mildlyinteresting", karma: 4200, percent: "8.7%", color: "bg-gray-400" },
      { name: "r/technology", karma: 2820, percent: "6.0%", color: "bg-gray-300" }
    ],
    badges: [
      { title: "Four-Year Club", date: "Granted Mar 2026", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2022", icon: "verified_user", color: "text-green-600" },
      { title: "Super Submitter", date: "Multiple Viral Posts", icon: "trending_up", color: "text-amber-500" },
      { title: "VIP Authenticated", date: "Manual Escrow Checked", icon: "shield", color: "text-blue-600" }
    ],
    trajectory: [
      { year: "'22", height: "30%", val: "6.4k" },
      { year: "'23", height: "60%", val: "19.2k" },
      { year: "'24", height: "80%", val: "34.0k" },
      { year: "'25", height: "92%", val: "42.8k" },
      { year: "'26", height: "100%", val: "48.2k" }
    ],
    hash: "#0x77B1...48CD",
    vaultPasskey: "V8@kL!91xR_Echo*",
    vaultUsername: "u/frontpage_titan",
    vaultEmail: "vault-transfer-882@accomarket.net",
    vaultToken: "tk_live_7719_8820_p44c"
  },
  {
    id: "RDT-D219",
    title: "Niche Community Account",
    subtitle: "2.1 Years • Targeted Subreddit Karma & Clean History",
    registrationDate: "18 Aug 2024",
    sku: "RDT-2YR-NCH-8K",
    ageYears: 2.1,
    ageDisplay: "2.1 years",
    price: 69.00,
    stock: 5,
    tier: "Best Value Specialist",
    types: ["balanced", "low-price", "active"],
    postKarma: 2420,
    commentKarma: 6340,
    totalKarma: 8760,
    totalKarmaDisplay: "8,760",
    postsCount: 220,
    commentsCount: 1150,
    badge: "Best Value",
    badgeType: "best-value",
    emailStatus: "Transferable (Instant Handover)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "Verified Email", "Active", "Low Price"],
    communities: [
      { name: "r/cryptocurrency", karma: 3400, percent: "38.8%", color: "bg-[#FF4500]" },
      { name: "r/wallstreetbets", karma: 2600, percent: "29.7%", color: "bg-[#FF6B35]" },
      { name: "r/stocks", karma: 1600, percent: "18.3%", color: "bg-[#FFA07A]" },
      { name: "r/investing", karma: 800, percent: "9.1%", color: "bg-gray-400" },
      { name: "r/defi", karma: 360, percent: "4.1%", color: "bg-gray-300" }
    ],
    badges: [
      { title: "Two-Year Club", date: "Granted Aug 2026", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2024", icon: "verified_user", color: "text-green-600" },
      { title: "Niche Specialist", date: "Finance & Web3 Hubs", icon: "insights", color: "text-blue-600" }
    ],
    trajectory: [
      { year: "'24", height: "35%", val: "2.1k" },
      { year: "'25", height: "70%", val: "5.8k" },
      { year: "'26", height: "100%", val: "8.7k" }
    ],
    hash: "#0x99C4...11BA",
    vaultPasskey: "Q7#tY$19wK_Alpha!",
    vaultUsername: "u/niche_catalyst",
    vaultEmail: "vault-transfer-219@accomarket.net",
    vaultToken: "tk_live_9921_2190_q77d"
  },
  {
    id: "RDT-E501",
    title: "Vintage 7-Year Club Account",
    subtitle: "7.4 Years • Ultra High Trust & Ancient Legacy Standing",
    registrationDate: "12 Nov 2018",
    sku: "RDT-7YR-VNT-62K",
    ageYears: 7.4,
    ageDisplay: "7.4 years",
    price: 349.00,
    stock: 1,
    tier: "Legacy Institutional",
    types: ["aged", "high-post", "high-comment", "verified"],
    postKarma: 28400,
    commentKarma: 34100,
    totalKarma: 62500,
    totalKarmaDisplay: "62,500",
    postsCount: 1450,
    commentsCount: 6800,
    badge: "Verified",
    badgeType: "verified",
    emailStatus: "Transferable (Clean OG Mail)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "10K+ Karma", "Verified Email", "Active"],
    communities: [
      { name: "r/technology", karma: 22000, percent: "35.2%", color: "bg-[#FF4500]" },
      { name: "r/science", karma: 16500, percent: "26.4%", color: "bg-[#FF6B35]" },
      { name: "r/AskReddit", karma: 14000, percent: "22.4%", color: "bg-[#FFA07A]" }
    ],
    badges: [
      { title: "Seven-Year Club", date: "Granted Nov 2025", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2018", icon: "verified_user", color: "text-green-600" }
    ],
    trajectory: [
      { year: "'19", height: "20%", val: "8.2k" },
      { year: "'21", height: "55%", val: "26.4k" },
      { year: "'23", height: "80%", val: "48.1k" },
      { year: "'26", height: "100%", val: "62.5k" }
    ],
    hash: "#0xAA33...901B",
    vaultPasskey: "P9!mV#81zW_Vintage*",
    vaultUsername: "u/vintage_archon",
    vaultEmail: "vault-transfer-501@accomarket.net",
    vaultToken: "tk_live_5011_8819_k00a"
  },
  {
    id: "RDT-F712",
    title: "Starter Discussion Profile",
    subtitle: "1.2 Years • Clean Standing & Ready to Post",
    registrationDate: "14 Jan 2025",
    sku: "RDT-1YR-STR-4K",
    ageYears: 1.2,
    ageDisplay: "1.2 years",
    price: 39.00,
    stock: 8,
    tier: "Starter Clean",
    types: ["balanced", "low-price", "active"],
    postKarma: 1100,
    commentKarma: 3420,
    totalKarma: 4520,
    totalKarmaDisplay: "4,520",
    postsCount: 95,
    commentsCount: 420,
    badge: "Verified",
    badgeType: "verified",
    emailStatus: "Transferable (Automated)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "Verified Email", "Active", "Low Price"],
    communities: [
      { name: "r/AskReddit", karma: 2200, percent: "48.6%", color: "bg-[#FF4500]" },
      { name: "r/memes", karma: 1500, percent: "33.2%", color: "bg-[#FF6B35]" }
    ],
    badges: [
      { title: "One-Year Club", date: "Granted Jan 2026", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2025", icon: "verified_user", color: "text-green-600" }
    ],
    trajectory: [
      { year: "'25", height: "45%", val: "2.1k" },
      { year: "'26", height: "100%", val: "4.5k" }
    ],
    hash: "#0xCC77...22DE",
    vaultPasskey: "Z2$yB#61tR_Fast!",
    vaultUsername: "u/starter_node",
    vaultEmail: "vault-transfer-712@accomarket.net",
    vaultToken: "tk_live_7122_3310_m44p"
  }
];

export const PLATFORM_CATEGORIES: PlatformCategory[] = [
  { id: "reddit", name: "Reddit", count: "1,200+ accounts", icon: "reddit", active: true },
  { id: "instagram", name: "Instagram", count: "800+ accounts", icon: "instagram", active: false },
  { id: "twitter", name: "X (Twitter)", count: "600+ accounts", icon: "twitter", active: false },
  { id: "tiktok", name: "TikTok", count: "450+ accounts", icon: "tiktok", active: false },
  { id: "youtube", name: "YouTube", count: "320+ accounts", icon: "youtube", active: false },
  { id: "other", name: "Other", count: "200+ accounts", icon: "other", active: false }
];
