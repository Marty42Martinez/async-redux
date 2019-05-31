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
import Load from '../components/quotes/Load';
import styles from './CharacterQuotes.css';

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
    const { characterQuotes, loading, error, fetch } = this.props;
    if(loading) return <h1>LOADING!</h1>;
    if(error) return <p>error.message</p>;
    return (
      <section className={styles.Simpsons}>
        <Load fetch={fetch}/>
        <Characters characters={characterQuotes} />
      </section>
    );
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
