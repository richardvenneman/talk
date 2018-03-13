import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withSlotElements, withCombatPassthrough } from '../hocs';
import { compose } from 'recompose';

class IfSlotIsNotEmpty extends React.Component {
  isSlotEmpty(props = this.props) {
    const { slotElements } = props;
    return slotElements.length === 0
      ? false
      : slotElements.every(elements => elements.length === 0);
  }

  render() {
    const { children } = this.props;
    return this.isSlotEmpty() ? null : Children.only(children);
  }
}

IfSlotIsNotEmpty.propTypes = {
  slot: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  passthrough: PropTypes.object.isRequired,
};

const omitProps = ['slot', 'children'];

export default compose(
  withCombatPassthrough(omitProps),
  withSlotElements({
    slot: props => props.slot,
  })
)(IfSlotIsNotEmpty);
