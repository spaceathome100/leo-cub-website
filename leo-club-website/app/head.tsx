// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Leo Club Of Hopeville</title>
      <meta
        name="description"
        content="Youth leadership & service – Sponsored by Lions Club of Chennai"
      />

      {/* Favicon and Apple Touch Icon */}
      <link rel="icon" href="/images/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />

      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#0056b3" />
    </>
  );
}
