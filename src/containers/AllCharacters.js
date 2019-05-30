import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AllCharacters extends PureComponent {
  static propTypes = {

  }

  componentDidMount() {

  }

  render() {

    return (
      <section></section>
    );
  }

}

export default connect(
mapStateToProps,
mapDispatchToProps
)(AllCharacters);
