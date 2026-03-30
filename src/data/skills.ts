/**
 * 技能数据
 */

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools'
}

export const skills: Skill[] = [
  // 前端
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'Vue', icon: '💚', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  // 后端
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'Express', icon: '🚀', category: 'backend' },
  // 工具
  { name: 'Git', icon: '📂', category: 'tools' },
  { name: 'VS Code', icon: '💻', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'Figma', icon: '🎯', category: 'tools' },
]
