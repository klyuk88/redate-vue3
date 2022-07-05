<script setup>
import { ref, computed } from 'vue'
import { useRouter } from  'vue-router'
const router = useRouter()

router.push({ name: 'Verification', query: { stage: 'two' } })
const photoAdded = ref(true)

const added = computed(() => {
  if (photoAdded.value === true) {
    return 'added'
  }
  return 'test'
})
</script>

<template>
  <div class="signup__background">
    <slot name="backToFirst"></slot>
    <div class="verification__page">
      <div class="verification__block__container">
        <div class="verification__content">
          <h1>Проверка личности</h1>
          <div class="verification__body">
            <div class="add__photo__block">
              <img
                class="added__photo"
                src="@/assets/images/main/Verification__add__photo.svg"
                alt=""
                :class="added"
              />
              <div class="inner__add__photo__block" :class="added">
                <img src="@/assets/images/main/add__photo__btn.svg" alt="" />
              </div>
            </div>
            <div class="photo__block">
              <img
                class="mobile__avatar"
                src="../../assets/images/main/verification__avatar.svg"
                alt=""
                :class="added"
              />
              <img
                class="mobile__avatar__new"
                src="@/assets/images/main/Verification__add__photo.svg"
                :class="added"
                alt=""
              />
            </div>
            <p class="mobile__desc" :class="added">
              Отобразите позу, которая указана на картинке
            </p>
            <p class="mobile__desc renew" :class="added">
              Сравните пример с загруженной Вами фотографией
            </p>
            <div class="mobile__add__buttons">
              <div class="mobile__upload">
                <div class="mobile__upload__inner" :class="added">
                  <p>Загрузить из галереи</p>
                </div>
                <img
                  class="mobile__avatar__new"
                  src="@/assets/images/main/verification__preview.svg"
                  alt=""
                  :class="added"
                />
              </div>
              <div class="mobile__make__photo">
                <p class="text__make" :class="added">Сделать снимок</p>
                <p class="text__again" :class="added">Повторить снимок</p>
              </div>
            </div>
          </div>
          <p class="web" :class="added">
            Отобразите позу, которая указана на картинке справа
          </p>
          <div class="btn__update" :class="added">Заменить снимок</div>
          <div class="btn__upload" :class="added">Загрузить с компьютера</div>
          <div class="btn__continue" :class="added">
            <slot name="toThird"></slot>
          </div>
        </div>
      </div>
      <div class="verification__nav">
        <div class="nav__footer">
          <div class="nav__stage">
            <div class="nav__disc choosed">
              <img
                class=""
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
            <div class="horizontal__line choosed"></div>
            <div class="nav__disc">
              <img
                class="choosed"
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
            <div class="horizontal__line"></div>
            <div class="nav__disc">
              <img
                class=""
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
          </div>
          <div class="nav__title choosed">
            <p class=""></p>
            <p class="choosed">Фотография</p>
            <p class="">Модерация</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.verification__page {
  height: unset;
}
.add__photo__block {
  width: 308px;
  height: 308px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.added {
    border: 1px solid #2b66fb;
    border-radius: 24px;
  }
}
.added__photo {
  display: none;
  &.added {
    display: flex;
  }
}
.verification__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.verification__block__container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    text-align: center;
    color: #ffffff;
    width: 242px;
    height: 42px;
    &.added {
      display: none;
    }
  }
}
.mobile__avatar__new {
  display: none;
}
.mobile__add__buttons {
  display: none;
}
.inner__add__photo__block {
  width: 230px;
  height: 230px;
  border: 1px dashed rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.added {
    display: none;
  }
}
.mobile__desc {
  display: none;
}
.horizontal__line {
  &.choosed {
    border: 1px solid #2b66fb;
  }
}
.nav__disc {
  &.choosed {
    width: 18px;
    height: 18px;
    background: #2b66fb;
  }
}
.nav__title {
  p {
    &.choosed {
      margin-left: 90px;
    }
  }
}
.btn__update {
  width: 177px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 11px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.added {
    display: flex;
  }
}
.btn__upload {
  padding: 8px 27px;
  gap: 12px;
  height: 35px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
  &.added {
    display: none;
  }
}
.btn__continue {
  display: none;
  &.added {
    margin: 24px 0 37px 0;
    display: flex;
  }
}
@media (max-width: 1200px) {
  .auth__back__btn {
    top: 12.5641vw;
  }
  .add__photo__block {
    display: none;
  }
  .verification__page {
    height: 184.358vw;
    width: 78.974vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .verification__content {
    height: 187.43589vw;
  }
  .verification__block__container {
    height: 184.3589vw;
    border: none;
    background: none;
    h1 {
      font-weight: 600;
      font-size: 4.61538vw;
      line-height: 153.5%;
    }
  }
  .verification__body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 137.9487vw;
    width: 78.97435vw;
    .mobile__desc {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: 600;
      font-size: 3.0769vw;
      line-height: 3.846vw;
      width: 78.9743vw;
      height: 8.205vw;
      margin-top: 2.05128vw;
      margin-bottom: 6.153vw;
      &.added {
        display: none;
        &.renew {
          display: flex;
        }
      }
      &.renew {
        display: none;
      }
    }
  }

  .verification__nav {
    display: none;
  }

  .btn__continue {
    width: 85.89vw;
    height: 15.38vw;
    &.added {
      width: 85.89vw;
      height: 15.38vw;
    }
  }
  .btn__update {
    display: none;
  }
  .mobile__add__buttons {
    width: 78.974vw;
    height: 46.1538vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile__upload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46.1538vw;
    height: 46.1538vw;
    border: 0.256vw solid #ffffff;
    border-radius: 6.1538vw;
  }
  .mobile__upload__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30.769vw;
    height: 30.769vw;
    border: 0.256vw dashed rgba(255, 255, 255, 0.33);
    border-radius: 4.102vw;
    cursor: pointer;
    p {
      font-weight: 500;
      font-size: 3.589vw;
      line-height: 153.5%;
      width: 19.487vw;
      height: 10.769vw;
    }
  }
  .web {
    display: none;
  }
  .mobile__make__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29.7435vw;
    height: 46.15384vw;
    border: 0.256vw solid #ffffff;
    border-radius: 6.1538vw;
    cursor: pointer;
    p {
      width: 14.871vw;
      height: 10.769vw;
      font-weight: 500;
      font-size: 3.589vw;
      line-height: 153.5%;
    }
  }
  .text__make {
    &.added {
      display: none;
    }
  }
  .text__again {
    &.added {
      display: inline-table !important;
    }
    &.test {
      display: none;
    }
  }
  .mobile__avatar__new {
    display: none;
    &.added {
      display: flex;
    }
  }
  .mobile__avatar {
    &.added {
      display: none;
    }
  }
  .mobile__upload__inner {
    &.added {
      display: none;
    }
  }
}
</style>
