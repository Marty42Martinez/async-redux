import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

    return (
      <section></section>
    );
  }
}

const mapStateToProps = state => ({
  //Selectors called here!
  characterQuotes: '',
  loading: '',
  error: ''
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
