import React, { Component } from 'react'

const Introduction = () => {

        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hallo! <br />I'm Deepak</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1uzC6t0hHWhArM26bNo3-ZLttEvsh2Szl/edit" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I love exploring technologies and learn new stuffs<br /> THINGS !!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/partyhigh" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I often <br />Write ... </h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/partyhigh/partyhigh" target="_blank" rel="noopener noreferrer">View Repo <i className="icon-book" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }

export default Introduction;