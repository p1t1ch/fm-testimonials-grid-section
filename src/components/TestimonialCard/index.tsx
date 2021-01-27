import React from 'react'

interface TestimonialCardProps extends React.HTMLProps<HTMLDivElement> {
  avatar: string
  name: string
  heading: string
  children: React.ReactNode
  theme?: 'purple' | 'gray' | 'black' | 'white'
}

function TestimonialCard({
  avatar,
  name,
  heading,
  children,
  theme = 'white',
  className = '',
  ...props
}: TestimonialCardProps) {
  return (
    <article
      className={`p-8 pt-6 grid grid-cols-card gap-4 place-content-start h-full rounded-lg shadow ${
        theme === 'purple'
          ? 'bg-primary-purple'
          : theme === 'gray'
          ? 'bg-primary-grayish-blue'
          : theme === 'black'
          ? 'bg-primary-blackish-blue'
          : 'bg-primary'
      } ${
        theme === 'purple' ? 'bg-quotation bg-no-repeat bg-quotation-mobile sm:bg-quotation-desktop' : ''
      } ${className}`}
      {...props}
    >
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className={`rounded-full border-2 ${
          theme === 'purple'
            ? 'border-primary-purple-light'
            : theme === 'black'
            ? 'border-primary-purple'
            : 'border-transparent'
        }`}
      />
      <div>
        <div className={`${theme === 'white' ? 'text-primary-grayish-blue' : 'text-primary'} mb-1 leading-none`}>
          {name}
        </div>
        <div
          className={`${
            theme === 'white' ? 'text-primary-grayish-blue' : 'text-primary'
          } text-opacity-50 text-extrasmall`}
        >
          Verified Graduate
        </div>
      </div>
      <h2
        className={`col-span-full text-xl ${
          theme === 'white' ? 'text-primary-grayish-blue' : 'text-primary'
        } font-semibold`}
      >
        {heading}
      </h2>
      <p
        className={`col-span-full ${
          theme === 'white' ? 'text-primary-grayish-blue' : theme === 'purple' ? 'text-neutral' : 'text-primary'
        } text-opacity-70`}
      >
        “ {children} ”
      </p>
    </article>
  )
}

export default TestimonialCard
