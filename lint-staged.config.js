module.exports = {
  'src/**/*.ts': ['prettier --write'],
  '*.js': 'eslint --cache --fix',
  '*.ts': ['eslint --fix'],
  '*.{js,css,md}': 'prettier --write',
};
