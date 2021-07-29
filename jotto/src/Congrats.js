import React from 'react';
import PropTypes from 'prop-types';

/**
 * 축하하는 메시지를 위한 함수형 리액트 컴포넌트
 * @function
 * @param {object} props - react props
 * @returns {JSX.Element} - 렌더된 컴포넌트
 */

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! 단어를 추측하였습니다!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message"></span>
      </div>
    );
  }
};

export default Congrats;
