<template>
  <router-link to="#" class="favorite-item-link">
    <div class="favorite-item">
      <div class="avatar">
        <img
          src="https://o-tendencii.com/uploads/posts/2022-01/1642420914_5-o-tendencii-com-p-strogii-makiyazh-foto-5.jpg"
          alt=""
        />
      </div>
      <div class="about">
        <div class="name-block">
          <h5 class="name">Имя</h5>
          <p class="adress">Москва, Россия</p>
        </div>
        <button class="btn">
          <img src="@/assets/images/white-star.svg" alt="" class="white-icon"/>
          <img
            src="@/assets/images/star-icon.svg"
            alt=""
            class="default-icon"
          />
          <img src="@/assets/images/star-gold.svg" alt="" class="gold-icon" />
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup>
</script>

<style lang="scss">
.favorite-item {
  min-width: 240px;
  border-radius: 24px;
  outline: 1px solid #ffffff54;
  padding: 5px;
  padding-bottom: 12px;
  transition: all 0.2s ease;

  .avatar {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 230px;
    border: 1px solid #ffffff24;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 12px;
    .name-block {
      .name {
        font-size: 16px;
        font-weight: 700;
      }
      .adress {
        font-size: 12px;
        font-weight: 600;
        opacity: 0.3;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 39px;
      border-radius: 14px;
      border: 1px solid #ffffff24;
      background: transparent;
      cursor: pointer;
      transition: all 0.1s ease;
      .gold-icon {
        display: none;
      }
      .default-icon {
        display: none;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
    .btn:hover {
      background: #2965ff;
    }
  }
}
.favorite-item:hover {
  outline: 2px solid #2965FF;
  box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
}
.favorite-item.diamond:hover {
  box-shadow: 0px 0px 10px rgba(243, 170, 59, 0.8);
}
.favorite-item.diamond {
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 39px;
    border-radius: 14px;
    border: none;
    position: relative;
    background: linear-gradient(
      132.27deg,
      #f9ae3f -0.77%,
      #ffdba5 36.67%,
      #ad6902 96.37%
    );
    cursor: pointer;
    transition: all 0.1s ease;
    z-index: 0;
    img {
      width: 18px;
      height: 18px;
    }
    .default-icon {
      display: block;
    }
    .white-icon {
      display: none;
    }
    .gold-icon {
      display: none;
    }
  }
  .btn:hover {
    background: rgba(196, 196, 196, 0.05);
    border: 1px solid #f9ae3f;
    .default-icon {
      display: none;
    }
    .gold-icon {
      display: block;
    }
  }
}
</style>