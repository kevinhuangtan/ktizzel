var React = require('react');


var Projects = React.createClass({
  render: function(){
    return(
      <div key={6} className="Projects Slide">
        <div className="content-parent">

        <div className="project">
          <img src="/images/yhack-project.png"/>
          <div className="text">
            <p>President of Yhack 2015, Yale's premier hackathon. 1000 hackers and 30 sponsors.</p>
            <p><a href="http://www.yhack.org" target="_blank" >www.yhack.org</a></p>
          </div>
        </div>
        <div className="project">
          <div className="text">
            <p>Virtual Reality Recreation of Multiple Japanese Byobu Scenes</p>
          </div>
        </div>
        <div className="project">
          <div className="text">
            <p>TraveledBy</p>
            <p>Founded Calhoun College's forum for illuminating diverse career paths. Speakers include oscar-winning film maker Peter Davis</p>
            <p><a href="http://www.traveledby.org" target="_blank" >www.traveledby.org</a></p>
          </div>
        </div>
        <div className="project">
          <img src="/images/citizencan-project.png"/>
          <div className="text">
            <p>CitizenCAN filters legislation by topic, committee and stage in committee.</p>
            <p>FiscalNote API Prize at HackMIT 2015</p>
          </div>
        </div>
        <div className="project">
          <div className="text">
            <p>Cofounded CodeBoola, a one day webdev learnathon for high school students, held at Yale.</p>
            <p><a href="http://www.codeboola.yhack.org" target="_blank" >www.codeboola.yhack.org</a></p>
          </div>
        </div>
        <div className="project">
          <img src="/images/annelisa-project.png"/>
          <div className="text">
            <p>Designed and Built Web Portfolio for Artist Annelisa Leinbach</p>
            <p><a target="_blank" href="http://www.annelisaleinbach.com">www.annelisaleinbach.com</a></p>
          </div>
        </div>
        <div className="project">
          <div className="text">
            <p>Web Portfolio for Architect Katie Colford</p>
            <p><a target="_blank" href="http://www.katiecolford.com">www.katiecolford.com</a></p>
          </div>
        </div>
        <div className="project">
          <div className="text">
            <p>Sticktionary</p>
            <p>Mobile app built with React Native for language learning startup.</p>
          </div>
        </div>

        <div className="project">
          <div className="text">
            <p>Fellow at Center for Engineering and Design</p>
            <p>Virtual Reality application for architecture visualization</p>
          </div>
        </div>


      </div>
      </div>

    )
  }
})
// <div className="project">
//   <div className="text">
//     <p>Godflow</p>
//   </div>
// </div>e
module.exports = Projects;
