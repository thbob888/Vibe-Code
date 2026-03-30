import React from 'react'

/**
 * Hero 组件 - 首页首屏展示区域
 * 包含大标题、个人简介和头像
 */
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 头像 */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-4xl font-bold text-white">TH</span>
            </div>
          </div>
        </div>

        {/* 大标题 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            你好，我是
          </span>
          <span className="text-white block mt-2">开发者</span>
        </h1>

        {/* 简介 */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          热爱编程，专注前端开发，
          <br className="hidden md:block" />
          打造优雅的用户体验
        </p>

        {/* CTA 按钮 */}
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-600 text-white font-semibold hover:border-purple-500 hover:text-purple-400 transition-colors"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
