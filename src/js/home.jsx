////////////////////////////////////////////////
//////////////*~ Dependencies ~*////////////////
////////////////////////////////////////////////

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Slide8 = require('./blog.jsx');
var Slide7 = require('./projects.jsx');
var Slide6 = require('./influences.jsx');


var Slide5 = React.createClass({
  componentDidMount: function(){

  },
  render:function(){
      return (
        <div key={5} className="Photography Slide">
          <div className="content-parent">
            <img src="/images/newhaven.png"/>
            <p>New Haven Summit</p>
            <hr/>
            <img src="/images/bw/1.jpg"/>
            <img src="/images/bw/2.jpg"/>
            <img src="/images/bw/3.jpg"/>
            <img src="/images/bw/4.jpg"/>
            <img src="/images/bw/5.jpg"/>
            <img src="/images/bw/6.jpg"/>
            <img src="/images/bw/7.jpg"/>
            <img src="/images/bw/8.jpg"/>
            <p>The Colors of Photography</p>
            <p>I’ve been fascinated with the moon since I was little. In recreating the visual features of the moon, I hoped to recreate its affect on viewers. Isolation, grandeur, timelessness, pensivity and mystery.</p>
            <p>In a lit scene, all things seem to exist in the same world together. In these scenes of extreme light and dark, objects are isolated and give no reference to their place and context in the world.</p>
            <hr/>
            <img src="/images/cover_image.jpg"/>
            <hr/>
            <img src="/images/zaozhuang.jpg"/>
            <p> Strawberry farm outside of Zaozhuang, Shandong Province, China</p>
          </div>
        </div>
      )
  }
})
// <iframe width="100%" height="315" src="https://www.youtube.com/embed/FJ_x5MLc-jI?rel=0" frameBorder="0" allowFullScreen></iframe>

var Slide4 = React.createClass({
  render:function(){
      return (
        <div key={4} className="Music Slide">
          <div className="content-parent">
            <div className="content-child">
            <p>keys. drums. guitar. bass. ableton. logic. vocals. rap. asian soul.</p>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237839129&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237839352&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221710618&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/tmb96MeNYKI?rel=0" frameBorder="0" allowFullScreen></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202083877&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195399134&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/189292080&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/201308012&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197024405&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/196895658&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191140081&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>
          </div>
        </div>
      )
  }
})

var Slide3 = React.createClass({
  render:function(){
      return (
        <div key={3} className="YalePhysics Slide">
          <div className="content-parent">

            <p>B.S in Physics, Yale University Class of 2016</p>
            <p>Senior Research: Contributor to <a href="https://github.com/astropy/halotools">Halotools</a>, an official package in the <a href="http://www.astropy.org/">Astropy</a> project.</p>
            <p>I built a set of data structures and data mining methods for modeling the assembly histories of dark matter halos.</p>
            <p>Built using Python, Cython, Numpy and HDF5</p>
            <p>Advisor: Andrew Hearin, Yale Department of Physics</p>
            <div className="img-container">
            <img src="/images/halo-project.png"/>
          </div>
        </div>
        </div>
      )
  }
})

var Slide2 = React.createClass({
  render:function(){
      return (
        <div key={2} className="Developer Slide">
          <p><strong>Languages:</strong> Python, Cython, Javascript, C, Matlab, Objective C, HTML, CSS, LESS</p>
          <p><strong>Frameworks and libraries:</strong> Node.js, React, React Native, Flask, Meteor, MongoDB</p>
          <p><strong>Skills:</strong> Web, UI/UX, iOS & Android, Fullstack Developer, Data Structures and Algorithms</p>
        </div>
      )
  }
})

var Slide1 = React.createClass({
  render:function(){
      return (
        <div key={1} className="Theo Slide">
          <div className="content-parent">

          <div className="logo-container">
            <img src="/images/theo_animated.gif"/>
          </div>
          <p>Founder and CEO of <a target="_blank" href="https://theo.clothing">Theo</a>, a product platform for independent fashion and streetwear designers.</p>
          <p>Currently featuring 20 designers, including <a target="_blank" href="https://theo.clothing/controlsector">Control Sector</a>.</p>
          <p className="last">Web app built with Node.js, React and Parse. Mobile app built with React Native.</p>
          </div>
        </div>
      )
  }
})

var Content = React.createClass({
  render:function(){
    var Body;
    if(this.props.slide == 0){
        Body =
          <div key={0} className="Slide Slide0">
            <img src="/images/kevin.png"/>
          </div>
    }
    if(this.props.slide == 1){
        Body =   <Slide1 key={1}/>
    }
    if(this.props.slide == 2){
        Body =  <Slide2 key={2}/>
    }
    if(this.props.slide == 3){
        Body =  <Slide3 key={3}/>
    }
    if(this.props.slide == 4){
        Body =  <Slide4 key={4}/>
    }
    if(this.props.slide == 5){
        Body =  <Slide5 key={5} />
    }
    if(this.props.slide == 6){
        Body =  <Slide6 key={6} />
    }
    if(this.props.slide == 7){
        Body =  <Slide7 key={7} />
    }
    if(this.props.slide == 8){
        Body =  <Slide8 key={8} />
    }


    return (
      <section className="Content">
        <ReactCSSTransitionGroup className="css-transition" transitionName="example" transitionEnterTimeout={1500} transitionAppear={true} transitionLeave={true} transitionEnter={true} transitionAppearTimeout={1500}  transitionLeaveTimeout={400}>
          {Body}
        </ReactCSSTransitionGroup>

      </section>
    )
  }
})
var Navigation = React.createClass({
  getInitialState: function(){
    return {
      slideColors: [
        "rgb(144, 67, 127)",
        "rgb(190, 73, 62)",
        "rgba(227, 137, 71, 1)",
        "rgb(84, 147, 37)",
        "rgb(204, 67, 67)",
        "rgb(93, 93, 93)",
        "rgb(82, 125, 198)",
        "rgb(135, 79, 39)"
      ]
    }
  },
  render:function(){
      var styles = {
        slide0 : {},
        slide1 : {},
        slide2 : {},
        slide3 : {},
        slide4 : {},
        slide5 : {},
        slide6 : {},
        slide7 : {},
        slide8 : {}
      }
      if(this.props.slide || this.props.slide == 0){
        var slide = "slide" + (this.props.slide.toString());
        styles[slide].opacity = "1";
        if(this.props.slide!=0){
          styles[slide].color = this.state.slideColors[this.props.slide-1];
          styles[slide].display = "block";
        }
        else{
          styles.slide0.display = "block";

        }
      }
      return (
        <section className="Navigation-container">

          <div className="Navigation">
            <span className="glyphicon glyphicon-chevron-left" onClick={()=>this.props._setSlide(this.props.slide - 1)}/>

            <p className="title" style={styles.slide0} onClick={()=>this.props._setSlide(0)}>I strive to make products that add to <span className="good-life">the good life</span></p>
            <p className="nav nav1" style={styles.slide1} ><span onClick={()=>this.props._setSlide(1)}>founder of theo.clothing</span></p>

            <p className="nav nav2" style={styles.slide2}><span  onClick={()=>this.props._setSlide(2)}>web and iOS developer</span></p>
            <p className="nav nav3" style={styles.slide3}><span onClick={()=>this.props._setSlide(3)}>physics major at Yale</span></p>
            <p className="nav nav4" style={styles.slide4}><span onClick={()=>this.props._setSlide(4)}>music production</span></p>
            <p className="nav nav5" style={styles.slide5}><span onClick={()=>this.props._setSlide(5)}>photography</span></p>
            <p className="nav nav6" style={styles.slide6}><span onClick={()=>this.props._setSlide(6)}>influences</span></p>
            <p className="nav nav7" style={styles.slide7}><span onClick={()=>this.props._setSlide(7)}>projects</span></p>
            <p className="nav nav8" style={styles.slide8}><span onClick={()=>this.props._setSlide(8)}>blog</span></p>
            <span className="glyphicon glyphicon-chevron-right" onClick={()=>this.props._setSlide(this.props.slide + 1)}/>
          </div>
        </section>
      )
  }
})
// <p className="nav nav1" style={styles.slide1} ><span onClick={()=>this.props._setSlide(1)}>founder of theo.clothing</span></p>

var Container = React.createClass({
  getInitialState: function(){
    return{
      slide : 0
    }
  },
  _setSlide: function( slide ){
    if(slide == -1){
      this.setState({ slide : 8})
    }
    else if(slide == 8){
      this.setState({ slide : 0})
    }
    else{
      this.setState({ slide : slide})
    }
  },
  render: function(){
    return (
      <div className="Container">
        <Content slide={this.state.slide}/>
        <Navigation slide={this.state.slide} _setSlide={this._setSlide}/>
      </div>
    )
  }
});

////////////////////////////////////////////////
/////////////////*~ Render ~*///////////////////
////////////////////////////////////////////////

ReactDOM.render(
  <div>
    <Container />
    <div className="footer">
      <p className="right future">© Kevin Tan, 1993-future</p>
      <p className="right">
        <a id="resume" target="_blank" href="mailto:kevin@ktizzel.com">Email</a>
			</p>
      <p className="right">
        <a id="resume" target="_blank" href="/resume">CV</a>
      </p>
    </div>
  </div>,
  document.getElementById('root')
);
