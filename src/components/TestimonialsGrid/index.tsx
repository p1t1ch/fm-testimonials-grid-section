import React from 'react'

interface TestimonialsGridProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function TestimonialsGrid({ children, className = '', ...props }: TestimonialsGridProps) {
  return (
    <ul className={`${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default TestimonialsGrid
