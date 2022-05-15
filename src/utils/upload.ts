import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.REACT_APP_S3_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_S3_IDENTITY ?? '',
  }),
});

export const s3Upload = (file: File, fileName: string, type: string) => {
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.REACT_APP_S3_BUCKET ?? '', // 업로드할 대상 버킷명
      Key: `${fileName}.${type}`, // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
      Body: file, // 업로드할 파일 객체
    },
  });
  return upload.promise();
};
