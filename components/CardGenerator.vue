<template>
  <div class="business-card-generator">
    <h2>Создать визитку</h2>

    <!-- Формы для ввода данных -->
    <div>
      <label for="firstName">Имя:</label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>

    <div>
      <label for="lastName">Фамилия:</label>
      <input type="text" id="lastName" v-model="lastName" />
    </div>

    <div>
      <label for="companyName">Название компании:</label>
      <input type="text" id="companyName" v-model="companyName" />
    </div>

     <div>
    <label for="socialNetwork">Соціальна мережа:</label>
    <input type="text" id="socialNetwork" v-model="socialNetwork" />
    <button @click="generateQRCode">Генерувати QR-код</button>
  </div>

    <!-- Форма для выбора фона визитки -->
    <div>
      <label for="cardColor">Цвет фона:</label>
      <input type="color" id="cardColor" v-model="cardColor" />
    </div>

    <!-- Визуализация визитки -->
      <div
      class="business-card"
      :style="`background-color: ${cardColor}; font-size: ${fontSize}px; width: ${cardWidth}px; height: ${cardHeight}px;`"
      ref="businessCard"
    >
      <h3 :style="`font-family: ${fontFamily}`">{{ firstName }} {{ lastName }}</h3>
      <p :style="`font-family: ${fontFamily}`">{{ companyName }}</p>
      <img v-if="qrCodeGenerated" :src="qrCodeUrl" alt="QR Code" />
    </div>

    <!-- Кнопки для скачивания визитки -->
    <div class="generat_btn">
      <div>
        <button @click="downloadAsImage">Скачать как изображение</button>
      </div>
      <div>
        <button @click="downloadAsZip">Скачать как zip</button>
      </div>
    </div>
  </div>
</template>


<script>
import JSZip from 'jszip';
import QRCode from 'qrcode';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      companyName: '',
      socialNetwork: '',
      cardColor: '#ffffff',
      fontSize: 18,
      cardWidth: 300,
      cardHeight: 200,
      fontFamily: 'Arial',
      qrCodeGenerated: false, // Додано нову властивість
      qrCodeUrl: ''
    };
  },

  methods: {
    downloadAsImage() {
      // Получаем элемент визитки
      const cardElement = this.$refs.businessCard;

      // Создаем новый холст (canvas) и устанавливаем его размеры
      const canvas = document.createElement('canvas');
      canvas.width = cardElement.offsetWidth;
      canvas.height = cardElement.offsetHeight;

      // Получаем контекст холста
      const context = canvas.getContext('2d');

      // Рисуем содержимое визитки на холсте
      context.drawSvg(cardElement.innerHTML, 0, 0, canvas.width, canvas.height);

      // Создаем ссылку для скачивания изображения
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'business_card.png';

      // Добавляем ссылку на страницу и эмулируем клик для скачивания
      document.body.appendChild(link);

    link.click();
          document.body.removeChild(link);
    },
    downloadAsZip() {
      // Создаем новый экземпляр объекта JSZip
      const zip = new JSZip();

      // Создаем файл для визитки и добавляем его в zip-архив
      const cardContent = this.$refs.businessCard.outerHTML;
      zip.file('business_card.html', cardContent);

      // Генерируем zip-архив
      zip.generateAsync({ type: 'blob' }).then(content => {
        // Создаем ссылку для скачивания zip-архива
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'business_card.zip';

        // Добавляем ссылку на страницу и эмулируем клик для скачивания
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
   generateQRCode() {
      if (this.socialNetwork.trim() === '') {
        console.error('Текст соціальної мережі порожній');
        return;
      }

      const canvas = document.createElement('canvas');
      QRCode.toCanvas(canvas, this.socialNetwork, (error) => {
        if (error) {
          console.error('Помилка при генерації QR-коду:', error);
        } else {
          this.qrCodeUrl = canvas.toDataURL('image/png');
          this.qrCodeGenerated = true; // Позначаємо, що QR-код згенеровано
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.business-card-generator {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
}

.business-card {
  width: 300px;
  height: 200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 3px solid rgb(4, 107, 74);
  color: #333;
}

.business-card h3 {
  font-size: 18px;
  margin: 0;
}

.business-card p {
  font-size: 14px;
  margin: 0;
}

.generat_btn {
  display: flex;
  justify-content: space-around;
}
</style>
