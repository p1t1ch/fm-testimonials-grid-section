import React from 'react'

interface TestimonialsGridProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function TestimonialsGrid({ children, className = '', ...props }: TestimonialsGridProps) {
  return (
    <ul className={`grid gap-x-x gap-y-6 lg:grid-cols-4 lg:grid-rows-2 ${className}`} {...props}>
      {React.Children.map(children, (child, index) => (
        <li
          className={`${index % 5 === 0 || index % 5 === 4 ? 'sm:col-span-2' : index % 5 === 2 ? 'sm:row-span-2' : ''}`}
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default TestimonialsGrid
