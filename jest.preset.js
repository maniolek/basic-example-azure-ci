const nxPreset = require('@nx/jest/preset').default;

const reporters = [
    'default',
    [
        'jest-junit',
        {
            outputDirectory: `coverage`,
            suiteNameTemplate: ({ filepath }) => filepath,
        },
    ],
];
module.exports = {
    ...nxPreset,
    reporters,
};
