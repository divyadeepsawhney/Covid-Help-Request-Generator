export default function format(data) {
  const { Name } = data;

  return `
    Name: ${Name}

    Generated by https://BeatCovid.xyz
  `;
}
