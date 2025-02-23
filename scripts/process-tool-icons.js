const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const toolIconsDir = path.join(__dirname, '../icons/tools');
const iconSize = 32; // 统一设置图标大小为32x32

// 处理所有图标
fs.readdir(toolIconsDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.png') || file.endsWith('.ico')) {
            const inputPath = path.join(toolIconsDir, file);
            const outputPath = path.join(toolIconsDir, `${path.parse(file).name}.png`);

            sharp(inputPath)
                .resize(iconSize, iconSize)
                .png()
                .toFile(outputPath)
                .then(() => console.log(`✅ Processed: ${file}`))
                .catch(err => console.error(`❌ Error processing ${file}:`, err));
        }
    });
}); 