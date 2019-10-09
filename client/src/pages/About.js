import React from 'react';
import './About.css'
import CurrentDate from '../components/CurrentDate'
import axios from 'axios'
import ArticlesModal from '../components/Modal.js'
import NavBar from '../components/NavBar/Navbar';

class About extends React.Component {
  state = { 
    showNav: false,
    modalOpen: false,
    articles: []
  }

  getNews = (input) => {
    axios.get(`/search/${input}`)
      .then(({data}) => {
        const articles = data.articles,
        articlesLength = articles.length;
        this.setState({ modalOpen: true, articles: articlesLength ? articles : [] })
      })
      .catch(err => console.log(err));
  }

  toggleNav = () => {
    if (this.state.showNav) {
      this.setState({ showNav: false })
    } else {
      this.setState({ showNav: true })
    }
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }
  
  render() {
    return(
    <React.Fragment>
      <NavBar />
      <div className="timeblock">
        <CurrentDate /> <span>|</span>
        <h2>Todays news for a better world</h2>
      </div>
      <div id="about-box">
        <div id="about-wrapper">
          <div className="about-container-1">
            News Block Team
          </div>
          <div className="about-container-2">
            <div className="about-imgs">
              <img src="images/GautreauxMixolidia.jpg" alt="Mixolidia Gautreaux"></img>
              Mixolidia Gautreaux
              <span>
                <a href="https://github.com/mixolidia">GitHub</a>
              </span>
              <span>
                <a href="http://linkedin.com/in/mixolidia">Linkediin</a>
              </span>
            </div>
            <div className="about-imgs">
              <img src="images/MartinezTimothy.jpg" alt="Timothy Martinez"></img>
              Timothy Martinez
                <span>
                  <a href="https://github.com/TimothyMartinez">GitHub</a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/timothy-martinez-6a5a36187/">
                    Linkedin
                  </a>
                </span>
            </div>
          </div>
          <div className="about-container-2">
            <div className="about-imgs">
              <img src="images/PoojaraTushar.jpg" alt="Tushar Poojara"></img>
              Tushar Poojara
              <span>
                <a href="https://github.com/poojarat">GitHub</a>
              </span>
              </div>
              <div className="about-imgs">
                <img src="images/McCoyMeade.jpg" alt="Meade McCoy"></img>
                Meade McCoy
                <span>
                  <a href="https://www.linkedin.com/in/meademccoy/">Linkedin</a>
                </span>
              </div>
            </div>
          </div>
          <div id="about-attribution">
            Powered by NewsAPI
          </div>
      </div>
      <ArticlesModal 
        open={this.state.modalOpen}
        articles={this.state.articles}
        closeModal={this.closeModal}
      />
    </React.Fragment>
    )
  }
}

export default About
