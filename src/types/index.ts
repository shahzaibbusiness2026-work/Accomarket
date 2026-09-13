export interface TrajectoryPoint {
  year: string;
  height: string;
  val: string;
}

export interface CommunityItem {
  name: string;
  karma: number;
  percent: string;
  color?: string;
}

export interface BadgeItem {
  title: string;
  date: string;
  icon: string;
  color: string;
}

export interface Account {
  id: string;
  title: string;
  subtitle: string;
  registrationDate: string;
  sku: string;
  ageYears: number;
  ageDisplay: string;
  price: number;
  stock: number;
  tier: string;
  types: string[];
  postKarma: number;
  commentKarma: number;
  totalKarma: number;
  totalKarmaDisplay: string;
  postsCount: number;
  commentsCount: number;
  badge: string;
  badgeType: "verified" | "best-value";
  emailStatus: string;
  shadowbanAudit: string;
  tags: string[];
  communities: CommunityItem[];
  badges: BadgeItem[];
  trajectory: TrajectoryPoint[];
  hash: string;
  vaultPasskey: string;
  vaultUsername: string;
  vaultEmail: string;
  vaultToken: string;
}

export interface PlatformCategory {
  id: string;
  name: string;
  count: string;
  icon: string;
  active?: boolean;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface OrderData {
  orderId: string;
  timestamp: string;
  account: Account;
  quantity: number;
  subtotal: number;
  email: string;
  status?: "locked" | "released" | "disputed";
  paymentMethod?: string;
}

export interface AdminActivityLog {
  id: string;
  timestamp: string;
  type: "order" | "listing" | "escrow" | "security";
  message: string;
  badge: string;
}
