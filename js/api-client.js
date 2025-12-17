// Nano Banana Pro API 客户端
class ApiClient {
    constructor() {
        this.baseURL = 'https://api.kie.ai/api/v1/jobs';
        this.apiKey = null;
        this.apiKeyStorageKey = 'nb_encrypted_api_key';
        this.encryptionKey = 'nb_enc_key_v1'; // 简单加密密钥
        this.loadApiKey();
    }

    // 简单加密函数
    encrypt(text) {
        // 使用简单的XOR加密（仅用于基本保护）
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(
                text.charCodeAt(i) ^ this.encryptionKey.charCodeAt(i % this.encryptionKey.length)
            );
        }
        return btoa(result); // Base64编码
    }

    // 简单解密函数
    decrypt(encryptedText) {
        try {
            const text = atob(encryptedText); // Base64解码
            let result = '';
            for (let i = 0; i < text.length; i++) {
                result += String.fromCharCode(
                    text.charCodeAt(i) ^ this.encryptionKey.charCodeAt(i % this.encryptionKey.length)
                );
            }
            return result;
        } catch (e) {
            return '';
        }
    }

    // 从本地存储加载API密钥
    loadApiKey() {
        const encrypted = localStorage.getItem(this.apiKeyStorageKey);
        if (encrypted) {
            this.apiKey = this.decrypt(encrypted);
        }
    }

    // 保存API密钥到本地存储
    saveApiKey(apiKey) {
        if (apiKey) {
            const encrypted = this.encrypt(apiKey);
            localStorage.setItem(this.apiKeyStorageKey, encrypted);
            this.apiKey = apiKey;
        }
    }

    // 创建生成任务
    async createTask(prompt, options = {}) {
        if (!this.apiKey) {
            throw new Error('API密钥未设置');
        }

        const requestData = {
            model: "nano-banana-pro",
            input: {
                prompt: prompt
            }
        };

        // 验证请求数据
        if (!requestData.input.prompt || requestData.input.prompt.trim() === '') {
            throw new Error('提示词不能为空');
        }

        if (requestData.input.prompt.length > 6000) {
            throw new Error('提示词过长，最多支持6000个字符');
        }

        console.log('API请求数据:', JSON.stringify(requestData, null, 2));

        try {
            const response = await fetch(`${this.baseURL}/createTask`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            console.log('API响应状态:', response.status);
            console.log('API响应头:', response.headers);

            // 先尝试解析为JSON
            let data;
            try {
                data = await response.json();
                console.log('API响应数据:', JSON.stringify(data, null, 2));
            } catch (e) {
                const responseText = await response.text();
                console.log('API响应原始数据:', responseText);
                throw new Error('服务器返回了无效的JSON格式');
            }

            if (!response.ok) {
                throw new Error(this.getErrorMessage(response.status, data));
            }
            return data.data.taskId;
        } catch (error) {
            console.error('创建任务失败:', error);
            throw error;
        }
    }

    // 查询任务状态
    async getTaskStatus(taskId) {
        if (!taskId) {
            throw new Error('任务ID不能为空');
        }

        try {
            const response = await fetch(`${this.baseURL}/recordInfo?taskId=${taskId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });

            let data;
            try {
                data = await response.json();
            } catch (e) {
                const responseText = await response.text();
                console.error('响应数据:', responseText);
                throw new Error('服务器返回了无效的JSON格式');
            }

            if (!response.ok) {
                throw new Error(this.getErrorMessage(response.status, data));
            }
            return data.data;
        } catch (error) {
            console.error('查询任务状态失败:', error);
            throw error;
        }
    }

    // 轮询任务直到完成
    async pollTask(taskId, options = {}) {
        const {
            interval = 3000, // 轮询间隔（毫秒）
            timeout = 300000, // 超时时间（毫秒）
            onProgress = null // 进度回调
        } = options;

        const startTime = Date.now();
        let lastState = null;

        while (true) {
            // 检查超时
            if (Date.now() - startTime > timeout) {
                throw new Error('任务超时，请稍后重试');
            }

            try {
                const taskInfo = await this.getTaskStatus(taskId);
                const currentState = taskInfo.state;

                // 调用进度回调
                if (onProgress && currentState !== lastState) {
                    onProgress(taskInfo);
                    lastState = currentState;
                }

                // 检查任务状态
                if (currentState === 'success') {
                    // 解析结果
                    const resultJson = JSON.parse(taskInfo.resultJson);
                    return {
                        success: true,
                        result: resultJson,
                        taskInfo: taskInfo
                    };
                } else if (currentState === 'fail') {
                    throw new Error(`任务失败: ${taskInfo.failMsg || '未知错误'}`);
                }

                // 如果任务还在进行中，等待后继续轮询
                await this.sleep(interval);
            } catch (error) {
                throw error;
            }
        }
    }

    // 生成图片的完整流程
    async generateImage(prompt, options = {}) {
        try {
            // 1. 创建任务
            const taskId = await this.createTask(prompt, options);

            // 2. 轮询任务状态
            const result = await this.pollTask(taskId, {
                onProgress: options.onProgress
            });

            return result;
        } catch (error) {
            console.error('生成图片失败:', error);
            throw error;
        }
    }

    // 获取错误信息
    getErrorMessage(status, errorData) {
        const statusMessages = {
            400: '请求参数错误',
            401: 'API密钥无效或已过期',
            402: '账户余额不足',
            404: '资源未找到',
            422: '参数验证失败',
            429: '请求过于频繁，请稍后重试',
            500: '服务器内部错误'
        };

        // 首先尝试返回API返回的具体错误信息
        if (errorData && errorData.msg) {
            let message = errorData.msg;
            // 如果有错误代码，也显示出来
            if (errorData.code) {
                message += ` (错误代码: ${errorData.code})`;
            }
            return message;
        }

        // 返回状态码对应的默认错误信息
        return statusMessages[status] || `请求失败 (${status})`;
    }

    // 休眠函数
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 清除API密钥
    clearApiKey() {
        localStorage.removeItem(this.apiKeyStorageKey);
        this.apiKey = null;
    }

    // 验证API密钥格式
    validateApiKey(apiKey) {
        if (!apiKey) return false;
        // 基本的API密钥格式验证
        return apiKey.length >= 20 && /^[A-Za-z0-9_-]+$/.test(apiKey);
    }

    // 检查API密钥是否有效
    hasValidApiKey() {
        return this.apiKey && this.apiKey.length > 0;
    }
}

// 创建全局API客户端实例
const apiClient = new ApiClient();