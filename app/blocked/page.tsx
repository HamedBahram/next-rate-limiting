import React from 'react'

export default function Blocked() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Your request was blocked.</h1>
        <p className='text-sm text-muted-foreground'>
          You've exceeded 5 requests in 10 seconds.
        </p>
      </div>
    </section>
  )
}
