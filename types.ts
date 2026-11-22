// ── Input types ──────────────────────────────────────────────────────
export interface UserProfile {
  skills: Record<string, number>       // skill_id → proficiency 0–1
  interests: string[]                  // selected interest ids
  subjects: Record<string, number>     // subject_id → affinity 0–1
  personality: Record<string, number>  // trait_id → score 0–1
}

// ── Career data types ────────────────────────────────────────────────
export type CareerDomain =
  | 'Technology' | 'Data & AI' | 'Design' | 'Business'
  | 'Healthcare' | 'Finance' | 'Law' | 'Engineering'
  | 'Science' | 'Education' | 'Creative' | 'Entrepreneurship'

export interface RoadmapPhase {
  phase: string
  duration: string
  items: string[]
  resources: { name: string; type: 'course' | 'book' | 'project' | 'cert' }[]
}

export interface CareerProfile {
  id: string
  title: string
  domain: CareerDomain
  emoji: string
  color: string           // hex for UI theming
  description: string
  salaryRange: string
  growthRate: string
  jobDemand: 'Very High' | 'High' | 'Medium' | 'Low'
  requiredSkills: Record<string, number>    // skill_id → importance 0–1
  idealInterests: Record<string, number>    // interest_id → relevance 0–1
  relevantSubjects: Record<string, number>  // subject_id → relevance 0–1
  personalityFit: Record<string, number>    // trait_id → fit score 0–1
  topCompanies: string[]
  roadmap: RoadmapPhase[]
  tags: string[]
  alternativeTitles: string[]
  adjacentCareers: string[]
}

// ── ML output types ──────────────────────────────────────────────────
export interface SkillGapItem {
  skillId: string
  skillLabel: string
  importance: number      // how important for this career 0–1
  userLevel: number       // user's current proficiency 0–1
  gap: number             // importance − userLevel (clamped 0–1)
}

export interface DecisionFactor {
  factor: 'Skills' | 'Interests' | 'Subjects' | 'Personality'
  score: number           // 0–100
  weight: number          // 0–1 (how much this factor counts)
  topMatches: string[]    // top matching items in this factor
  gaps: string[]          // top missing items in this factor
}

export interface RecommendationResult {
  career: CareerProfile
  totalScore: number          // 0–100
  factors: DecisionFactor[]
  skillGap: SkillGapItem[]
  strengths: string[]         // human-readable why-this-fits bullets
  challenges: string[]        // areas needing development
  explanation: string         // natural-language summary
  confidence: 'High' | 'Medium' | 'Low'
  adjacentCareers: string[]   // ids of related careers to also consider
}

// ── Form types ───────────────────────────────────────────────────────
export interface SkillItem {
  id: string
  label: string
  category: string
  icon: string
}

export interface InterestItem {
  id: string
  label: string
  icon: string
  color: string
}

export interface SubjectItem {
  id: string
  label: string
  icon: string
}

export interface PersonalityTrait {
  id: string
  leftLabel: string   // low score description
  rightLabel: string  // high score description
  description: string
  icon: string
}
