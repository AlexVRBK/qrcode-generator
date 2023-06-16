<template>
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="generateQRCode">
        <label for="github">GitHub:</label>
        <input type="text" id="github" v-model="formData.github" class="input-field">
        <br>
        <v-btn class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
    large
    style="background: rgb(55, 65, 81);" type="submit" >Generate Code</v-btn>
      </form>

      <div class="qr-code-container">
        <canvas v-if="qrCodeData" ref="qrcodeCanvas" class="qr-code-canvas"></canvas>
        <div v-else-if="isGenerating" class="preloader">
          <div class="preloader-spinner"></div>
        </div>
      </div>

      <div v-if="qrCodeData" class="buttons-container">
       
        <v-btn class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
    large
    style="background: rgb(55, 65, 81);" @click="downloadQRCode">Download Code</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      formData: {
        github: ''
      },
      qrCodeData: '',
      isGenerating: false
    };
  },
  methods: {
    generateQRCode() {
      const githubLink = this.formData.github;

      // Перевіряємо, чи введено посилання на GitHub
      if (!githubLink) {
        return;
      }

      this.isGenerating = true;

      setTimeout(() => {
        this.qrCodeData = githubLink;
        this.isGenerating = false;
        this.generateQRCodeCanvas();
      }, 10);
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
    },
   
    downloadQRCode() {
      const canvas = this.$refs.qrcodeCanvas;
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'qrcode.png';
      link.click();
    }
  }
};
</script>

<style>
.container {
  margin: auto;
  font-family: 'Arial', sans-serif;
  max-width: 700px;
}

.form-container {
  padding: 20px;
  background-color: #10a776;
}

.input-field {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.qr-code-container {
  margin-top: 20px;
  text-align: center;
}

.qr-code-canvas {
  max-width: 100%;
  height: auto;
}

.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.preloader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #10a776;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>