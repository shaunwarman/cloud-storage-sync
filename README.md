# google-cloud-storage-sync

[![build status](https://img.shields.io/travis/shaunwarman/google-cloud-storage-sync.svg)](https://travis-ci.com/shaunwarman/google-cloud-storage-sync)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/google-cloud-storage-sync.svg)](https://codecov.io/gh/shaunwarman/google-cloud-storage-sync)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/google-cloud-storage-sync.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/google-cloud-storage-sync.svg)](https://npm.im/google-cloud-storage-sync)

> A google cloud storage function to sync buckets


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install google-cloud-storage-sync
```

[yarn][]:

```sh
yarn add google-cloud-storage-sync
```


## Usage

```js
const { copyFile } = require('google-cloud-storage-sync');

(async () => {
  const options = {
    srcBucketName: 'src_bucket_name',
    srcFilename: 'src_file',
    destBucketName: 'dest_bucket_name',
    destFilename: 'dest_file',
    retries: 3
  };
  
  await copyFile(options);
});
```


## Contributors

| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <https://shaunwarman.com> |


## License

[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
