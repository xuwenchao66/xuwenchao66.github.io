<template>
  <div class="app-card">
    <div class="app-info">
      <div class="app-icon-wrapper">
        <img :src="iconPath" alt="app-icon" class="app-icon" />
      </div>
      <div class="app-details">
        <h3 class="app-name">{{ appName }}</h3>
        <div class="app-descriptions">
          <p v-for="description in descriptions" :key="description" class="app-description">{{ description }}</p>
        </div>
        <div class="app-links-list">
          <a v-if="appStoreLink" :href="appStoreLink" target="_blank" class="app-store-link">
            <img src="./imgs/app-store.svg" alt="App Store下载" />
          </a>
          <div class="app-other-links">
            <a v-if="termsOfServiceLink" :href="termsOfServiceLink" target="_blank" class="link-item">服务条款</a>
            <a v-if="privacyPolicyLink" :href="privacyPolicyLink" target="_blank" class="link-item">隐私政策</a>
            <a v-if="contactEmail" :href="'mailto:' + contactEmail" class="link-item">联系我们</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    appName: {
      type: String,
      required: true
    },
    descriptions: {
      type: Array,
      required: true
    },
    iconPath: {
      type: String,
      required: true
    },
    appStoreLink: {
      type: String,
      default: ''
    },
    privacyPolicyLink: {
      type: String
    },
    termsOfServiceLink: {
      type: String
    },
    contactEmail: {
      type: String,
      default: 'xuwenchao0606@163.com'
    }
  }
}
</script>

<style scoped>
.app-card {
  max-width: 900px;
  margin: 20px auto 0;
  padding: 30px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.app-info {
  display: flex;
  align-items: flex-start;
}

.app-icon-wrapper {
  flex-shrink: 0;
  margin-right: 24px;
}

.app-icon {
  width: 120px;
  height: 120px;
  border-radius: 28px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.app-card:hover .app-icon {
  transform: scale(1.05);
}

.app-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-name {
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
}

.app-descriptions {
  margin-bottom: 20px;
}

.app-description {
  margin: 8px 0;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.app-links-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.app-store-link {
  margin-right: 20px;
  transition: transform 0.2s ease;
}

.app-store-link:hover {
  transform: translateY(-2px);
}

.app-store-link img {
  display: block;
  width: 120px;
}

.app-other-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.link-item {
  display: inline-flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  text-decoration: none;
  margin-right: 20px;
  padding: 6px 0;
  position: relative;
}

.link-item:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #46bd87;
  transition: width 0.3s ease;
}

.link-item:hover {
  color: #46bd87;
}

.link-item:hover:after {
  width: 100%;
}

@media (max-width: 768px) {
  .app-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .app-icon-wrapper {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .app-links-list {
    justify-content: center;
    margin-top: 20px;
  }

  .app-store-link {
    margin: 0 0 16px 0;
  }

  .app-other-links {
    justify-content: center;
    width: 100%;
  }

  .link-item {
    margin: 0 10px;
  }

  .app-card {
    padding: 24px 16px;
  }
}
</style> 