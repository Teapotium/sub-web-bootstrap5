var client = [//客户端数据，name用于在前端展示，value用于提交到后端
    {
        "name": "Clash",
        "value": "clash"
    },
    {
        "name": "ClashR",
        "value": "clashr"
    },
    {
        "name": "Sing-Box",
        "value": "singbox"
    },
    {
        "name": "Quantumult",
        "value": "quan"
    },
    {
        "name": "Quantumult X",
        "value": "quanx"
    },
    {
        "name": "Loon",
        "value": "loon"
    },
    {
        "name": "Mellow",
        "value": "mellow"
    },
    {
        "name": "SS (SIP002)",
        "value": "ss"
    },
    {
        "name": "SS (软件订阅/SIP008)",
        "value": "sssub"
    },
    {
        "name": "SSD",
        "value": "ssd"
    },
    {
        "name": "SSR",
        "value": "ssr"
    },
    {
        "name": "Surfboard",
        "value": "surfboard"
    },
    {
        "name": "Surfboard",
        "value": "surfboard"
    },
    {
        "name": "Surge 2",
        "value": "surge&ver=2"
    },
    {
        "name": "Surge 3",
        "value": "surge&ver=3"
    },
    {
        "name": "Surge 4",
        "value": "surge&ver=4"
    },
    {
        "name": "Trojan",
        "value": "trojan"
    },
    {
        "name": "V2Ray",
        "value": "v2ray"
    },
    {
        "name": "Mixed",
        "value": "mixed"
    },
    {
        "name": "Auto",
        "value": "auto"
    }
];


var allConfig = [
    {
        configList: [//configList为固定字段，不要更改，所有configlist第一个元素用作下拉列表标题
            {
                "name": "默认",
                "url": ""
            },
            {
                "name": "不选，由后端决定",
                "url": ""
            }
        ]
    },
    {
        configList: [
            {
                "name": "ACL4SSR Github配置",
                "url": ""
            },
            {
                "name": "ACL4SSR 标准版 分组比较全",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
            },
            {
                "name": "ACL4SSR_AdblockPlus 标准版+去广告",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
            },
            {
                "name": "ACL4SSR_NoAuto 标准版+无测速",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
            },
            {
                "name": "ACL4SSR_NoReject 标准版+无广告拦截",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
            },
            {
                "name": "ACL4SSR_Mini 精简版",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
            },
            {
                "name": "ACL4SSR_Mini_AdblockPlus 精简版+去广告",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
            },
            {
                "name": "ACL4SSR_Mini_NoAuto 精简版+无自动测速",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
            },
            {
                "name": "ACL4SSR_Mini_Fallback 精简版+故障转移",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
            },
            {
                "name": "ACL4SSR_Mini 精简版+自动测速+故障转移+负载均衡",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
            },
            {
                "name": "ACL4SSR_Mini_MultiCountry 精简版+多国家",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"
            },
            {
                "name": "ACL4SSR_Full 全分组",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
            },
            {
                "name": "ACL4SSR_Full 全分组+自动测速+故障转移+负载均衡",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"
            },
            {
                "name": "ACL4SSR_Full_NoAuto 全分组+无自动测速",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
            },
            {
                "name": "ACL4SSR_Full_AdblockPlus 全分组+去广告",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
            },
            {
                "name": "ACL4SSR_Full_Netflix 全分组+奈飞全量",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
            },
            {
                "name": "ACL4SSR_Full_Google 全分组+谷歌全量",
                "url": "https://raw.github.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"
            }
        ]
    },
    {
        configList: [
            {
                "name": "其他规则",
                "url": ""
            },
            {
                "name": "Maying",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"
            },
            {
                "name": "Ytoo",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"
            },
            {
                "name": "FlowerCloud",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"
            },
            {
                "name": "NyanCAT",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"
            },
            {
                "name": "Nexitally",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"
            },
            {
                "name": "SoCloud",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"
            },
            {
                "name": "ARK",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"
            },
            {
                "name": "ssrCloud",
                "url": "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"
            }
        ]
    }
];

var backend = [
    {
        "name": "localhost:25500 本地订阅转换",
        "url": "http://localhost:25500/sub?"
    },
    {
        "name": "sub.xeton.dev(subconverter作者提供)",
        "url": "https://sub.xeton.dev/sub?"
    },
    {
        "name": "api.dler.io(sub作者&lhie1提供)",
        "url": "https://api.dler.io/sub?"
    },
    {
        "name": "肥羊增强型后端【vless reality+hy1+hy2】",
        "url": "https://api.v1.mk/sub?"
    },
    {
        "name": "肥羊备用后端【vless reality+hy1+hy2】",
        "url": "https://sub.d1.mk/sub?"
    }
];

var shortService=[
    {
        "url": "https://suo.yt/short",
        "shortKey": ""
    }
];