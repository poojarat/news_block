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
              <a href={article.url}>{article.title}</a>
            </li>
          ))
        }
      </ul>
    </Modal>
  )
}

export default ArticlesModal
