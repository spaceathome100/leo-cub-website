// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Leo Club Of Hopeville</title>
      <meta
        name="description"
        content="Youth leadership & service – Sponsored by Lions Club of Chennai"
      />

      {/* Favicon PNG */}
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />

      {/* Optional: favicon ICO fallback */}
      <link rel="icon" href="/favicon.ico" />

      {/* Optional: Apple touch icon */}
      <link rel="apple-touch-icon" href="/images/logo.png" />

      {/* Optional: viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
