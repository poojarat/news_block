import React from 'react'
import Modal from 'react-responsive-modal'
import './Modal.css'

const toggleDark = () => {
  let modal = document.querySelector("div.styles_modal__gNwvD")
  modal.classList.toggle('dark')
}

const ArticlesModal = props => {
  return(
    <Modal
      open={props.open}
      onClose={props.closeModal}
      showCloseIcon={true}
      center
      modalId="modal"
    >

      <div id="modal-header">
        <img onClick={ toggleDark } src="images/noun_day_and_night_small.png" alt="sun and moon, light and dark toggle" />
        <h1>{props.category}</h1>
      </div>

      <ul>
        {
          props.articles.map(article => (
            <>
              <li key={article.url}>
                <div id="modal-head">
                  <a href={article.urlToImage} target="_blank" rel="noopener noreferrer"><img src={article.urlToImage} alt="article img" /></a>
                  <div>
                    <h3>{<a target="_blank" rel="noopener noreferrer" href={article.url}>{article.title}</a>}</h3>
                  </div>
                </div>
                <h4>{article.description}</h4>
                <span>{ article.publishedAt.slice(0, 10) }</span>
                <p>
                  {article.content}
                </p>
                <div className="srcstyles">
                  {article.source.name}
                </div>
                <hr className="hrspace"/>
              </li>
            </>
          ))
        }
      </ul>
    </Modal>
  )
}

export default ArticlesModal
