module.exports = {
  verbose: true,
  // setupFilesAfterEnv: ["<rootDir>/testSetupFile.js"],
  // testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1", // 追加
  // },
};
