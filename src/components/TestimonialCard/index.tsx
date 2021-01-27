import React from 'react'

interface TestimonialCardProps extends React.HTMLProps<HTMLDivElement> {
  avatar: string
  name: string
  heading: string
  children: React.ReactNode
  type?: 'purple' | 'gray' | 'black' | 'white'
}

function TestimonialCard({
  avatar,
  name,
  heading,
  children,
  type = 'white',
  className = '',
  ...props
}: TestimonialCardProps) {
  return (
    <article className={`${className}`} {...props}>
      <img src={avatar} alt={`${name}'s avatar`} />
      <div>
        <div>{name}</div>
        <div>Verified Graduate</div>
      </div>
      <h2>{heading}</h2>
      <p>“ {children} ”</p>
    </article>
  )
}

export default TestimonialCard
