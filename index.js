const pRetry = require('p-retry');

const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

const copyFile = options => {
  ['srcBucketName', 'srcFileName', 'destBucketName', 'destFileName'].forEach(
    prop => {
      if (!options[prop]) {
        throw new Error(`${prop} is not specified in options`);
      }
    }
  );

  const {
    srcBucketName,
    srcFileName,
    destBucketName,
    destFileName,
    retries = 1
  } = options;

  const copy = () => {
    return storage
      .bucket(srcBucketName)
      .file(srcFileName)
      .copy(storage.bucket(destBucketName).file(destFileName));
  };

  return pRetry(copy, {
    retries,
    onFailedAttempt: error => {
      if (error.attemptsLeft === 0) {
        throw new Error(
          `Retry count exhausted copying: ${srcBucketName}:${srcFileName} to ${destBucketName}:${destFileName}`
        );
      }
    }
  });
};

const copyFiles = options => {
  const { srcBucketName, destBucketName, files } = options;

  ['srcBucketName', 'destBucketName', 'files'].forEach(prop => {
    if (!options[prop]) {
      throw new Error(
        'options object should contain `srcBucketName`, `destBucketName`, `files`'
      );
    }
  });

  return files.map(file => {
    return copyFile({
      srcBucketName,
      destBucketName,
      srcFileName: file,
      destFileName: file
    });
  });
};

module.exports = {
  copyFile,
  copyFiles
};
