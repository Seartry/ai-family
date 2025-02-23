const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 创建图标目录
const toolIconsDir = path.join(__dirname, '../icons/tools');
if (!fs.existsSync(toolIconsDir)) {
    fs.mkdirSync(toolIconsDir, { recursive: true });
}

// 图标URL映射
const iconUrls = {
    // 大语言模型
    'deepseek': 'https://www.deepseek.com/favicon.png',
    'claude': 'https://claude.ai/apple-touch-icon.png',
    'doubao': 'https://www.doubao.com/apple-touch-icon.png',
    'qianwen': 'https://tongyi.aliyun.com/favicon.ico',
    'chatgpt': 'https://chat.openai.com/apple-touch-icon.png',
    'yiyan': 'https://yiyan.baidu.com/favicon.ico',
    'gemini': 'https://www.gstatic.com/lamda/images/favicon_v1_150160c4f2a97bf470b0d0cb8f43673b.png',
    'poe': 'https://poe.com/apple-touch-icon.png',
    
    // 图像生成
    'midjourney': 'https://www.midjourney.com/apple-touch-icon.png',
    'sd': 'https://stability.ai/apple-touch-icon.png',
    'dalle': 'https://openai.com/favicon.ico',
    'keling': 'https://klingai.kuaishou.com/favicon.ico',
    
    // 视频创作
    'runway': 'https://runwayml.com/apple-touch-icon.png',
    'pika': 'https://pika.art/favicon.ico',
    'vidu': 'https://www.vidu.cn/favicon.ico',
    'capcut': 'https://www.capcut.cn/favicon.ico',
    
    // 编程开发
    'copilot': 'https://copilot.github.com/apple-touch-icon.png',
    'cursor': 'https://cursor.sh/favicon.ico',
    'replit': 'https://replit.com/apple-touch-icon.png',
    'trea': 'https://www.trae.ai/favicon.ico',
    'windsurf': 'https://codeium.com/favicon.ico',
    
    // 办公效率
    'kimi': 'https://kimi.moonshot.cn/apple-touch-icon.png',
    'gamma': 'https://gamma.app/favicon.ico',
    'notion': 'https://www.notion.so/images/logo-ios.png',
    'jasper': 'https://www.jasper.ai/images/favicon.png',
    
    // 音频处理
    'suno': 'https://suno.ai/favicon.ico',
    'haimian': 'https://www.haimian.com/favicon.ico',
    'elevenlabs': 'https://elevenlabs.io/favicon.ico',
    'llmind': 'https://llmind.com/favicon.ico',
    
    // 搜索翻译
    'metaso': 'https://metaso.cn/favicon.ico',
    'immersive': 'https://immersivetranslate.com/favicon.ico',
    'perplexity': 'https://perplexity.ai/favicon.ico',
    'yuanbao': 'https://yuanbao.tencent.com/favicon.ico',
    'baidudsk': 'https://chat.baidu.com/favicon.ico',
    
    // 创意社交
    'character': 'https://character.ai/favicon.ico',
    'copyai': 'https://copy.ai/favicon.png'
};

// 备用图标URL
const fallbackIconUrls = {
    'deepseek': 'https://deepseek.com/images/logo.png',
    'doubao': 'https://doubao.com/favicon.ico',
    'kimi': 'https://moonshot.cn/favicon.ico',
    'claude': 'https://www.anthropic.com/images/favicon.ico',
    'gemini': 'https://ai.google.dev/static/site-assets/images/favicon.png',
    'chatgpt': 'https://openai.com/favicon.ico',
    'yiyan': 'https://www.baidu.com/favicon.ico',
    'qianwen': 'https://aliyun.com/favicon.ico',
    'poe': 'https://poe.com/favicon.ico',
    'copilot': 'https://github.com/favicon.ico',
    'copyai': 'https://copy.ai/favicon.ico',
    'notion': 'https://notion.so/favicon.ico',
    'jasper': 'https://jasper.ai/favicon.ico',
    'dalle': 'https://labs.openai.com/favicon.ico',
    'sd': 'https://stability.ai/favicon.ico',
    'mode': 'https://mode.com/favicon.ico'
};

// 添加更多的错误处理和重试逻辑
function downloadIcon(name, url, retryCount = 0) {
    const maxRetries = 3;
    const filePath = path.join(toolIconsDir, `${name}.png`);
    
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode === 200) {
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                console.log(`✅ Downloaded: ${name}.png`);
                fileStream.close();
                processIcon(name);
            });
        } else {
            console.error(`❌ Failed to download ${name}.png (Status: ${response.statusCode})`);
            if (retryCount < maxRetries) {
                console.log(`Retrying ${name} (${retryCount + 1}/${maxRetries})...`);
                setTimeout(() => {
                    downloadIcon(name, url, retryCount + 1);
                }, 1000 * (retryCount + 1));
            } else if (fallbackIconUrls[name]) {
                console.log(`Trying fallback URL for ${name}...`);
                downloadIcon(name, fallbackIconUrls[name], 0);
            } else {
                createPlaceholderIcon(name);
            }
        }
    }).on('error', (err) => {
        console.error(`❌ Error downloading ${name}.png:`, err.message);
        if (retryCount < maxRetries) {
            console.log(`Retrying ${name} (${retryCount + 1}/${maxRetries})...`);
            setTimeout(() => {
                downloadIcon(name, url, retryCount + 1);
            }, 1000 * (retryCount + 1));
        } else if (fallbackIconUrls[name]) {
            console.log(`Trying fallback URL for ${name}...`);
            downloadIcon(name, fallbackIconUrls[name], 0);
        } else {
            createPlaceholderIcon(name);
        }
    });
}

// 创建占位图标
function createPlaceholderIcon(name) {
    const placeholderPath = path.join(toolIconsDir, `${name}.png`);
    
    sharp({
        create: {
            width: 32,
            height: 32,
            channels: 4,
            background: { r: 200, g: 200, b: 200, alpha: 1 }
        }
    })
    .png()
    .toFile(placeholderPath)
    .then(() => console.log(`Created placeholder icon for ${name}`))
    .catch(err => console.error(`Error creating placeholder icon for ${name}:`, err));
}

// 处理下载的图标
function processIcon(name) {
    const inputPath = path.join(toolIconsDir, `${name}.png`);
    const outputPath = path.join(toolIconsDir, `${name}.png`);

    sharp(inputPath)
        .resize(32, 32)
        .png()
        .toFile(outputPath + '.tmp')
        .then(() => {
            fs.renameSync(outputPath + '.tmp', outputPath);
            console.log(`✅ Processed: ${name}.png`);
        })
        .catch(err => console.error(`❌ Error processing ${name}.png:`, err));
}

// 下载所有图标
Object.entries(iconUrls).forEach(([name, url]) => {
    downloadIcon(name, url);
}); 