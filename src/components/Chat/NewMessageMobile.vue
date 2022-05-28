<template>
  <form action="" class="single-chat-new-mess">
    <div class="attach">
      <img
        src="@/assets/images/mob-attach-icon.svg"
        alt=""
        class="attach-icon"
      />
    </div>
    <textarea name="new_message" v-model="message"></textarea>
    <div
      class="input"
      contenteditable="true"
      placeholder="Введите сообщение"
      @input="message = $event.target.textContent"
    ></div>
    <button class="send-btn" type="submit" disabled>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        v-if="message"
          d="M2.31188 0.378693L20.3719 9.01612C20.5544 9.10329 20.7086 9.24034 20.8165 9.41144C20.9244 9.58255 20.9816 9.7807 20.9816 9.98298C20.9816 10.1853 20.9244 10.3834 20.8165 10.5545C20.7086 10.7256 20.5544 10.8627 20.3719 10.9498L2.31188 19.5873C2.12674 19.6759 1.92002 19.7096 1.71632 19.6841C1.51262 19.6587 1.32051 19.5753 1.16285 19.4438C1.00519 19.3124 0.888624 19.1384 0.82701 18.9425C0.765397 18.7467 0.761335 18.5373 0.815308 18.3393L2.62216 11.7153C2.64428 11.6341 2.68981 11.5612 2.75306 11.5057C2.81632 11.4502 2.89451 11.4146 2.97788 11.4033L11.7293 10.2144C11.7659 10.2092 11.8005 10.1946 11.8298 10.1721C11.8591 10.1496 11.882 10.1199 11.8965 10.0858L11.9119 10.0327C11.9186 9.98484 11.909 9.9361 11.8846 9.8944C11.8602 9.8527 11.8224 9.82048 11.7773 9.80298L11.7302 9.79012L2.98731 8.60127C2.90409 8.58976 2.82609 8.55406 2.763 8.49859C2.69991 8.44312 2.65451 8.37033 2.63245 8.28927L0.815308 1.62755C0.761117 1.42943 0.765014 1.21992 0.826534 1.02395C0.888054 0.827986 1.0046 0.653833 1.1623 0.522236C1.32 0.390639 1.51221 0.307144 1.71602 0.281694C1.91983 0.256245 2.12666 0.289915 2.31188 0.378693V0.378693Z"
          fill="#2B66FB"
          fill-opacity="1"
        />
        <path
          v-else
          d="M2.31188 0.378693L20.3719 9.01612C20.5544 9.10329 20.7086 9.24034 20.8165 9.41144C20.9244 9.58255 20.9816 9.7807 20.9816 9.98298C20.9816 10.1853 20.9244 10.3834 20.8165 10.5545C20.7086 10.7256 20.5544 10.8627 20.3719 10.9498L2.31188 19.5873C2.12674 19.6759 1.92002 19.7096 1.71632 19.6841C1.51262 19.6587 1.32051 19.5753 1.16285 19.4438C1.00519 19.3124 0.888624 19.1384 0.82701 18.9425C0.765397 18.7467 0.761335 18.5373 0.815308 18.3393L2.62216 11.7153C2.64428 11.6341 2.68981 11.5612 2.75306 11.5057C2.81632 11.4502 2.89451 11.4146 2.97788 11.4033L11.7293 10.2144C11.7659 10.2092 11.8005 10.1946 11.8298 10.1721C11.8591 10.1496 11.882 10.1199 11.8965 10.0858L11.9119 10.0327C11.9186 9.98484 11.909 9.9361 11.8846 9.8944C11.8602 9.8527 11.8224 9.82048 11.7773 9.80298L11.7302 9.79012L2.98731 8.60127C2.90409 8.58976 2.82609 8.55406 2.763 8.49859C2.69991 8.44312 2.65451 8.37033 2.63245 8.28927L0.815308 1.62755C0.761117 1.42943 0.765014 1.21992 0.826534 1.02395C0.888054 0.827986 1.0046 0.653833 1.1623 0.522236C1.32 0.390639 1.51221 0.307144 1.71602 0.281694C1.91983 0.256245 2.12666 0.289915 2.31188 0.378693V0.378693Z"
          fill="white"
          fill-opacity="0.3"
        />

      </svg>
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const message = ref(null)
</script>

<style lang="scss">
.single-chat-new-mess {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 10;
  padding: 8px 15px 36px 15px;
  background: #242529;
  display: flex;
  align-items: center;
  gap: 16px;
  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }
  .attach {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    .attach-icon {
      width: 24px;
      height: auto;
    }
  }
  .input {
    flex-basis: 265px;
    background: #1c1d21;
    border-radius: 20px;
    min-height: 28px;
    max-height: 130px;
    border: none;
    color: #fff;
    font-size: 14px;
    padding-left: 10px;
    padding-top: 5px;
    line-height: 1.2;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: text;
  }
  .input:focus {
    outline: 1px solid #fff;
  }
  .input:not(:empty):before {
    content: "";
  }

  .input:before {
    content: attr(placeholder);
    position: absolute;
    font-size: 14px;
    color: rgba($color: #fff, $alpha: 0.3);
  }
  .send-btn {
    width: 24px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    img {
      width: 24px;
      height: auto;
    }
  }
}
</style>