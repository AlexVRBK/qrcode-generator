<template>
<div class="container">
  <div class="form-container">
    <v-btn @click="$router.push('/')">Home</v-btn>
    <form @submit.prevent="generateQRCode">
      <label for="facebook">Facebook:</label>
      <input type="text" id="facebook" v-model="formData.facebook">
      <br>
      <label for="twitter">Twitter:</label>
      <input type="text" id="twitter" v-model="formData.twitter">
      <br>
      <label for="instagram">Instagram:</label>
      <input type="text" id="instagram" v-model="formData.instagram">
      <br>
      <button type="submit">Generate Code</button>
    </form>

    <div class="qr-code-container">
      <canvas v-if="qrCodeData" ref="qrcodeCanvas" class="qr-code-canvas"></canvas>
      <div v-else-if="isGenerating" class="preloader"></div>
    </div>
  </div>
</div>
</template>

<style>
  .form-container {
    padding: 20px;
  }

  .qr-code-container {
    margin-top: 20px;
    text-align: center;
  }

  .qr-code-canvas {
    max-width: 100%;
    height: auto;
  }
</style>


<script>
  import QRCode from 'qrcode';

  export default {
    data() {
      return {
        formData: {
          facebook: '',
          twitter: '',
          instagram: ''
        },
        qrCodeData: '',
        isGenerating: false
      };
    },
    methods: {
      generateQRCode() {
        const socialLinks = {
          facebook: this.formData.facebook,
          twitter: this.formData.twitter,
          instagram: this.formData.instagram
        };

        const jsonSocialLinks = JSON.stringify(socialLinks);

        this.isGenerating = true;

        setTimeout(() => {
          this.qrCodeData = jsonSocialLinks;
          this.isGenerating = false;
          this.generateQRCodeCanvas();
        }, 2000);
      },
      generateQRCodeCanvas() {
        const canvas = this.$refs.qrcodeCanvas;
        const qrcodeData = this.qrCodeData;

        if (canvas) {
          QRCode.toCanvas(canvas, qrcodeData, (error) => {
            if (error) {
              console.error('Помилка при генерації QR-коду:', error);
            }
          });
        }
      }
    },
    mounted() {
      const qrCodeData = this.$route.query.data;
      if (qrCodeData) {
        const socialLinks = JSON.parse(qrCodeData);
        this.formData.facebook = socialLinks.facebook || '';
        this.formData.twitter = socialLinks.twitter || '';
        this.formData.instagram = socialLinks.instagram || '';
        this.generateQRCodeCanvas();
      }
    }
  };
</script>
