import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {

    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>
              {source}  </span>
          <img src={(!imageUrl ? "https://www.livemint.com/lm-img/img/2023/05/26/600x338/2-0-74618388-MONSOON-3C--0_1681394459492_1685085388530.jpg" : imageUrl)} className="card-img-top" alt="..." />
          <div className="card- body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}