import React from 'react'
import Modal from 'react-responsive-modal'

const ArticlesModal = props => {
  return(
    <Modal
      open={props.open}
      onClose={props.closeModal}
      showCloseIcon={false}
      center
      modalId="modal"
    >
      <ul>
        {
          props.articles.map(article => (
            
            <li key={article.url}>
              <h3>{<a target="_blank" href={article.url}>{article.title}</a>}</h3>
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
