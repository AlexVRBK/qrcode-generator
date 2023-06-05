<template>
  <div>
    <h1>Social Linkss</h1>
    <p>Facebook: {{ socialLinks.facebook }}</p>
    <p>Twitter: {{ socialLinks.twitter }}</p>
    <p>Instagram: {{ socialLinks.instagram }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: {}
    };
  },
  mounted() {
    // Отримуємо параметр QR-коду з URL
    const qrCodeData = decodeURIComponent(this.$route.query.data);

    // Парсимо JSON-рядок з даними посилань
    this.socialLinks = JSON.parse(qrCodeData);
  }
};
</script>
