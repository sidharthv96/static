import fs from 'fs/promises';
import { BadgePreset, defineConfig, presets } from 'sponsorkit';

const MERMAID_CHART_LOGO = (width: number, y: number) => `
<a xlink:href="https://mermaidchart.com" class="sponsorkit-link" target="_blank" id="MermaidChart">
<svg
  x="${(width - 360) / 2}" y="${y}" width="360" height="60"
  id="Layer_1"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 2101.09 268.11"
><defs><style>.cls-1{fill:#ff3670;}.cls-2{fill:#ff3670;}</style></defs><path
    class="cls-1"
    d="M481.3,50.77H547l25.17,120.81h.56l24-120.81h66L674.25,246h-45l-5.87-142.89h-.56L591.48,246h-40l-31.6-142.89h-.84L513.46,246H469.83Z"
  /><path
    class="cls-1"
    d="M682,170.46c0-47.54,30.76-77.74,76.34-77.74,47.26,0,77.18,32.44,66.84,91.16H727.27c5.32,17.34,20.7,24.89,40.83,24.89,15.38,0,32.16-4.2,45.3-13.42v42.78c-14.54,6.71-32.16,9.51-47.82,9.51C712.73,247.64,682,216.88,682,170.46Zm103.47-18.74c-2-14.82-13.7-22.65-28.25-22.65-15.1,0-25.44,8.67-29.92,22.65Z"
  /><path
    class="cls-1"
    d="M837.87,94.4h38v12h.56c6.71-9,16.78-13.42,29.36-13.42A54.09,54.09,0,0,1,917,94.12V138a44.15,44.15,0,0,0-16.78-3.63c-10.91,0-19.3,5.87-19.3,20.13V246H837.87Z"
  /><path
    class="cls-1"
    d="M929.31,94.4h38v12.3h.56c9.23-9.79,20.42-14,34.12-14,16.22,0,29.08,5.87,37.19,17.06h.56c9.51-11.47,22.37-17.06,38-17.06,29.08,0,47.54,18.73,47.54,49.5V246h-42.79V152.84c0-12.3-6.15-19.57-16.77-19.57-10.35,0-16.78,7.27-16.78,19.57V246h-43.07V152.84c0-12.3-6.15-19.57-16.78-19.57s-16.77,7.27-16.77,19.57V246H929.31Z"
  /><path
    class="cls-1"
    d="M1135.18,197.58c0-30.76,19.58-49.49,47.54-49.49,10.91,0,20.42,2.79,28.25,7.83h.56v-4.48c0-15.1-10.07-23.77-28-23.77-12.86,0-25.17,4.48-34.39,9.51V100.27a120.1,120.1,0,0,1,43.06-8.11c39.71,0,62.36,20.69,62.36,59V246h-40v-9H1214c-7.83,6.71-19,10.35-31.6,10.35C1154.48,247.36,1135.18,228.34,1135.18,197.58ZM1195.59,216c10.34,0,17.61-7.55,17.61-19.3,0-11.46-7.27-19-17.61-19s-18.18,7.55-18.18,19S1185.24,216,1195.59,216Z"
  /><path
    class="cls-1"
    d="M1288.15,38.19c15.1,0,24.88,8.67,24.88,22.65s-9.78,22.65-24.88,22.65c-14.82,0-24.89-8.67-24.89-22.65S1273.05,38.19,1288.15,38.19ZM1266.61,94.4h43.07V246h-43.07Z"
  /><path
    class="cls-1"
    d="M1319.33,170.18c0-47,28.52-77.46,66.83-77.46,14,0,26.85,3.91,36.91,11.18h.56v-59h43.07V246H1427V232.54h-.56c-10.35,10.07-25.45,14.54-40.27,14.54C1347,247.08,1319.33,216.6,1319.33,170.18Zm75.5,35.79c17.34,0,30.76-13.14,30.76-36.07,0-23.21-13.42-36.35-30.76-36.35-17.9,0-30.76,13.7-30.76,36.35S1376.93,206,1394.83,206Z"
  /><path
    class="cls-1"
    d="M1523.18,148.37c0-60.4,40.27-99.55,98.16-99.55a142.76,142.76,0,0,1,28.24,3.07v49.22a75.83,75.83,0,0,0-27.4-5.59c-28.53,0-49.5,19.57-49.5,52.85s21,52.85,49.5,52.85a76,76,0,0,0,27.4-5.59v49.21a142.79,142.79,0,0,1-28.24,3.08C1563.45,247.92,1523.18,208.77,1523.18,148.37Z"
  /><path
    class="cls-1"
    d="M1662.5,44.9h43.07v59.84h.55c7.84-7.83,18.46-12,31.6-12,27.69,0,45.86,19,45.86,49.5V246H1740.8V152.84c0-12.3-6.71-19.57-17.62-19.57s-17.61,7.27-17.61,19.57V246H1662.5Z"
  /><path
    class="cls-1"
    d="M1793,197.58c0-30.76,19.58-49.49,47.54-49.49,10.91,0,20.41,2.79,28.24,7.83h.56v-4.48c0-15.1-10.06-23.77-28-23.77-12.86,0-25.17,4.48-34.4,9.51V100.27a120.19,120.19,0,0,1,43.07-8.11c39.71,0,62.36,20.69,62.36,59V246h-40v-9h-.56c-7.83,6.71-19,10.35-31.6,10.35C1812.31,247.36,1793,228.34,1793,197.58Zm60.4,18.46c10.35,0,17.62-7.55,17.62-19.3,0-11.46-7.27-19-17.62-19s-18.17,7.55-18.17,19S1843.07,216,1853.41,216Z"
  /><path
    class="cls-1"
    d="M1928.55,94.4h38v12h.56c6.71-9,16.78-13.42,29.36-13.42a54.09,54.09,0,0,1,11.19,1.12V138a44.11,44.11,0,0,0-16.78-3.63c-10.9,0-19.29,5.87-19.29,20.13V246h-43.07Z"
  /><path
    class="cls-1"
    d="M2030.34,202.06V132.15h-14.82V105.86c17.06-5.59,24.89-14.54,27.12-34.39l.84-7.27h29.92V94.4h27.69v37.75H2073.4v62.36c0,9,4.48,12,11.19,12a38.11,38.11,0,0,0,15.1-3.63v41.38a90.58,90.58,0,0,1-25.73,3.64C2045.16,247.92,2030.34,234.22,2030.34,202.06Z"
  /><path
    class="cls-2"
    d="M324.94.15A165.2,165.2,0,0,0,162.55,108.92,164.56,164.56,0,0,0,124,48.36,164.72,164.72,0,0,0,.15.15,164.72,164.72,0,0,0,48.36,124,167.35,167.35,0,0,0,72.21,143.8a88.79,88.79,0,0,1,38.52,73.44v50.87H214.36V217.24a88.82,88.82,0,0,1,38.52-73.44A166.24,166.24,0,0,0,276.73,124,164.68,164.68,0,0,0,324.94.15Z"
  /><path
    class="cls-2"
    d="M78.1,217.24a56.07,56.07,0,0,0-24.27-46.48,198.93,198.93,0,0,1-28.54-23.67A197.25,197.25,0,0,1,0,116V268.11H78.1Z"
  /><path
    class="cls-2"
    d="M247,217.24a56.07,56.07,0,0,1,24.27-46.48,199.48,199.48,0,0,0,28.54-23.67A197.25,197.25,0,0,0,325.1,116V268.11H247Z"
  /></svg>
</a>
`;

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
};

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose, _, config) {
        if (
          config.filter?.({ monthlyDollars: Infinity } as any, []) !== false
        ) {
          compose
            .addSpan(20)
            .addText('Special Sponsor', 'sponsorkit-tier-title')
            .addSpan(10)
            .addRaw(MERMAID_CHART_LOGO(config.width!, compose.height))
            .addSpan(100);
        }
      },
    },
  ],

  async onSponsorsReady(sponsors) {
    await fs.writeFile(
      'sponsors.json',
      JSON.stringify(
        sponsors
          .filter((i) => i.privacyLevel !== 'PRIVATE')
          .map((i) => {
            return {
              name: i.sponsor.name,
              login: i.sponsor.login,
              avatar: i.sponsor.avatarUrl,
              amount: i.monthlyDollars,
              link: i.sponsor.linkUrl || i.sponsor.websiteUrl,
              org: i.sponsor.type === 'Organization',
            };
          })
          .sort((a, b) => b.amount - a.amount),
        null,
        2
      )
    );
  },

  outputDir: '.',
  formats: ['svg', 'png'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
    {
      name: 'sponsors.wide',
      width: 1800,
    },
    {
      name: 'sponsors.part1',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars >= 9.9,
    },
    {
      name: 'sponsors.part2',
      width: 800,
      filter: (sponsor) =>
        sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0,
    },
    {
      name: 'sponsors.past',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 0,
    },
  ],
});
