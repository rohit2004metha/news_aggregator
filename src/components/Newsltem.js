import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="my-3">
        <figure className="card" style={{ backgroundColor: '#49967e' }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img
            src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/05/26/600x338/2-0-74618388-MONSOON-3C--0_1681394459492_1685085388530.jpg" : imageUrl}
            className="card-img-top"
            alt={title || "News Image"}
          />
          <figcaption className="card-body">
            <h5 className="card-title">{title && `${title.slice(0, 100)}...`}</h5>
            <p className="card-text">{description && `${description.slice(0, 150)}...`}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author || "Unknown"} on {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-danger">
              Read More...
            </a>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default NewsItem;
