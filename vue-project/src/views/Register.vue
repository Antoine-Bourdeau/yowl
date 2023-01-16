<template>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto"
    rel="stylesheet"
  />

  <div class="top">
    <a href="/">
      <div class="top1">
        <img
          width="55px"
          height="45px"
          class=""
          src="http://image.noelshack.com/fichiers/2023/01/4/1672932278-yowl-image.png"
        />
        <p class="yowl">Yowl</p>
      </div>
    </a>

    <div class="top2">
      <div class="top1-2">
        <a href="/signin">
          <p class="profile">Se connecter</p>
        </a>
      </div>

      <div class="test">
        <div class="top1.3">
          <a href="/register">
            <button class="colorful-button">
              <div class="wrapper">
                <span>S'inscrire</span>
                <div class="circle circle-12"></div>
                <div class="circle circle-11"></div>
                <div class="circle circle-10"></div>
                <div class="circle circle-9"></div>
                <div class="circle circle-8"></div>
                <div class="circle circle-7"></div>
                <div class="circle circle-6"></div>
                <div class="circle circle-5"></div>
                <div class="circle circle-4"></div>
                <div class="circle circle-3"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-1"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="site">
    <div class="droite1">
      <div class="contenu">
        <br />
        <div class="centre">
          <button class="colorful-button">
            <div class="wrapper">
              <span>S'inscrire</span>
              <div class="circle circle-12"></div>
              <div class="circle circle-11"></div>
              <div class="circle circle-10"></div>
              <div class="circle circle-9"></div>
              <div class="circle circle-8"></div>
              <div class="circle circle-7"></div>
              <div class="circle circle-6"></div>
              <div class="circle circle-5"></div>
              <div class="circle circle-4"></div>
              <div class="circle circle-3"></div>
              <div class="circle circle-2"></div>
              <div class="circle circle-1"></div>
            </div>
          </button>
        </div>
        <header class="input-header"></header>
        <section class="input-content">
          <div class="input-content-wrap">
            <dl class="inputbox">
              <dd class="inputbox-content">
                <input id="input0" type="text" required v-model="user.username"/>
                <label for="input0">Nom d'utilisateur</label>
                <span class="underline"></span>
              </dd>
            </dl>
            <br />
            <dl class="inputbox">
              <dd class="inputbox-content">
                <input id="input1" type="email" required v-model="user.email"/>
                <label for="input1">E-mail</label>
                <span class="underline"></span>
              </dd>
            </dl>
            <br />
            <dl class="inputbox">
              <dd class="inputbox-content">
                <input id="input1" type="password" required v-model="user.password"/>
                <label for="input1">Mot de passe</label>
                <span class="underline"></span>
              </dd>
            </dl>
            <br />
            <div class="btns">
              <a href="/signin">
                <button class="btn btn-confirm" @click="Register">Je m'inscris</button>
              </a>
              <a href="http://127.0.0.1:5173/register">
                <button class="btn btn-cancel">Annuler</button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    Register() {
      axios
        .post(
          "http://localhost:1337/api/auth/local/register",
          this.user,
          console.log("USER REGISTERED !!!")
        )
        .then(function (response) {
          console.log(response.data.jwt);
        });
    },
  },
};
</script>

<style>


.yowl {
  margin-left: 5%;
  margin-top: 7%;
  justify-content: center;
  color: purple;
  font-family: 'Roboto';
  font-size: 24px;
}
.test {
  margin-top: 3px;
}

.centre {
  display: flex;
  justify-content: center;
  align-items: center;
}
.inscrire {
  text-align: center;
  font-family: sans-serif;
  font-size: 24px;
  color: #a523bf;
}

#wrap {
  font-family: sans-serif;
}

.input::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
}
.input-header {
  position: relative;
  padding-top: 80px;
  color: #fff;
}
.input-header h1 {
  padding-bottom: 25px;
  font-size: 3.25em;
  font-weight: 100;
}
.input-content {
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 10;
}
.input-content h2 {
  padding-bottom: 45px;
  font-size: 1.625em;
  font-weight: bold;
  vertical-align: middle;
}
.input-content h2 span {
  display: inline-block;
  margin-left: 10px;
  padding: 5px 6px 3px;
  border: 1px solid #ffca00;
  border-radius: 4px;
  font-size: 0.85rem;
  vertical-align: middle;
  color: #ffca00;
}
.input-content .inputbox {
  overflow: hidden;
  position: relative;
  width: 70%;
  margin-left: 12%;
}
.input-content .inputbox-title {
  position: absolute;
  top: 15px;
  left: 0;
  width: 200px;
  height: 30px;
  color: #666;
  font-weight: bold;
  line-height: 30px;
}
.input-content .inputbox-content {
  position: relative;
  width: 100%;
}
.input-content .inputbox-content input {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border: 0;
  background: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
}
.input-content .inputbox-content input:focus ~ label,
.input-content .inputbox-content input:valid ~ label {
  color: #c322c3;
  transform: translateY(-20px);
  font-size: 0.825em;
  cursor: default;
}
.input-content .inputbox-content input:focus ~ .underline {
  width: 100%;
}
.input-content .inputbox-content label {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  line-height: 30px;
  color: #ccc;
  cursor: text;
  transition: all 200ms ease-out;
  z-index: 10;
}
.input-content .inputbox-content .underline {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: #c322c3;
  transition: all 200ms ease-out;
}
.input-content .btns {
  padding: 20 0 0 220px;
}
.input-content .btns .btn {
  display: inline-block;
  margin-right: 2px;
  padding: 10px 25px;
  background: none;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  color: #666;
  font-size: 1.125em;
  outline: none;
  transition: all 100ms ease-out;
}
.input-content .btns .btn:hover,
.input-content .btns .btn:focus {
  transform: translateY(-3px);
}
.input-content .btns .btn-confirm {
  border: 1px solid #c322c3;
  background: #c322c3;
  color: #fff;
}

.contenu {
  border-radius: 50px;
  background-color: white;
  height: 25%;
  width: 30%;
  margin-top: 8%;
}

.top {
  border-bottom: 2px solid rgb(195, 195, 195);
  height: 55px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
}

.top1 {
  padding-top: -5%;
  display: flex;
  align-items: stretch;
}

.top2 {
  display: flex;
}

.site {
  margin-top: 3.6%;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  height: 2000px;
  display: flex;
}

.yowl_logo {
  padding-top: 10px;
  padding-left: 10px;
  width: 35px;
  height: 35px;
}

.profile {
  display: flex;
  margin-top: 15px;
  font-family: "Roboto";
  color: rgb(146, 9, 146);
  font-size: 16px;
  font-weight: bold;
}

.droite1 {
  background: linear-gradient(-45deg, #ee52cc, #e73cb7, #b123d5, #8223d5);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  padding-left: 2%;
  flex: 1 1 auto;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.colorful-button.dark {
  --delay: 0.35s;
  --c-color-1: rgba(64, 70, 96, 0.3);
  --c-color-2: #362a89;
  --c-color-3: rgba(92, 134, 255, 0.3);
  --c-color-4: rgba(109, 88, 255, 0.4);
  --c-shadow: rgba(54, 42, 137, 0.4);
  --c-shadow-inset-top: rgba(100, 107, 140, 0.6);
  --c-shadow-inset-bottom: rgba(138, 145, 180, 0.4);
  --c-radial-inner: #404660;
  --c-radial-outer: #0d0f18;
}
.colorful-button.light {
  --delay: 0.15s;
  --c-color-1: rgba(172, 160, 255, 0.15);
  --c-color-2: rgba(110, 171, 255, 0.15);
  --c-color-3: rgba(255, 255, 255, 0.5);
  --c-color-4: rgba(109, 88, 255, 0.15);
  --c-shadow: rgba(0, 76, 180, 0.1);
  --c-shadow-inset-top: white;
  --c-shadow-inset-bottom: white;
  --c-radial-inner: #eceffc;
  --c-radial-outer: #fff;
  --c-color: #404660;
}
.colorful-button.secondary {
  --delay: 0.35s;
  --c-color-1: rgba(172, 160, 255, 0.15);
  --c-color-2: rgba(110, 171, 255, 0.15);
  --c-color-3: rgba(92, 134, 255, 0.5);
  --c-color-4: rgba(172, 160, 255, 0.15);
  --c-shadow: rgba(109, 88, 255, 0.25);
  --c-shadow-inset-top: rgba(172, 160, 255, 0.2);
  --c-shadow-inset-bottom: rgba(172, 160, 255, 0.5);
  --c-radial-inner: #6d58ff;
  --c-radial-outer: #362a89;
}

.colorful-button {
  --duration: 7s;
  --delay: 0s;
  --easing: linear;
  --c-color-1: rgba(244, 92, 255, 0.7);
  --c-color-2: #da27fe;
  --c-color-3: rgba(110, 42, 137, 0.4);
  --c-color-4: rgba(172, 160, 255, 0.3);
  --c-shadow: rgba(190, 39, 254, 0.5);
  --c-shadow-inset-top: rgba(207, 39, 254, 0.8);
  --c-shadow-inset-bottom: rgba(238, 110, 255, 0.6);
  --c-radial-inner: #702a89;
  --c-radial-outer: #d858ff;
  --c-color: #fff;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  outline: none;
  position: relative;
  cursor: pointer;
  border: none;
  display: table;
  border-radius: 24px;
  margin: 0;
  text-align: center;
  min-width: 140px;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 1.5;
  color: var(--c-color);
  background: radial-gradient(
    circle,
    var(--c-radial-inner),
    var(--c-radial-outer) 80%
  );
  box-shadow: 0 0 20px var(--c-shadow);
  margin: 0 20px;
}
.colorful-button:before {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  box-shadow: inset 0 4px 12px var(--c-shadow-inset-top),
    inset 0 -4px 6px var(--c-shadow-inset-bottom);
}
.colorful-button .wrapper {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  overflow: hidden;
  border-radius: 24px;
  min-width: 132px;
  padding: 12px 0;
}
.colorful-button .wrapper span {
  display: inline-block;
  position: relative;
  z-index: 1;
}
.colorful-button .wrapper .circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: blur(var(--blur, 8px));
  background: var(--background, transparent);
  transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
  -webkit-animation: var(--animation, none) var(--duration) var(--easing)
    infinite var(--delay);
  animation: var(--animation, none) var(--duration) var(--easing) infinite
    var(--delay);
}
.colorful-button .wrapper .circle.circle-1,
.colorful-button .wrapper .circle.circle-9,
.colorful-button .wrapper .circle.circle-10 {
  --background: var(--c-color-4);
}
.colorful-button .wrapper .circle.circle-3,
.colorful-button .wrapper .circle.circle-4 {
  --background: var(--c-color-2);
  --blur: 14px;
}
.colorful-button .wrapper .circle.circle-5,
.colorful-button .wrapper .circle.circle-6 {
  --background: var(--c-color-3);
  --blur: 16px;
}
.colorful-button .wrapper .circle.circle-2,
.colorful-button .wrapper .circle.circle-7,
.colorful-button .wrapper .circle.circle-8,
.colorful-button .wrapper .circle.circle-11,
.colorful-button .wrapper .circle.circle-12 {
  --background: var(--c-color-1);
  --blur: 12px;
}
.colorful-button .wrapper .circle.circle-1 {
  --x: 0;
  --y: -40px;
  --animation: circle-1;
}
.colorful-button .wrapper .circle.circle-2 {
  --x: 92px;
  --y: 8px;
  --animation: circle-2;
}
.colorful-button .wrapper .circle.circle-3 {
  --x: -12px;
  --y: -12px;
  --animation: circle-3;
}
.colorful-button .wrapper .circle.circle-4 {
  --x: 80px;
  --y: -12px;
  --animation: circle-4;
}
.colorful-button .wrapper .circle.circle-5 {
  --x: 12px;
  --y: -4px;
  --animation: circle-5;
}
.colorful-button .wrapper .circle.circle-6 {
  --x: 56px;
  --y: 16px;
  --animation: circle-6;
}
.colorful-button .wrapper .circle.circle-7 {
  --x: 8px;
  --y: 28px;
  --animation: circle-7;
}
.colorful-button .wrapper .circle.circle-8 {
  --x: 28px;
  --y: -4px;
  --animation: circle-8;
}
.colorful-button .wrapper .circle.circle-9 {
  --x: 20px;
  --y: -12px;
  --animation: circle-9;
}
.colorful-button .wrapper .circle.circle-10 {
  --x: 64px;
  --y: 16px;
  --animation: circle-10;
}
.colorful-button .wrapper .circle.circle-11 {
  --x: 4px;
  --y: 4px;
  --animation: circle-11;
}
.colorful-button .wrapper .circle.circle-12 {
  --blur: 14px;
  --x: 52px;
  --y: 4px;
  --animation: circle-12;
}

@-webkit-keyframes circle-1 {
  33% {
    transform: translate(0px, 16px) translateZ(0);
  }
  66% {
    transform: translate(12px, 64px) translateZ(0);
  }
}

@keyframes circle-1 {
  33% {
    transform: translate(0px, 16px) translateZ(0);
  }
  66% {
    transform: translate(12px, 64px) translateZ(0);
  }
}
@-webkit-keyframes circle-2 {
  33% {
    transform: translate(80px, -10px) translateZ(0);
  }
  66% {
    transform: translate(72px, -48px) translateZ(0);
  }
}
@keyframes circle-2 {
  33% {
    transform: translate(80px, -10px) translateZ(0);
  }
  66% {
    transform: translate(72px, -48px) translateZ(0);
  }
}
@-webkit-keyframes circle-3 {
  33% {
    transform: translate(20px, 12px) translateZ(0);
  }
  66% {
    transform: translate(12px, 4px) translateZ(0);
  }
}
@keyframes circle-3 {
  33% {
    transform: translate(20px, 12px) translateZ(0);
  }
  66% {
    transform: translate(12px, 4px) translateZ(0);
  }
}
@-webkit-keyframes circle-4 {
  33% {
    transform: translate(76px, -12px) translateZ(0);
  }
  66% {
    transform: translate(112px, -8px) translateZ(0);
  }
}
@keyframes circle-4 {
  33% {
    transform: translate(76px, -12px) translateZ(0);
  }
  66% {
    transform: translate(112px, -8px) translateZ(0);
  }
}
@-webkit-keyframes circle-5 {
  33% {
    transform: translate(84px, 28px) translateZ(0);
  }
  66% {
    transform: translate(40px, -32px) translateZ(0);
  }
}
@keyframes circle-5 {
  33% {
    transform: translate(84px, 28px) translateZ(0);
  }
  66% {
    transform: translate(40px, -32px) translateZ(0);
  }
}
@-webkit-keyframes circle-6 {
  33% {
    transform: translate(28px, -16px) translateZ(0);
  }
  66% {
    transform: translate(76px, -56px) translateZ(0);
  }
}
@keyframes circle-6 {
  33% {
    transform: translate(28px, -16px) translateZ(0);
  }
  66% {
    transform: translate(76px, -56px) translateZ(0);
  }
}
@-webkit-keyframes circle-7 {
  33% {
    transform: translate(8px, 28px) translateZ(0);
  }
  66% {
    transform: translate(20px, -60px) translateZ(0);
  }
}
@keyframes circle-7 {
  33% {
    transform: translate(8px, 28px) translateZ(0);
  }
  66% {
    transform: translate(20px, -60px) translateZ(0);
  }
}
@-webkit-keyframes circle-8 {
  33% {
    transform: translate(32px, -4px) translateZ(0);
  }
  66% {
    transform: translate(56px, -20px) translateZ(0);
  }
}
@keyframes circle-8 {
  33% {
    transform: translate(32px, -4px) translateZ(0);
  }
  66% {
    transform: translate(56px, -20px) translateZ(0);
  }
}
@-webkit-keyframes circle-9 {
  33% {
    transform: translate(20px, -12px) translateZ(0);
  }
  66% {
    transform: translate(80px, -8px) translateZ(0);
  }
}
@keyframes circle-9 {
  33% {
    transform: translate(20px, -12px) translateZ(0);
  }
  66% {
    transform: translate(80px, -8px) translateZ(0);
  }
}
@-webkit-keyframes circle-10 {
  33% {
    transform: translate(68px, 20px) translateZ(0);
  }
  66% {
    transform: translate(100px, 28px) translateZ(0);
  }
}
@keyframes circle-10 {
  33% {
    transform: translate(68px, 20px) translateZ(0);
  }
  66% {
    transform: translate(100px, 28px) translateZ(0);
  }
}
@-webkit-keyframes circle-11 {
  33% {
    transform: translate(4px, 4px) translateZ(0);
  }
  66% {
    transform: translate(68px, 20px) translateZ(0);
  }
}
@keyframes circle-11 {
  33% {
    transform: translate(4px, 4px) translateZ(0);
  }
  66% {
    transform: translate(68px, 20px) translateZ(0);
  }
}
@-webkit-keyframes circle-12 {
  33% {
    transform: translate(56px, 0px) translateZ(0);
  }
  66% {
    transform: translate(60px, -32px) translateZ(0);
  }
}
@keyframes circle-12 {
  33% {
    transform: translate(56px, 0px) translateZ(0);
  }
  66% {
    transform: translate(60px, -32px) translateZ(0);
  }
}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}
</style>
