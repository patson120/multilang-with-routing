import createNextIntlPlugin from 'next-intl/plugin'
 
const withNextIntl = createNextIntlPlugin(
    "./src/i18n.ts"
)
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
};
 
export default withNextIntl(nextConfig)