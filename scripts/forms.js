import { config } from './initial-сards-and-config.js';
import { FormValidator } from './FormValidator.js';

const profileFormValidator = new FormValidator(config, document.forms.profile);
const elementFormValidator = new FormValidator(config, document.forms.element);

export { profileFormValidator, elementFormValidator };
