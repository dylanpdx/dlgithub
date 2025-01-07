const mapping = [
    {exts: ['exe','dll'], icon: 'simple/windows'},
    {exts: ['zip','rar','7z'], icon: 'octicons/file-zip'},
    {exts: ['ipa', 'dmg'], icon: 'simple/apple'},
    {exts: ["apk"], icon: 'simple/android'},
    {exts: ["unitypackage"], icon: 'simple/unity'},
    {exts: ['js'], icon: 'simple/javascript'},
    {exts: ['ts'], icon: 'simple/typescript'},
    {exts: ['so'], icon: 'simple/linux'},
];

const getIconFor = (filename: string) => {
    const ext = filename.split('.').pop();
    const icon = mapping.find(m => m.exts.includes(ext))?.icon || 'octicons/file';
    return `https://icongr.am/${icon}.svg?size=128&color=currentColor&colored=false`;
}

export default getIconFor;