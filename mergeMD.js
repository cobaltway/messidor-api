const fs = require('fs');

let md = '# Messidor API \n';
fs.readdirSync('./')
.filter(folder => ['.git', 'changelog.md', 'mergeMD.js', 'api.md'].indexOf(folder) === -1)
.forEach(folder => {
    md += '## ' + folder.toUpperCase() + '\n\n';
    fs.readdirSync('./' + folder).forEach(api => {
        md += '### ' + api.split('_')[0].toUpperCase() + ' /' +
            api.split('_')[1]
            .replace(/-/g, '/')
            .replace(/\$/g, ':')
            .replace(/!/g, '?')
            .replace(/\.js/, '') +
            '\n';
        md += String(fs.readFileSync('./' + folder + '/' + api))
            .match(/\/\*[^]*?\*\//)[0]
            .replace('/*', '')
            .replace('*/', '')
            .replace(/```\{\}```/g, '`{}`')
            .replace('Request:** ```', 'Request:**\n```javascript\n')
            .replace('Response:** ```', 'Response:**\n```javascript\n')
            .replace(/\}```/g, '}\n```')
            .split('\n')
            .map(line => line.replace(/ {4}/, ''))
            .join('\n')
            .trim() +
            '\n\n';
    });
});

fs.writeFileSync('./api.md', md);
