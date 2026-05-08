// config/plugins.ts
export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("SUPABASE_ACCESS_KEY_ID"),
            secretAccessKey: env("SUPABASE_SECRET_ACCESS_KEY"),
          },
          region: env("SUPABASE_REGION"),
          endpoint: env("SUPABASE_ENDPOINT"),
          params: {
            Bucket: env("SUPABASE_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
