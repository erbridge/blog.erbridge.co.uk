<script lang="ts">
  import { shouldPolyfill as shouldPolyfillDateTimeFormat } from "@formatjs/intl-datetimeformat/should-polyfill";
  import { shouldPolyfill as shouldPolyfillGetCanonicalLocales } from "@formatjs/intl-getcanonicallocales/should-polyfill";
  import { shouldPolyfill as shouldPolyfillLocale } from "@formatjs/intl-locale/should-polyfill";
  import { shouldPolyfill as shouldPolyfillNumberFormat } from "@formatjs/intl-numberformat/should-polyfill";
  import { shouldPolyfill as shouldPolyfillPluralRules } from "@formatjs/intl-pluralrules/should-polyfill";
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
        if (shouldPolyfillGetCanonicalLocales()) {
          await import("@formatjs/intl-getcanonicallocales/polyfill");
        }
      },

      async () => {
        if (shouldPolyfillLocale()) {
          await import("@formatjs/intl-locale/polyfill");
        }
      },

      async () => {
        if (shouldPolyfillPluralRules()) {
          await import("@formatjs/intl-pluralrules/polyfill");
        }
      },

      async () => {
        if (shouldPolyfillNumberFormat()) {
          await import("@formatjs/intl-numberformat/polyfill");
        }

        if ((Intl.NumberFormat as any).polyfilled) {
          await import("@formatjs/intl-numberformat/locale-data/en-GB");
        }
      },

      async () => {
        if (shouldPolyfillDateTimeFormat()) {
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

<time datetime={date.toISOString().split("T")[0]}
  >{formatter ? formatter.format(date) : date.toLocaleDateString()}</time
>
