import { defineStore } from 'pinia'

interface Config {
  resourceSites: string[]
  parseApi: string
  backgroundImage: string
  enableLogin: boolean
  loginPassword: string
  announcement: string
  customTitle: string
}

export const useConfigStore = defineStore('config', {
  state: (): Config => ({
    resourceSites: [],
    parseApi: '',
    backgroundImage: '',
    enableLogin: false,
    loginPassword: '',
    announcement: '',
    customTitle: ''
  }),

  actions: {
    async loadConfig() {
      try {
        // TODO: 从 Cloudflare KV 加载配置
        const config = {} as Config
        this.$patch(config)
      } catch (error) {
        console.error('加载配置失败:', error)
      }
    },

    async saveConfig() {
      try {
        // TODO: 保存配置到 Cloudflare KV
        console.log('保存配置:', this.$state)
      } catch (error) {
        console.error('保存配置失败:', error)
      }
    }
  }
}) 