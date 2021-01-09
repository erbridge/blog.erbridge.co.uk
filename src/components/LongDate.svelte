<script lang="ts">
  import { onMount } from "svelte";

  export let value: string;

  const date = new Date(value);

  let formatter: Intl.DateTimeFormat;

  function setFormatter() {
    formatter = new Intl.DateTimeFormat("en-GB", {
      calendar: "gregory",
      dateStyle: "long",
    } as Intl.DateTimeFormatOptions);
  }

  if ("DateTimeFormat" in Intl) {
    setFormatter();
  }

  onMount(async () => {
    await Promise.all([
      async () => {
        const { shouldPolyfill } = await import(
          "@formatjs/intl-getcanonicallocales/should-polyfill"
        );

        if (shouldPolyfill()) {
          await import("@formatjs/intl-getcanonicallocales/polyfill");
        }
      },

      async () => {
        const { shouldPolyfill } = await import(
          "@formatjs/intl-locale/should-polyfill"
        );

        if (shouldPolyfill()) {
          await import("@formatjs/intl-locale/polyfill");
        }
      },

      async () => {
        const { shouldPolyfill } = await import(
          "@formatjs/intl-pluralrules/should-polyfill"
        );

        if (shouldPolyfill()) {
          await import("@formatjs/intl-pluralrules/polyfill");
        }
      },

      async () => {
        const { shouldPolyfill } = await import(
          "@formatjs/intl-numberformat/should-polyfill"
        );

        if (shouldPolyfill()) {
          await import("@formatjs/intl-numberformat/polyfill");
        }

        if ((Intl.NumberFormat as any).polyfilled) {
          await import("@formatjs/intl-numberformat/locale-data/en-GB");
        }
      },

      async () => {
        const { shouldPolyfill } = await import(
          "@formatjs/intl-datetimeformat/should-polyfill"
        );

        if (shouldPolyfill()) {
          await import("@formatjs/intl-datetimeformat/polyfill");
        }

        if ((Intl.DateTimeFormat as any).polyfilled) {
          await import("@formatjs/intl-datetimeformat/locale-data/en-GB");
        }
      },
    ]);

    setFormatter();
  });
</script>

<time
  datetime={date
    .toISOString()
    .split(
      'T'
    )[0]}>{formatter ? formatter.format(date) : date.toLocaleDateString()}</time>
