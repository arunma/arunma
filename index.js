/**
 * README Generator
 */
const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true
});
const mdEmoji = require('markdown-it-emoji');
const fs = require('fs');

md.use(mdEmoji);

const BLOG_HOST = `https://www.arunma.com`;

/* README Sections */
const introTitle = generateTitle(2, `Hey! Nice to meet you. I'm ${generateLink('Arun Manivannan', 'https://www.linkedin.com/in/arunma/')}`);
const introDescription = `I'm a software engineer with keen interest in building data-intensive applications.`;

const badgeConfigs = [{
        name: 'Website',
        badgeText: 'arunma.com',
        labelBgColor: '4E69C8',
        logoBgColor: '4E69C8',
        logo: 'Chrome',
        link: 'https://www.arunma.com',
    },
    {
        name: 'LinkedIn',
        badgeText: '@arunma',
        labelBgColor: '0077B5',
        logoBgColor: '0077B5',
        logo: 'LinkedIn',
        link: 'https://www.linkedin.com/in/arunma/',
    },
    {
        name: 'Twitter',
        badgeText: '@arunma',
        labelBgColor: '0A0A0A',
        logoBgColor: '0A0A0A',
        logo: 'Twitter',
        link: 'https://twitter.com/arunma',
    },
];
const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');

const factsConfigs = [
    `🧐 I'm a polyglot software engineer with keen interest in building **data-intensive distributed systems**`,
    `💬 Ping me about **data, engineering at scale, Scala, Rust** and just about anything related to data and tech.`,
    `👨‍💻 I spend an embarrassingly large amount of time on [leetcode](https://leetcode.com/arunma/) discussion forums and still fascinated by how different engineers solve the same problem.`,
    `📝 I wanted to write regularly on [my blog](${BLOG_HOST}).`,
];
const facts = factsConfigs.reduce((result, fact) => result + `\n - ${fact}`, '');

const toolsIconSize = 25;
const toolsConfig = [{
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original-wordmark.svg',
        alt: 'scala',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg',
        alt: 'python',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg',
        alt: 'rust',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
        alt: 'java',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original-wordmark.svg',
        alt: 'kafka',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
        alt: 'postgres',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
        alt: 'redis',
    },
    {
        src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png',
        alt: 'aws',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
        alt: 'Docker',
    },
    {
        src: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
        alt: 'Kubernetes',
    },
];
const tools = toolsConfig.reduce((result, toolConfig) => result + '\n' + generateIcon(toolConfig, toolsIconSize), '');
const toolsEndTitle = generateTitle(2, ``)

const stats = `<img src="https://github-readme-stats.vercel.app/api?username=arunma&show_icons=true&count_private=true" alt="arunma" />`;

const visitors = `![visitors](https://visitor-badge.glitch.me/badge?page_id=arunma.arunma)`;

(async () => {

const content = `${introTitle}\n
${badges}\n
${facts}\n
${stats}\n
${visitors}
`;

    const markdownContent = md.render(content);

    fs.writeFile('README.md', markdownContent, (err) => {
        if (err) {
            return console.error(err);
        }
        console.info(`Writing to README.md`);
    });
})();

function generateBadge(badgeConfig) {
    return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/-${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=flat-square&labelColor=${badgeConfig.logoBgColor}&logo=${badgeConfig.logo}&link=${badgeConfig.link})](${badgeConfig.link})`;
}

function generateIcon(iconConfig, toolsIconSize) {
    return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

function generateTitle(size, title) {
    return `${'#'.repeat(size)} ${title}`;
}

function generateLink(label, link) {
    return `[${label}](${link})`;
}
