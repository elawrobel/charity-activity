/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'charityActivity.components.Counter';

export default defineMessages({
  count: {
    id: `${scope}.count`,
    defaultMessage: 'Przebiegliśmy wspólnie',
  },
});
