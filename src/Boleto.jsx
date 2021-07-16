import React from 'react'
import PropTypes from 'prop-types'


const Boleto = ({title, image,nickname,nickname2, price}) => (
    <div className="ed-grid m-grid-1">
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image ? image: "data:image/png;base64,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"} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {nickname}
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={image} alt={title} />
              </div>
            </div>
            <span className="small">{nickname2}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
        </div>
      </div>
    </article>
  </div>
)

// Boleto.PropTypes = {
//   title: PropTypes.string,
//   image:PropTypes.string,
//   nickname:PropTypes.string,
//   nickname2:PropTypes.string,
//   price:PropTypes.string,

// }

// Boleto.defaultProps = {
//   title: "No se encontro",
//   image:"No se encontro",
//   nickname:"No se encontro",
//   nickname2:"No se encontro",
//   price:"No se encontro",

// }

export default Boleto