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
      showCloseIcon={false}
      center
      modalId="modal"
    >
      <img  onClick={ toggleDark }  src="/images/noun_day_and_night_small.png" alt="sun and moon, light and dark toggle" />

      <ul>
        {
          props.articles.map(article => (
            
            <li key={article.url}>
              <h3>{<a target="_blank" href={article.url}>{article.title}</a>}</h3>
              <span>{ article.publishedAt.slice(0, 10) }</span>
              <h4>{article.description}</h4>
              <p>
                {article.content}
              </p>
              <div className="srcstyles">
                {article.source.name}
              </div>
              <hr className="hrspace"/>
              
            </li>
          ))
        }
      </ul>
    </Modal>
  )
}

export default ArticlesModal
