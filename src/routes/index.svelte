<script context="module" lang="ts">
  export async function preload() {
    await this.redirect(302, "weeknotes");
  }
</script>
