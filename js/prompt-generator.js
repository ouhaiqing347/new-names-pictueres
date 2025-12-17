// 提示词生成器模块
class PromptGenerator {
    constructor(vocabularyManager) {
        this.vocabularyManager = vocabularyManager;
    }

    // 生成完整的提示词
    generatePrompt(theme, title) {
        // 获取主题词汇
        const vocabulary = this.vocabularyManager.generateDetailedVocabulary(theme);

        if (!vocabulary) {
            throw new Error(`未找到主题"${theme}"的词汇数据`);
        }

        // 构建极简提示词
        const vocabText = `${vocabulary.core} ${vocabulary.items} ${vocabulary.environment}`;
        const prompt = `儿童识字学习海报：${title}

主题：${theme}
风格：儿童卡通插画，竖版A4，色彩鲜艳
标题：《${title}》，白色粗体字，彩色描边
包含卡通人物和场景元素

必须包含的词汇标签：${vocabText}

要求：每个物品有白色文字标签，彩色背景，上面拼音下面汉字。8K分辨率。`;

        // 检查提示词长度
        if (prompt.length > 6000) {
            throw new Error('生成的提示词过长，请简化内容');
        }

        return prompt;
    }

    // 生成简化版提示词（用于调试或快速预览）
    generateSimplePrompt(theme, title) {
        return `儿童识字小报：《${title}》
主题：${theme}
适合年龄：5-9岁
格式：竖版A4，学习小报版式
要求：包含15-20个带拼音标注的汉字，儿童绘本风格`;
    }

    // 验证输入参数
    validateInputs(theme, title) {
        const errors = [];

        if (!theme || theme.trim() === '') {
            errors.push('主题不能为空');
        }

        if (!title || title.trim() === '') {
            errors.push('标题不能为空');
        }

        if (title.length > 50) {
            errors.push('标题长度不能超过50个字符');
        }

        // 检查主题是否在词汇库中
        if (theme && this.vocabularyManager.vocabularyData && !this.vocabularyManager.vocabularyData[theme]) {
            errors.push(`未找到主题"${theme}"的词汇库`);
        }

        return errors;
    }

    // 获取提示词预览
    getPromptPreview(theme, title) {
        try {
            const prompt = this.generatePrompt(theme, title);
            return {
                success: true,
                preview: prompt.substring(0, 200) + '...',
                length: prompt.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}