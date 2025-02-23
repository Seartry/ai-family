const sharp = require('sharp');
const path = require('path');

const size = 32;
const placeholderIconPath = path.join(__dirname, '../icons/tools/placeholder.png');

// 创建一个简单的占位图标
sharp({
    create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 200, g: 200, b: 200, alpha: 1 }
    }
})
.png()
.toFile(placeholderIconPath)
.then(() => console.log('Created placeholder icon'))
.catch(err => console.error('Error creating placeholder icon:', err)); 