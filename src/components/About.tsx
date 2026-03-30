import React from 'react'
import { skills } from '../data/skills'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * About 组件 - 关于我区域
 * 包含个人详细介绍和技能列表
 */
const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            关于我
          </span>
        </h2>

        {/* 详细介绍 */}
        <div
          className={`bg-gray-900/50 rounded-2xl p-8 mb-12 border border-gray-800 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            你好！我是一名热爱技术的前端开发者，专注于构建优雅的用户体验。
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            我拥有 3 年以上的 Web 开发经验，擅长使用 React、TypeScript 等现代技术栈开发高性能的 Web 应用。
            始终保持学习热情，关注前端领域最新技术趋势。
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            除了编码，我也喜欢分享技术知识，参与开源项目，持续提升自己的技术影响力。
          </p>
        </div>

        {/* 技能列表 */}
        <h3
          className={`text-2xl font-bold text-white mb-6 text-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          技术栈
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
