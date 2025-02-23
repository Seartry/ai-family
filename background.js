// 监听扩展安装事件
chrome.runtime.onInstalled.addListener(() => {
    // 创建右键菜单
    chrome.contextMenus.create({
        id: 'aiToolbox',
        title: 'AI全家桶',
        contexts: ['selection']
    });

    // 为常用AI工具创建子菜单
    const commonTools = [
        { id: 'chatgpt', name: 'ChatGPT' },
        { id: 'claude', name: 'Claude' },
        { id: 'gemini', name: 'Gemini' },
        { id: 'deepseek', name: 'DeepSeek' },
        { id: 'qianwen', name: '通义千问' },
        { id: 'yiyan', name: '文心一言' }
    ];

    commonTools.forEach(tool => {
        chrome.contextMenus.create({
            id: tool.id,
            parentId: 'aiToolbox',
            title: tool.name,
            contexts: ['selection']
        });
    });
});

// 处理右键菜单点击事件
chrome.contextMenus.onClicked.addListener((info, tab) => {
    const toolUrls = {
        'chatgpt': 'https://chat.openai.com/',
        'claude': 'https://claude.ai/',
        'gemini': 'https://gemini.google.com/',
        'deepseek': 'https://chat.deepseek.com/',
        'qianwen': 'https://tongyi.aliyun.com/',
        'yiyan': 'https://yiyan.baidu.com/'
    };

    const url = toolUrls[info.menuItemId];
    if (url) {
        chrome.tabs.create({ url });
    }
});

// 监听快捷键命令
chrome.commands.onCommand.addListener((command) => {
    if (command === '_execute_action') {
        // 打开扩展popup
        chrome.action.openPopup();
    }
});

// 监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 处理来自popup或content script的消息
    if (request.type === 'openTool') {
        chrome.tabs.create({ url: request.url });
    }
    return true;
}); 