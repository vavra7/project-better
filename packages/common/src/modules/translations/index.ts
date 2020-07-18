import errorsCs from './cs/common/errors.json';
import errorsEn from './en/common/errors.json';
import entityCs from './cs/common/entity.json';
import entityEn from './en/common/entity.json';
import validationCs from './cs/common/validation.json';
import validationEn from './en/common/validation.json';

const cs = {
  common: {
    errors: errorsCs,
    entity: entityCs,
    validation: validationCs
  }
};

const en = {
  common: {
    errors: errorsEn,
    entity: entityEn,
    validation: validationEn
  }
};

export default {
  cs,
  en
};
