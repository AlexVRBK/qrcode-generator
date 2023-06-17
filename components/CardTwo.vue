<template>
  <div class="container">
    <div class="cardWrap" ref="cardWrap" @mousemove="handleMouseMove" @mouseout="resetCard">
      <div class="card">
        <div class="cardBg" :style="`background-image: url(${require('@/assets/images/bizcardmaket2.jpg')})`"></div>
        <div class="cardInfo">
          <h3 class="cardTitle">
            Mathematics
          </h3>
          <p>A subject which deals with.... Well Maths!</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    const wrapper = this.$refs.cardWrap;

    let state = {
      mouseX: 0,
      mouseY: 0,
      height: wrapper.clientHeight,
      width: wrapper.clientWidth
    };

    wrapper.addEventListener("mousemove", event => {
      const card = wrapper.querySelector(".card");
      const cardBg = card.querySelector(".cardBg");
      state.mouseX = event.pageX - wrapper.offsetLeft - state.width / 2;
      state.mouseY = event.pageY - wrapper.offsetTop - state.height / 2;

      // паралаксний кут в картці
      const angleX = (state.mouseX / state.width) * 30;
      const angleY = (state.mouseY / state.height) * -30;
      card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg)`;

      // паралаксне положення фону в картці
      const posX = (state.mouseX / state.width) * -40;
      const posY = (state.mouseY / state.height) * -40;
      cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    wrapper.addEventListener("mouseout", () => {
      const card = wrapper.querySelector(".card");
      const cardBg = card.querySelector(".cardBg");
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
  },
  methods: {
    handleMouseMove(event) {
      // Обробка події mousemove
    },
    resetCard() {
      // Скидання стану карти
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}

.cardWrap {
  margin: 10px;
  -webkit-transform: perspective(800px);
  transform: perspective(800px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;
}

.cardWrap:hover .cardInfo {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.cardWrap:hover .cardInfo p {
  opacity: 1;
}

.cardWrap:hover .cardInfo,
.cardWrap:hover .cardInfo p {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.cardWrap:hover .cardInfo:after {
  -webkit-transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.cardWrap:hover .cardBg {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}

.cardWrap:hover .card {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset white 0 0 0 6px;
}

.card {
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 240px;
   width: 280px;
  height: 450px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.cardBg {
  opacity: 0.5;
  position: absolute;
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.cardInfo {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.cardInfo p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.cardInfo * {
  position: relative;
  z-index: 1;
}

.cardInfo:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(rgba(0, 0, 0, 0.6))
  );
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-blend-mode: overlay;
  opacity: 0;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.cardInfo h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

</style>