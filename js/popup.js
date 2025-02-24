// AI工具数据
const AI_TOOLS = {
    general: [
        { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com', icon: 'icons/tools/deepseek.png', desc: '开源推理模型，擅长代码生成与数学解题' },
        { id: 'claude', name: 'Claude', url: 'https://claude.ai', icon: 'icons/tools/claude.png', desc: '长文本处理与架构图生成' },
        { id: 'doubao', name: '豆包', url: 'https://www.doubao.com', icon: 'icons/tools/doubao.png', desc: '多模态分析+智能体开发平台' },
        { id: 'qianwen', name: '通义千问', url: 'https://tongyi.aliyun.com', icon: 'icons/tools/qianwen.png', desc: '阿里云大模型，综合能力突出' },
        { id: 'chatgpt', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'icons/tools/chatgpt.png', desc: '多场景对话与内容生成' },
        { id: 'yiyan', name: '文心一言', url: 'https://yiyan.baidu.com', icon: 'icons/tools/yiyan.png', desc: '百度大语言模型' },
        { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', icon: 'icons/tools/gemini.png', desc: 'Google最新AI模型' },
        { id: 'poe', name: 'Poe', url: 'https://poe.com', icon: 'icons/tools/poe.png', desc: '多模型聚合平台' },
        { id: 'claude3', name: 'Claude 3', url: 'https://claude.ai/chats', icon: 'icons/tools/claude3.png', desc: '最新的Claude 3系列模型' },
        { id: 'xinghuo', name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', icon: 'icons/tools/xinghuo.png', desc: '科大讯飞的大语言模型' },
        { id: '360zhinao', name: '360智脑', url: 'https://ai.360.cn', icon: 'icons/tools/360zhinao.png', desc: '360的AI助手' },
        { id: 'moonshot', name: 'Moonshot', url: 'https://www.moonshot.cn/', icon: 'icons/tools/moonshot.png', desc: '专注于AI编程的大语言模型' }
    ],
    image: [
        { id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com', icon: 'icons/tools/midjourney.png', desc: '艺术风格图像生成' },
        { id: 'sd', name: 'Stable Diffusion', url: 'https://stability.ai', icon: 'icons/tools/sd.png', desc: '开源模型支持本地部署' },
        { id: 'dalle', name: 'DALL·E 3', url: 'https://openai.com/dall-e', icon: 'icons/tools/dalle.png', desc: '高精度文本转图像' },
        { id: 'keling', name: '可灵AI', url: 'https://klingai.kuaishou.com', icon: 'icons/tools/keling.png', desc: '支持文生视频与虚拟试穿' },
        { id: 'firefly', name: 'Firefly', url: 'https://firefly.adobe.com', icon: 'icons/tools/firefly.png', desc: 'Adobe的AI图像生成工具' },
        { id: 'zhiying', name: '腾讯智影', url: 'https://zenvideo.qq.com', icon: 'icons/tools/zhiying.png', desc: '腾讯的AI图像与视频生成平台' },
        { id: 'yige', name: '文心一格', url: 'https://yige.baidu.com', icon: 'icons/tools/yige.png', desc: '百度的AI艺术创作平台' },
        { id: 'canvaai', name: 'Canva AI', url: 'https://www.canva.com/ai-image-generator', icon: 'icons/tools/canvaai.png', desc: 'Canva的AI图像生成工具' }
    ],
    video: [
        { id: 'runway', name: 'Runway', url: 'https://runwayml.com', icon: 'icons/tools/runway.png', desc: '视频智能编辑与特效合成' },
        { id: 'pika', name: 'Pika', url: 'https://pika.art', icon: 'icons/tools/pika.png', desc: '短视频快速生成' },
        { id: 'vidu', name: 'Vidu', url: 'https://www.vidu.cn', icon: 'icons/tools/vidu.png', desc: '2D/3D动画生成' },
        { id: 'capcut', name: '剪映AI', url: 'https://www.capcut.cn', icon: 'icons/tools/capcut.png', desc: '视频智能剪辑与字幕生成' },
        { id: 'synthesia', name: 'Synthesia', url: 'https://www.synthesia.io', icon: 'icons/tools/synthesia.png', desc: 'AI数字人视频生成' },
        { id: 'descript_video', name: 'Descript', url: 'https://www.descript.com', icon: 'icons/tools/descript.png', desc: 'AI视频编辑与字幕生成' },
        { id: 'wonderstudio', name: 'Wonder Studio', url: 'https://wonderdynamics.com', icon: 'icons/tools/wonderstudio.png', desc: 'AI特效与动画制作' },
        { id: 'moyin', name: '魔撰', url: 'https://www.moyin.com', icon: 'icons/tools/moyin.png', desc: '智能视频创作平台' }
    ],
    code: [
        { id: 'copilot', name: 'GitHub Copilot', url: 'https://copilot.github.com', icon: 'icons/tools/copilot.png', desc: '代码自动补全与生成' },
        { id: 'cursor', name: 'Cursor', url: 'https://cursor.sh', icon: 'icons/tools/cursor.png', desc: 'AI辅助编程环境' },
        { id: 'replit', name: 'Replit AI', url: 'https://replit.com', icon: 'icons/tools/replit.png', desc: '云端IDE集成AI编程' },
        { id: 'trea', name: 'TREA', url: 'https://www.trae.ai', icon: 'icons/tools/trea.png', desc: 'AI代码助手' },
        { id: 'windsurf', name: 'Windsurf', url: 'https://codeium.com/windsurf', icon: 'icons/tools/windsurf.png', desc: '智能编程工具' },
        { id: 'codewhisperer', name: 'CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', icon: 'icons/tools/codewhisperer.png', desc: 'AWS的AI编程助手' },
        { id: 'tabnine', name: 'Tabnine', url: 'https://www.tabnine.com', icon: 'icons/tools/tabnine.png', desc: 'AI代码补全工具' },
        { id: 'codegeex', name: 'CodeGeeX', url: 'https://codegeex.cn', icon: 'icons/tools/codegeex.png', desc: '智能编程助手' },
        { id: 'bito', name: 'Bito', url: 'https://bito.ai', icon: 'icons/tools/bito.png', desc: 'AI代码解释与生成工具' }
    ],
    office: [
        { id: 'kimi', name: 'Kimi PPT助手', url: 'https://kimi.moonshot.cn', icon: 'icons/tools/kimi.png', desc: '一键生成PPT' },
        { id: 'gamma', name: 'Gamma', url: 'https://gamma.app', icon: 'icons/tools/gamma.png', desc: '智能文档排版' },
        { id: 'notion', name: 'Notion AI', url: 'https://notion.ai', icon: 'icons/tools/notion.png', desc: '将普通文本转换为结构化内容' },
        { id: 'jasper', name: 'Jasper', url: 'https://jasper.ai', icon: 'icons/tools/jasper.png', desc: 'AI写作助手' },
        { id: 'mscopilot', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', icon: 'icons/tools/mscopilot.png', desc: '微软Office AI助手' },
        { id: 'tome', name: 'Tome', url: 'https://tome.app', icon: 'icons/tools/tome.png', desc: 'AI驱动的演示文稿创作' },
        { id: 'beautiful', name: 'Beautiful.ai', url: 'https://www.beautiful.ai', icon: 'icons/tools/beautiful.png', desc: 'AI演示文稿设计' },
        { id: 'otter', name: 'Otter.ai', url: 'https://otter.ai', icon: 'icons/tools/otter.png', desc: 'AI会议记录与转写' }
    ],
    audio: [
        { id: 'suno', name: 'Suno AI', url: 'https://suno.ai', icon: 'icons/tools/suno.png', desc: '带歌词和伴奏的音乐生成' },
        { id: 'haimian', name: '海绵音乐', url: 'https://www.haimian.com', icon: 'icons/tools/haimian.png', desc: '零基础音乐创作' },
        { id: 'elevenlabs', name: 'ElevenLabs', url: 'https://elevenlabs.io', icon: 'icons/tools/elevenlabs.png', desc: '拟人化语音合成' },
        { id: 'llmind', name: 'LLMind', url: 'https://llmind.com', icon: 'icons/tools/llmind.png', desc: 'AI驱动的音乐创作和制作工具' },
        { id: 'mubert', name: 'Mubert', url: 'https://mubert.com', icon: 'icons/tools/mubert.png', desc: 'AI背景音乐生成' },
        { id: 'soundraw', name: 'Soundraw', url: 'https://soundraw.io', icon: 'icons/tools/soundraw.png', desc: 'AI音乐创作平台' },
        { id: 'voicemod', name: 'Voicemod', url: 'https://www.voicemod.net', icon: 'icons/tools/voicemod.png', desc: 'AI变声器' },
        { id: 'boomy', name: 'Boomy', url: 'https://boomy.com', icon: 'icons/tools/boomy.png', desc: 'AI音乐制作工具' }
    ],
    search: [
        { id: 'metaso', name: '秘塔AI搜索', url: 'https://metaso.cn', icon: 'icons/tools/metaso.png', desc: '深度信息挖掘与知识整合' },
        { id: 'immersive', name: '沉浸式翻译', url: 'https://immersivetranslate.com', icon: 'icons/tools/immersive.png', desc: '多格式文档对照翻译' },
        { id: 'perplexity', name: 'Perplexity AI', url: 'https://perplexity.ai', icon: 'icons/tools/perplexity.png', desc: 'AI驱动的智能搜索引擎' },
        { id: 'yuanbao', name: '元宝', url: 'https://yuanbao.tencent.com', icon: 'icons/tools/yuanbao.png', desc: '腾讯AI搜索引擎' },
        { id: 'deepseek_search', name: 'DeepSeek搜索', url: 'https://chat.deepseek.com', icon: 'icons/tools/deepseek.png', desc: 'DeepSeek的AI搜索引擎' },
        { id: 'kagi', name: 'Kagi', url: 'https://kagi.com', icon: 'icons/tools/kagi.png', desc: 'AI增强搜索引擎' },
        { id: 'deeplwrite', name: 'DeepL Write', url: 'https://www.deepl.com/write', icon: 'icons/tools/deeplwrite.png', desc: 'AI写作与翻译助手' },
        { id: 'lingva', name: 'Lingva', url: 'https://lingva.ml', icon: 'icons/tools/lingva.png', desc: '开源翻译工具' },
        { id: 'claudeinstant', name: 'Claude Instant', url: 'https://claude.ai/instant', icon: 'icons/tools/claudeinstant.png', desc: '快速文本分析与翻译' }
    ],
    creative: [
        { id: 'character', name: 'Character.AI', url: 'https://character.ai', icon: 'icons/tools/character.png', desc: 'AI角色扮演对话' },
        { id: 'copyai', name: 'Copy.ai', url: 'https://copy.ai', icon: 'icons/tools/copyai.png', desc: '生成营销文案和创意内容' },
        { id: 'descript_creative', name: 'Descript创意', url: 'https://www.descript.com', icon: 'icons/tools/descript.png', desc: 'AI创意内容编辑' },
        { id: 'kapwing', name: 'Kapwing', url: 'https://www.kapwing.com', icon: 'icons/tools/kapwing.png', desc: '在线创意内容制作' },
        { id: 'pictory', name: 'Pictory', url: 'https://pictory.ai', icon: 'icons/tools/pictory.png', desc: 'AI视频内容创作' },
        { id: 'simplified', name: 'Simplified', url: 'https://simplified.com', icon: 'icons/tools/simplified.png', desc: 'AI营销内容生成' }
    ],
    data: [
        { id: 'databutton', name: 'Databutton', url: 'https://databutton.com', icon: 'icons/tools/databutton.png', desc: '数据可视化与分析平台' },
        { id: 'observable', name: 'Observable', url: 'https://observablehq.com', icon: 'icons/tools/observable.png', desc: '交互式数据分析与可视化' },
        { id: 'hex', name: 'Hex', url: 'https://hex.tech', icon: 'icons/tools/hex.png', desc: '协作式数据科学平台' },
        { id: 'obviouslyai', name: 'Obviously AI', url: 'https://www.obviously.ai', icon: 'icons/tools/obviouslyai.png', desc: '无代码AI数据分析' },
        { id: 'mindsdb', name: 'MindsDB', url: 'https://mindsdb.com', icon: 'icons/tools/mindsdb.png', desc: 'AI数据预测平台' },
        { id: 'akkio', name: 'Akkio', url: 'https://www.akkio.com', icon: 'icons/tools/akkio.png', desc: 'AI商业智能分析' },
        { id: 'datarobot', name: 'DataRobot', url: 'https://www.datarobot.com', icon: 'icons/tools/datarobot.png', desc: '企业AI平台' }
    ],
    '3d': [
        { id: 'leonardo', name: 'Leonardo.ai', url: 'https://leonardo.ai', icon: 'icons/tools/leonardo.png', desc: 'AI驱动的3D模型生成' },
        { id: 'spline', name: 'Spline', url: 'https://spline.design', icon: 'icons/tools/spline.png', desc: '3D设计与动画制作' },
        { id: 'lumaai', name: 'Luma AI', url: 'https://lumalabs.ai', icon: 'icons/tools/lumaai.png', desc: '3D场景重建与神经渲染' },
        { id: 'meshy', name: 'Meshy', url: 'https://www.meshy.ai', icon: 'icons/tools/meshy.png', desc: 'AI 3D资产生成' },
        { id: 'get3d', name: 'GET3D', url: 'https://nv-tlabs.github.io/GET3D', icon: 'icons/tools/get3d.png', desc: 'NVIDIA的3D生成模型' },
        { id: 'pointe', name: 'Point-E', url: 'https://github.com/openai/point-e', icon: 'icons/tools/pointe.png', desc: 'OpenAI的3D点云生成' },
        { id: 'kaedim', name: 'Kaedim', url: 'https://www.kaedim3d.com', icon: 'icons/tools/kaedim.png', desc: '2D到3D转换工具' }
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