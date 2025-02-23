const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 128];
const inputSvg = path.join(__dirname, '../icons/icon.svg');
const outputDir = path.join(__dirname, '../icons');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 为每个尺寸生成PNG图标
sizes.forEach(size => {
    sharp(inputSvg)
        .resize(size, size)
        .toFile(path.join(outputDir, `icon${size}.png`))
        .then(info => console.log(`Generated ${size}x${size} icon`))
        .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
}); 