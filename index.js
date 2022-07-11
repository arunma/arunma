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
const introTitle = generateTitle(2, `Hey! Nice to see you. I'm ${generateLink('Arun Manivannan', 'https://www.arunma.com')}`);
const introDescription = `I'm a software engineer who is passionate about data, distributed systems and programming in general. Lives in Singapore.`;

const notice = ``

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
        link: 'https://img.shields.io/twitter/follow/arunma',
    },
];
const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');

const gif = `<img align="right" src="https://media1.giphy.com/media/NmerZ36iBkmKk/giphy.gif" />`;
const factsTitle = generateTitle(2, `:zap: A Few Quick Facts`);
const factsConfigs = [
    `🔭 I’m currently working at [Grab Digibank](https://www.grab.com/sg/).`,
    `🧐 I am passionate about **distributed systems** and programming languages in general - the recent addiction being Rust.`,
    `💬 Ping me about **Big Data, Engineering at Scale, Scala, Rust and just about anything related to data and tech**.`,
    `👨‍💻 I spend an embarrassingly large amount of time solving [leetcode](https://leetcode.com/arunma/) problems for fun.`,
    `📝 I wanted to write regularly on [my blog](${BLOG_HOST}).`,
    `🎉 Fun Fact: I wrote a book on using [Scala for data analytics](https://www.amazon.com/s?i=stripbooks&rh=p_27%3AArun+Manivannan) and was a lecturer at [NUS](https://www.iss.nus.edu.sg/) for a couple of years。`,
];
const facts = factsConfigs.reduce((result, fact) => result + `\n - ${fact}`, '');

const toolsTitle = generateTitle(2, `:rocket: Some Tools I Use`)
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

const stats = `<img src="https://github-readme-stats.vercel.app/api?username=arunma&show_icons=true&count_private=true" alt="arunma" />`;

const visitors = `![visitors](https://visitor-badge.glitch.me/badge?page_id=arunma.arunma)`;

(async () => {

const content = `${introTitle}\n
${introDescription}\n
${badges}\n
${notice}\n
${gif}\n
${factsTitle}\n
${facts}\n
${toolsTitle}\n
<p align="left">\n
    ${tools}\n
</p>\n
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
