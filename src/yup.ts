import { addMethod, mixed } from 'yup';

addMethod(mixed, 'fileMax', function (args) {
  const { maxBytes, message } = args;
  return this.test('fileMax', message, function (value) {
    if (!value || value instanceof File === false) {
      return true;
    }

    return Math.round(value.size / 1024) < maxBytes;
  });
});

addMethod(mixed, 'fileFormat', function (args) {
  const { formats, message } = args;
  return this.test('fileFormat', message, function (value) {
    if (!value || value instanceof File === false) {
      return true;
    }
    return formats.includes(value.type);
  });
});
