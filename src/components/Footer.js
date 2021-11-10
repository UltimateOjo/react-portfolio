import React from 'react'

const Footer = () => {
    return (
        <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello, my name is Gbenga and I am a Software Engineer looking forward to begin 
          a fulfilling career, learn everyday to expand my skillset and knowledge, and
          to help make an impact in peoples lives.
        </p>
      </div>
    </section>
    )
}

export default Footer