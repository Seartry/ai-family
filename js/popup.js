// AI工具数据
const AI_TOOLS = {
    general: [
        { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com', icon: 'icons/tools/deepseek.png', desc: '开源推理模型，擅长代码生成与数学解题' },
        { id: 'claude', name: 'Claude', url: 'https://claude.ai', icon: 'icons/tools/claude.png', desc: '长文本处理与架构图生成' },
        { id: 'doubao', name: '豆包', url: 'https://www.doubao.com', icon: 'icons/tools/doubao.png', desc: '多模态分析+智能体开发平台' },
        { id: 'qianwen', name: '通义千问', url: 'https://tongyi.aliyun.com', icon: 'icons/tools/qianwen.png', desc: '阿里云大模型，综合能力突出' },
        { id: 'chatgpt', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'icons/tools/chatgpt.png', desc: '多场景对话与内容生成' },
        { id: 'yiyan', name: '文心一言', url: 'https://yiyan.baidu.com', icon: 'icons/tools/yiyan.png' },
        { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', icon: 'icons/tools/gemini.png' },
        { id: 'poe', name: 'Poe', url: 'https://poe.com', icon: 'icons/tools/poe.png' }
    ],
    image: [
        { id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com', icon: 'icons/tools/midjourney.png', desc: '艺术风格图像生成' },
        { id: 'sd', name: 'Stable Diffusion', url: 'https://stability.ai', icon: 'icons/tools/sd.png', desc: '开源模型支持本地部署' },
        { id: 'dalle', name: 'DALL·E 3', url: 'https://openai.com/dall-e', icon: 'icons/tools/dalle.png', desc: '高精度文本转图像' },
        { id: 'keling', name: '可灵AI', url: 'https://klingai.kuaishou.com', icon: 'icons/tools/keling.png', desc: '支持文生视频与虚拟试穿' }
    ],
    video: [
        { id: 'runway', name: 'Runway', url: 'https://runwayml.com', icon: 'icons/tools/runway.png', desc: '视频智能编辑与特效合成' },
        { id: 'pika', name: 'Pika', url: 'https://pika.art', icon: 'icons/tools/pika.png', desc: '短视频快速生成' },
        { id: 'vidu', name: 'Vidu', url: 'https://www.vidu.cn', icon: 'icons/tools/vidu.png', desc: '2D/3D动画生成' },
        { id: 'capcut', name: '剪映AI', url: 'https://www.capcut.cn', icon: 'icons/tools/capcut.png', desc: '视频智能剪辑与字幕生成' }
    ],
    code: [
        { id: 'copilot', name: 'GitHub Copilot', url: 'https://copilot.github.com', icon: 'icons/tools/copilot.png', desc: '代码自动补全与生成' },
        { id: 'cursor', name: 'Cursor', url: 'https://cursor.sh', icon: 'icons/tools/cursor.png', desc: 'AI辅助编程环境' },
        { id: 'replit', name: 'Replit AI', url: 'https://replit.com', icon: 'icons/tools/replit.png', desc: '云端IDE集成AI编程' },
        { id: 'trea', name: 'TREA', url: 'https://www.trae.ai', icon: 'icons/tools/trea.png' },
        { id: 'windsurf', name: 'Windsurf', url: 'https://codeium.com/windsurf', icon: 'icons/tools/windsurf.png' }
    ],
    office: [
        { id: 'kimi', name: 'Kimi PPT助手', url: 'https://kimi.moonshot.cn', icon: 'icons/tools/kimi.png', desc: '一键生成PPT' },
        { id: 'gamma', name: 'Gamma', url: 'https://gamma.app', icon: 'icons/tools/gamma.png', desc: '智能文档排版' },
        { id: 'notion', name: 'Notion AI', url: 'https://notion.ai', icon: 'icons/tools/notion.png', desc: '将普通文本转换为结构化内容' },
        { id: 'jasper', name: 'Jasper', url: 'https://jasper.ai', icon: 'icons/tools/jasper.png', desc: 'AI写作助手' }
    ],
    audio: [
        { id: 'suno', name: 'Suno AI', url: 'https://suno.ai', icon: 'icons/tools/suno.png', desc: '带歌词和伴奏的音乐生成' },
        { id: 'haimian', name: '海绵音乐', url: 'https://www.haimian.com', icon: 'icons/tools/haimian.png', desc: '零基础音乐创作' },
        { id: 'elevenlabs', name: 'ElevenLabs', url: 'https://elevenlabs.io', icon: 'icons/tools/elevenlabs.png', desc: '拟人化语音合成' },
        { id: 'llmind', name: 'LLMind', url: 'https://llmind.com', icon: 'icons/tools/llmind.png', desc: 'AI驱动的音乐创作和制作工具' }
    ],
    search: [
        { id: 'metaso', name: '秘塔AI搜索', url: 'https://metaso.cn', icon: 'icons/tools/metaso.png', desc: '深度信息挖掘与知识整合' },
        { id: 'immersive', name: '沉浸式翻译', url: 'https://immersivetranslate.com', icon: 'icons/tools/immersive.png', desc: '多格式文档对照翻译' },
        { id: 'perplexity', name: 'Perplexity AI', url: 'https://perplexity.ai', icon: 'icons/tools/perplexity.png', desc: 'AI驱动的智能搜索引擎' },
        { id: 'yuanbao', name: '元宝', url: 'https://yuanbao.tencent.com', icon: 'icons/tools/yuanbao.png', desc: '腾讯AI搜索引擎' },
        { id: 'baidudsk', name: '百度DeepSeek', url: 'https://chat.baidu.com', icon: 'icons/tools/baidudsk.png', desc: '百度集成的AI搜索引擎' }
    ],
    creative: [
        { id: 'character', name: 'Character.AI', url: 'https://character.ai', icon: 'icons/tools/character.png', desc: 'AI角色扮演对话' },
        { id: 'copyai', name: 'Copy.ai', url: 'https://copy.ai', icon: 'icons/tools/copyai.png', desc: '生成营销文案和创意内容' }
    ]
};

// 当前选中的分类
let currentCategory = 'all';
// 搜索关键词
let searchKeyword = '';
// 收藏的工具
let favorites = [];

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
    // 加载收藏夹数据
    await loadFavorites();
    
    // 初始化工具列表
    renderTools();
    
    // 绑定事件监听器
    bindEventListeners();
});

// 加载收藏夹数据
async function loadFavorites() {
    const result = await chrome.storage.sync.get('favorites');
    favorites = result.favorites || [];
}

// 保存收藏夹数据
async function saveFavorites() {
    await chrome.storage.sync.set({ favorites });
    if (currentCategory === 'favorites') {
        renderTools(); // 如果当前在收藏夹页面，需要更新显示
    }
}

// 切换工具收藏状态
async function toggleFavorite(toolId) {
    const index = favorites.indexOf(toolId);
    if (index === -1) {
        favorites.push(toolId);
    } else {
        favorites.splice(index, 1);
    }
    await saveFavorites();
}

// 渲染工具列表
function renderTools() {
    const container = document.getElementById('toolsContainer');
    container.innerHTML = '';
    
    // 获取要显示的工具列表
    let tools = [];
    if (currentCategory === 'favorites') {
        // 显示收藏夹内容
        Object.values(AI_TOOLS).forEach(categoryTools => {
            categoryTools.forEach(tool => {
                if (favorites.includes(tool.id)) {
                    tools.push(tool);
                }
            });
        });
    } else if (currentCategory === 'all') {
        // 显示所有工具
        Object.values(AI_TOOLS).forEach(categoryTools => {
            tools = tools.concat(categoryTools);
        });
    } else {
        // 显示特定分类的工具
        tools = AI_TOOLS[currentCategory] || [];
    }
    
    // 根据搜索关键词过滤
    if (searchKeyword) {
        const keyword = searchKeyword.toLowerCase();
        tools = tools.filter(tool => 
            tool.name.toLowerCase().includes(keyword) ||
            (tool.desc && tool.desc.toLowerCase().includes(keyword))
        );
    }
    
    // 创建工具卡片
    tools.forEach(tool => {
        const card = createToolCard(tool);
        container.appendChild(card);
    });

    // 如果没有工具显示，显示提示信息
    if (tools.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.textContent = currentCategory === 'favorites' ? 
            '还没有收藏任何工具' : 
            '没有找到匹配的工具';
        container.appendChild(emptyMessage);
    }
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.toolId = tool.id;
    
    const isFavorite = favorites.includes(tool.id);
    
    card.innerHTML = `
        <div class="tool-header">
            <img src="${tool.icon}" alt="${tool.name}" class="tool-icon">
            <h3 class="tool-name">${tool.name}</h3>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}">${isFavorite ? '★' : '☆'}</button>
        </div>
        ${tool.desc ? `<p class="tool-desc">${tool.desc}</p>` : ''}
    `;
    
    // 点击卡片打开工具
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn')) {
            chrome.tabs.create({ url: tool.url });
        }
    });
    
    // 收藏按钮点击事件
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(tool.id);
        favoriteBtn.textContent = favorites.includes(tool.id) ? '★' : '☆';
        favoriteBtn.classList.toggle('active');
    });
    
    return card;
}

// 绑定事件监听器
function bindEventListeners() {
    // 分类按钮点击事件
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.category-btn.active')?.classList.remove('active');
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTools();
        });
    });
    
    // 搜索输入事件
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchKeyword = e.target.value.trim();
        renderTools();
    });
    
    // 设置按钮点击事件
    document.getElementById('settingsBtn').addEventListener('click', () => {
        // TODO: 实现设置面板
        alert('设置功能开发中...');
    });
} 