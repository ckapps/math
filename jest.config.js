module.exports = {
  preset: 'ts-jest',
  maxWorkers: '25%',
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '^.+\\.spec\\.ts$',
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  globals: {
    'ts-jest': {
      tsconfig: './src/tsconfig.spec.json',
    },
  },
};
