import React, { Component } from 'react'

const About = () => {

    return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>I am Software Consultant currently working in TCS and having total 7 years of experience in BPM and related technologies </p>
                                        <p> Pega Certified Senior System Architect(CSSA) and (CUIS).Having a strong understanding on various concepts of PRPC. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-boxee">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-bulb" />
                                </span>
                                <div className="desc">
                                    <h3>Web Development </h3>
                                    <p>I have experience building application using BPMS Technology</p>
                                    <p>Have experience building application using React and Java</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Banking aand Financial Services</h3>
                                    <p>As worked for many BFSI & Card and Payment Client, hold extensive experience on BFSI domain knowledge</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Dev Ops</h3>
                                    <p>Have exposure of working with CI/CD tool like Jenkins,XLR and deploy application in cloud.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )

}

export default About;