export // Other configuration options (if any)
async function headers() {
  return [
    {
      source: "/", // Adjust the path if needed
      headers: [
        {
          key: "Cross-Origin-Embedder-Policy",
          value: "require-corp",
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
      ],
    },
  ];
}
