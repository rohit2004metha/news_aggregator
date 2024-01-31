import React, { Component } from 'react';

class NewsItem extends Component {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    const { isHovered } = this.state;

    return (
      <div className="my-3">
        <figure
          className="card"
          style={{
            backgroundColor: isHovered ? 'rgba(0,128,128)' : '#3fb7c9b1', // Adjust the alpha value and color
            borderRadius: '8px',
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            boxShadow: isHovered ? 'rgba(0, 0, 0, 0.4) 0px 30px 90px' : '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s, transform 0.3s, background-color 0.3s',
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img
            src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/05/26/600x338/2-0-74618388-MONSOON-3C--0_1681394459492_1685085388530.jpg" : imageUrl}
            className="card-img-top"
            alt={title || "News Image"}
            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
          />
          <figcaption className="card-body" style={{ position: 'relative', zIndex: '2' }}>
            <h5 className="card-title" style={{ color: '#333333', fontWeight: 'bold' }}>{title && `${title.slice(0, 100)}...`}</h5>
            <p className="card-text" style={{ color: 'black' }}>{description && `${description.slice(0, 150)}...`}</p>
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
