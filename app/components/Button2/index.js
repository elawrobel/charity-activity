import React, { Children } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css'; // !IMPORTANT -> js object

function Button(props) {
  // Render an anchor tag
  let button = (
    <a href={props.href} onClick={props.onClick} className={styles.button}>
      {Children.toArray(props.children)}
    </a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    // !IMPORTANT
    button = (
      <button
        onClick={props.handleRoute}
        className={styles.button}
        type="button"
      >
        {Children.toArray(props.children)}
      </button>
    );
  }

  return <div className={styles.wrapper}>{button}</div>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
