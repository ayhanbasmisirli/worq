/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [
      {
        source: "/",
        destination: "/UserForm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
