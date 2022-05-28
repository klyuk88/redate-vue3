<template>

  <form class="s-ch-new-message">
    <div class="message with-scroll">
      <div
        class="message-content"
        contenteditable="true"
        @input="message = $event.target.textContent"
        placeholder="Введите сообщение"
        :class="{ 'mess-focus': messFocus }"
      >
      </div>
      <textarea
        name="message"
        v-model="message"
        id=""
      ></textarea>
      <div class="attach" :class="{'active': attachActive}" @click.stop="attachActive = !attachActive">
        <div class="elements">
          <label for="media">
            <span>Фото или видео</span> <img src="@/assets/images/media-icon.svg" alt="">
            <input
              type="file"
              name="media"
              id="media"
              accept="image/*,video/*"
            />
          </label>
          <label for="file">
            <span>Файл</span> <img src="@/assets/images/image-icon.svg" alt="">
            <input
              type="file"
              name="file"
              id="file"
              accept="application/excel, application/pdf"
            />
          </label>
        </div>
        <img src="@/assets/images/chat-attach.svg" alt="" class="attach-icon"/>
      </div>
    </div>

    <button class="btn-submit" :disabled="!messFocus">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="{ active: messFocus }"
          d="M3.7898 2.77319L24.8598 12.8502C25.0728 12.9519 25.2526 13.1118 25.3785 13.3114C25.5044 13.511 25.5712 13.7422 25.5712 13.9782C25.5712 14.2142 25.5044 14.4454 25.3785 14.645C25.2526 14.8446 25.0728 15.0045 24.8598 15.1062L3.7898 25.1832C3.57381 25.2866 3.33263 25.3259 3.09498 25.2962C2.85733 25.2665 2.63321 25.1692 2.44927 25.0158C2.26534 24.8625 2.12934 24.6595 2.05746 24.431C1.98557 24.2026 1.98084 23.9583 2.0438 23.7272L4.1518 15.9992C4.17761 15.9045 4.23072 15.8195 4.30452 15.7547C4.37832 15.69 4.46954 15.6484 4.5668 15.6352L14.7768 14.2482C14.8195 14.2421 14.8599 14.2251 14.894 14.1988C14.9282 14.1726 14.955 14.1379 14.9718 14.0982L14.9898 14.0362C14.9977 13.9804 14.9865 13.9235 14.958 13.8748C14.9295 13.8262 14.8854 13.7886 14.8328 13.7682L14.7778 13.7532L4.5778 12.3662C4.48072 12.3528 4.38971 12.3111 4.31611 12.2464C4.2425 12.1817 4.18954 12.0968 4.1638 12.0022L2.0438 4.23019C1.98058 3.99905 1.98513 3.75461 2.0569 3.52599C2.12867 3.29736 2.26465 3.09419 2.44863 2.94066C2.63262 2.78713 2.85685 2.68971 3.09463 2.66002C3.33241 2.63033 3.57372 2.66961 3.7898 2.77319V2.77319Z"
          fill="#3E74FF"
          fill-opacity="1"
        />
        <path
          :class="{ active: !messFocus }"
          d="M3.7898 2.77319L24.8598 12.8502C25.0728 12.9519 25.2526 13.1118 25.3785 13.3114C25.5044 13.511 25.5712 13.7422 25.5712 13.9782C25.5712 14.2142 25.5044 14.4454 25.3785 14.645C25.2526 14.8446 25.0728 15.0045 24.8598 15.1062L3.7898 25.1832C3.57381 25.2866 3.33263 25.3259 3.09498 25.2962C2.85733 25.2665 2.63321 25.1692 2.44927 25.0158C2.26534 24.8625 2.12934 24.6595 2.05746 24.431C1.98557 24.2026 1.98084 23.9583 2.0438 23.7272L4.1518 15.9992C4.17761 15.9045 4.23072 15.8195 4.30452 15.7547C4.37832 15.69 4.46954 15.6484 4.5668 15.6352L14.7768 14.2482C14.8195 14.2421 14.8599 14.2251 14.894 14.1988C14.9282 14.1726 14.955 14.1379 14.9718 14.0982L14.9898 14.0362C14.9977 13.9804 14.9865 13.9235 14.958 13.8748C14.9295 13.8262 14.8854 13.7886 14.8328 13.7682L14.7778 13.7532L4.5778 12.3662C4.48072 12.3528 4.38971 12.3111 4.31611 12.2464C4.2425 12.1817 4.18954 12.0968 4.1638 12.0022L2.0438 4.23019C1.98058 3.99905 1.98513 3.75461 2.0569 3.52599C2.12867 3.29736 2.26465 3.09419 2.44863 2.94066C2.63262 2.78713 2.85685 2.68971 3.09463 2.66002C3.33241 2.63033 3.57372 2.66961 3.7898 2.77319V2.77319Z"
          fill="white"
          fill-opacity="0.14"
        />
      </svg>
    </button>
  </form>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";
const message = ref(null);
const attachActive = ref(false)
const messFocus = computed(() => {
  return message.value ? true : false;
});

const hideAttachElems = (ev) => {
  if(attachActive.value && ev.target.className !== 'attach') {
    attachActive.value = false
  }
}

document.addEventListener('click', (e) => {
  hideAttachElems(e)
})

onUnmounted(() => {
  document.removeEventListener('click',hideAttachElems)
})

</script>

<style lang="scss">
.s-ch-new-message {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #505154;
  .message {
    border-right: 1px solid #505154;
    min-height: 80px;
    max-height: 300px;
    flex-grow: 1;
    position: relative;
    z-index: 0;
    padding: 30px 60px 0 20px;
    overflow-y: auto;
    overflow-x: hidden;
    .attach {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;
      .elements {
        position: absolute;
        width: 194px;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        transform: translateX(-50%) translateY(-120%);
        border-radius: 14px;
        border: 1px solid rgba($color: #fff, $alpha: 0.14);
        background: rgba(36, 37, 41, 0.6);
        display: none;
        z-index: 2;
        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          border-bottom: 1px solid rgba($color: #fff, $alpha: 0.14);
          cursor: pointer;
          input {
            position: absolute;
            width: 0;
            height: 0;
            left: 0;
            visibility: hidden;
          }
        }
        label:last-child {
          border: none;
        }
      }
    }
    .attach.active {
      .elements {
        display: block;
      }
    }
    textarea {
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  .message-content {
    cursor: text;
    // max-height: 300px;
    // min-height: 100%;
    // overflow-y: auto;
    // overflow-x: hidden;
    word-wrap: break-word;
  }
  .message-content.mess-focus:before {
    content: "";
  }
  .message-content:focus {
    outline: none;
  }
  .message-content:before {
    content: attr(placeholder);
    position: absolute;
    font-size: 16px;
    color: #fff;
    opacity: 0.3;
    z-index: -1;
  }
  .message:focus {
    outline: 1px solid rgba($color: #fff, $alpha: 0.3);
  }
  .btn-submit {
    min-width: 136px;
    height: 100%;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      width: 28px;
      height: 28px;
      path {
        display: none;
      }
      path.active {
        display: block;
      }
    }
  }
}
</style>