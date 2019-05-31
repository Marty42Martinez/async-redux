import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/characterQuoteActions';
import {
  getQuotes,
  getQuotesLoading,
  getQuotesError
} from '../selectors/quoteSelectors';
import Characters from '../components/characters/Characters';

class CharacterQuotes extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characterQuotes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characterQuotes, loading, error } = this.props;
    if(loading) return <h1>LOADING!</h1>;
    return <Characters characters={characterQuotes} />;
  }
}

const mapStateToProps = state => ({
  characterQuotes: getQuotes(state),
  loading: getQuotesLoading(state),
  error: getQuotesError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterQuotes);
