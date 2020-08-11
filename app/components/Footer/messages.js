/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'charityActivity.components.Footer';

export default defineMessages({
  contactMessage: {
    id: `${scope}.contact.message`,
    defaultMessage: 'Kontakt',
  },
  smMessage: {
    id: `${scope}.sm.message`,
    defaultMessage: `
      Znajdź nas na Facebooku!
    `,
  },
});
