/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'charityActivity.components.Header';

export default defineMessages({
  title: {
    id: `${scope}.text`,
    defaultMessage: 'Aktywnie Charytatywnie',
  },
  subtitle: {
    id: `${scope}.features`,
    defaultMessage: 'Z nami połączysz swoją pasję z pomaganiem! Dołącz do Nas juz dziś i zapisz się na jedno z wydarzeń.',
  },
});
