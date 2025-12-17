// 词汇库管理模块
class VocabularyManager {
    constructor() {
        this.vocabularyData = {
            "超市": {
                "core": [
                    {"pinyin": "shōu yín yuán", "chinese": "收银员"},
                    {"pinyin": "huò jià", "chinese": "货架"},
                    {"pinyin": "gòu wù chē", "chinese": "购物车"},
                    {"pinyin": "tī tuī chē", "chinese": "手推车"},
                    {"pinyin": "bǎo ān", "chinese": "保安"}
                ],
                "items": [
                    {"pinyin": "píng guǒ", "chinese": "苹果"},
                    {"pinyin": "xiāng jiāo", "chinese": "香蕉"},
                    {"pinyin": "niú nǎi", "chinese": "牛奶"},
                    {"pinyin": "miàn bāo", "chinese": "面包"},
                    {"pinyin": "jī dàn", "chinese": "鸡蛋"},
                    {"pinyin": "qiǎo kè lì", "chinese": "巧克力"},
                    {"pinyin": "bǐng gān", "chinese": "饼干"},
                    {"pinyin": "guǒ zhī", "chinese": "果汁"}
                ],
                "environment": [
                    {"pinyin": "chū kǒu", "chinese": "出口"},
                    {"pinyin": "rù kǒu", "chinese": "入口"},
                    {"pinyin": "zhāo pái", "chinese": "招牌"},
                    {"pinyin": "dēng", "chinese": "灯"},
                    {"pinyin": "qiáng", "chinese": "墙"}
                ]
            },
            "机场": {
                "core": [
                    {"pinyin": "háng kōng gōng", "chinese": "航空港"},
                    {"pinyin": "féi jī chǎng", "chinese": "飞机场"},
                    {"pinyin": "háng bān lóu", "chinese": "航站楼"},
                    {"pinyin": "jī chǎng", "chinese": "机长"},
                    {"pinyin": "chéng wù yuán", "chinese": "乘务员"}
                ],
                "items": [
                    {"pinyin": "féi jī", "chinese": "飞机"},
                    {"pinyin": "xíng lǐ xiāng", "chinese": "行李箱"},
                    {"pinyin": "dēng jī pái", "chinese": "登机牌"},
                    {"pinyin": "ān quán jiǎn", "chinese": "安全检查"},
                    {"pinyin": "háng kōng qì", "chinese": "航空器"},
                    {"pinyin": "tīng jī píng", "chinese": "停机坪"},
                    {"pinyin": "pǎo dào", "chinese": "跑道"},
                    {"pinyin": "kòng zhì tǎ", "chinese": "控制塔"}
                ],
                "environment": [
                    {"pinyin": "hòu jī shì", "chinese": "候机室"},
                    {"pinyin": "guì bìn tái", "chinese": "柜台"},
                    {"pinyin": "děng dài qū", "chinese": "等待区"},
                    {"pinyin": "xíng lǐ zhuàn", "chinese": "行李转盘"},
                    {"pinyin": "chū rù kǒu", "chinese": "出入口"}
                ]
            },
            "车站": {
                "core": [
                    {"pinyin": "huǒ chē zhàn", "chinese": "火车站"},
                    {"pinyin": "qì chē zhàn", "chinese": "汽车站"},
                    {"pinyin": "dì tiě zhàn", "chinese": "地铁站"},
                    {"pinyin": "zhàn zhǎng", "chinese": "站长"},
                    {"pinyin": "piào wù yuán", "chinese": "票务员"}
                ],
                "items": [
                    {"pinyin": "huǒ chē", "chinese": "火车"},
                    {"pinyin": "gōng jiāo chē", "chinese": "公交车"},
                    {"pinyin": "chū zū chē", "chinese": "出租车"},
                    {"pinyin": "dì tiě", "chinese": "地铁"},
                    {"pinyin": "piào", "chinese": "票"},
                    {"pinyin": "shí kè biǎo", "chinese": "时刻表"},
                    {"pinyin": "děng chē píng", "chinese": "等车屏"},
                    {"pinyin": "zhàn pái", "chinese": "站牌"}
                ],
                "environment": [
                    {"pinyin": "hòu chē shì", "chinese": "候车室"},
                    {"pinyin": "shàng chē píng tái", "chinese": "上车平台"},
                    {"pinyin": "chū rù kǒu", "chinese": "出入口"},
                    {"pinyin": "xíng rén tiān qiáo", "chinese": "人行天桥"},
                    {"pinyin": "zhàn dào", "chinese": "站台"}
                ]
            },
            "游乐场": {
                "core": [
                    {"pinyin": "yóu lè yuán", "chinese": "游乐园"},
                    {"pinyin": "mò huán chē", "chinese": "摩天轮"},
                    {"pinyin": "guò shān chē", "chinese": "过山车"},
                    {"pinyin": "bèi chén", "chinese": "旋转杯"},
                    {"pinyin": "biào tiān lún", "chinese": "旋转飞椅"}
                ],
                "items": [
                    {"pinyin": "mǎ xi", "chinese": "马戏"},
                    {"pinyin": "zà jì", "chinese": "杂技"},
                    {"pinyin": "pào qiāng", "chinese": "炮枪"},
                    {"pinyin": "qī qiú", "chinese": "气球"},
                    {"pinyin": "wá wa", "chinese": "娃娃"},
                    {"pinyin": "táng guǒ", "chinese": "糖果"},
                    {"pinyin": "bào mǐ huā", "chinese": "爆米花"},
                    {"pinyin": "miào guǐ wū", "chinese": "魔鬼屋"}
                ],
                "environment": [
                    {"pinyin": "mén piào", "chinese": "门票"},
                    {"pinyin": "děng dài qū", "chinese": "等待区"},
                    {"pinyin": "xiū xi qū", "chinese": "休息区"},
                    {"pinyin": "cān tīng", "chinese": "餐厅"},
                    {"pinyin": "lǐ pǐn diàn", "chinese": "礼品店"}
                ]
            },
            "图书馆": {
                "core": [
                    {"pinyin": "tú shū guǎn", "chinese": "图书馆"},
                    {"pinyin": "tú shū guǎn yuán", "chinese": "图书馆员"},
                    {"pinyin": "jiè yuán tái", "chinese": "借阅台"},
                    {"pinyin": "tū shū jī", "chinese": "图书机"},
                    {"pinyin": "dú zhě", "chinese": "读者"}
                ],
                "items": [
                    {"pinyin": "shū", "chinese": "书"},
                    {"pinyin": "bào zhì", "chinese": "报纸"},
                    {"pinyin": "qì kān", "chinese": "期刊"},
                    {"pinyin": "diàn zǐ", "chinese": "电子书"},
                    {"pinyin": "jiè shū zhèng", "chinese": "借书证"},
                    {"pinyin": "suǒ shū jī", "chinese": "锁书机"},
                    {"pinyin": "jiàn suǒ", "chinese": "检索"},
                    {"pinyin": "fù yìn jī", "chinese": "复印机"}
                ],
                "environment": [
                    {"pinyin": "yuè lǎn shì", "chinese": "阅览室"},
                    {"pinyin": "zì xíng qū", "chinese": "自习区"},
                    {"pinyin": "ér tóng qū", "chinese": "儿童区"},
                    {"pinyin": "xìn xī zhōng xīn", "chinese": "信息中心"},
                    {"pinyin": "zhì xún tái", "chinese": "咨询台"}
                ]
            },
            "邮局": {
                "core": [
                    {"pinyin": "yóu jú", "chinese": "邮局"},
                    {"pinyin": "yóu dí yuán", "chinese": "邮递员"},
                    {"pinyin": "yóu zhèng", "chinese": "邮政"},
                    {"pinyin": "yì wù yuán", "chinese": "业务员"},
                    {"pinyin": "fēn jiǎn yuán", "chinese": "分拣员"}
                ],
                "items": [
                    {"pinyin": "xìn fēng", "chinese": "信封"},
                    {"pinyin": "yóu piào", "chinese": "邮票"},
                    {"pinyin": "mìng xìn piàn", "chinese": "明信片"},
                    {"pinyin": "bāo guǒ", "chinese": "包裹"},
                    {"pinyin": "kuài dì", "chinese": "快递"},
                    {"pinyin": "yóu chāi", "chinese": "邮戳"},
                    {"pinyin": "xìn xiāng", "chinese": "信箱"},
                    {"pinyin": "guà hào hào", "chinese": "挂号号"}
                ],
                "environment": [
                    {"pinyin": "yíng yè tīng", "chinese": "营业厅"},
                    {"pinyin": "yíng yè chuāng kǒu", "chinese": "营业窗口"},
                    {"pinyin": "děng dài qū", "chinese": "等待区"},
                    {"pinyin": "cái liào qū", "chinese": "材料区"},
                    {"pinyin": "zì zhù jì", "chinese": "自助机"}
                ]
            },
            "银行": {
                "core": [
                    {"pinyin": "yín háng", "chinese": "银行"},
                    {"pinyin": "guì yuán", "chinese": "柜员"},
                    {"pinyin": "jīng lǐ", "chinese": "经理"},
                    {"pinyin": "bǎo ān", "chinese": "保安"},
                    {"pinyin": "kè hù", "chinese": "客户"}
                ],
                "items": [
                    {"pinyin": "cún kuǎn", "chinese": "存款"},
                    {"pinyin": "qǔ kuǎn", "chinese": "取款"},
                    {"pinyin": "zhuǎn zhàng", "chinese": "转账"},
                    {"pinyin": "huì kuǎn", "chinese": "汇款"},
                    {"pinyin": "xìn yòng kǎ", "chinese": "信用卡"},
                    {"pinyin": "chǔ xù kǎ", "chinese": "储蓄卡"},
                    {"pinyin": "yín háng kǎ", "chinese": "银行卡"},
                    {"pinyin": "píng tāi jī", "chinese": "平板机"}
                ],
                "environment": [
                    {"pinyin": "yíng yè dà tīng", "chinese": "营业大厅"},
                    {"pinyin": "guì yuán chuāng kǒu", "chinese": "柜员窗口"},
                    {"pinyin": "děng hào jī", "chinese": "叫号机"},
                    {"pinyin": "ATM jī", "chinese": "ATM机"},
                    {"pinyin": "yè wù bàn lǐ tái", "chinese": "业务办理台"}
                ]
            },
            "餐厅": {
                "core": [
                    {"pinyin": "cān tīng", "chinese": "餐厅"},
                    {"pinyin": "chú shī", "chinese": "厨师"},
                    {"pinyin": "fú wù yuán", "chinese": "服务员"},
                    {"pinyin": "diàn zhǎng", "chinese": "店长"},
                    {"pinyin": "shōu yín yuán", "chinese": "收银员"}
                ],
                "items": [
                    {"pinyin": "wǎn kuài", "chinese": "碗筷"},
                    {"pinyin": "pán zi", "chinese": "盘子"},
                    {"pinyin": "cān jīn", "chinese": "餐巾"},
                    {"pinyin": "cài dān", "chinese": "菜单"},
                    {"pinyin": "bēi zi", "chinese": "杯子"},
                    {"pinyin": "wèi shēng", "chinese": "卫生纸"},
                    {"pinyin": "jìng zi", "chinese": "镜子"},
                    {"pinyin": "chá jù", "chinese": "茶具"}
                ],
                "environment": [
                    {"pinyin": "cān zhuō", "chinese": "餐桌"},
                    {"pinyin": "yǐ zi", "chinese": "椅子"},
                    {"pinyin": "chú fáng", "chinese": "厨房"},
                    {"pinyin": "xǐ shǒu jiān", "chinese": "洗手间"},
                    {"pinyin": "cān jù guì", "chinese": "餐具柜"}
                ]
            },
            "市场": {
                "core": [
                    {"pinyin": "shì chǎng", "chinese": "市场"},
                    {"pinyin": "shāng fàn", "chinese": "商贩"},
                    {"pinyin": "mǎi zhǔ", "chinese": "买主"},
                    {"pinyin": "kè rén", "chinese": "客人"},
                    {"pinyin": "xiǎo fàn", "chinese": "小贩"}
                ],
                "items": [
                    {"pinyin": "cài", "chinese": "菜"},
                    {"pinyin": "shuǐ guǒ", "chinese": "水果"},
                    {"pinyin": "ròu", "chinese": "肉"},
                    {"pinyin": "yú", "chinese": "鱼"},
                    {"pinyin": "jī dàn", "chinese": "鸡蛋"},
                    {"pinyin": "dòu fu", "chinese": "豆腐"},
                    {"pinyin": "miàn tiáo", "chinese": "面条"},
                    {"pinyin": "dà mǐ", "chinese": "大米"}
                ],
                "environment": [
                    {"pinyin": "tàn zi", "chinese": "摊子"},
                    {"pinyin": "guì tái", "chinese": "柜台"},
                    {"pinyin": "chèng chèng", "chinese": "秤称"},
                    {"pinyin": "sù liào dài", "chinese": "塑料袋"},
                    {"pinyin": "lā jī", "chinese": "垃圾"}
                ]
            },
            "药店": {
                "core": [
                    {"pinyin": "yào diàn", "chinese": "药店"},
                    {"pinyin": "yào jì shī", "chinese": "药剂师"},
                    {"pinyin": "yào shī", "chinese": "药师"},
                    {"pinyin": "gòu wù yuán", "chinese": "购药员"},
                    {"pinyin": "zhǔ shěng", "chinese": "主任"}
                ],
                "items": [
                    {"pinyin": "yào", "chinese": "药"},
                    {"pinyin": "yào pín", "chinese": "药品"},
                    {"pinyin": "yào fāng", "chinese": "药房"},
                    {"pinyin": "yào pǐn", "chinese": "药片"},
                    {"pinyin": "jiāo náng", "chinese": "胶囊"},
                    {"pinyin": "zhēn jiǔ", "chinese": "针灸"},
                    {"pinyin": "xuè yā", "chinese": "血压"},
                    {"pinyin": "wēn dù jì", "chinese": "温度计"}
                ],
                "environment": [
                    {"pinyin": "yào guì", "chinese": "药柜"},
                    {"pinyin": "chú fāng", "chinese": "处方"},
                    {"pinyin": "jiǎn yàn", "chinese": "检验"},
                    {"pinyin": "huì yè", "chinese": "汇兑"},
                    {"pinyin": "yí tiáo", "chinese": "医保"}
                ]
            },
            "理发店": {
                "core": [
                    {"pinyin": "lǐ fà diàn", "chinese": "理发店"},
                    {"pinyin": "lǐ fà shī", "chinese": "理发师"},
                    {"pinyin": "měi róng shī", "chinese": "美容师"},
                    {"pinyin": "xǐ tóu", "chinese": "洗发"},
                    {"pinyin": "kè rén", "chinese": "客人"}
                ],
                "items": [
                    {"pinyin": "jiǎn zi", "chinese": "剪子"},
                    {"pinyin": "shū zi", "chinese": "梳子"},
                    {"pinyin": "fà diàn", "chinese": "发电器"},
                    {"pinyin": "xǐ fà shuǐ", "chinese": "洗发水"},
                    {"pinyin": "hù fà sù", "chinese": "护发素"},
                    {"pinyin": "rǎn fà jì", "chinese": "染发剂"},
                    {"pinyin": "chuǐ xíng", "chinese": "吹风机"},
                    {"pinyin": "jìng zi", "chinese": "镜子"}
                ],
                "environment": [
                    {"pinyin": "lǐ fà yǐ", "chinese": "理发椅"},
                    {"pinyin": "xǐ tóu chí", "chinese": "洗发椅"},
                    {"pinyin": "dēng", "chinese": "灯"},
                    {"pinyin": "guì tái", "chinese": "柜台"},
                    {"pinyin": "xǐ shǒu chí", "chinese": "洗手池"}
                ]
            },
            "花店": {
                "core": [
                    {"pinyin": "huā diàn", "chinese": "花店"},
                    {"pinyin": "huā jìng", "chinese": "花匠"},
                    {"pinyin": "sòng huà yuán", "chinese": "送花员"},
                    {"pinyin": "bāo huā", "chinese": "包花"},
                    {"pinyin": "kè rén", "chinese": "客人"}
                ],
                "items": [
                    {"pinyin": "huā", "chinese": "花"},
                    {"pinyin": "méi guī", "chinese": "玫瑰"},
                    {"pinyin": "bǎi hé", "chinese": "百合"},
                    {"pinyin": "kàng jùn huā", "chinese": "康乃馨"},
                    {"pinyin": "xiān rì kuí", "chinese": "向日葵"},
                    {"pinyin": "yù jīn xiāng", "chinese": "郁金香"},
                    {"pinyin": "làn huā", "chinese": "兰花"},
                    {"pinyin": "jú huā", "chinese": "菊花"}
                ],
                "environment": [
                    {"pinyin": "huā píng", "chinese": "花瓶"},
                    {"pinyin": "bāo zhuāng zhǐ", "chinese": "包装纸"},
                    {"pinyin": "sī dài", "chinese": "丝带"},
                    {"pinyin": "shuǐ tǒng", "chinese": "水桶"},
                    {"pinyin": "xiān huā", "chinese": "鲜花"}
                ]
            },
            "面包店": {
                "core": [
                    {"pinyin": "miàn bāo diàn", "chinese": "面包店"},
                    {"pinyin": "miàn bāo shī", "chinese": "面包师"},
                    {"pinyin": "kǎo xiāng", "chinese": "烤箱"},
                    {"pinyin": "miàn tuán", "chinese": "面团"},
                    {"pinyin": "kè rén", "chinese": "客人"}
                ],
                "items": [
                    {"pinyin": "miàn bāo", "chinese": "面包"},
                    {"pinyin": "dàn tā", "chinese": "蛋糕"},
                    {"pinyin": "xiāng sū bāng", "chinese": "香酥饼"},
                    {"pinyin": "mán tou", "chinese": "馒头"},
                    {"pinyin": "tián pǐn", "chinese": "甜饼"},
                    {"pinyin": "sān míng zhì", "chinese": "三明治"},
                    {"pinyin": "bǐng gān", "chinese": "饼干"},
                    {"pinyin": "máng guǒ bīng", "chinese": "芒果饼"}
                ],
                "environment": [
                    {"pinyin": "chú fáng", "chinese": "厨房"},
                    {"pinyin": "zhǎn shì tái", "chinese": "展示台"},
                    {"pinyin": "shōu yín tái", "chinese": "收银台"},
                    {"pinyin": "cān zhuō", "chinese": "餐桌"},
                    {"pinyin": "bīng gān hé", "chinese": "饼干盒"}
                ]
            },
            "服装店": {
                "core": [
                    {"pinyin": "fú zhuāng diàn", "chinese": "服装店"},
                    {"pinyin": "dǎo gòu yuán", "chinese": "导购员"},
                    {"pinyin": "diàn zhǎng", "chinese": "店长"},
                    {"pinyin": "kè rén", "chinese": "客人"},
                    {"pinyin": "shòu yín yuán", "chinese": "收银员"}
                ],
                "items": [
                    {"pinyin": "yī fu", "chinese": "衣服"},
                    {"pinyin": "kù zi", "chinese": "裤子"},
                    {"pinyin": "qún zi", "chinese": "裙子"},
                    {"pinyin": "xié zi", "chinese": "鞋子"},
                    {"pinyin": "bāo bāo", "chinese": "包包"},
                    {"pinyin": "mào zi", "chinese": "帽子"},
                    {"pinyin": "wéi jīn", "chinese": "围巾"},
                    {"pinyin": "shǒu tào", "chinese": "手套"}
                ],
                "environment": [
                    {"pinyin": "yī guì", "chinese": "衣柜"},
                    {"pinyin": "shì yī jiān", "chinese": "试衣间"},
                    {"pinyin": "jìng zi", "chinese": "镜子"},
                    {"pinyin": "guà yī jià", "chinese": "挂衣架"},
                    {"pinyin": "shōu yín tái", "chinese": "收银台"}
                ]
            },
            "水果店": {
                "core": [
                    {"pinyin": "shuǐ guǒ diàn", "chinese": "水果店"},
                    {"pinyin": "shuǐ guǒ fàn", "chinese": "水果贩"},
                    {"pinyin": "kè rén", "chinese": "客人"},
                    {"pinyin": "guì tái", "chinese": "柜台"},
                    {"pinyin": "chéng chèng", "chinese": "秤称"}
                ],
                "items": [
                    {"pinyin": "píng guǒ", "chinese": "苹果"},
                    {"pinyin": "xiāng jiāo", "chinese": "香蕉"},
                    {"pinyin": "jú zi", "chinese": "橘子"},
                    {"pinyin": "táo zi", "chinese": "桃子"},
                    {"pinyin": "lí zi", "chinese": "梨子"},
                    {"pinyin": "xī guā", "chinese": "西瓜"},
                    {"pinyin": "pú táo", "chinese": "葡萄"},
                    {"pinyin": "cǎo méi", "chinese": "草莓"}
                ],
                "environment": [
                    {"pinyin": "guǒ xiāng", "chinese": "果箱"},
                    {"pinyin": "shuǐ guǒ lán", "chinese": "水果篮"},
                    {"pinyin": "sù liào dài", "chinese": "塑料袋"},
                    {"pinyin": "dāo pán", "chinese": "刀盘"},
                    {"pinyin": "jià qián", "chinese": "价钱牌"}
                ]
            },
            "书店": {
                "core": [
                    {"pinyin": "shū diàn", "chinese": "书店"},
                    {"pinyin": "diàn zhǎng", "chinese": "店长"},
                    {"pinyin": "yíng yè yuán", "chinese": "营业员"},
                    {"pinyin": "kè rén", "chinese": "客人"},
                    {"pinyin": "shū jì", "chinese": "书籍"}
                ],
                "items": [
                    {"pinyin": "shū", "chinese": "书"},
                    {"pinyin": "kè běn", "chinese": "课本"},
                    {"pinyin": "tú huà shū", "chinese": "图画书"},
                    {"pinyin": "bǎi kē quán shū", "chinese": "百科全书"},
                    {"pinyin": "gù shì", "chinese": "故事"},
                    {"pinyin": "tóng huà", "chinese": "童话"},
                    {"pinyin": "cí diǎn", "chinese": "词典"},
                    {"pinyin": "bǐ jì běn", "chinese": "笔记本"}
                ],
                "environment": [
                    {"pinyin": "shū jià", "chinese": "书架"},
                    {"pinyin": "cān zhuō", "chinese": "餐桌"},
                    {"pinyin": "yuè lǎn qū", "chinese": "阅览区"},
                    {"pinyin": "shōu yín tái", "chinese": "收银台"},
                    {"pinyin": "zhǎn shì tái", "chinese": "展示台"}
                ]
            },
            "电影院": {
                "core": [
                    {"pinyin": "diàn yǐng yuàn", "chinese": "电影院"},
                    {"pinyin": "fàng yìng shī", "chinese": "放映师"},
                    {"pinyin": "jiǎn piào yuán", "chinese": "检票员"},
                    {"pinyin": "guǎn lǐ yuán", "chinese": "管理员"},
                    {"pinyin": "guān zhòng", "chinese": "观众"}
                ],
                "items": [
                    {"pinyin": "diàn yǐng", "chinese": "电影"},
                    {"pinyin": "piào", "chinese": "票"},
                    {"pinyin": "mǐ huā", "chinese": "米花"},
                    {"pinyin": "kě lè", "chinese": "可乐"},
                    {"pinyin": "bào mǐ huā", "chinese": "爆米花"},
                    {"pinyin": "yǎn jìng", "chinese": "眼镜"},
                    {"pinyin": "diàn yǐng piào", "chinese": "电影票"},
                    {"pinyin": "3D yǎn jìng", "chinese": "3D眼镜"}
                ],
                "environment": [
                    {"pinyin": "fàng yìng tīng", "chinese": "放映厅"},
                    {"pinyin": "děng dài qū", "chinese": "等待区"},
                    {"pinyin": "xǐ shǒu jiān", "chinese": "洗手间"},
                    {"pinyin": "xiū xi qū", "chinese": "休息区"},
                    {"pinyin": "guàng gào pái", "chinese": "广告牌"}
                ]
            },
            "游泳池": {
                "core": [
                    {"pinyin": "yóu yǒng chí", "chinese": "游泳池"},
                    {"pinyin": "jiào liàn yuán", "chinese": "教练员"},
                    {"pinyin": "shēng wán yuán", "chinese": "救生员"},
                    {"pinyin": "yóu yǒng zhě", "chinese": "游泳者"},
                    {"pinyin": "guān zhòng", "chinese": "观众"}
                ],
                "items": [
                    {"pinyin": "yǒng yī", "chinese": "泳衣"},
                    {"pinyin": "yǒng kuí", "chinese": "泳圈"},
                    {"pinyin": "yǒng jìng", "chinese": "泳镜"},
                    {"pinyin": "fú bǎn", "chinese": "浮板"},
                    {"pinyin": "qì dǎn", "chinese": "气垫"},
                    {"pinyin": "shuǐ qiāng", "chinese": "水枪"},
                    {"pinyin": "tà bǎn", "chinese": "踏板"},
                    {"pinyin": "gǎn gǔn", "chinese": "滚筒"}
                ],
                "environment": [
                    {"pinyin": "gèng yī shì", "chinese": "更衣室"},
                    {"pinyin": "chú yù shì", "chinese": "储物室"},
                    {"pinyin": "shōu yín tái", "chinese": "收银台"},
                    {"pinyin": "xiū xi qū", "chinese": "休息区"},
                    {"pinyin": "guǎng gào pái", "chinese": "公告牌"}
                ]
            },
            "消防站": {
                "core": [
                    {"pinyin": "xiāo fáng zhàn", "chinese": "消防站"},
                    {"pinyin": "xiāo fáng yuán", "chinese": "消防员"},
                    {"pinyin": "xiāo fáng guǎn", "chinese": "消防官"},
                    {"pinyin": "jià shǐ yuán", "chinese": "驾驶员"},
                    {"pinyin": "zhǐ huī yuán", "chinese": "指挥员"}
                ],
                "items": [
                    {"pinyin": "xiāo fáng chē", "chinese": "消防车"},
                    {"pinyin": "xiāo fáng shuǐ qiāng", "chinese": "消防水枪"},
                    {"pinyin": "miè huǒ qì", "chinese": "灭火器"},
                    {"pinyin": "xiāo fáng dǎo", "chinese": "消防刀"},
                    {"pinyin": "yǎn wù miàn zhào", "chinese": "烟雾面罩"},
                    {"pinyin": "fáng hū yī", "chinese": "防护衣"},
                    {"pinyin": "shuǐ lóng", "chinese": "水龙"},
                    {"pinyin": "jǐng dí", "chinese": "警笛"}
                ],
                "environment": [
                    {"pinyin": "xiāo fáng tíng", "chinese": "消防亭"},
                    {"pinyin": "xùn liàn chǎng", "chinese": "训练场"},
                    {"pinyin": "jǐng bào qì", "chinese": "警报器"},
                    {"pinyin": "xiāo fáng diàn", "chinese": "消防店"},
                    {"pinyin": "jǐng diān", "chinese": "警点"}
                ]
            },
            "邮筒": {
                "core": [
                    {"pinyin": "yóu tǒng", "chinese": "邮筒"},
                    {"pinyin": "yóu zhèng xì tǒng", "chinese": "邮政系统"},
                    {"pinyin": "yóu di", "chinese": "邮递"},
                    {"pinyin": "xìn jiàn", "chinese": "信件"},
                    {"pinyin": "yóu zōu", "chinese": "邮走"}
                ],
                "items": [
                    {"pinyin": "xìn fēng", "chinese": "信封"},
                    {"pinyin": "yóu piào", "chinese": "邮票"},
                    {"pinyin": "míng xìn piàn", "chinese": "明信片"},
                    {"pinyin": "xìn jiān", "chinese": "信笺"},
                    {"pinyin": "gān bǐ", "chinese": "钢笔"},
                    {"pinyin": "yuán zhū bǐ", "chinese": "圆珠笔"},
                    {"pinyin": "yìn zhāng", "chinese": "印章"},
                    {"pinyin": "xiāng pí", "chinese": "信皮"}
                ],
                "environment": [
                    {"pinyin": "lù biāo", "chinese": "路标"},
                    {"pinyin": "jiē tóu", "chinese": "街头"},
                    {"pinyin": "shāng pù", "chinese": "商铺"},
                    {"pinyin": "xiāo qū", "chinese": "小区"},
                    {"pinyin": "xué xiào", "chinese": "学校"}
                ]
            },
            "医院": {
                "core": [
                    {"pinyin": "yī shēng", "chinese": "医生"},
                    {"pinyin": "hù shì", "chinese": "护士"},
                    {"pinyin": "bìng rén", "chinese": "病人"},
                    {"pinyin": "bìng chuáng", "chinese": "病床"},
                    {"pinyin": "yī liáo", "chinese": "医疗"}
                ],
                "items": [
                    {"pinyin": "yào", "chinese": "药"},
                    {"pinyin": "yī piàn", "chinese": "药片"},
                    {"pinyin": "shè wēn jì", "chinese": "体温计"},
                    {"pinyin": "tīng zhěn qì", "chinese": "听诊器"},
                    {"pinyin": "zhēn tóu", "chinese": "针头"},
                    {"pinyin": "mián qiú", "chinese": "棉球"},
                    {"pinyin": "yào shuǐ", "chinese": "药水"},
                    {"pinyin": "chuān dān", "chinese": "穿单"}
                ],
                "environment": [
                    {"pinyin": "zhěn suǒ", "chinese": "诊所"},
                    {"pinyin": "guà hào chù", "chinese": "挂号处"},
                    {"pinyin": "jǐ jiù chē", "chinese": "急救车"},
                    {"pinyin": "yào xiāng", "chinese": "药箱"},
                    {"pinyin": "bìng fáng", "chinese": "病房"}
                ]
            },
            "公园": {
                "core": [
                    {"pinyin": "lǜ huà", "chinese": "绿化"},
                    {"pinyin": "huā yuán", "chinese": "花园"},
                    {"pinyin": "yóu lè", "chinese": "游乐"},
                    {"pinyin": "xiū xi", "chinese": "休息"},
                    {"pinyin": "guǎn lǐ", "chinese": "管理"}
                ],
                "items": [
                    {"pinyin": "huā", "chinese": "花"},
                    {"pinyin": "shù", "chinese": "树"},
                    {"pinyin": "cǎo", "chinese": "草"},
                    {"pinyin": "qiū qiān", "chinese": "秋千"},
                    {"pinyin": "huá tī", "chinese": "滑梯"},
                    {"pinyin": "mǎ", "chinese": "马"},
                    {"pinyin": "niǎo", "chinese": "鸟"},
                    {"pinyin": "hú dié", "chinese": "蝴蝶"}
                ],
                "environment": [
                    {"pinyin": "cháng yǐ", "chinese": "长椅"},
                    {"pinyin": "xiǎo lù", "chinese": "小路"},
                    {"pinyin": "hú", "chinese": "湖"},
                    {"pinyin": "qiáo", "chinese": "桥"},
                    {"pinyin": "shí zǐ", "chinese": "石子"}
                ]
            },
            "学校": {
                "core": [
                    {"pinyin": "lǎo shī", "chinese": "老师"},
                    {"pinyin": "xué shēng", "chinese": "学生"},
                    {"pinyin": "jiào shì", "chinese": "教室"},
                    {"pinyin": "xué xiào", "chinese": "学校"},
                    {"pinyin": "jiào xué", "chinese": "教学"}
                ],
                "items": [
                    {"pinyin": "zhuō zi", "chinese": "桌子"},
                    {"pinyin": "yǐ zi", "chinese": "椅子"},
                    {"pinyin": "hēi bǎn", "chinese": "黑板"},
                    {"pinyin": "fěn bǐ", "chinese": "粉笔"},
                    {"pinyin": "shū", "chinese": "书"},
                    {"pinyin": "bǐ", "chinese": "笔"},
                    {"pinyin": "zuò yè", "chinese": "作业"},
                    {"pinyin": "kè běn", "chinese": "课本"}
                ],
                "environment": [
                    {"pinyin": "cāo chǎng", "chinese": "操场"},
                    {"pinyin": "tú shū guǎn", "chinese": "图书馆"},
                    {"pinyin": "shí táng", "chinese": "食堂"},
                    {"pinyin": "xiào mén", "chinese": "校门"},
                    {"pinyin": "lóu", "chinese": "楼"}
                ]
            },
            "动物园": {
                "core": [
                    {"pinyin": "dòng wù", "chinese": "动物"},
                    {"pinyin": "sì yǎng", "chinese": "饲养"},
                    {"pinyin": "xùn liàn", "chinese": "训练"},
                    {"pinyin": "bǎo hù", "chinese": "保护"},
                    {"pinyin": "kē xué", "chinese": "科学"}
                ],
                "items": [
                    {"pinyin": "lǎo hǔ", "chinese": "老虎"},
                    {"pinyin": "shī zi", "chinese": "狮子"},
                    {"pinyin": "dà xiàng", "chinese": "大象"},
                    {"pinyin": "hóu zi", "chinese": "猴子"},
                    {"pinyin": "xióng māo", "chinese": "熊猫"},
                    {"pinyin": "cháng jǐng lù", "chinese": "长颈鹿"},
                    {"pinyin": "niǎo", "chinese": "鸟"},
                    {"pinyin": "yú", "chinese": "鱼"}
                ],
                "environment": [
                    {"pinyin": "lóng zi", "chinese": "笼子"},
                    {"pinyin": "chí zi", "chinese": "池子"},
                    {"pinyin": "cǎo dì", "chinese": "草地"},
                    {"pinyin": "shuǐ chí", "chinese": "水池"},
                    {"pinyin": "shí miàn", "chinese": "石面"}
                ]
            },
            "交通": {
                "core": [
                    {"pinyin": "jiāo tōng", "chinese": "交通"},
                    {"pinyin": "ān quán", "chinese": "安全"},
                    {"pinyin": "guī zé", "chinese": "规则"},
                    {"pinyin": "jíng chá", "chinese": "警察"},
                    {"pinyin": "lù dēng", "chinese": "路灯"}
                ],
                "items": [
                    {"pinyin": "qì chē", "chinese": "汽车"},
                    {"pinyin": "zì xíng chē", "chinese": "自行车"},
                    {"pinyin": "gōng gòng qì chē", "chinese": "公共汽车"},
                    {"pinyin": "chū zū chē", "chinese": "出租车"},
                    {"pinyin": "huǒ chē", "chinese": "火车"},
                    {"pinyin": "fēi jī", "chinese": "飞机"},
                    {"pinyin": "lún chuán", "chinese": "轮船"},
                    {"pinyin": "dì tiě", "chinese": "地铁"}
                ],
                "environment": [
                    {"pinyin": "mǎ lù", "chinese": "马路"},
                    {"pinyin": "rén xíng dào", "chinese": "人行道"},
                    {"pinyin": "jiāo tōng dēng", "chinese": "交通灯"},
                    {"pinyin": "zhàn pái", "chinese": "站牌"},
                    {"pinyin": "qiáo liáng", "chinese": "桥梁"}
                ]
            }
        };
    }

    // 获取所有主题
    getThemes() {
        return Object.keys(this.vocabularyData);
    }

    // 获取指定主题的词汇
    getVocabulary(theme) {
        if (!this.vocabularyData || !this.vocabularyData[theme]) {
            return null;
        }
        return this.vocabularyData[theme];
    }

    // 格式化词汇列表为字符串
    formatVocabulary(theme) {
        const vocab = this.getVocabulary(theme);
        if (!vocab) {
            return '';
        }

        let formatted = '';

        // 核心角色与设施
        if (vocab.core && vocab.core.length > 0) {
            formatted += vocab.core.map(item =>
                `${item.pinyin} ${item.chinese}`
            ).join(', ');
        }

        // 常见物品/工具
        if (vocab.items && vocab.items.length > 0) {
            if (formatted) formatted += '\n';
            formatted += vocab.items.map(item =>
                `${item.pinyin} ${item.chinese}`
            ).join(', ');
        }

        // 环境与装饰
        if (vocab.environment && vocab.environment.length > 0) {
            if (formatted) formatted += '\n';
            formatted += vocab.environment.map(item =>
                `${item.pinyin} ${item.chinese}`
            ).join(', ');
        }

        return formatted;
    }

    // 生成详细的词汇分类字符串
    generateDetailedVocabulary(theme) {
        const vocab = this.getVocabulary(theme);
        if (!vocab) {
            return {
                core: '',
                items: '',
                environment: ''
            };
        }

        const result = {
            core: '',
            items: '',
            environment: ''
        };

        // 核心角色与设施
        if (vocab.core && vocab.core.length > 0) {
            result.core = vocab.core.map(item =>
                `${item.chinese}(${item.pinyin})`
            ).join('、');
        }

        // 常见物品/工具
        if (vocab.items && vocab.items.length > 0) {
            result.items = vocab.items.map(item =>
                `${item.chinese}(${item.pinyin})`
            ).join('、');
        }

        // 环境与装饰
        if (vocab.environment && vocab.environment.length > 0) {
            result.environment = vocab.environment.map(item =>
                `${item.chinese}(${item.pinyin})`
            ).join('、');
        }

        return result;
    }

    // 获取词汇总数
    getVocabularyCount(theme) {
        const vocab = this.getVocabulary(theme);
        if (!vocab) {
            return 0;
        }

        let count = 0;
        if (vocab.core) count += vocab.core.length;
        if (vocab.items) count += vocab.items.length;
        if (vocab.environment) count += vocab.environment.length;

        return count;
    }

    // 显示错误信息
    showError(message) {
        // 创建一个自定义事件来通知错误
        const errorEvent = new CustomEvent('vocabularyError', {
            detail: { message }
        });
        document.dispatchEvent(errorEvent);
    }
}

// 创建全局词汇管理器实例
const vocabularyManager = new VocabularyManager();