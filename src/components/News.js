import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './Newsltem';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Aggregator`;
  }

  async updateNews() {
    try {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83efd1a89c9e4e6c8a29c384cff287ae&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const parseData = await response.json();

      if (parseData.status === 'ok') {
        this.setState({
          articles: parseData.articles,
          totalResults: parseData.totalResults,
          error: null,
        });
      } else {
        throw new Error(parseData.message);
      }
    } catch (error) {
      console.error('Error fetching news:', error.message);
      this.setState({ error: 'Error fetching news' });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.updateNews();
  }

  handlePreviosClick = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews();
    });
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews();
    });
  };

  render() {
    const { articles, loading, error, page, totalResults } = this.state;

    return (
      <div className="container" style={{ backgroundColor: '#1F2544' }}>
        <h1 className="text-center" style={{ margin: '0', padding: '70px 0', backgroundColor: '#1F2544' }}>
  News Aggregator-Top {this.capitalizeFirstLetter(this.props.category)} Headlines
</h1>


        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title || ''}
                description={element.description || ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark custom-btn"
            onClick={this.handlePreviosClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark custom-btn"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
