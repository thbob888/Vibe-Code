import React from 'react'

/**
 * Footer 组件 - 页脚
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} 我的个人作品集. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
