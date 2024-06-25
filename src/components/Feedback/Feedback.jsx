import React from 'react';
import PropTypes from 'prop-types';
import {ButtonsWrap, Button} from './feedback.styled'


export const Feedback = ({options, onLeaveFeedback}) => {
    return (
        <ButtonsWrap>
            {options.map(option => (
                <Button
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))

            }
      </ButtonsWrap>
  )
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};