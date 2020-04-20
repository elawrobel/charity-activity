/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'charityActivity.components.Menu';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  check: {
    id: `${scope}.check`,
    defaultMessage: 'Check events',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add event',
  },
});
