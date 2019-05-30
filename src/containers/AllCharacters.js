import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
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
  characters: '',
  loading: '',
  error: ''
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
