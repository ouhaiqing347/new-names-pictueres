class App {
    constructor() {
        this.promptGenerator = new PromptGenerator(vocabularyManager);
        this.currentResult = null;
        this.isGenerating = false;
    }

    async init() {
        // 初始化UI元素
        this.initElements();

        // 绑定事件
        this.bindEvents();

        // 初始化工具提示
        this.initTooltips();

        // 词汇库已经同步加载，直接填充主题选项
        this.populateThemes();

        // 加载保存的API密钥
        this.loadSavedApiKey();
    }

    initElements() {
        // 表单元素
        this.form = document.getElementById('generateForm');
        this.apiKeyInput = document.getElementById('apiKey');
        this.themeSelect = document.getElementById('theme');
        this.titleInput = document.getElementById('title');

        // 按钮
        this.generateBtn = document.getElementById('generateBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.regenerateBtn = document.getElementById('regenerateBtn');
        this.toggleApiKeyBtn = document.getElementById('toggleApiKey');
        this.clearApiKeyBtn = document.getElementById('clearApiKey');

        // API密钥相关
        this.apiKeyStatus = document.getElementById('apiKeyStatus');
        this.apiKeyFeedback = document.getElementById('apiKeyFeedback');

        // 显示区域
        this.progressSection = document.getElementById('progressSection');
        this.resultSection = document.getElementById('resultSection');
        this.vocabularyPreview = document.getElementById('vocabularyPreview');
        this.vocabularyList = document.getElementById('vocabularyList');

        // 进度元素
        this.progressBar = document.getElementById('progressBar');
        this.progressText = document.getElementById('progressText');

        // 结果元素
        this.resultImage = document.getElementById('resultImage');

        // Toast
        this.errorToast = document.getElementById('errorToast');
        this.errorMessage = document.getElementById('errorMessage');
    }

    bindEvents() {
        // 表单提交
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleGenerate();
        });

        // 主题变化
        this.themeSelect.addEventListener('change', () => {
            this.handleThemeChange();
        });

        // 标题输入
        this.titleInput.addEventListener('input', () => {
            this.handleTitleChange();
        });

        // 下载按钮
        this.downloadBtn.addEventListener('click', () => {
            this.downloadImage();
        });

        // 重新生成按钮
        this.regenerateBtn.addEventListener('click', () => {
            this.handleGenerate();
        });

        // API密钥显示/隐藏切换
        this.toggleApiKeyBtn.addEventListener('click', () => {
            this.toggleApiKeyVisibility();
        });

        // API密钥输入变化时保存和验证
        this.apiKeyInput.addEventListener('input', () => {
            this.handleApiKeyInput();
        });

        // 清除API密钥按钮
        this.clearApiKeyBtn.addEventListener('click', () => {
            this.clearApiKey();
        });

        // 监听词汇库错误事件
        document.addEventListener('vocabularyError', (e) => {
            this.showError(e.detail.message);
        });
    }

    initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    
    populateThemes() {
        const themes = vocabularyManager.getThemes();
        themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme;
            option.textContent = theme;
            this.themeSelect.appendChild(option);
        });
    }

    loadSavedApiKey() {
        if (apiClient.hasValidApiKey()) {
            this.apiKeyInput.value = '••••••••••••••••••••••••••••••••';
            this.updateApiKeyStatus(true);
            this.setApiKeyFeedback('API密钥已保存', 'text-success');
        } else {
            this.updateApiKeyStatus(false);
            this.setApiKeyFeedback('请输入您的API密钥', 'text-muted');
        }
    }

    handleApiKeyInput() {
        const value = this.apiKeyInput.value;

        // 如果是隐藏状态，不处理
        if (value.includes('•')) {
            return;
        }

        if (value.length === 0) {
            this.updateApiKeyStatus(false);
            this.setApiKeyFeedback('请输入您的API密钥', 'text-muted');
            this.apiKeyInput.classList.remove('is-valid', 'is-invalid');
            return;
        }

        // 验证API密钥格式
        if (apiClient.validateApiKey(value)) {
            this.saveApiKey();
            this.updateApiKeyStatus(true);
            this.setApiKeyFeedback('API密钥格式正确，已保存', 'text-success');
            this.apiKeyInput.classList.remove('is-invalid');
            this.apiKeyInput.classList.add('is-valid');
        } else if (value.length < 20) {
            this.updateApiKeyStatus(false);
            this.setApiKeyFeedback('API密钥长度不足（至少20个字符）', 'text-danger');
            this.apiKeyInput.classList.remove('is-valid');
            this.apiKeyInput.classList.add('is-invalid');
        } else {
            this.updateApiKeyStatus(false);
            this.setApiKeyFeedback('API密钥格式错误', 'text-danger');
            this.apiKeyInput.classList.remove('is-valid');
            this.apiKeyInput.classList.add('is-invalid');
        }
    }

    saveApiKey() {
        const apiKey = this.apiKeyInput.value.trim();
        if (apiKey && !apiKey.includes('•')) {
            apiClient.saveApiKey(apiKey);
            // 延迟隐藏密钥，让用户看到已保存
            setTimeout(() => {
                this.hideApiKey();
            }, 1000);
        }
    }

    hideApiKey() {
        if (apiClient.hasValidApiKey()) {
            this.apiKeyInput.value = '••••••••••••••••••••••••••••••••';
            this.apiKeyInput.type = 'password';
        }
    }

    clearApiKey() {
        apiClient.clearApiKey();
        this.apiKeyInput.value = '';
        this.apiKeyInput.type = 'password';
        this.apiKeyInput.classList.remove('is-valid', 'is-invalid');
        this.updateApiKeyStatus(false);
        this.setApiKeyFeedback('API密钥已清除', 'text-muted');
    }

    updateApiKeyStatus(isValid) {
        if (isValid) {
            this.apiKeyStatus.className = 'api-key-status valid';
        } else {
            this.apiKeyStatus.className = 'api-key-status invalid';
        }
    }

    setApiKeyFeedback(message, className) {
        this.apiKeyFeedback.innerHTML = `<small class="${className}">${message}</small>`;
    }

    handleThemeChange() {
        const theme = this.themeSelect.value;
        const title = this.titleInput.value;

        if (theme && title) {
            this.showVocabularyPreview(theme);
        } else {
            this.hideVocabularyPreview();
        }
    }

    handleTitleChange() {
        const theme = this.themeSelect.value;
        const title = this.titleInput.value;

        if (theme && title) {
            this.showVocabularyPreview(theme);
        } else {
            this.hideVocabularyPreview();
        }
    }

    showVocabularyPreview(theme) {
        const vocabulary = vocabularyManager.getVocabulary(theme);
        if (!vocabulary) return;

        this.vocabularyList.innerHTML = '';

        // 核心角色与设施
        if (vocabulary.core) {
            this.addVocabularyCategory('核心角色与设施', vocabulary.core, 'bi-person-badge');
        }

        // 常见物品/工具
        if (vocabulary.items) {
            this.addVocabularyCategory('常见物品/工具', vocabulary.items, 'bi-basket');
        }

        // 环境与装饰
        if (vocabulary.environment) {
            this.addVocabularyCategory('环境与装饰', vocabulary.environment, 'bi-tree');
        }

        this.vocabularyPreview.style.display = 'block';
        this.vocabularyPreview.classList.add('fade-in');
    }

    addVocabularyCategory(title, items, iconClass) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'vocabulary-category';
        categoryDiv.innerHTML = `<i class="${iconClass}"></i> ${title}`;

        const listDiv = document.createElement('div');
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'vocabulary-item mb-2';
            itemDiv.innerHTML = `
                <div class="vocabulary-pinyin">${item.pinyin}</div>
                <div class="vocabulary-chinese">${item.chinese}</div>
            `;
            listDiv.appendChild(itemDiv);
        });

        col.appendChild(categoryDiv);
        col.appendChild(listDiv);
        this.vocabularyList.appendChild(col);
    }

    hideVocabularyPreview() {
        this.vocabularyPreview.style.display = 'none';
    }

    toggleApiKeyVisibility() {
        const currentValue = this.apiKeyInput.value;

        if (currentValue.includes('•')) {
            // 当前是隐藏状态，显示真实密钥
            this.apiKeyInput.value = apiClient.apiKey || '';
            this.apiKeyInput.type = 'text';
            this.toggleApiKeyBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
        } else {
            // 当前是显示状态，隐藏密钥
            this.hideApiKey();
            this.toggleApiKeyBtn.innerHTML = '<i class="bi bi-eye"></i>';
        }
    }

    async handleGenerate() {
        // 防止重复提交
        if (this.isGenerating) {
            return;
        }

        // 获取表单数据
        const apiKey = this.apiKeyInput.value.trim();
        const theme = this.themeSelect.value;
        const title = this.titleInput.value.trim();

        // 验证输入
        const errors = this.validateInputs(apiKey, theme, title);
        if (errors.length > 0) {
            this.showError(errors[0]);
            return;
        }

        // 保存API密钥
        this.saveApiKey();

        // 开始生成
        this.isGenerating = true;
        this.setGeneratingState(true);
        this.hideResult();
        this.showProgress();

        try {
            // 生成提示词
            const prompt = this.promptGenerator.generatePrompt(theme, title);

            // 调用API生成图片
            const result = await apiClient.generateImage(prompt, {
                onProgress: (taskInfo) => {
                    this.updateProgress(taskInfo);
                }
            });

            // 生成成功
            this.handleSuccess(result);

        } catch (error) {
            this.handleError(error);
        } finally {
            this.isGenerating = false;
            this.setGeneratingState(false);
        }
    }

    validateInputs(apiKey, theme, title) {
        const errors = [];

        if (!apiKey) {
            errors.push('请输入API密钥');
            this.apiKeyInput.classList.add('is-invalid');
        } else {
            this.apiKeyInput.classList.remove('is-invalid');
        }

        if (!theme) {
            errors.push('请选择主题');
        }

        if (!title) {
            errors.push('请输入小报标题');
        }

        return errors;
    }

    setGeneratingState(isGenerating) {
        this.generateBtn.disabled = isGenerating;
        if (isGenerating) {
            this.generateBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> 生成中...';
        } else {
            this.generateBtn.innerHTML = '<i class="bi bi-magic"></i> 生成识字小报';
        }
    }

    updateProgress(taskInfo) {
        const state = taskInfo.state;
        let progress = 0;
        let text = '';

        switch (state) {
            case 'waiting':
                progress = 20;
                text = '任务已提交，等待处理...';
                break;
            case 'processing':
                progress = 50;
                text = '正在生成图片，请耐心等待...';
                break;
            case 'success':
                progress = 100;
                text = '生成完成！';
                break;
            case 'fail':
                progress = 0;
                text = '生成失败';
                break;
        }

        this.progressBar.style.width = `${progress}%`;
        this.progressBar.textContent = `${progress}%`;
        this.progressText.textContent = text;
    }

    handleSuccess(result) {
        this.currentResult = result;

        // 显示结果图片
        if (result.result && result.result.resultUrls && result.result.resultUrls.length > 0) {
            this.resultImage.src = result.result.resultUrls[0];
            this.showResult();
        } else {
            this.showError('生成结果为空，请重试');
        }
    }

    handleError(error) {
        console.error('生成失败:', error);
        this.showError(error.message || '生成失败，请重试');
    }

    showProgress() {
        this.progressSection.style.display = 'block';
        this.progressSection.classList.add('fade-in');
    }

    hideProgress() {
        this.progressSection.style.display = 'none';
    }

    showResult() {
        this.hideProgress();
        this.resultSection.style.display = 'block';
        this.resultSection.classList.add('fade-in');

        // 滚动到结果区域
        this.resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    hideResult() {
        this.resultSection.style.display = 'none';
    }

    downloadImage() {
        if (!this.currentResult || !this.currentResult.result || !this.currentResult.result.resultUrls) {
            this.showError('没有可下载的图片');
            return;
        }

        const imageUrl = this.currentResult.result.resultUrls[0];
        const theme = this.themeSelect.value;
        const title = this.titleInput.value.trim();
        const filename = `${theme}_${title}.png`;

        // 创建下载链接
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    showError(message) {
        this.errorMessage.textContent = message;
        const toast = new bootstrap.Toast(this.errorToast);
        toast.show();
    }
}

// 主应用逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 初始化应用
    const app = new App();
    app.init();
});