
// ═══════════════════════════════════════════
// 1. STATIC DATA
// ═══════════════════════════════════════════

const CATS = [
  { id:'kitchen',   label:'橱柜',     icon:'🍳' },
  { id:'wardrobe',  label:'衣柜',     icon:'👔' },
  { id:'bookshelf', label:'书柜',     icon:'📚' },
  { id:'tv',        label:'电视柜',   icon:'📺' },
  { id:'shoe',      label:'鞋柜',     icon:'👟' },
  { id:'tatami',    label:'榻榻米',   icon:'🪟' },
  { id:'wine',      label:'酒柜',     icon:'🍷' },
  { id:'bathroom',  label:'卫浴柜',   icon:'🚿' },
  { id:'other',     label:'其他',     icon:'📏' },
  { id:'fav',       label:'收藏',     icon:'⭐' },
];

const DIM_DATA = [
  { id:'k1',  cat:'kitchen', name:'地柜深度',         dim:'550-600',    note:'含门板，背板不计', tip:'标准进深560mm最常用，是否装洗碗机/拉篮要提前确认' },
  { id:'k2',  cat:'kitchen', name:'地柜高度',         dim:'800-900',    note:'含踢脚板+台面', tip:'含台面总高850mm最标准，身高较高可做到880-900' },
  { id:'k3',  cat:'kitchen', name:'吊柜深度',         dim:'300-350',    note:'建议350mm', tip:'超过350mm容易碰头，350mm可放大部分餐盘' },
  { id:'k4',  cat:'kitchen', name:'吊柜高度',         dim:'600-800',    note:'含门板', tip:'800mm可放两层层板，600mm适合小厨房' },
  { id:'k5',  cat:'kitchen', name:'吊柜距台面',       dim:'700-750',    note:'', tip:'750mm最标准，可用大号锅具；700mm适合小户型' },
  { id:'k6',  cat:'kitchen', name:'高柜深度',         dim:'550-600',    note:'与地柜深度一致', tip:'嵌入式电器需看说明书预留散热缝' },
  { id:'k7',  cat:'kitchen', name:'岛台高度',         dim:'900-950',    note:'', tip:'950mm操作更舒适（略高于地柜），可做高低差' },
  { id:'k8',  cat:'kitchen', name:'过道宽度(单侧操作)',dim:'900-1200',  note:'过道', tip:'950mm是及格线，厨房窄了很痛苦' },
  { id:'k9',  cat:'kitchen', name:'过道宽度(双侧操作)',dim:'1200-1500',note:'U型/双一字', tip:'1400mm最舒适，两人同时操作不拥挤' },
  { id:'k10', cat:'kitchen', name:'操作台高度',       dim:'800-900',    note:'身高÷2+50mm', tip:'身高÷2+50mm 是黄金公式，洗菜区可略高' },
  { id:'k11', cat:'kitchen', name:'踢脚板高度',       dim:'100-120',    note:'', tip:'120mm可放标准扫拖机器人' },
  { id:'k12', cat:'kitchen', name:'台面厚度',         dim:'12-20',      note:'石英石/岩板', tip:'石英石15mm最常见，岩板12mm需打底' },
  { id:'k13', cat:'kitchen', name:'油烟机距灶台',     dim:'650-750',    note:'', tip:'侧吸650mm，顶吸750mm效果最佳' },
  { id:'k14', cat:'kitchen', name:'拉篮宽度',         dim:'150/300/400/450/600/900', note:'多种规格', tip:'450mm和600mm是常用规格，先选拉篮后做柜体' },
  { id:'w1',  cat:'wardrobe', name:'柜体深度(平开门)',dim:'550-600',    note:'含门板', tip:'580mm最常用，挂衣不关门' },
  { id:'w2',  cat:'wardrobe', name:'柜体深度(移门)',  dim:'580-620',    note:'含轨道', tip:'考虑轨道占用，移门比平开门深30-40mm' },
  { id:'w3',  cat:'wardrobe', name:'短衣区高度',      dim:'850-900',    note:'T恤/衬衫', tip:'860mm可挂大部分短衣' },
  { id:'w4',  cat:'wardrobe', name:'长衣区高度',      dim:'1300-1500',  note:'连衣裙/风衣', tip:'1400mm可挂大多数女士长裙' },
  { id:'w5',  cat:'wardrobe', name:'叠放区高度',      dim:'300-400',    note:'', tip:'350mm可放标准叠好的衣物' },
  { id:'w6',  cat:'wardrobe', name:'抽屉高度',        dim:'150-200',    note:'', tip:'180mm最舒适，不宜超过200mm' },
  { id:'w7',  cat:'wardrobe', name:'被褥区高度',      dim:'400-550',    note:'顶部', tip:'500mm可存放标准冬被' },
  { id:'w8',  cat:'wardrobe', name:'裤架高度',        dim:'600-800',    note:'', tip:'700mm可挂标准西裤不外露' },
  { id:'w9',  cat:'wardrobe', name:'挂衣杆距上层板',  dim:'40-60',      note:'', tip:'50mm刚好，方便取挂衣架' },
  { id:'b1',  cat:'bookshelf', name:'柜体深度',       dim:'280-350',    note:'', tip:'300mm可放大部分书，320mm更宽裕' },
  { id:'b2',  cat:'bookshelf', name:'层高(普通书)',   dim:'280-320',    note:'32开/16开', tip:'300mm通吃大部分书籍' },
  { id:'b3',  cat:'bookshelf', name:'层高(大书/杂志)',dim:'350-400',    note:'画册/A4杂志', tip:'A4竖放需380mm，横放需280mm' },
  { id:'b4',  cat:'bookshelf', name:'层板厚度',        dim:'16-25',     note:'', tip:'跨度≤800mm用18mm，跨空大需25mm或加拉直器' },
  { id:'b5',  cat:'bookshelf', name:'跨空最大宽度',    dim:'800-900',   note:'需加厚层板', tip:'超过900mm层板会弯，必须加拉直器或做25mm' },
  { id:'t1',  cat:'tv', name:'柜体深度',          dim:'350-450',  note:'', tip:'400mm最常用，兼顾收纳和比例' },
  { id:'t2',  cat:'tv', name:'电视中心距地(坐视)',dim:'1100-1200',note:'客厅', tip:'沙发坐高约400mm，视线平视中心高度约1150mm' },
  { id:'t3',  cat:'tv', name:'电视中心距地(卧视)',dim:'1300-1400',note:'主卧', tip:'躺着视线偏高，中心约1350mm' },
  { id:'t4',  cat:'tv', name:'柜体高度',          dim:'400-500',  note:'', tip:'450mm最标准，太低扫地机器人过不去' },
  { id:'t5',  cat:'tv', name:'长度范围',          dim:'1500-2400',note:'', tip:'电视柜长度比电视宽300-600mm，比例更协调' },
  { id:'s1',  cat:'shoe', name:'柜体深度(平放)',  dim:'300-350',  note:'', tip:'320mm可放45码鞋，340mm最舒适' },
  { id:'s2',  cat:'shoe', name:'柜体深度(斜放)',  dim:'200-250',  note:'省钱省空间', tip:'斜放层板角度约20°，适合玄关窄的情况' },
  { id:'s3',  cat:'shoe', name:'层高(拖鞋)',      dim:'120-150',  note:'', tip:'120mm刚刚好' },
  { id:'s4',  cat:'shoe', name:'层高(运动鞋)',    dim:'150-200',  note:'', tip:'180mm搞定老爹鞋，170mm放普通运动鞋' },
  { id:'s5',  cat:'shoe', name:'层高(短靴)',      dim:'250-350',  note:'', tip:'300mm可放标准短靴' },
  { id:'s6',  cat:'shoe', name:'层高(中长靴)',    dim:'400-500',  note:'', tip:'450mm可放大部分长靴，建议做活动层板' },
  { id:'s7',  cat:'shoe', name:'换鞋凳高度',      dim:'400-450',  note:'', tip:'420mm坐着换鞋最舒适' },
  { id:'s8',  cat:'shoe', name:'底部悬空',        dim:'150-200',  note:'放拖鞋', tip:'180mm可放标准拖鞋，方便日常换穿' },
  { id:'ta1', cat:'tatami', name:'地台高度(含储物)',dim:'350-450', note:'', tip:'400mm储物空间最大，过道配小台阶' },
  { id:'ta2', cat:'tatami', name:'常规尺寸',       dim:'2000×1800',note:'', tip:'宽度不超过2000mm（标准板材长度），长度按房间定' },
  { id:'ta3', cat:'tatami', name:'升降桌高度',     dim:'450-500',  note:'', tip:'下降后与地台平齐，桌腿选双交叉更稳' },
  { id:'ta4', cat:'tatami', name:'升降桌尺寸',     dim:'600-800×800-1000',note:'', tip:'800x800mm坐4人刚好' },
  { id:'ta5', cat:'tatami', name:'草垫厚度',       dim:'25-35',    note:'推荐30mm', tip:'30mm坐感最佳，太薄硌人太厚翻不起' },
  { id:'wi1', cat:'wine', name:'柜体深度',      dim:'300-350',  note:'', tip:'标准红酒瓶深度约300mm' },
  { id:'wi2', cat:'wine', name:'红酒格(单瓶)',  dim:'80-100',   note:'', tip:'90mm可放标准红酒，100mm更宽裕' },
  { id:'wi3', cat:'wine', name:'红酒格(双瓶)',  dim:'160-200',  note:'', tip:'180mm可放标准红酒两瓶' },
  { id:'wi4', cat:'wine', name:'酒杯架高度',    dim:'250-350',  note:'', tip:'300mm挂高脚杯最合适' },
  { id:'wi5', cat:'wine', name:'层板厚度',      dim:'16-20',    note:'', tip:'红酒格需18mm以上，防止断裂' },
  { id:'ba1', cat:'bathroom', name:'柜体深度',     dim:'450-550',  note:'', tip:'500mm最标准，≤450mm盆会溅水' },
  { id:'ba2', cat:'bathroom', name:'柜体高度(含台面)',dim:'800-900',note:'', tip:'850mm含台盆，身高较高可做到900mm' },
  { id:'ba3', cat:'bathroom', name:'镜柜深度',     dim:'120-200',  note:'', tip:'150mm刚好不碰头，可放标准洗漱杯' },
  { id:'ba4', cat:'bathroom', name:'镜柜高度',     dim:'600-800',  note:'', tip:'700mm照上半身，标准镜前灯位高度1850mm' },
  { id:'o1', cat:'other', name:'餐桌高度',      dim:'720-760',   note:'', tip:'750mm最常用，配合餐椅落差约300mm' },
  { id:'o2', cat:'other', name:'餐椅高度',      dim:'420-450',   note:'', tip:'450mm配750mm餐桌最标准' },
  { id:'o3', cat:'other', name:'书桌高度',      dim:'720-760',   note:'', tip:'750mm标准，身高较高可加书桌增高架' },
  { id:'o4', cat:'other', name:'书桌深度',      dim:'500-600',   note:'', tip:'550mm可放电脑+正常写字' },
  { id:'o5', cat:'other', name:'床(标准)',      dim:'2000×1800/1500/1350/1200', note:'长×宽', tip:'长度2000mm固定，宽度按房型选' },
  { id:'o6', cat:'other', name:'过道宽度',      dim:'≥800',       note:'非厨房区', tip:'800mm勉强过人，舒适≥900mm' },
  { id:'o7', cat:'other', name:'转角柜五金可用', dim:'≥500',       note:'', tip:'飞碟/小怪物转角拉篮需≥500mm内空' },
];

// Materials data
const MAT_CATS = [
  { id:'panel',      label:'板材', icon:'🪵' },
  { id:'edging',     label:'封边', icon:'📐' },
  { id:'hardware',   label:'五金', icon:'🔩' },
  { id:'countertop', label:'台面', icon:'🪨' },
];
const MAT_DATA = [
  // 板材
  { id:'mp1', cat:'panel', name:'颗粒板', spec:'厚度18mm / 2440×1220', pros:['价格实惠','握钉力好','不易变形','环保ENF级可选'], cons:['防潮一般','不能铣型','断面粗糙'], uses:'柜体首选，平板柜门', price:1, desc:'最主流的柜体板材，木屑加胶热压而成，性价比最高。建议柜体用18mm，背板用5/9mm。' },
  { id:'mp2', cat:'panel', name:'中纤板(MDF)', spec:'厚度5-25mm / 2440×1220', pros:['可铣型做造型','表面细腻','适合烤漆/吸塑'], cons:['防潮差','握钉力不如颗粒板','较沉重'], uses:'造型柜门、吸塑/烤漆门板基材', price:2, desc:'密度板，适合做复杂造型门板。吸塑/烤漆门板都用MDF做基材。' },
  { id:'mp3', cat:'panel', name:'多层板(胶合板)', spec:'厚度9-25mm / 2440×1220', pros:['防潮好','结构稳定','承重力强'], cons:['价格较高','表面平整度不如颗粒板'], uses:'厨卫柜体、台面基层、承重隔板', price:2, desc:'木片纵横交错压制，防潮性优于颗粒板。适合厨房、卫浴等潮湿环境。' },
  { id:'mp4', cat:'panel', name:'生态板(免漆板)', spec:'厚度18mm / 2440×1220', pros:['表面免漆','花色丰富','施工方便'], cons:['易变形','基层参差不齐','大品牌贵'], uses:'衣柜柜体、现场打制', price:2, desc:'又称免漆板，表面贴三聚氰胺纸。手工打制常用，定制工厂较少用。' },
  { id:'mp5', cat:'panel', name:'实木指接板', spec:'厚度15-18mm / 2440×1220', pros:['环保性好','天然木纹','可铣型'], cons:['易变形开裂','价格高','色差大'], uses:'柜门、见光面、实木家具', price:3, desc:'短板拼接成整板，用胶量比颗粒板少。适合追求天然效果的设计。' },
  { id:'mp6', cat:'panel', name:'原木(实木)', spec:'厚度可定制', pros:['最高端','天然质感','环保'], cons:['极贵','需养护','易受温湿度影响'], uses:'高端定制、中式/美式风格', price:3, desc:'纯天然木材加工，包括橡木、胡桃木、樱桃木等。需做伸缩缝处理。' },
  { id:'mp7', cat:'panel', name:'欧松板(OSB)', spec:'厚度9-25mm / 2440×1220', pros:['结构稳定','防潮好','环保','握钉力强'], cons:['表面粗糙需饰面','花色少','价格中上'], uses:'柜体、基层、背景墙造型', price:2, desc:'定向结构刨花板，大片木屑定向铺装热压。稳定性好，近年国内越来越流行。表面需贴饰面或做油漆。' },
  { id:'mp8', cat:'panel', name:'禾香板', spec:'厚度18mm / 2440×1220', pros:['MDI胶零甲醛','防潮好','秸秆环保'], cons:['价格较高','硬度高加工费力'], uses:'柜体、门板基材、婴儿房', price:2, desc:'以农作物秸秆为原料，MDI胶热压而成。主打零甲醛添加，环保卖点突出。硬度高，对刀具损耗大。' },
  { id:'mp9', cat:'panel', name:'PET板', spec:'厚度18mm / 2440×1220', pros:['肤感/高光可选','耐刮耐磨','抗指纹'], cons:['价格较高','易留手印(亮光)','颜色选择有限'], uses:'柜门面板、见光面', price:2, desc:'聚酯薄膜饰面板，表面覆PET膜。肤感PET手感极佳，高光PET亮度好。目前非常流行的门板材料。' },
  { id:'mp10', cat:'panel', name:'烤漆板', spec:'MDF基材+6道漆', pros:['色彩丰富','光泽度高','防水好','好清洁'], cons:['价格高','怕磕碰','需专业修复','工期长'], uses:'高端柜门、装饰面板', price:3, desc:'MDF基材经多次打磨、上漆、烘烤而成。可达高光或哑光效果，颜色任意定制。质感一流，但易磕伤。' },
  { id:'mp11', cat:'panel', name:'爱格板', spec:'厚度18mm / 2800×2070', pros:['尺寸超大(2.8m)','环保F****级','花色逼真'], cons:['价格高','防伪难辨','供货周期长'], uses:'一门到顶柜门、进口品质柜体', price:3, desc:'奥地利爱格集团生产的刨花板。花色设计引领行业，环保标准极高。2800mm超大板幅可做一门到顶。' },
  { id:'mp12', cat:'panel', name:'木工板(大芯板)', spec:'厚度15-18mm / 2440×1220', pros:['握钉力好','加工方便','现场可切割'], cons:['易变形','环保一般','板面平整度差'], uses:'手工打制柜体、门套基层、窗帘盒', price:1, desc:'实木条拼接为芯，两面贴薄木皮。传统手工打制常用。现在定制家具使用较少，但在施工基层和木工现场制作中仍广泛使用。' },
  { id:'mp13', cat:'panel', name:'铝蜂窝板', spec:'厚度18-25mm / 可定制', pros:['极轻','不变形','防潮极好','可做大板'], cons:['价格高','需专业加工','触感偏冷'], uses:'极简超高柜门、厨房卫浴柜门', price:3, desc:'铝蜂窝芯+两面铝板或饰面复合而成。极轻且不变形，可做2.7m以上超高门板。极简风高端首选，但价格不菲。' },
  // 封边
  { id:'me1', cat:'edging', name:'PVC封边', spec:'厚度0.4-2mm', pros:['价格最低','颜色选择多','技术成熟'], cons:['有胶线','耐热一般','可能脱落'], uses:'经济型柜体', price:1, desc:'最常见封边方式，胶水粘合。EVA热熔胶最普遍，PUR胶更牢固耐热。' },
  { id:'me2', cat:'edging', name:'ABS封边', spec:'厚度1-2mm', pros:['外观好','耐刮擦','环保'], cons:['价格较高','需专用设备'], uses:'标准/中高端柜体', price:2, desc:'比PVC更耐用，封边效果更美观。颜色比PVC更鲜艳光亮。' },
  { id:'me3', cat:'edging', name:'激光封边', spec:'厚度1-2mm', pros:['无缝效果','防水极佳','最高端'], cons:['价格贵','需专业设备','颜色选择少'], uses:'高端定制', price:3, desc:'通过激光融化封边带自带的功能层，无需胶水。效果最完美，但成本高。' },
  { id:'me4', cat:'edging', name:'EVA热熔封边', spec:'厚度0.4-1.5mm', pros:['价格最低','技术成熟','效率高'], cons:['有明显胶线','耐热差','容易开裂脱落'], uses:'经济型柜体、小厂加工', price:1, desc:'传统的热熔胶封边方式，通过EVA热熔胶加热熔化粘合。成本最低但胶线明显，耐热性差，时间长可能脱胶。' },
  { id:'me5', cat:'edging', name:'PUR封边', spec:'厚度0.4-2mm', pros:['胶线不明显','耐热耐湿','牢固度高'], cons:['需专用PUR胶机','价格中等'], uses:'中高端柜体、厨房卫浴柜', price:2, desc:'湿气固化反应型聚氨酯热熔胶封边。遇水蒸气反应固化，耐热耐潮性好。胶线比EVA美观，是升级主流选择。' },
  // 五金 - 铰链
  { id:'mh1', cat:'hardware', name:'全盖铰链(直弯)', spec:'开门角度100-165°', pros:['门板盖住柜体','外观整洁'], cons:[], uses:'左右侧有柜体板时', price:1, desc:'门板完全覆盖柜体侧板。最常用的铰链类型。' },
  { id:'mh2', cat:'hardware', name:'半盖铰链(中弯)', spec:'开门角度100-165°', pros:['两扇门共用一块侧板','节省空间'], cons:['门缝较大'], uses:'中间柜门对开', price:1, desc:'两扇门共用一块侧板，适合中间对开门设计。' },
  { id:'mh3', cat:'hardware', name:'内嵌铰链(大弯)', spec:'开门角度100-165°', pros:['门板在柜体内','极简风格'], cons:['柜内空间减少'], uses:'现代极简风', price:1, desc:'门板嵌入柜体内部，外观更简洁，但会稍微压缩内部空间。' },
  { id:'mh4', cat:'hardware', name:'大角度铰链', spec:'开门角度165-270°', pros:['门可完全打开','取物方便'], cons:['价格高','结构略复杂'], uses:'转角柜、特殊柜体', price:2, desc:'门可以开到165°甚至270°，适合转角柜、高柜等需要大开口的位置。' },
  // 五金 - 滑轨
  { id:'mh5', cat:'hardware', name:'三节轨滑轨', spec:'长度250-600mm / 承重20-35kg', pros:['价格实惠','抽拉顺滑','可全拉出'], cons:['承重有限','侧装占空间'], uses:'标准抽屉、普通储物抽屉', price:1, desc:'最主流的抽屉滑轨结构，性价比高。' },
  { id:'mh6', cat:'hardware', name:'托底轨', spec:'长度270-550mm / 承重30-45kg', pros:['承重好','静音','美观(看不见)'], cons:['价格高','需开槽安装'], uses:'厨房抽屉、重型抽屉', price:2, desc:'安装在抽屉底部，隐藏式设计。通常带阻尼，抽拉质感好。' },
  { id:'mh7', cat:'hardware', name:'骑马抽', spec:'高度可定制 / 承重40-80kg', pros:['承重极好','整体性强','带阻尼'], cons:['价格最高','需配合特定柜体'], uses:'橱柜重型抽屉、厨房拉篮', price:3, desc:'抽屉帮和滑轨一体式设计，承重极佳。百隆、海蒂诗是主流品牌。' },
  // 五金 - 配件
  { id:'mh8', cat:'hardware', name:'反弹器', spec:'按压式 / 弹簧型 / 磁吸型', pros:['实现无拉手设计','安装简单','价格低'], cons:['寿命有限(3-5万次)','手感不如拉手','故障率高(便宜款)'], uses:'无拉手柜门、极简/现代风格', price:1, desc:'按压弹出式开门五金。按一下门板自动弹开。极简风标配，建议选质量好的品牌。磁吸式比机械式更耐用。' },
  { id:'mh9', cat:'hardware', name:'拉直器', spec:'长度1.5-2.8m / 铝合金材质', pros:['防止超高门板变形','安装隐形','可调节'], cons:['需在门板开槽','增加成本'], uses:'一门到顶柜门(≥1.8m)', price:1, desc:'嵌入柜门背面的铝合金型材，通过调节螺丝矫正门板弯曲。超高柜门（超过1.8m）建议安装，否则易变形。' },
  { id:'mh10', cat:'hardware', name:'上翻气撑', spec:'长度200-400mm / 力度可调', pros:['上翻门省力','任意角度悬停','静音'], cons:['价格较高','需预留安装空间'], uses:'上翻吊柜门、高柜上翻门', price:2, desc:'利用压缩气体支撑门板向上翻起。带阻尼缓冲，关闭轻柔。常用在厨房吊柜上翻门，取物不用低头。' },
  { id:'mh11', cat:'hardware', name:'转角飞碟', spec:'直径700-900mm / 旋转式', pros:['充分利用转角空间','取物方便','承重好'], cons:['价格高','安装复杂','需精确尺寸'], uses:'厨房转角地柜', price:3, desc:'圆形层板可旋转拉出的转角五金。放在转角柜内，旋转拉出后取物方便。充分利用转角死角空间。' },
  { id:'mh12', cat:'hardware', name:'转角小怪物', spec:'宽度400-600mm / 拉篮式', pros:['转角拉篮','收纳能力强','滑动顺畅'], cons:['价格高','占用柜内空间','轨道需维护'], uses:'厨房转角柜、卫浴转角柜', price:2, desc:'安装在转角柜的拉篮式五金。通过联动机构将拉篮拉出，方便取放转角深处的物品。比飞碟容量更大。' },
  { id:'mh13', cat:'hardware', name:'挂衣杆', spec:'长度400-1200mm / 铝合金/不锈钢', pros:['必备配件','承重要求高','安装简单'], cons:['选不好会弯','杆径要合适'], uses:'衣柜挂衣区', price:1, desc:'衣柜挂衣区的横杆。推荐铝合金加厚或实木杆，杆径25-32mm。注意中间支撑间距不超过1m。' },
  { id:'mh18', cat:'hardware', name:'厨房拉篮', spec:'宽度300-900mm / 不锈钢/铝合金', pros:['收纳餐具调料','抽拉方便','沥水设计'], cons:['价格高','尺寸需提前定','易锈(铁质)'], uses:'橱柜地柜、高柜', price:2, desc:'安装在橱柜抽屉内的拉篮。常见有碗碟拉篮、调味拉篮、米箱等。需提前确定拉篮尺寸再做柜体，否则柜体做好装不上。' },
  { id:'mh19', cat:'hardware', name:'裤架', spec:'宽度400-900mm / 铝合金/不锈钢', pros:['裤子不起皱','收纳整齐','抽拉方便'], cons:['占空间','数量有限','价格不低'], uses:'衣柜裤架区', price:2, desc:'专门挂裤子的抽拉架。有折叠式（挂多）和抽拉式（取方便）两种。安装在抽屉上方或衣柜底部。' },
  { id:'mh20', cat:'hardware', name:'穿衣镜', spec:'高度1200-1600mm / 隐藏/翻转式', pros:['出门照镜子','不占空间','可旋转'], cons:['需要安装空间','质量差的会歪'], uses:'衣柜内抽拉、柜门后挂墙', price:2, desc:'安装在衣柜内或墙面的镜子。常见有抽拉式（藏在衣柜内）、旋转式、柜门后悬挂式。灯光搭配效果更好。' },
  { id:'mh21', cat:'hardware', name:'领带格/首饰格', spec:'尺寸100-400mm / 绒布/木质', pros:['小物分门别类','高端感','方便找'], cons:['占抽屉空间','格子固定不可调'], uses:'衣柜抽屉内配件', price:1, desc:'放在抽屉内的小格子，用来收纳领带、首饰、手表等小件物品。常见有绒布托盘式和木质分隔式。提升收纳精细度。' },
  // 五金 - 拉手
  { id:'mh14', cat:'hardware', name:'长条拉手', spec:'长度200-1200mm / 铝合金/不锈钢', pros:['拉感好','多种风格可选','适用性广'], cons:['可能会刮碰','极长款价高'], uses:'衣柜门、橱柜门、抽屉', price:1, desc:'广泛使用的拉手类型。从200mm到1200mm不等，风格涵盖现代、轻奢、北欧。现代风格常用600mm竖装' },
  { id:'mh15', cat:'hardware', name:'圆形/纽扣拉手', spec:'直径20-40mm / 金属/陶瓷/皮', pros:['小巧精致','不刮碰','款式多样'], cons:['抓握感不如长条','小柜门好用'], uses:'小柜门、抽屉、床头柜', price:1, desc:'经典小型拉手，圆形或方形。适合小柜门和抽屉。颜色有金色、黑色、银色、陶瓷白等。' },
  { id:'mh16', cat:'hardware', name:'皮质拉手', spec:'长度80-150mm / 真皮/超纤', pros:['触感温润','轻奢感','不刮碰'], cons:['不耐脏','寿命短','风格受限'], uses:'轻奢/现代风格的柜门、抽屉', price:2, desc:'用皮条制成的拉手，两端用金属件固定。触感温润有档次，搭配现代和轻奢风效果好。但皮质不耐油污。' },
  { id:'mh17', cat:'hardware', name:'隐形拉手', spec:'型材长度定制 / 铝合金/不锈钢', pros:['保持门板整体性','极简美观','可做槽式'], cons:['安装精度高','清理麻烦(槽内积灰)'], uses:'极简/现代风格柜门', price:2, desc:'嵌入柜门或柜体中的隐藏式拉手。常见有槽式(G型)、T型等。保持门板表面平整，极简风首选。' },
  { id:'mh22', cat:'hardware', name:'陶瓷拉手', spec:'长度30-120mm / 陶瓷', pros:['颜值高','手感温润','不氧化'], cons:['易碎','价格较高','风格受限'], uses:'美式/复古/法式风格柜门', price:2, desc:'陶瓷材质拉手，表面有釉面光泽。常见圆形和椭圆形。美式、法式、复古风中常用。易搭配但需避免碰撞。' },
  { id:'mh23', cat:'hardware', name:'贝壳拉手', spec:'直径20-35mm / 锌合金+电镀', pros:['精致光泽','颜值高','提升档次'], cons:['易氧化','价格高','风格局限'], uses:'轻奢/法式/欧式柜门', price:2, desc:'贝壳形状的拉手，表面电镀金色或银色。轻奢风和法式风格常用。精致小巧，适合抽屉和小柜门。' },
  { id:'mh24', cat:'hardware', name:'复古拉手', spec:'长度50-200mm / 黄铜/古铜', pros:['做旧质感','有韵味','黄铜耐用'], cons:['价格高','需要搭配','新装显旧'], uses:'美式/复古/新中式柜门', price:2, desc:'做旧处理的金属拉手，黄铜或古铜材质。故意做旧效果，和复古风、美式风、新中式很搭。会随着时间产生自然包浆。' },
  // 台面
  { id:'mc1', cat:'countertop', name:'石英石', spec:'厚度15/20mm', pros:['耐刮耐磨','好打理','性价比高'], cons:['接缝可见','不耐骤热','造型单一'], uses:'厨房台面首选', price:2, desc:'含量93%以上石英砂+树脂。15mm最常见，20mm更牢固。' },
  { id:'mc2', cat:'countertop', name:'岩板', spec:'厚度3-12mm', pros:['耐高温','耐刮','纹理逼真','超薄'], cons:['极贵','易崩边','需专业加工'], uses:'高端厨房/卫浴台面、墙面', price:3, desc:'由天然石粉高温烧制而成。性能优异但价格高，运输安装需专业团队。' },
  { id:'mc3', cat:'countertop', name:'不锈钢', spec:'厚度1.2-2.0mm', pros:['无缝拼接','耐高温','好打理'], cons:['容易刮花','冰冷感','家用感不强'], uses:'商用厨房、工业风', price:1, desc:'台面一体无缝，非常适合厨房操作。但容易留下刮痕。' },
  { id:'mc4', cat:'countertop', name:'亚克力(人造石)', spec:'厚度12-15mm', pros:['无缝拼接','可修复','造型自由','温润手感'], cons:['不耐刮','不耐高温','易变色'], uses:'异性台面、卫浴柜台面', price:2, desc:'杜邦可丽耐是代表。可以做各种异形造型，温润无冰冷感。' },
  { id:'mc5', cat:'countertop', name:'实木台面', spec:'厚度25-40mm / 指接或拼板', pros:['温暖质感','自然好看','可打磨翻新'], cons:['怕水怕油','需定期保养','容易留痕迹'], uses:'中岛台面、书桌、吧台', price:2, desc:'实木拼板制成的台面。橡木、胡桃木、柚木最常见。需涂刷木蜡油或清漆防水。适合中岛、吧台等干区。' },
  { id:'mc6', cat:'countertop', name:'防火板台面', spec:'厚度6-12mm / 密度板基材+贴面', pros:['价格很低','花色极多','耐热耐污'], cons:['怕水(边缘进水膨胀)','接缝明显','质感一般'], uses:'出租房、商业空间、临时厨房', price:1, desc:'在密度板基材上贴防火板（HPL）制成。价格低、花色多，但怕水怕潮，边缘进水会膨胀起皮。' },
  { id:'mc7', cat:'countertop', name:'陶瓷台面', spec:'厚度6-12mm / 高温烧制', pros:['耐高温','耐刮硬','纹理自然','好清洁'], cons:['重','易崩边','安装要求高','价格高'], uses:'高端厨房台面、卫浴台面', price:3, desc:'陶瓷薄板高温烧制而成。比岩板更耐高温，硬度极高。但很重，且边缘崩了很难修复。需专业安装。' },
  { id:'mc8', cat:'countertop', name:'天然大理石', spec:'厚度15-20mm / 需切割打磨', pros:['独一无二纹理','高级感','耐用好'], cons:['需定期密封','怕酸性液体','价格高','有辐射争议'], uses:'高端厨房台面、卫浴台面、窗台', price:3, desc:'天然石材，每一块纹理都不同。白色系（爵士白、雅士白）和灰色系最受欢迎。需定期密封保养，怕酸（柠檬汁、醋会腐蚀表面）。' },
];

// Price reference data
const PRICE_DATA = {
  kitchen:   { unit:'延米', econ:1200, std:2000, prem:3800, econL:'经济型', stdL:'标准型', premL:'高端型', icon:'🍳' },
  wardrobe:  { unit:'m²投影', econ:700, std:1200, prem:2500 },
  bookshelf: { unit:'m²投影', econ:600, std:1000, prem:1800 },
  tv:        { unit:'延米', econ:800, std:1400, prem:2600 },
  shoe:      { unit:'m²投影', econ:650, std:1100, prem:2000 },
  tatami:    { unit:'m²投影', econ:800, std:1300, prem:2200 },
  wine:      { unit:'延米', econ:900, std:1600, prem:3000 },
  bathroom:  { unit:'套', econ:1200, std:2200, prem:4000 },
};
const GRADE_KEYS = ['econ','std','prem'];
const GRADE_LABELS = ['经济型','标准型','高端型'];
const CAT_ICONS = { kitchen:'🍳', wardrobe:'👔', bookshelf:'📚', tv:'📺', shoe:'👟', tatami:'🪟', wine:'🍷', bathroom:'🚿', other:'📏' };
const CAT_LABELS = { kitchen:'橱柜', wardrobe:'衣柜', bookshelf:'书柜', tv:'电视柜', shoe:'鞋柜', tatami:'榻榻米', wine:'酒柜', bathroom:'卫浴柜', other:'其他' };

// Workflow data
const WF_STEPS = [
  {
    id:'measure', icon:'📏', label:'量尺',
    checks:['确认量尺时间并携带工具','画出房间平面草图','标注所有门窗/梁/柱位置','测量层高和梁下高度','拍摄现场照片不少于6张','确认客户需求初稿'],
    mistakes:['只量了尺寸没拍照片，回头忘记细节','没注意梁位导致柜体到现场装不下','窗口尺寸只量了外框忽略窗套','地砖/地板厚度没确认影响柜体高度'],
    tips:['量尺前微信发客户确认导航地址和时间','量完发一张现场全景照给客户，显得专业','标注完让客户确认签字，避免后期扯皮']
  },
  {
    id:'design', icon:'🎨', label:'出图',
    checks:['根据需求设计柜体布局','确认柜体深度/高度符合标准','标注尺寸并检查碰撞','确认五金配置方案','确认颜色和材质','发给客户审核并记录修改意见'],
    mistakes:['没确认电器尺寸直接留空，结果放不进','没考虑开门方向导致门打不开','颜色仅凭感觉选没打色卡','插座没避开导致柜体切板'],
    tips:['发方案时附带3D效果图更有说服力','标注标准尺寸和可调范围，显得专业','给方案时准备A/B方案让客户选']
  },
  {
    id:'quote', icon:'💰', label:'报价',
    checks:['计算板材用量并填写报价单','五金配件单价确认','台面/玻璃等外协件询价','运费和安装费计入','报给客户并解释明细','确认签约并收定金'],
    mistakes:['漏算运费安装费自己贴钱','五金用进口还是国产没说清后面扯皮','报价单没有有效期，材料一涨价就亏了','延米和投影面积没给客户解释清楚'],
    tips:['报价单要列明包含和不包含的项目','解释为什么价格有差异（板材/五金/台面）','定金比例写进合同，至少收30%']
  },
  {
    id:'order', icon:'🏭', label:'下单',
    checks:['根据最终图纸拆单','板材开料单核对无误','五金/配件清单确认','台面/玻璃下料图发送','确认交货时间','通知客户入场时间'],
    mistakes:['拆单漏了板件导致生产不全','颜色编号写错做出来不对','拉手/铰链数量算错','台面尺寸量错做短了'],
    tips:['拆单完自己过一遍总数：长+宽+块数','下单前发客户确认最终颜色和尺寸','跟工厂约定交货日期并留缓冲时间']
  },
  {
    id:'install', icon:'🔧', label:'安装',
    checks:['到货检查板材是否有破损','五金配件数量核对','安装前确认现场水电已完工','安装过程中监督质量','安装后检查柜门缝隙/水平','客户验收并收尾款'],
    mistakes:['到货不检查直接装，有破损扯不清','墙面不直没处理直接装柜子有空隙','铰链没调水平柜门歪的','没教客户怎么维护后期找麻烦'],
    tips:['安装前地面做好保护，显得专业又省心','装完现场打扫再让客户看','教客户日常维护方法（柜门别暴晒、别用水冲）']
  }
];

// ═══════════════════════════════════════════
// 2. STATE
// ═══════════════════════════════════════════

let activeTab = 'dimensions';
let dimSubTab = 'kitchen';
let matSubTab = 'panel';
let wfStep = parseInt(localStorage.getItem('ff_wfStep') || '0');
function setWFStep(v) { wfStep = v; localStorage.setItem('ff_wfStep', wfStep); }
let searchTerm = '';
let favs = new Set();
let measurements = [];
let quotes = [];
let wfProjects = {};
let brandSettings = { companyName:'', phone:'', wechat:'', address:'' };
let customers = [];

// Quote form state
let qType = '';
let qW = 0, qH = 0, qD = 0;
let qGrade = 'std';
let qOpts = {};
let qResult = null;
let qCustId = '';
let savedPlans = [];
let customDims = [];
let customDimId = 1;

function loadState() {
  try {
    const f = localStorage.getItem('ff_favs');
    if (f) favs = new Set(JSON.parse(f));
    const m = localStorage.getItem('ff_measure');
    if (m) measurements = JSON.parse(m);
    const q = localStorage.getItem('ff_quotes');
    if (q) quotes = JSON.parse(q);
    const w = localStorage.getItem('ff_wf');
    if (w) wfProjects = JSON.parse(w);
    const b = localStorage.getItem('ff_brand');
    if (b) brandSettings = JSON.parse(b);
    const c = localStorage.getItem('ff_customers');
    if (c) customers = JSON.parse(c);
    const p = localStorage.getItem('ff_plans');
    if (p) savedPlans = JSON.parse(p);
    const cd = localStorage.getItem('ff_customDims');
    if (cd) { const d = JSON.parse(cd); customDims = d.dims||[]; customDimId = d.nextId||1; }
  } catch(e) {}
}
function saveFavs() { localStorage.setItem('ff_favs', JSON.stringify([...favs])); }
function saveMeasure() { localStorage.setItem('ff_measure', JSON.stringify(measurements)); }
function saveQuotes() { localStorage.setItem('ff_quotes', JSON.stringify(quotes)); }
function saveWF() { localStorage.setItem('ff_wf', JSON.stringify(wfProjects)); }
function saveBrand() { localStorage.setItem('ff_brand', JSON.stringify(brandSettings)); }
function saveCustomers() { localStorage.setItem('ff_customers', JSON.stringify(customers)); }
function savePlans() { localStorage.setItem('ff_plans', JSON.stringify(savedPlans)); }
function saveCustomDims() { localStorage.setItem('ff_customDims', JSON.stringify({dims:customDims, nextId:customDimId})); }

// ═══════════════════════════════════════════
// 3. SHELL
// ═══════════════════════════════════════════

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); p.classList.remove('page-enter'); });
  const pg = document.getElementById('page_' + tab);
  pg.classList.add('active');
  pg.classList.remove('page-enter');
  void pg.offsetWidth; // force reflow
  pg.classList.add('page-enter');
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab-item[data-tab="${tab}"]`).classList.add('active');

  const titles = { dimensions:'尺寸速查', measure:'量尺记录', quote:'报价速算', workflow:'设计流程', materials:'材料五金', recommend:'智能推荐' };
  const icons = { dimensions:'📐', measure:'📏', quote:'💰', workflow:'📋', materials:'🔩', recommend:'💡' };
  document.getElementById('headerIcon').textContent = icons[tab] || '📐';
  document.getElementById('headerTitle').textContent = titles[tab] || '';

  const sr = document.getElementById('searchRow');
  sr.classList.toggle('show', tab === 'dimensions');

  document.getElementById('fabMeasure').style.display = tab === 'measure' ? 'flex' : 'none';

  renderCurrent();
}

function renderCurrent() {
  switch(activeTab) {
    case 'dimensions': renderDim(); break;
    case 'measure': renderMeasure(); break;
    case 'quote': renderQuote(); break;
    case 'workflow': renderWF(); break;
    case 'materials': renderMat(); break;
    case 'recommend': renderRecommend(); break;
  }
}

// ═══════════════════════════════════════════
// 4. SHARED
// ═══════════════════════════════════════════

function showModal(html) {
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}
function hideModal() { document.getElementById('modalOverlay').classList.remove('show'); }
document.getElementById('modalOverlay').addEventListener('click', e => { if(e.target===e.currentTarget) hideModal(); });
function showImg(src) {
  showModal(`<div style="text-align:center"><img src="${src}" style="max-width:100%;border-radius:10px;max-height:80vh"><br><button class="btn btn-primary" onclick="hideModal()" style="margin-top:12px">关闭</button></div>`);
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2000);
}

function getDimPercent(d) {
  const n = d.match(/\d+/g); if(!n) return 50;
  const v = n.map(Number), avg = v.reduce((a,b)=>a+b,0)/v.length;
  return Math.min(100, Math.max(30, avg/1000*100));
}
function fmtNum(n) { return n.toLocaleString('zh-CN'); }

// ═══════════════════════════════════════════
// 5. MODULE: DIMENSIONS
// ═══════════════════════════════════════════

function renderDim() {
  const el = document.getElementById('dimContent');
  // sub tabs
  let html = '<div class="sub-tabs">';
  html += `<button class="sub-tab${dimSubTab==='space'?' active':''}" onclick="dimSubTab='space';renderDim()">📐 空间估算</button>`;
  html += `<button class="sub-tab${dimSubTab==='custom'?' active':''}" onclick="dimSubTab='custom';renderDim()">✏️ 自定义 (${customDims.length})</button>`;
  CATS.forEach(c => {
    const cnt = c.id === 'fav' ? favs.size : DIM_DATA.filter(d => d.cat === c.id).length;
    html += `<button class="sub-tab${dimSubTab===c.id?' active':''}" onclick="dimSubTab='${c.id}';renderDim()">${c.icon} ${c.label} ${c.id!=='fav'?cnt:`(${cnt})`}</button>`;
  });
  html += '</div>';

  if (dimSubTab === 'space') {
    html += renderSpaceEstimator();
    el.innerHTML = html;
    return;
  }

  if (dimSubTab === 'custom') {
    html += renderCustomDims();
    el.innerHTML = html;
    return;
  }

  let items = dimSubTab === 'fav'
    ? DIM_DATA.filter(d => favs.has(d.id))
    : DIM_DATA.filter(d => d.cat === dimSubTab);
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    items = items.filter(d => d.name.includes(q) || d.note.includes(q) || d.dim.includes(q));
  }
  document.getElementById('countDisplay') && (document.getElementById('countDisplay').textContent = items.length + ' 条');

  if (!items.length) {
    html += `<div class="empty-state"><span class="emoji">${searchTerm?'🔍':'⭐'}</span><h3>${searchTerm?'没有匹配尺寸':dimSubTab==='fav'?'还没有收藏' : '暂无数据'}</h3><p>${searchTerm?'试试其他关键词':dimSubTab==='fav'?'点击卡片上的 ☆ 收藏':'选择上方分类查看尺寸'}</p></div>`;
    el.innerHTML = html; return;
  }

  html += '<div class="cards-grid">';
  items.forEach((item, i) => {
    const isFav = favs.has(item.id);
    const cat = CATS.find(c => c.id === item.cat);
    html += `<div class="card" style="animation-delay:${Math.min(i,20)*30}ms" onclick="showDimDetail('${item.id}')">
      <div class="card-inner">
        <div class="card-ruler${isFav?' fav':''}"></div>
        <div class="card-body">
          <div class="card-name">${item.name}</div>
          <div class="card-dim">${item.dim}<span class="unit">mm</span></div>
          ${item.note ? `<div class="card-note">${item.note}</div>` : ''}
          <div class="dim-bar"><div class="dim-bar-fill" style="width:${getDimPercent(item.dim)}%"></div></div>
        </div>
        <button class="card-star${isFav?' active':''}" data-id="${item.id}" onclick="event.stopPropagation();toggleFav('${item.id}')">${isFav?'★':'☆'}</button>
      </div>
    </div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

function toggleFav(id) {
  if (favs.has(id)) favs.delete(id); else favs.add(id);
  saveFavs();
  const star = document.querySelector(`.card-star[data-id="${id}"]`);
  if (star) { star.classList.toggle('active'); star.textContent = favs.has(id) ? '★' : '☆'; }
}

// ═══════════════════════════════════════════
// Dimension SVG Diagrams
// ═══════════════════════════════════════════
function genDimDiagram(d) {
  const V = d.dim;
  const S = `<svg viewBox="0 0 280 160" style="width:100%;max-width:280px;display:block;margin:0 auto 10px;background:#faf5f0;border-radius:8px"><defs>
    <marker id="ma" viewBox="0 0 8 8" refX="8" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8" fill="#c47040"/></marker>
    <marker id="mb" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#999"/></marker>
    <marker id="mc" viewBox="0 0 6 6" refX="0" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M6,0 L0,3 L6,6" fill="#999"/></marker>
  </defs><g fill="none" stroke-linejoin="round">`;
  const F = '</g></svg>';
  let m = '';
  if (d.cat === 'kitchen') {
    m = `<rect x="232" y="8" width="42" height="146" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="1" stroke-dasharray="3,3"/><text x="253" y="85" fill="#bbb" font-size="9" text-anchor="middle" stroke="none" transform="rotate(-90,253,85)">墙体</text>
      <rect x="125" y="18" width="96" height="48" rx="4" fill="#e8c4a8" stroke="#c47040" stroke-width="1.5"/><text x="173" y="47" fill="#5a3a28" font-size="10" text-anchor="middle" stroke="none">吊柜</text>
      <rect x="115" y="100" width="112" height="6" rx="2" fill="#c47040"/>
      <rect x="120" y="106" width="105" height="48" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/><text x="172" y="135" fill="#5a3a28" font-size="10" text-anchor="middle" stroke="none">地柜</text>
      <line x1="232" y1="145" x2="75" y2="145" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)"/><rect x="88" y="136" width="95" height="16" rx="4" fill="rgba(196,112,64,0.12)"/><text x="135" y="148" fill="#c47040" font-size="10" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>
      <line x1="65" y1="145" x2="65" y2="152" stroke="#999" stroke-width="1"/><text x="58" y="155" fill="#999" font-size="8" text-anchor="end" stroke="none">mm</text>
      <line x1="8" y1="154" x2="232" y2="154" stroke="#ccc" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="106" y1="52" x2="106" y2="104" stroke="#aaa" stroke-width="1" stroke-dasharray="2,3"/>`;
  } else if (d.cat === 'wardrobe') {
    m = `<rect x="25" y="12" width="195" height="140" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <line x1="25" y1="52" x2="220" y2="52" stroke="#c47040" stroke-width="0.8" opacity="0.4"/><line x1="25" y1="98" x2="220" y2="98" stroke="#c47040" stroke-width="0.8" opacity="0.4"/><line x1="25" y1="122" x2="220" y2="122" stroke="#c47040" stroke-width="0.8" opacity="0.4"/>
      <text x="40" y="38" fill="#5a3a28" font-size="10" stroke="none">被褥区</text>
      <line x1="40" y1="68" x2="40" y2="88" stroke="#c47040" stroke-width="1.2" opacity="0.5"/><line x1="36" y1="68" x2="44" y2="68" stroke="#c47040" stroke-width="1.2" opacity="0.5"/><text x="50" y="82" fill="#5a3a28" font-size="10" stroke="none">短衣区</text>
      <line x1="40" y1="108" x2="40" y2="118" stroke="#c47040" stroke-width="1.2" opacity="0.5"/><line x1="36" y1="108" x2="44" y2="108" stroke="#c47040" stroke-width="1.2" opacity="0.5"/><text x="50" y="114" fill="#5a3a28" font-size="10" stroke="none">长衣区</text>
      <rect x="35" y="127" width="55" height="14" rx="2" fill="#e8c4a8" stroke="#c47040" stroke-width="0.8"/><text x="62" y="137" fill="#5a3a28" font-size="9" text-anchor="middle" stroke="none">抽屉</text>
      <line x1="220" y1="140" x2="240" y2="140" stroke="#999" stroke-width="1"/><line x1="240" y1="140" x2="240" y2="25" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)"/><line x1="220" y1="25" x2="240" y2="25" stroke="#999" stroke-width="1"/>
      <rect x="241" y="72" width="36" height="20" rx="3" fill="rgba(196,112,64,0.12)"/><text x="259" y="85" fill="#c47040" font-size="9" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  } else if (d.cat === 'bookshelf') {
    m = `<rect x="30" y="12" width="200" height="140" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <line x1="30" y1="60" x2="230" y2="60" stroke="#c47040" stroke-width="1.5"/><line x1="30" y1="108" x2="230" y2="108" stroke="#c47040" stroke-width="1.5"/>
      <rect x="45" y="27" width="14" height="27" rx="1" fill="#e8c4a8" stroke="#c47040" stroke-width="0.5"/><rect x="63" y="30" width="12" height="24" rx="1" fill="#d4a373" stroke="#c47040" stroke-width="0.5"/><rect x="79" y="25" width="16" height="29" rx="1" fill="#f0d5b0" stroke="#c47040" stroke-width="0.5"/><rect x="99" y="31" width="11" height="23" rx="1" fill="#e8c4a8" stroke="#c47040" stroke-width="0.5"/>
      <rect x="45" y="72" width="16" height="30" rx="1" fill="#d4a373" stroke="#c47040" stroke-width="0.5"/><rect x="65" y="76" width="12" height="26" rx="1" fill="#e8c4a8" stroke="#c47040" stroke-width="0.5"/><rect x="81" y="70" width="14" height="32" rx="1" fill="#f0d5b0" stroke="#c47040" stroke-width="0.5"/><rect x="99" y="74" width="10" height="28" rx="1" fill="#e8c4a8" stroke="#c47040" stroke-width="0.5"/>
      <rect x="45" y="120" width="18" height="22" rx="1" fill="#e8c4a8" stroke="#c47040" stroke-width="0.5"/><rect x="67" y="116" width="22" height="26" rx="1" fill="#d4a373" stroke="#c47040" stroke-width="0.5"/><rect x="93" y="122" width="14" height="20" rx="1" fill="#f0d5b0" stroke="#c47040" stroke-width="0.5"/>
      <line x1="30" y1="155" x2="230" y2="155" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)" marker-end="url(#mc)"/><rect x="90" y="146" width="80" height="14" rx="4" fill="rgba(196,112,64,0.12)"/><text x="130" y="156" fill="#c47040" font-size="10" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  } else if (d.cat === 'tv') {
    m = `<rect x="28" y="8" width="42" height="146" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="1" stroke-dasharray="3,3"/><text x="49" y="85" fill="#bbb" font-size="9" text-anchor="middle" stroke="none" transform="rotate(-90,49,85)">墙体</text>
      <rect x="82" y="20" width="150" height="62" rx="6" fill="#2d1810" opacity="0.85"/><rect x="98" y="30" width="118" height="42" rx="3" fill="#333"/><text x="157" y="56" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle" stroke="none" opacity="0.85">TV</text>
      <line x1="70" y1="51" x2="82" y2="51" stroke="#999" stroke-width="1.5"/>
      <rect x="82" y="102" width="158" height="50" rx="4" fill="#e8c4a8" stroke="#c47040" stroke-width="1.5"/><text x="161" y="132" fill="#5a3a28" font-size="10" text-anchor="middle" stroke="none">电视柜</text>
      <line x1="250" y1="51" x2="265" y2="51" stroke="#999" stroke-width="1"/><line x1="265" y1="51" x2="265" y2="142" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)" marker-end="url(#mb)"/><line x1="250" y1="142" x2="265" y2="142" stroke="#999" stroke-width="1"/>
      <rect x="266" y="85" width="5" height="24" rx="2" fill="rgba(196,112,64,0.12)"/><text x="258" y="103" fill="#c47040" font-size="9" font-weight="bold" text-anchor="start" stroke="none">${V}</text>`;
  } else if (d.cat === 'shoe') {
    m = `<rect x="30" y="12" width="200" height="140" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <line x1="30" y1="58" x2="230" y2="58" stroke="#c47040" stroke-width="0.8" opacity="0.4"/><line x1="30" y1="98" x2="230" y2="98" stroke="#c47040" stroke-width="0.8" opacity="0.4"/><line x1="30" y1="132" x2="230" y2="132" stroke="#c47040" stroke-width="0.8" opacity="0.4"/>
      <ellipse cx="70" cy="44" rx="20" ry="7" fill="#d4a373" opacity="0.6"/><ellipse cx="118" cy="44" rx="17" ry="6" fill="#c47040" opacity="0.5"/>
      <ellipse cx="70" cy="84" rx="22" ry="8" fill="#c47040" opacity="0.5"/><ellipse cx="120" cy="84" rx="18" ry="7" fill="#d4a373" opacity="0.6"/>
      <rect x="60" y="112" width="20" height="18" rx="4" fill="#c47040" opacity="0.4"/><rect x="92" y="110" width="22" height="20" rx="4" fill="#d4a373" opacity="0.5"/>
      <line x1="230" y1="145" x2="248" y2="145" stroke="#999" stroke-width="1"/><line x1="248" y1="145" x2="248" y2="25" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)"/><line x1="230" y1="25" x2="248" y2="25" stroke="#999" stroke-width="1"/>
      <rect x="249" y="75" width="28" height="20" rx="3" fill="rgba(196,112,64,0.12)"/><text x="263" y="88" fill="#c47040" font-size="9" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  } else if (d.cat === 'tatami') {
    m = `<rect x="15" y="15" width="230" height="130" rx="6" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <rect x="20" y="22" width="220" height="22" rx="4" fill="#e8c4a8" stroke="#c47040" stroke-width="1"/>
      <line x1="40" y1="24" x2="40" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="70" y1="24" x2="70" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="100" y1="24" x2="100" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="130" y1="24" x2="130" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="160" y1="24" x2="160" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="190" y1="24" x2="190" y2="42" stroke="#c47040" stroke-width="0.5" opacity="0.3"/>
      <text x="215" y="38" fill="#5a3a28" font-size="9" text-anchor="end" stroke="none">草垫</text>
      <rect x="30" y="55" width="55" height="70" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="0.8" opacity="0.6"/><rect x="95" y="55" width="55" height="70" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="0.8" opacity="0.6"/><rect x="160" y="55" width="55" height="70" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="0.8" opacity="0.6"/>
      <text x="130" y="105" fill="#bbb" font-size="10" text-anchor="middle" stroke="none">储物空间</text>
      <line x1="250" y1="25" x2="265" y2="25" stroke="#999" stroke-width="1"/><line x1="265" y1="25" x2="265" y2="140" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)" marker-end="url(#mb)"/><line x1="250" y1="140" x2="265" y2="140" stroke="#999" stroke-width="1"/>
      <rect x="266" y="72" width="5" height="20" rx="2" fill="rgba(196,112,64,0.12)"/><text x="258" y="88" fill="#c47040" font-size="9" font-weight="bold" text-anchor="start" stroke="none">${V}</text>`;
  } else if (d.cat === 'wine') {
    m = `<rect x="25" y="15" width="200" height="130" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <g stroke="#c47040" stroke-width="0.8" opacity="0.5"><polygon points="70,45 105,70 70,95 35,70" fill="#e8c4a8" fill-opacity="0.3"/><polygon points="130,45 165,70 130,95 95,70" fill="#e8c4a8" fill-opacity="0.3"/><polygon points="70,100 105,125 70,150 35,125" fill="#e8c4a8" fill-opacity="0.3"/><polygon points="130,100 165,125 130,150 95,125" fill="#e8c4a8" fill-opacity="0.3"/></g>
      <g stroke="none"><rect x="62" y="35" width="16" height="26" rx="4" fill="#6b2737"/><rect x="78" y="45" width="5" height="16" fill="#2d1810"/><rect x="122" y="35" width="16" height="26" rx="4" fill="#2d1810"/><rect x="138" y="45" width="5" height="16" fill="#2d1810"/><rect x="62" y="90" width="16" height="26" rx="4" fill="#2d1810"/><rect x="78" y="100" width="5" height="16" fill="#2d1810"/><rect x="122" y="90" width="16" height="26" rx="4" fill="#6b2737"/><rect x="138" y="100" width="5" height="16" fill="#2d1810"/></g>
      <line x1="225" y1="140" x2="240" y2="140" stroke="#999" stroke-width="1"/><line x1="240" y1="140" x2="240" y2="25" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)"/><line x1="225" y1="25" x2="240" y2="25" stroke="#999" stroke-width="1"/>
      <rect x="241" y="72" width="36" height="20" rx="3" fill="rgba(196,112,64,0.12)"/><text x="259" y="85" fill="#c47040" font-size="9" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  } else if (d.cat === 'bathroom') {
    m = `<rect x="25" y="8" width="42" height="146" rx="2" fill="#f0e8dc" stroke="#d4c4b0" stroke-width="1" stroke-dasharray="3,3"/><text x="46" y="85" fill="#bbb" font-size="9" text-anchor="middle" stroke="none" transform="rotate(-90,46,85)">墙体</text>
      <rect x="80" y="16" width="150" height="52" rx="4" fill="#e8c4a8" stroke="#c47040" stroke-width="1.5"/><rect x="90" y="23" width="130" height="38" rx="3" fill="#fcefe6" stroke="#c47040" stroke-width="0.8"/><text x="155" y="47" fill="#5a3a28" font-size="10" text-anchor="middle" stroke="none" opacity="0.6">镜柜</text>
      <rect x="75" y="95" width="160" height="55" rx="4" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <ellipse cx="155" cy="106" rx="35" ry="12" fill="#fff" stroke="#c47040" stroke-width="0.8"/><rect x="146" y="96" width="18" height="8" rx="4" fill="#c47040" opacity="0.6"/>
      <text x="155" y="135" fill="#5a3a28" font-size="10" text-anchor="middle" stroke="none">浴室柜</text>
      <line x1="238" y1="135" x2="256" y2="135" stroke="#999" stroke-width="1"/><line x1="256" y1="135" x2="256" y2="30" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)"/><line x1="238" y1="30" x2="256" y2="30" stroke="#999" stroke-width="1"/>
      <rect x="257" y="72" width="20" height="20" rx="3" fill="rgba(196,112,64,0.12)"/><text x="267" y="85" fill="#c47040" font-size="9" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  } else {
    m = `<rect x="20" y="55" width="230" height="50" rx="6" fill="#fcefe6" stroke="#c47040" stroke-width="1.5"/>
      <line x1="40" y1="65" x2="40" y2="95" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="90" y1="65" x2="90" y2="95" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="140" y1="65" x2="140" y2="95" stroke="#c47040" stroke-width="0.5" opacity="0.3"/><line x1="190" y1="65" x2="190" y2="95" stroke="#c47040" stroke-width="0.5" opacity="0.3"/>
      <line x1="20" y1="135" x2="250" y2="135" stroke="#c47040" stroke-width="1.5" marker-start="url(#ma)" marker-end="url(#mc)"/>
      <rect x="80" y="126" width="110" height="16" rx="4" fill="rgba(196,112,64,0.12)"/><text x="135" y="138" fill="#c47040" font-size="10" font-weight="bold" text-anchor="middle" stroke="none">${V}</text>`;
  }
  return S + m + F;
}

function showDimDetail(id) {
  const item = DIM_DATA.find(d => d.id === id);
  if (!item) return;
  const cat = CATS.find(c => c.id === item.cat);
  const isFav = favs.has(item.id);
  showModal(`<div class="modal-cat">${cat?cat.icon+' '+cat.label:''}</div>
    <div class="modal-title">${item.name}</div>
    <div class="modal-dim">${item.dim}<span class="unit"> mm</span></div>
    <div class="modal-dim-bar"><div class="modal-dim-bar-fill" style="width:${getDimPercent(item.dim)}%"></div></div>
    ${genDimDiagram(item)}
    <div class="modal-section"><p>${item.note || '—'}</p></div>
    ${item.tip ? `<div class="modal-section"><h4>💡 设计师建议</h4><p>${item.tip}</p></div>` : ''}
    <div style="margin-top:12px"><button class="btn btn-sm ${isFav?'btn-secondary':'btn-primary'}" onclick="toggleFav('${item.id}');hideModal();setTimeout(()=>showDimDetail('${item.id}'),100)" style="width:100%">${isFav?'⭐ 已收藏':'☆ 收藏此尺寸'}</button></div>`);
}

// Search (with debounce)
let searchDebounce;
document.getElementById('searchInput').addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchTerm = document.getElementById('searchInput').value.trim();
    if (activeTab === 'dimensions') renderDim();
  }, 150);
});

// ═══════════════════════════════════════════
// Custom Dimensions
// ═══════════════════════════════════════════
function renderCustomDims() {
  let html = `<button class="btn btn-sm btn-primary" onclick="showCustomDimForm()" style="margin:12px 0 8px;width:100%">+ 添加自定义尺寸</button>`;
  if (!customDims.length) {
    html += `<div class="empty-state"><span class="emoji">✏️</span><h3>还没有自定义尺寸</h3><p>点击上方按钮添加工作中遇到的特殊尺寸</p></div>`;
    return html;
  }
  html += '<div class="cards-grid">';
  customDims.forEach((d, i) => {
    const cat = CATS.find(c => c.id === d.cat);
    html += `<div class="card" style="border-color:var(--clay-light)">
      <div class="card-inner">
        <div class="card-ruler" style="background:var(--clay)"></div>
        <div class="card-body">
          <div class="card-name">${d.name} <span style="font-size:10px;color:var(--text-muted);font-weight:400">${cat?cat.label:''}</span></div>
          <div class="card-dim">${d.dim}<span class="unit">mm</span></div>
          ${d.note ? `<div class="card-note">${d.note}</div>` : ''}
          <div class="dim-bar"><div class="dim-bar-fill" style="width:${getDimPercent(d.dim)}%"></div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;padding:4px">
          <button class="btn btn-sm" style="font-size:10px;padding:2px 6px" onclick="event.stopPropagation();showCustomDimForm(${i})">✏️</button>
          <button class="btn btn-sm" style="font-size:10px;padding:2px 6px;color:var(--red);border-color:var(--red-light)" onclick="event.stopPropagation();if(confirm('删除「${d.name}」？')){customDims.splice(${i},1);saveCustomDims();renderDim();}">✕</button>
        </div>
      </div>
    </div>`;
  });
  html += '</div>';
  return html;
}
function showCustomDimForm(idx) {
  const d = idx!==undefined ? customDims[idx] : null;
  const cats = CATS.filter(c => c.id !== 'fav').map(c => `<option value="${c.id}"${d&&d.cat===c.id?' selected':''}>${c.icon} ${c.label}</option>`).join('');
  showModal(`<div class="modal-title" style="margin-bottom:16px">${d?'编辑':'添加'}自定义尺寸</div>
    <div class="form-group"><label class="form-label">名称</label><input class="form-input" id="cd_name" value="${d?d.name:''}" placeholder="如：转角柜深度"></div>
    <div class="form-group"><label class="form-label">尺寸 (mm)</label><input class="form-input" id="cd_dim" value="${d?d.dim:''}" placeholder="如：500-600"></div>
    <div class="form-group"><label class="form-label">分类</label><select class="form-input" id="cd_cat">${cats}</select></div>
    <div class="form-group"><label class="form-label">备注</label><input class="form-input" id="cd_note" value="${d?d.note||'':''}" placeholder="可选"></div>
    <button class="btn btn-primary btn-block" onclick="saveCustomDim(${idx!==undefined?idx:'-1'})">💾 保存</button>`);
}
function saveCustomDim(idx) {
  const name = document.getElementById('cd_name').value.trim();
  const dim = document.getElementById('cd_dim').value.trim();
  const cat = document.getElementById('cd_cat').value;
  const note = document.getElementById('cd_note').value.trim();
  if (!name || !dim) return toast('请填写名称和尺寸');
  if (idx >= 0) {
    customDims[idx] = { ...customDims[idx], name, dim, cat, note };
  } else {
    customDims.push({ id:'c_'+(customDimId++), cat, name, dim, note, tip:'' });
  }
  saveCustomDims(); hideModal(); dimSubTab='custom'; renderDim(); setTimeout(()=>toast('已保存'),300);
}

// ═══════════════════════════════════════════
// Space Estimator
// ═══════════════════════════════════════════
function renderSpaceEstimator() {
  return `<div class="space-est-card">
    <h3>📐 空间估算</h3>
    <p style="color:var(--text-muted);font-size:13px;margin:0 0 16px">输入房间尺寸，自动推荐合适的家具配置</p>
    <div class="space-inputs">
      <div class="space-input-group">
        <label>房间类型</label>
        <select id="spaceRoomType" onchange="calcSpace()">
          <option value="bedroom">卧室</option>
          <option value="living">客厅</option>
          <option value="kitchen">厨房</option>
          <option value="study">书房</option>
          <option value="balcony">阳台</option>
        </select>
      </div>
      <div class="space-input-row">
        <div class="space-input-group"><label>长 (mm)</label><input type="number" id="spaceLength" placeholder="e.g. 4000" min="100" max="50000" oninput="debounceCalcSpace()"></div>
        <div class="space-input-group"><label>宽 (mm)</label><input type="number" id="spaceWidth" placeholder="e.g. 3300" min="100" max="50000" oninput="debounceCalcSpace()"></div>
        <div class="space-input-group"><label>高 (mm)</label><input type="number" id="spaceHeight" placeholder="e.g. 2700" min="100" max="50000" oninput="debounceCalcSpace()"></div>
      </div>
    </div>
    <div id="spaceResults"></div>
  </div>`;
}

let calcSpaceDebounce;
function debounceCalcSpace() { clearTimeout(calcSpaceDebounce); calcSpaceDebounce = setTimeout(calcSpace, 200); }

function calcSpace() {
  const l = parseInt(document.getElementById('spaceLength').value) || 0;
  const w = parseInt(document.getElementById('spaceWidth').value) || 0;
  const h = parseInt(document.getElementById('spaceHeight').value) || 0;
  const type = document.getElementById('spaceRoomType').value;
  const el = document.getElementById('spaceResults');
  if (!l || !w) { el.innerHTML = '<div class="space-hint">请输入房间长和宽</div>'; return; }
  const area = l * w / 1e6;
  const long = Math.max(l,w), short = Math.min(l,w);
  let html = `<div class="space-result-header">${area.toFixed(1)} m²  ·  ${l}×${w}×${h||'?'} mm${h>0?'  ·  层高 '+h+'mm':''}</div><div class="space-recs">`;
  const add = (icon,text,detail) => { html += `<div class="space-rec-item"><span class="space-rec-icon">${icon}</span><div><div class="space-rec-text">${text}</div><div class="space-rec-detail">${detail}</div></div></div>`; };
  if (type === 'bedroom' || type === 'living') {
    if (long>=2200 && short>=2200) add('🛏️','可放 1.8m 大床 + 双侧床头柜','需 ≥ 2200×2200mm');
    else if (long>=2200 && short>=2000) add('🛏️','可放 1.5m 床 + 单侧床头柜','需 ≥ 2200×2000mm');
    else if (long>=2000 && short>=1800) add('🛏️','可放 1.35m 床','需 ≥ 2000×1800mm');
    else if (long>=2000) add('🛏️','建议做定制榻榻米','空间有限，最大化利用');
    const ww = Math.min(short - 600, 2400);
    if (ww >= 1200) add('👔',`可做 ${Math.floor(ww/100)*100}mm 宽衣柜`,h>=2400?'标准高度，可一门到顶':`层高 ${h}mm，需定制`);
    else if (ww >= 800) add('👔','可做 800mm 宽小衣柜','空间紧凑');
    else add('👔','空间不够放标准衣柜','建议做开放式挂衣');
    if (short>=1600 && long>=600) add('📚',`可做 ${Math.min(Math.floor(long/100)*100-200,1600)}mm 宽书桌`,'靠窗或墙角放置');
    else if (short>=1200) add('📚','可做 800mm 书桌','空间有限');
    if (long>=2500) add('💡','可放标准床头柜','宽度 400-500mm');
  }
  if (type === 'kitchen') {
    const isSingle = short < 1800;
    const cLen = isSingle ? long-200 : Math.floor((long-900)/2);
    add('🍳',isSingle?'一字型厨房':'L型/U型厨房',`操作台长约 ${Math.max(cLen,800)}mm`);
    if (short >= 900) add('🚶',`过道宽度 ${short-550}mm，通行舒适`,'标准过道 ≥ 900mm');
    else add('⚠️','过道偏窄','建议做薄柜或开放式厨房');
    add('📏','台面深度标准 600mm','地柜 550-600mm，吊柜 300-350mm');
  }
  if (type === 'study') {
    if (long>=1200) add('📚',`可做 ${Math.min(Math.floor(long/100)*100-200,2000)}mm 宽书桌`,'靠墙放置');
    if (short>=280) add('📚','可放标准书柜','深度 ≥ 300mm');
    if (long>=2000) add('🛋️','可放小沙发床','方便客人临时住宿');
  }
  if (type === 'balcony') {
    if (short>=600) add('🧺',`可做 ${short-50}mm 深阳台柜`,'含洗衣机位');
    if (long>=1200 && short>=900) add('🪴','可放休闲桌椅','小茶几 + 坐垫');
  }
  if (h > 0) {
    if (h >= 2800) add('📏','层高充裕，可做双层吊柜','充分利用垂直空间');
    else if (h < 2400) add('📏','层高偏低，吊柜需定制','标准吊柜可能装不下');
  }
  html += '</div>';
  el.innerHTML = html;
}

// ═══════════════════════════════════════════
// 6. MODULE: MEASURE
// ═══════════════════════════════════════════

function renderMeasure() {
  const el = document.getElementById('measureContent');
  if (!measurements.length) {
    el.innerHTML = `<div class="empty-state"><span class="emoji">📏</span><h3>还没有量尺记录</h3><p>点击右下角 + 按钮开始记录</p></div>`;
    return;
  }
  let html = '';
  measurements.forEach((m, i) => {
    const rooms = m.rooms || [{ name:m.roomName||'房间', length:m.rL||0, width:m.rW||0, height:m.rH||0 }];
    html += `<div class="rec-card" onclick="viewMeasure(${i})">
      <div class="rec-card-header">
        <div><div class="rec-card-name">${m.project||'未命名项目'}</div><div class="rec-card-date">${m.date||''}</div></div>
        <button class="rec-card-del" onclick="event.stopPropagation();delMeasure(${i})">✕</button>
      </div>
      <div class="rec-card-rooms">${rooms.map(r => `<span class="rec-room-tag">${r.name||'房间'}</span>`).join('')}</div>
      <div style="font-size:12px;color:var(--text-muted)">${rooms.length} 个房间 · 共 ${rooms.reduce((s,r)=>s+Math.round((r.length||0)*(r.width||0)/1e6*10)/10,0).toFixed(1)} m²${m.customerId?` · 👤 ${getCustomerName(m.customerId)}`:''}</div>
    </div>`;
  });
  el.innerHTML = html;
}

function delMeasure(i) {
  if (!confirm('删除这条量尺记录？')) return;
  measurements.splice(i, 1); saveMeasure(); renderMeasure();
}

function viewMeasure(i) {
  const m = measurements[i]; if (!m) return;
  const rooms = m.rooms || [];
  let html = `<div class="modal-cat">📏 量尺记录</div><div class="modal-title">${m.project||'未命名项目'}</div>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">${m.date||''} · ${rooms.length}个房间</div>`;
  rooms.forEach((r, ri) => {
    const area = ((r.length||0)*(r.width||0)/1e6).toFixed(1);
    html += `<div class="modal-section"><h4>${r.name||'房间'+(ri+1)} · ${area}m²</h4>
      <p>长 ${r.length||'-'} × 宽 ${r.width||'-'} × 高 ${r.height||'-'} mm</p>`;
    // Recommendations
    const recs = calcRecs(r);
    if (recs.length) {
      html += `<div class="rec-results" style="margin:8px 0 0"><h4>✅ 推荐方案</h4>`;
      recs.forEach(rec => { html += `<div class="rec-item"><span class="dot">•</span>${rec}</div>`; });
      html += `</div>`;
    }
    html += `</div>`;
  });
  if (m.notes) html += `<div class="modal-section"><h4>📝 备注</h4><p>${m.notes}</p></div>`;
  showModal(html);
}

function calcRecs(room) {
  const w = room.width||0, l = room.length||0, h = room.height||0;
  const recs = [];
  // wardrobe
  if (w >= 1200) {
    const maxW = Math.floor(w / 100) * 100 - 100;
    const maxH = Math.min(Math.floor(h / 100) * 100 - 100, 2800);
    recs.push(`衣柜：可做 ${maxW}mm 宽 × ${maxH}mm 高（建议 ${maxH>2400?'分上下柜':''}）`);
  } else if (w > 0) recs.push(`衣柜：宽度仅 ${w}mm，建议做开方式衣架或放弃`);
  // bed
  if (w >= 2200 && l >= 2200) recs.push(`床：可放 1.8m 床（两侧床头柜略紧）`);
  else if (w >= 2000 && l >= 2200) recs.push(`床：可放 1.5m 床+单侧床头柜`);
  else if (w >= 1800) recs.push(`床：最多放 1.35m 床`);
  else recs.push(`床：空间有限，建议做定制榻榻米`);
  // desk
  if (w >= 1200 && l >= 600) recs.push(`书桌：可做 ${Math.min(Math.floor(w/100)*100-200,1600)}mm 宽书桌`);
  // notes
  if (h < 2400) recs.push(`注意：层高仅 ${h}mm，吊柜需定制`);
  return recs;
}

// Measure form
function showMeasureForm(editIdx) {
  const isEdit = editIdx !== undefined;
  const m = isEdit ? measurements[editIdx] : { project:'', date:today(), rooms:[], notes:'' };
  const rooms = m.rooms || [{ name:'', length:'', width:'', height:'', windows:[], doors:[], beams:[], notes:'' }];

  showMeasureFormInner(m, rooms, isEdit, editIdx);
}

function showMeasureFormInner(m, rooms, isEdit, editIdx) {
  let html = `<div class="modal-title" style="margin-bottom:12px">${isEdit?'编辑':'新建'}量尺记录</div>
    <div class="form-group"><label class="form-label">项目名称</label>
      <input class="form-input" id="mf_project" value="${m.project||''}" placeholder="如：万科城3栋502"></div>
    <div class="form-group"><label class="form-label">日期</label>
      <input class="form-input" id="mf_date" value="${m.date||today()}"></div>
    <div class="form-group"><label class="form-label">客户</label>
      <select class="form-input" id="mf_customer">
        <option value="">— 不关联客户 —</option>
        ${customers.map(c => `<option value="${c.id}" ${m.customerId===c.id?'selected':''}>${c.name}${c.phone?' · '+c.phone:''}</option>`).join('')}
      </select></div>
    <div id="mf_rooms">`;
  rooms.forEach((r, ri) => {
    html += `<div class="room-entry" data-ri="${ri}">
      <div class="room-entry-header"><span class="room-entry-title">🏠 房间 ${ri+1}</span>
        ${ri>0?`<button class="rec-card-del" onclick="removeRoom(${ri})">✕</button>`:''}
      </div>
      <div class="form-group"><label class="form-label">房间名称</label>
        <input class="form-input mf-rname" value="${r.name||''}" placeholder="如：主卧"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">长 (mm)</label><input class="form-input mf-rl" type="number" value="${r.length||''}"></div>
        <div class="form-group"><label class="form-label">宽 (mm)</label><input class="form-input mf-rw" type="number" value="${r.width||''}"></div>
        <div class="form-group"><label class="form-label">高 (mm)</label><input class="form-input mf-rh" type="number" value="${r.height||''}"></div>
      </div>
    </div>`;
  });
  html += `</div>
    <button class="add-room-btn" onclick="addRoom()">+ 添加房间</button>
    <div class="form-group"><label class="form-label">备注</label>
      <textarea class="form-textarea" id="mf_notes">${m.notes||''}</textarea></div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="hideModal()">取消</button>
      <button class="btn btn-primary" onclick="saveMeasureForm(${isEdit},${editIdx})">保存</button>
    </div>`;

  showModal(html);
}

function today() { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }

function addRoom() {
  const c = document.getElementById('mf_rooms');
  const ri = c.children.length;
  const div = document.createElement('div');
  div.className = 'room-entry'; div.dataset.ri = ri;
  div.innerHTML = `<div class="room-entry-header"><span class="room-entry-title">🏠 房间 ${ri+1}</span>
    <button class="rec-card-del" onclick="removeRoom(${ri})">✕</button></div>
    <div class="form-group"><label class="form-label">房间名称</label><input class="form-input mf-rname" placeholder="如：书房"></div>
    <div class="form-row"><div class="form-group"><label class="form-label">长 (mm)</label><input class="form-input mf-rl" type="number"></div>
    <div class="form-group"><label class="form-label">宽 (mm)</label><input class="form-input mf-rw" type="number"></div>
    <div class="form-group"><label class="form-label">高 (mm)</label><input class="form-input mf-rh" type="number"></div></div>`;
  c.appendChild(div);
}
function removeRoom(ri) {
  const el = document.querySelector(`.room-entry[data-ri="${ri}"]`);
  if (el && document.querySelectorAll('.room-entry').length > 1) el.remove();
}

function saveMeasureForm(isEdit, editIdx) {
  const rooms = [];
  document.querySelectorAll('.room-entry').forEach(el => {
    rooms.push({
      name: el.querySelector('.mf-rname').value,
      length: parseFloat(el.querySelector('.mf-rl').value) || 0,
      width: parseFloat(el.querySelector('.mf-rw').value) || 0,
      height: parseFloat(el.querySelector('.mf-rh').value) || 0,
    });
  });
  const record = {
    project: document.getElementById('mf_project').value || '未命名项目',
    date: document.getElementById('mf_date').value || today(),
    rooms: rooms,
    notes: document.getElementById('mf_notes').value || '',
    customerId: document.getElementById('mf_customer').value || ''
  };

  if (isEdit && editIdx !== undefined) {
    measurements[editIdx] = record;
  } else {
    measurements.unshift(record);
  }
  saveMeasure(); hideModal(); renderMeasure();
  toast('量尺记录已保存 ✅');
}

// ═══════════════════════════════════════════
// 7. MODULE: QUOTE
// ═══════════════════════════════════════════

function renderQuote() {
  const el = document.getElementById('quoteContent');
  // Sync size inputs from DOM before re-render (preserves user input)
  const wEl = document.getElementById('qW');
  if (wEl) qW = parseFloat(wEl.value) || 0;
  const hEl = document.getElementById('qH');
  if (hEl) qH = parseFloat(hEl.value) || 0;
  const dEl = document.getElementById('qD');
  if (dEl) qD = parseFloat(dEl.value) || 0;

  let html = `
    <div class="section-title" style="margin-top:4px">🏗️ 选择柜体类型</div>
    <div class="quote-type-grid">`;
  Object.keys(PRICE_DATA).forEach(k => {
    const p = PRICE_DATA[k];
    html += `<button class="quote-type-btn${qType===k?' active':''}" onclick="qType='${k}';qResult=null;renderQuote()">
      <span class="qt-icon">${CAT_ICONS[k]||'📦'}</span><span class="qt-label">${CAT_LABELS[k]||k}</span>
    </button>`;
  });
  html += `</div>`;

  if (qType) {
    html += `<div class="form-row"><div class="form-group"><label class="form-label">宽 (mm)</label>
      <input class="form-input" id="qW" type="number" value="${qW||''}" placeholder="如 2400"></div>
      <div class="form-group"><label class="form-label">高 (mm)</label>
      <input class="form-input" id="qH" type="number" value="${qH||''}" placeholder="如 2600"></div>
      <div class="form-group"><label class="form-label">深 (mm)</label>
      <input class="form-input" id="qD" type="number" value="${qD||''}" placeholder="如 580"></div>
    </div>`;

    html += `<div class="form-group"><label class="form-label">材料等级</label>
      <div class="grade-chips">`;
    GRADE_KEYS.forEach((gk, gi) => {
      const p = PRICE_DATA[qType];
      const price = gk==='econ'?p.econ:gk==='std'?p.std:p.prem;
      html += `<button class="grade-chip${qGrade===gk?' active':''}" onclick="qGrade='${gk}';renderQuote()">
        <span class="grade-name">${GRADE_LABELS[gi]}</span>
        <span class="grade-price">¥${price}/${p.unit}</span>
      </button>`;
    });
    html += `</div></div>`;

    // Customer selector
    html += `<div class="form-group"><label class="form-label">客户</label>
      <select class="form-input" id="q_customer" onchange="qCustId=this.value">
        <option value="">— 不关联客户 —</option>
        ${customers.map(c => `<option value="${c.id}" ${qCustId===c.id?'selected':''}>${c.name}${c.phone?' · '+c.phone:''}</option>`).join('')}
      </select></div>`;

    // Options per type
    html += `<div class="form-group"><label class="form-label">可选配件</label>`;
    const opts = getOpts(qType);
    opts.forEach(o => {
      html += `<div class="option-row"><label>
        <input type="checkbox" ${qOpts[o.id]?'checked':''} onchange="toggleOpt('${o.id}',this.checked)">
        ${o.label} <span class="opt-price">+¥${o.price}</span></label></div>`;
    });
    if (!opts.length) html += `<div style="font-size:12px;color:var(--text-muted)">无可用配件选项</div>`;
    html += `</div>`;

    html += `<button class="btn btn-primary btn-block btn-lg" onclick="calcQuote()">💰 计算报价</button>`;

    // Result
    if (qResult) {
      const r = qResult;
      html += `<div class="quote-result">
        <div class="quote-result-title">📊 ${r.typeLabel} · ${r.gradeLabel}</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">
          面积：${r.area} ${r.unit} · 单价：¥${r.unitPrice}/${r.unit}</div>`;
      const items = r.items || [];
      items.forEach(item => {
        html += `<div class="quote-breakdown-row">
          <span class="bd-label">${item.label}</span>
          <div class="bd-bar"><div class="bd-bar-fill" style="width:${item.pct}%"></div></div>
          <span class="bd-val">¥${fmtNum(item.val)}</span>
        </div>`;
      });
      html += `<div class="quote-total">
        <div class="total-label">参考总价</div>
        <div class="total-number">¥${fmtNum(r.total)}<span class="unit">元</span></div>
        ${r.optsDesc ? `<div class="quote-meta">含 ${r.optsDesc}</div>` : ''}
      </div></div>`;
    }

    // History
    const myQuotes = quotes.filter(q => q.type === qType);
    if (myQuotes.length) {
      html += `<div class="section-title">📜 历史报价</div>`;
      myQuotes.slice(-5).reverse().forEach(q => {
        const qi = quotes.indexOf(q);
        html += `<div class="rec-card" onclick="showQDetail(${qi})">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div><strong>${q.typeLabel}</strong> · ${q.gradeLabel} · ¥${fmtNum(q.total)}</div>
            <div style="font-size:11px;color:var(--text-muted)">${q.date||''}</div>
          </div>
          <div style="font-size:12px;color:var(--text-muted)">${q.area} ${q.unit} × ${q.w}×${q.h}×${q.d}${q.customerId?` 👤 ${getCustomerName(q.customerId)}`:""}</div>
        </div>`;
      });
    }
  }

  el.innerHTML = html;
}

function getOpts(type) {
  const all = {
    wardrobe: [
      { id:'drawer', label:'抽屉', price:150 },
      { id:'mirror', label:'穿衣镜', price:350 },
      { id:'pant', label:'裤架', price:200 },
      { id:'pullout', label:'拉篮', price:400 },
    ],
    kitchen: [
      { id:'drawer', label:'抽屉(个)', price:180 },
      { id:'pullout', label:'拉篮', price:500 },
      { id:'softClose', label:'阻尼铰链升级', price:80 },
    ],
    bookshelf: [
      { id:'glass', label:'玻璃门', price:300 },
      { id:'led', label:'LED灯带', price:200 },
    ],
    shoe: [
      { id:'stool', label:'换鞋凳', price:250 },
      { id:'led', label:'LED灯带', price:200 },
    ],
    tatami: [
      { id:'liftTable', label:'升降桌', price:800 },
    ],
  };
  return all[type] || [];
}
function toggleOpt(id, checked) {
  if (checked) qOpts[id] = true;
  else delete qOpts[id];
}

function calcQuote() {
  const p = PRICE_DATA[qType];
  if (!p) return toast('请先选择柜体类型');
  qW = parseFloat(document.getElementById('qW').value) || 0;
  qH = parseFloat(document.getElementById('qH').value) || 0;
  qD = parseFloat(document.getElementById('qD').value) || 0;
  if (!qW || !qH) return toast('请输入尺寸');

  const unitPrice = qGrade==='econ' ? p.econ : qGrade==='std' ? p.std : p.prem;
  let area, areaStr, unit;
  if (p.unit === '延米') {
    area = qW / 1000;
    unit = '延米';
  } else if (p.unit === '套') {
    area = 1; unit = '套';
  } else {
    area = (qW * qH) / 1e6;
    unit = 'm²';
  }

  // Calculate breakdown
  const baseTotal = area * unitPrice;
  let optsTotal = 0, optsDesc = [];
  const optDefs = getOpts(qType);
  optDefs.forEach(o => {
    if (qOpts[o.id]) { optsTotal += o.price; optsDesc.push(o.label); }
  });
  const total = baseTotal + optsTotal;

  const breakdown = [
    { label:'板材', pct: qGrade==='econ'?45:qGrade==='std'?50:55 },
    { label:'五金', pct: qGrade==='econ'?10:qGrade==='std'?12:15 },
    { label:'台面', pct: qType==='kitchen'?25: qType==='bathroom'?20:0 },
    { label:'安装', pct: 18 },
    { label:'运费', pct: 5 },
  ];

  const totalPct = breakdown.reduce((s,i)=>s+i.pct,0);
  const items = breakdown.filter(i => i.pct > 0).map(i => ({
    label: i.label,
    val: Math.round(total * i.pct / totalPct),
    pct: i.pct
  }));

  qResult = {
    type: qType,
    typeLabel: CAT_LABELS[qType],
    gradeLabel: GRADE_LABELS[GRADE_KEYS.indexOf(qGrade)],
    w: qW, h: qH, d: qD,
    area: area.toFixed(2),
    unit,
    unitPrice,
    items,
    total: Math.round(total),
    optsDesc: optsDesc.join('、'),
    date: today(),
    customerId: document.getElementById('q_customer').value || ''
  };

  quotes.push(qResult); if (quotes.length > 100) quotes = quotes.slice(-100);
  saveQuotes();
  renderQuote();
}

function showQDetail(i) {
  const q = quotes[i];
  if (!q) return;
  const c = q.customerId ? getCustomer(q.customerId) : null;
  let html = `<div class="modal-cat">💰 报价详情</div><div class="modal-title">${q.typeLabel} · ${q.gradeLabel}</div>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">${q.date||''}${c?` · 👤 ${c.name}${c.phone?' · '+c.phone:''}`:''}</div>
    <div class="modal-section"><h4>尺寸</h4><p>${q.w}×${q.h}×${q.d} mm · ${q.area} ${q.unit}</p></div>
    <div class="modal-section"><h4>单价</h4><p>¥${fmtNum(q.unitPrice)}/${q.unit}</p></div>`;
  (q.items||[]).forEach(item => {
    html += `<div class="quote-breakdown-row">
      <span class="bd-label">${item.label}</span>
      <div class="bd-bar"><div class="bd-bar-fill" style="width:${item.pct}%"></div></div>
      <span class="bd-val">¥${fmtNum(item.val)}</span>
    </div>`;
  });
  html += `<div class="quote-total">
    <div class="total-label">总价</div>
    <div class="total-number">¥${fmtNum(q.total)}<span class="unit">元</span></div>
  </div>`;
  if (q.optsDesc) html += `<div class="quote-meta" style="margin-top:6px">配件：${q.optsDesc}</div>`;
  html += `<button class="btn btn-primary btn-block" onclick="exportQuoteImage(${i})" style="margin-top:12px">📷 导出图片</button>`;
  showModal(html);
}

// ═══════════════════════════════════════════
// 8. MODULE: WORKFLOW
// ═══════════════════════════════════════════

function getWF() {
  const key = '_default';
  if (!wfProjects[key]) {
    wfProjects[key] = { project:'', started:today(), steps: WF_STEPS.map(s => ({
      id: s.id,
      done: false,
      checks: s.checks.map(() => false),
      mistakesOpen: false,
      tipsOpen: false
    }))};
  }
  return wfProjects[key];
}

function renderWF() {
  const el = document.getElementById('workflowContent');
  const wf = getWF();
  const totalChecks = wf.steps.reduce((s,st) => s + st.checks.length, 0);
  const doneChecks = wf.steps.reduce((s,st) => s + st.checks.filter(c=>c).length, 0);
  const pct = totalChecks ? Math.round(doneChecks/totalChecks*100) : 0;
  const doneSteps = wf.steps.filter(s => s.done).length;

  let html = `<div class="workflow-progress">
    <div class="wf-progress-bar"><div class="wf-progress-fill" style="width:${pct}%"></div></div>
    <div class="wf-progress-text">已完成 ${doneSteps}/${wf.steps.length} 步 · ${doneChecks}/${totalChecks} 项</div>
  </div>`;

  // Step dots
  html += `<div class="wf-steps"><div class="wf-steps-line"><div class="wf-steps-line-fill" style="width:${doneSteps/wf.steps.length*100}%"></div></div>`;
  WF_STEPS.forEach((s, i) => {
    const cls = wf.steps[i].done ? 'done' : (i === wfStep ? 'current' : '');
    html += `<div class="wf-step ${cls}" onclick="setWFStep(${i});renderWF()">
      <div class="wf-step-dot">${wf.steps[i].done?'✓':s.icon}</div>
      <div class="wf-step-label">${s.label}</div>
    </div>`;
  });
  html += `</div>`;

  // Current step content
  const step = WF_STEPS[wfStep];
  const st = wf.steps[wfStep];
  html += `<div class="wf-step-content">
    <div class="wf-step-title">${step.icon} ${step.label} · ${st.done?'✅ 已完成':'进行中'}</div>`;

  // Checklist
  step.checks.forEach((chk, ci) => {
    const done = st.checks[ci];
    html += `<div class="checklist-item${done?' done':''}" onclick="toggleCheck(${wfStep},${ci})">
      <div class="ck-box">${done?'✓':''}</div>
      <div class="ck-text">${chk}</div>
    </div>`;
  });

  // Mistakes
  html += `<div class="collapse-toggle${st.mistakesOpen?' open':''}" onclick="toggleMFold(${wfStep},'mistakes')">
    <span>⚠️ 新手常犯错误</span><span class="arrow">▼</span>
  </div>
  <div class="collapse-body${st.mistakesOpen?' open':''}"><ul>${step.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></div>`;

  // Tips
  html += `<div class="collapse-toggle${st.tipsOpen?' open':''}" onclick="toggleMFold(${wfStep},'tips')">
    <span>💡 客户沟通技巧</span><span class="arrow">▼</span>
  </div>
  <div class="collapse-body${st.tipsOpen?' open':''}"><ul>${step.tips.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;

  // Footer button
  html += `<div class="wf-step-footer">`;
  if (st.done) {
    html += `<button class="btn btn-secondary btn-block" onclick="undoStep(${wfStep})">↩ 撤销完成</button>`;
  } else {
    const allChecked = st.checks.every(c => c);
    html += `<button class="btn btn-primary btn-block${allChecked?'':' btn-secondary'}" onclick="completeStep(${wfStep})" ${allChecked?'':'disabled'}>${allChecked?'✅ 标记此步骤完成':'请先完成所有 checklist 项目'}</button>`;
  }
  html += `</div></div>`;

  el.innerHTML = html;
}

function toggleCheck(si, ci) {
  const wf = getWF();
  wf.steps[si].checks[ci] = !wf.steps[si].checks[ci];
  saveWF(); renderWF();
}
function toggleMFold(si, key) {
  const wf = getWF();
  wf.steps[si][key+'Open'] = !wf.steps[si][key+'Open'];
  saveWF(); renderWF();
}
function completeStep(si) {
  const wf = getWF();
  wf.steps[si].done = true;
  saveWF();
  if (si < WF_STEPS.length - 1) setWFStep(si + 1);
  renderWF();
}
function undoStep(si) {
  const wf = getWF();
  wf.steps[si].done = false;
  saveWF(); renderWF();
}

// ═══════════════════════════════════════════
// 9. MODULE: MATERIALS
// ═══════════════════════════════════════════

function renderMat() {
  const el = document.getElementById('matContent');
  let html = '<div class="sub-tabs">';
  MAT_CATS.forEach(c => {
    html += `<button class="sub-tab${matSubTab===c.id?' active':''}" onclick="matSubTab='${c.id}';renderMat()">${c.icon} ${c.label}</button>`;
  });
  html += '</div><div class="cards-grid" style="padding-top:4px">';

  const items = MAT_DATA.filter(d => d.cat === matSubTab);
  items.forEach((item, i) => {
    const priceDots = '¥'.repeat(item.price||1) + '<span class="muted">' + '¥'.repeat(3-(item.price||1)) + '</span>';
    html += `<div class="card" style="animation-delay:${Math.min(i,15)*30}ms;cursor:pointer" onclick="showMatDetail('${item.id}')">
      <div class="card-inner" style="flex-direction:column;align-items:stretch;padding:14px 16px">
        <div class="mat-card-header">
          <div class="mat-card-name">${item.name}</div>
          <div class="mat-card-price">${priceDots}</div>
        </div>
        <div class="mat-card-specs"><span class="mat-spec">${item.spec||''}</span></div>
        <div class="mat-card-pros">
          ${(item.pros||[]).slice(0,3).map(p => `<span class="mat-pros">${p}</span>`).join('')}
          ${(item.cons||[]).slice(0,1).map(c => `<span class="mat-cons">${c}</span>`).join('')}
        </div>
        <div class="mat-card-uses">适用：${item.uses||''}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

function showMatDetail(id) {
  const item = MAT_DATA.find(d => d.id === id);
  if (!item) return;
  const priceDots = '¥'.repeat(item.price||1) + '<span class="muted">' + '¥'.repeat(3-(item.price||1)) + '</span>';
  let html = `<div class="modal-cat">🔩 ${MAT_CATS.find(c=>c.id===item.cat)?.label||''}</div>
    <div class="modal-title">${item.name}</div>
    <div class="mat-card-price" style="margin:4px 0 8px;font-size:16px">${priceDots}</div>
    <div class="modal-section">
      <h4>📋 规格</h4><p>${item.spec}</p>
    </div>
    <div class="modal-section">
      <h4>✅ 优点</h4><ul>${(item.pros||[]).map(p=>`<li>${p}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>❌ 缺点</h4><ul>${(item.cons||[]).map(c=>`<li>${c}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>🔧 适用场景</h4><p>${item.uses}</p>
    </div>
    <div class="modal-section">
      <h4>📖 详细说明</h4><p>${item.desc||''}</p>
    </div>`;
  showModal(html);
}

// ═══════════════════════════════════════════
// 10. MODULE: STYLE EXPLORER (智能风格推荐)
// ═══════════════════════════════════════════

// ─── Style Knowledge Base ──────────────────
const STYLE_DB = [
  { id:'song', name:'宋式美学', icon:'🏮', sub:'大道至简 · 文人风骨',
    desc:'宋代美学追求极简雅致，强调「器以载道」。在家具设计中表现为比例修长、线条简洁、不事雕琢。适合追求文化底蕴和禅意的客户。',
    colors:['#8B7355','#F5F0E8','#D4C5A9','#C41E3A','#2F1B14'],
    colorNames:['柚木色','素白','牙白','朱红','墨黑'],
    panels:'樱桃木 / 胡桃木 / 白橡木（木蜡油涂装）',
    finishes:'木蜡油 / 哑光清漆（露木纹）',
    hardware:'黄铜长拉手 / 古铜合页 / 无拉手（暗弹）',
    countertop:'岩板（哑光面）/ 实木台面',
    lines:'直线为主，比例修长秀美',
    doors:'平板门 + 嵌入式细线条（0.5-1cm宽）',
    handles:'黄铜长拉手（150-200mm）/ 反弹器免拉手',
    legs:'细腿高脚（柜底离地150-200mm）',
    vibe:'宁静、雅致、空灵',
    tips:['柜门比例讲究「黄金分割」','颜色不超过3种，以素色为主','可搭配水墨画/书法装饰拉手','灯光用暖光2700-3000K','五金件露出的地方要精致'] },
  { id:'ming', name:'明式风格', icon:'🏯', sub:'简练朴素 · 工善其事',
    desc:'明式家具被誉为世界家具的巅峰。造型简练、结构严谨、做工精巧。全屋定制中取其线条之神、结构之巧，做出现代又古典的设计。',
    colors:['#4A3728','#D4A574','#E8D5B7','#8B0000','#F5E6D0'],
    colorNames:['紫檀色','黄花梨','米色','绛红','宣纸白'],
    panels:'北美黑胡桃 / 樱桃木 / 白蜡木',
    finishes:'开放漆 / 木蜡油（保留木孔质感）',
    hardware:'黄铜面页 / 白铜拉手 / 手工锻打铁件',
    countertop:'实木拼板 / 青石 / 砚石',
    lines:'线条流畅有力，方中有圆',
    doors:'攒框装板（传统榫卯结构表现）',
    handles:'铜质吊牌 / 面页 + 纽头',
    legs:'内翻马蹄足 / 直腿（稳重感）',
    vibe:'书卷气、雅致、从容',
    tips:['可做局部「格角榫」结构外露作为装饰','木材选择＞颜色选择，用木材本身的质感','柜内隔断可参考明式架格','金属件要少而精','适合搭配书画、盆景软装'] },
  { id:'neo', name:'新中式', icon:'🎋', sub:'古韵今风 · 当代东方',
    desc:'新中式不是照搬传统，而是提取中式美学元素与现代功能融合。保留东方韵味，去掉繁复雕花，更适合现代人的生活。是目前最受欢迎的中式风格。',
    colors:['#3C2A1E','#C0A080','#F5F0EB','#9B1B30','#7A8B6F'],
    colorNames:['深栗色','檀木色','暖白','枣红','竹青'],
    panels:'多层板 + 实木贴皮 / 烤漆面板',
    finishes:'哑光烤漆 / 实木贴皮开放漆',
    hardware:'黑色极简拉手 / 黄铜 / 皮革拉手',
    countertop:'岩板 / 石英石（哑光）',
    lines:'直线为主，局部弧线点缀',
    doors:'平板门 + 金属框玻璃 / 格栅门',
    handles:'竖向长拉手 / 圆形皮革拉手',
    legs:'隐藏式底座 / 细金属腿',
    vibe:'典雅、克制、有温度',
    tips:['留白很重要，柜子不要做满','可加入格栅/屏风元素','灯带用暖光营造氛围','五金选哑光黑色或黄铜','可搭配一幅中式挂画点睛'] },
  { id:'wabi', name:'侘寂风', icon:'🍂', sub:'不完美之美 · 质朴禅意',
    desc:'侘寂（Wabi-sabi）是日本美学概念，接受不完美、无常和残缺。在设计中表现为天然材质、手工质感、不对称美。适合追求内心平静的客户。',
    colors:['#C2B8A8','#E5DDD3','#A09080','#6B5B4E','#2C241E'],
    colorNames:['灰泥','米白','砂赭','枯茶','墨'],
    panels:'实木（带节疤/纹理）/ 艺术涂料 / 微水泥',
    finishes:'微水泥 / 艺术涂料 / 木蜡油',
    hardware:'哑光黑铁 / 藤编拉手 / 无拉手',
    countertop:'微水泥 / 石材（哑光）/ 实木',
    lines:'自然有机形态，非对称',
    doors:'藤编门板 / 哑光烤漆 / 手工感纹理',
    handles:'藤编拉手 / 皮带拉手 / 反弹器',
    legs:'直接落地 / 敦实的短腿',
    vibe:'安静、质朴、岁月感',
    tips:['接受材料的「不完美」——木节疤、手工痕迹','颜色用大地色系：米、灰、棕、赭','灯光用暖光+局部重点照明','少即是多，留出大量空白','配陶罐、枯枝、亚麻等软装'] },
  { id:'nordic', name:'北欧风', icon:'❄️', sub:'简约温暖 · 功能至上',
    desc:'北欧风格注重功能性、简洁线条和温暖氛围。大量使用浅色木材、白色和柔和色彩。适合追求温馨、明亮、实用性强的年轻客户。',
    colors:['#F5F5F0','#D4C9B0','#8FA0A0','#E8C4A0','#5A7A6A'],
    colorNames:['纯白','浅米','雾灰蓝','燕麦','鼠尾绿'],
    panels:'白橡木 / 桦木 / 松木 / 白色哑光烤漆',
    finishes:'木蜡油（浅色）/ 哑光烤漆',
    hardware:'黑色哑光 / 银色金属 / 皮质拉手',
    countertop:'石英石白色 / 橡木实木台面',
    lines:'简洁直线，偶有圆角',
    doors:'平板门 + 线条装饰 / 混油白色',
    handles:'圆形/球形小拉手 / 短皮质拉手',
    legs:'细金属腿（黑色/银色）/ 柜体悬空',
    vibe:'明亮、温暖、自然',
    tips:['白色为主+木色点缀最经典','柜门用平板门不要造型','柜体底部悬空显轻盈','搭配绿植和暖色软装','收纳要「藏八露二」'] },
  { id:'minimal', name:'极简风', icon:'◻️', sub:'少即是多 · 极致纯净',
    desc:'极简主义将「少即是多」贯彻到极致。无装饰、无冗余、只有功能。柜体像建筑一样干净利落，门板无缝、无拉手、无线条。',
    colors:['#F5F5F5','#E8E8E8','#C0C0C0','#2C2C2C','#FFFFFF'],
    colorNames:['暖白','浅灰','中灰','深炭','纯白'],
    panels:'哑光烤漆 / 肤感膜 / PET门板',
    finishes:'肤感哑光 / 烤漆（不做开放漆）',
    hardware:'反弹器 / 内嵌拉手 / 柜门一体拉手',
    countertop:'岩板 / 石英石（无缝拼接）',
    lines:'绝对直线，无任何弧度装饰',
    doors:'一门到顶（超高门）/ 无拉手',
    handles:'无拉手（反弹器/G型拉手槽）',
    legs:'地台底座（内收）/ 全落地',
    vibe:'纯净、秩序、克制',
    tips:['一门到顶需要加拉直器','反弹器选质量好的','颜色用同色系深浅搭配','收口条做到最窄（18mm）','表面不要有任何多余的线条'] },
  { id:'luxe', name:'轻奢风', icon:'💎', sub:'低调奢华 · 精致格调',
    desc:'轻奢风介于奢华和简约之间。用高品质材料、精致细节、金属点缀来营造高级感，但不浮夸。适合追求生活品质的都市人群。',
    colors:['#F5F0EB','#C0A080','#2C2C2C','#A0785A','#D4A84B'],
    colorNames:['奶油灰','金棕色','深炭','奶茶','香槟金'],
    panels:'烤漆 / 实木贴皮 / 皮革硬包门板',
    finishes:'高光/哑光烤漆 / 实木贴皮',
    hardware:'金色拉手 / 不锈钢镀铜 / 水晶拉手',
    countertop:'岩板 / 大理石（亮面）',
    lines:'直线为主 + 局部弧线/倒角',
    doors:'造型门板（菱形/方格）/ 嵌金属条',
    handles:'长条形金色拉手 / 贝壳拉手',
    legs:'金属包脚 / 柜底灯带（悬浮感）',
    vibe:'精致、高级、有质感',
    tips:['金属色点缀（金色/铜色），不要大面积','柜门可做局部皮革/玻璃材质','灯光用灯带+射灯营造高级感','拉手是轻奢的灵魂，选好的','颜色选暖色调更显贵'] },
  { id:'industrial', name:'工业风', icon:'🏭', sub:'粗犷真实 · 结构美学',
    desc:'工业风源于旧厂房改造，强调建筑原始结构的美感。暴露的金属、混凝土、粗木材是其标志。适合有态度的年轻客户或办公/商业空间。',
    colors:['#4A4A4A','#8B7D70','#2C2C2C','#D4C9B0','#A0522D'],
    colorNames:['水泥灰','铁锈褐','纯黑','旧木色','铜绿'],
    panels:'金属 / 回收旧木 / 混凝土板 / 多层板',
    finishes:'金属拉丝 / 清漆（不遮木材瑕疵）',
    hardware:'黑色铁艺 / 工业管拉手 / 明装合页',
    countertop:'不锈钢 / 混凝土 / 石材',
    lines:'硬朗直线，粗犷有力',
    doors:'金属框门 / 旧木门板 / 开放式金属架',
    handles:'工业管拉手 / 铁艺L型拉手',
    legs:'黑色钢管腿 / 金属工业脚',
    vibe:'硬朗、真实、有个性',
    tips:['金属+木头+混凝土三种材质搭配','柜门可做格栅铁网门','灯光用轨道射灯/钨丝灯','故意的粗糙比精致更重要','搭配皮质/亚麻软装'] },
  { id:'japanese', name:'日式风', icon:'🌸', sub:'禅意自然 · 悠然自得',
    desc:'日式风格强调自然、简约和禅意。大量使用原木、竹、纸等天然材料，色彩柔和朴素。追求人与自然的和谐，让居住者感到平静。',
    colors:['#E8DDD0','#D4C5A9','#A09080','#5A7A6A','#F5F0EB'],
    colorNames:['米色','浅木','竹褐','抹茶绿','白'],
    panels:'浅色实木（橡木/杉木/松木）/ 实木多层',
    finishes:'木蜡油（保持浅色）/ 哑光清漆',
    hardware:'哑光黑 / 古铜 / 木质拉手',
    countertop:'实木台面 / 不锈钢 / 人造石',
    lines:'柔和直线，避免尖锐角',
    doors:'格栅门 / 纸门（障子风格）/ 平板木门',
    handles:'皮质拉手 / 木质圆拉手',
    legs:'细木腿（离地100mm）/ 落地',
    vibe:'宁静、自然、温暖',
    tips:['木材选用浅色：白橡、杉木、松木','柜门可做局部格栅','室内与室外打通（阳台纳入）','用亚麻/棉质软装','灯光以间接照明为主'] },
  { id:'french', name:'法式奶油', icon:'🥐', sub:'优雅浪漫 · 柔和甜美',
    desc:'法式奶油风是法式古典的现代演绎。用柔和的弧线、细腻的线条、奶油般的色彩营造出浪漫优雅的氛围。受年轻女性客户喜爱。',
    colors:['#FFF8F0','#E8D5C4','#D4B8A0','#C09A7A','#8B7355'],
    colorNames:['奶油白','杏仁','裸粉','焦糖','巧克力'],
    panels:'烤漆 / 实木贴皮 / 吸塑门板',
    finishes:'哑光烤漆（蛋壳光）/ 吸塑肤感',
    hardware:'金色复古拉手 / 陶瓷拉手 / 水晶',
    countertop:'岩板（暖白）/ 大理石',
    lines:'弧线+直线结合，柜门做圆角',
    doors:'回字形扣线门板 / 拱形装饰',
    handles:'金色贝壳拉手 / 陶瓷圆拉手 / 长条',
    legs:'弧线脚 / 金属弯脚',
    vibe:'浪漫、温柔、甜美',
    tips:['柜门做扣线造型（回字框）','转角做圆弧处理','颜色用暖白/奶咖/裸粉','拉手选金色或珍珠白','可搭配石膏线条+灯盘'] },
  { id:'wood', name:'原木风', icon:'🌲', sub:'返璞归真 · 自然呼吸',
    desc:'原木风以天然木材为主导，保留木纹本身的美丽。不刻意修饰，让木材的色泽、纹理成为空间的主角。适合热爱自然、追求健康生活的客户。',
    colors:['#D4C5A9','#C0A080','#F5F0EB','#A09080','#8B7355'],
    colorNames:['浅橡','原木色','米白','风化木','胡桃'],
    panels:'橡木 / 白蜡木 / 樱桃木 / 松木',
    finishes:'木蜡油 / 清漆（保持原色）',
    hardware:'木头拉手 / 黑色哑光 / 黄铜',
    countertop:'实木大板 / 岩板',
    lines:'自然流畅，保留边材/节疤',
    doors:'实木拼板 / 木条门（直棂）',
    handles:'木球拉手 / 真皮拉手',
    legs:'直接落地 / 原木色方腿',
    vibe:'温暖、质朴、自然',
    tips:['木材种类要统一（全屋同一种木）','不要覆盖木纹——木蜡油最合适','自然光是最好的打光','预留伸缩缝（实木会变形）','可搭配藤编、麻布等天然材质'] },
  { id:'american', name:'美式风格', icon:'🏛️', sub:'舒适大气 · 经典休闲',
    desc:'美式风格追求舒适、自在、不刻意的精致。空间开阔、功能实用。适合别墅、大平层等大面积住宅，是在中国非常受欢迎的风格。',
    colors:['#D4C5A9','#F5F0EB','#8B7355','#2F1B14','#6B8E6B'],
    colorNames:['米色','奶油白','咖啡','深棕','橄榄绿'],
    panels:'樱桃木 / 红橡木 / 实木多层贴皮',
    finishes:'哑光漆 / 手工擦色（做旧感）',
    hardware:'古铜拉手 / 陶瓷圆钮 / 贝壳拉手',
    countertop:'花岗岩 / 石英石 / 实木台面',
    lines:'直线为主，门板带凹凸造型',
    doors:'扣线门板（凹凸造型）/ 百叶门',
    handles:'古铜圆形/长条形拉手',
    legs:'车木腿 / 弧线脚（非直腿）',
    vibe:'舒适、经典、自在',
    tips:['柜门做凹凸造型更美式','层板厚实（25mm以上）显稳重','拉手选古铜或哑光金色','踢脚线做高一点（150mm+）','可搭配百叶门元素增添风情'] },
  { id:'modern', name:'现代简约', icon:'▣', sub:'简洁实用 · 历久弥新',
    desc:'现代简约是最受欢迎的家居风格。不追求前卫，不执着传统，注重功能、舒适和耐久。线条干净、配色柔和、材质舒适，不容易过时。',
    colors:['#F5F5F0','#D4D0C8','#A09890','#6B5A4E','#2C2C2C'],
    colorNames:['暖白','浅灰','中灰','深褐','炭黑'],
    panels:'颗粒板 + 哑光烤漆 / PET肤感',
    finishes:'哑光烤漆 / PET肤感 / 免漆板',
    hardware:'黑色哑光 / 银色拉丝 / 反弹器',
    countertop:'石英石 / 岩板（白色/灰色）',
    lines:'干净利落，没有多余装饰',
    doors:'平板门（无造型）/ 无拉手设计',
    handles:'反弹器 / 槽式拉手 / 短棒拉手',
    legs:'底座落地 / 悬空+灯带',
    vibe:'干净、舒适、稳重',
    tips:['白色+木色+灰色是最安全搭配','柜门用无拉手设计更简洁','灯光用中性光4000K刚刚好','收纳遵循「藏八露二」原则','柜体做通顶更显层高'] },
  { id:'vintage', name:'复古中古风', icon:'📻', sub:'怀旧质感 · timeless',
    desc:'中古风（Mid-century Modern）源自20世纪中期。造型简洁但有温度，注重有机曲线、天然材质和大胆配色。近年极受年轻人欢迎。',
    colors:['#D4A574','#C0A080','#A0522D','#2F1B14','#6B8E6B'],
    colorNames:['柚木色','驼色','赤陶','深棕','鼠尾绿'],
    panels:'柚木 / 胡桃木 / 樱桃木（开放漆）',
    finishes:'开放漆 / 木蜡油（显木纹）',
    hardware:'黑色金属 / 黄铜 / 球形拉手',
    countertop:'实木 / 不锈钢 / 石材',
    lines:'有机曲线 + 利落直线结合',
    doors:'平板门 + 斜边/圆角 / 格栅门',
    handles:'金属球形拉手 / 皮质拉手',
    legs:'斜腿（锥形腿）/ 金属细腿',
    vibe:'复古、温暖、有故事',
    tips:['柚木色是中古风的灵魂配色','柜腿用锥形细腿（外八字）最经典','搭配长虹玻璃/水纹玻璃','木色+黑色+绿色是标志性配色','可搭配藤编、金属、亚克力材质'] },
  { id:'taiwan', name:'台式风格', icon:'🏡', sub:'简约温暖 · 实用至上',
    desc:'台式风强调空间通透、动线流畅、收纳强大。用材讲究、细节精致，既现代又有人情味。对中国家庭居住需求的理解非常到位。',
    colors:['#F5F0EB','#D4C9B0','#8B7355','#2F1B14','#A09080'],
    colorNames:['暖白','米灰','木色','深棕','灰褐'],
    panels:'实木贴皮 / 烤漆 / 免漆板（大板幅）',
    finishes:'开放漆（实木贴皮）/ 哑光烤漆',
    hardware:'黑色长拉手 / 隐形拉手 / 反弹器',
    countertop:'岩板 / 石英石 / 实木台面',
    lines:'水平垂直线条，追求秩序感',
    doors:'大板平板门 / 木饰面护墙板',
    handles:'内嵌拉手 / 黑色长条拉手',
    legs:'地台内收 / 悬空+灯带',
    vibe:'温暖、秩序、精致',
    tips:['木饰面可大面积铺陈营造氛围','柜体做通顶+收口极窄显精致','灯光用线性灯带+点光源结合','收纳系统要在平面阶段提前规划','动线流畅比外观更重要'] },
  { id:'cream', name:'奶油风', icon:'☁️', sub:'软糯温柔 · 治愈系',
    desc:'奶油风以同色系奶油色调为主，搭配圆润弧线、柔软质感，营造被包裹的安全感和治愈感。是目前年轻客户群体中最热门的风格。',
    colors:['#FFF8F0','#F5EDE0','#E8DDD0','#D4C5A9','#C0A080'],
    colorNames:['奶油白','杏仁','奶茶','卡其','焦糖'],
    panels:'哑光烤漆 / 吸塑（肤感）/ PET',
    finishes:'肤感哑光 / 蛋壳光烤漆',
    hardware:'哑光白 / 奶油色拉手 / 无拉手',
    countertop:'岩板（暖白）/ 人造石（哑光）',
    lines:'曲线为主，拒绝尖锐棱角',
    doors:'平板门 + 圆角 / 拱形装饰',
    handles:'隐形拉手 / 皮革圆拉手',
    legs:'圆角底座 / 悬空（搭配弧线）',
    vibe:'温柔、柔软、治愈',
    tips:['全屋用同色系（奶油→奶茶→焦糖递进）','柜体转角做圆弧处理更安全','柜门用反弹器免拉手更干净','搭配藤编/绒布/羊毛等柔软软装','灯光用暖光3000K营造氛围'] },
  { id:'neoclassic', name:'简欧/新古典', icon:'🏰', sub:'优雅比例 · 精致线条',
    desc:'简欧是将欧洲古典元素的现代化简化。保留经典比例和精致线条，去掉繁复雕花和过度装饰。适合喜欢欧式优雅又不想太过奢华隆重的客户。',
    colors:['#F5F0EB','#E8DDD0','#C0A080','#8B7355','#2F1B14'],
    colorNames:['象牙白','米色','金色','咖啡','深褐'],
    panels:'烤漆 / 实木贴皮 / 吸塑门板',
    finishes:'哑光烤漆（蛋壳光）/ 开放漆',
    hardware:'金色拉手 / 水晶 / 陶瓷',
    countertop:'大理石 / 岩板白色',
    lines:'对称、均衡、有节奏感',
    doors:'回字形扣线门板 / 拱形柜',
    handles:'金色长拉手 / 水晶圆钮',
    legs:'弧线脚 / 罗马柱装饰',
    vibe:'优雅、庄重、经典',
    tips:['对称设计是简欧的灵魂','柜门做扣线造型（框宽2-3cm）','罗马柱和顶线做局部点缀即可','颜色用象牙白配金色最经典','点到为止，不要过度装饰'] },
];

const REC_SPACES = [
  { id:'kitchen', name:'厨房', icon:'🍳' },
  { id:'bedroom', name:'卧室', icon:'🛏️' },
  { id:'living',  name:'客厅', icon:'🛋️' },
  { id:'entry',   name:'玄关', icon:'🚪' },
  { id:'study',   name:'书房', icon:'📚' },
  { id:'closet',  name:'衣帽间', icon:'👗' },
  { id:'whole',   name:'全屋', icon:'🏠' },
];

// ─── Online reference image search ──
const REF_SOURCES = { znzmo:{ label:'知末网', url:(q)=>`https://www.znzmo.com/general.html?keyword=${encodeURIComponent(q)}&st=-5` }, xiaohongshu:{ label:'小红书', url:(q)=>`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}` } };

function refSearchUrl(q) {
  return (REF_SOURCES[refSource] || REF_SOURCES.znzmo).url(q);
}
function warmZnzmo() {
  fetch('https://www.znzmo.com', { mode: 'no-cors' }).catch(() => {});
}

function aiPrompt(spaceId, styleName, planLabel, layout) {
  const sn = REC_SPACES.find(s=>s.id===spaceId)?.name||'';
  return `${sn} ${styleName}风格 定制家具 ${layout}布局 室内设计效果图 实景 高清`;
}

// ─── Canvas reference card: rich visual from plan data ──
function genRefCard(spaceId, styleName, planLabel, layout, colorArr, colorNames) {
  const W = 400, H = 300;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const colors = colorArr && colorArr.length ? colorArr : ['#c47040','#e8c4a8','#fcefe6'];

  // Background
  const grad = ctx.createLinearGradient(0,0,W,0);
  grad.addColorStop(0, colors[0] || '#c47040');
  grad.addColorStop(1, colors[1] || '#e8c4a8');
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);

  // White card area
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.beginPath(); const m=15, r2=12;
  ctx.moveTo(m+r2,m); ctx.lineTo(W-m-r2,m);
  ctx.quadraticCurveTo(W-m,m,W-m,m+r2);
  ctx.lineTo(W-m,H-m-r2);
  ctx.quadraticCurveTo(W-m,H-m,W-m-r2,H-m);
  ctx.lineTo(m+r2,H-m);
  ctx.quadraticCurveTo(m,H-m,m,H-m-r2);
  ctx.lineTo(m,m+r2);
  ctx.quadraticCurveTo(m,m,m+r2,m);
  ctx.closePath(); ctx.fill();

  // Layout diagram (top area)
  const lw = 160, lh = 110, lx = 220, ly = 20;
  ctx.fillStyle = '#f5f0eb';
  ctx.fillRect(lx, ly, lw, lh);
  ctx.strokeStyle = '#2d1810'; ctx.lineWidth = 0.5;
  ctx.strokeRect(lx, ly, lw, lh);

  // Simplified layout shapes
  const isL = layout.includes('L'); const isU = layout.includes('U');
  const isLine = layout.includes('一字'); const isIsland = layout.includes('中岛');
  const cd = 24;
  ctx.fillStyle = 'rgba(196,112,64,0.3)';
  if (isL) {
    ctx.fillRect(lx, ly+lh-cd, lw, cd);
    ctx.fillRect(lx+lw-cd, ly, cd, lh);
  } else if (isU) {
    ctx.fillRect(lx, ly+lh-cd, lw, cd);
    ctx.fillRect(lx, ly, cd, lh);
    ctx.fillRect(lx+lw-cd, ly, cd, lh-cd/2);
  } else if (isIsland) {
    ctx.fillRect(lx, ly+10, lw, cd);
    ctx.fillRect(lx, ly+lh-cd-10, lw, cd);
    ctx.fillRect(lx+lw/2-15, ly+lh/2-8, 30, 16);
  } else {
    ctx.fillRect(lx+10, ly+lh-cd, lw-20, cd);
    ctx.fillRect(lx+10, ly+10, lw-20, cd*0.6);
  }
  ctx.strokeStyle = '#c47040'; ctx.lineWidth = 0.5;
  ctx.strokeRect(lx, ly, lw, lh);

  // Label: plan name
  ctx.fillStyle = '#2d1810';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(planLabel, 25, 42);

  // Style + Room
  ctx.fillStyle = '#8b7355';
  ctx.font = '12px sans-serif';
  ctx.fillText([styleName, spaceId].filter(Boolean).join(' · '), 25, 62);

  // Color swatches
  const swY = 75, swSize = 20, swGap = 6;
  (colors||[]).slice(0,6).forEach((clr, i) => {
    ctx.fillStyle = clr;
    const sx = 25 + i*(swSize+swGap);
    ctx.fillRect(sx, swY, swSize, swSize);
    ctx.strokeStyle = 'rgba(0,0,0,0.1)'; ctx.lineWidth = 0.5;
    ctx.strokeRect(sx, swY, swSize, swSize);
    if (colorNames && colorNames[i]) {
      ctx.fillStyle = '#999'; ctx.font = '8px sans-serif';
      ctx.fillText(colorNames[i], sx, swY+swSize+11);
    }
  });

  // Layout type tag
  const tagY = 115;
  ctx.fillStyle = '#c47040'; ctx.font = 'bold 11px sans-serif';
  ctx.fillText('📐 ' + layout, 25, tagY);

  // Divider
  ctx.strokeStyle = '#f0e6de'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(25, 132); ctx.lineTo(W-25, 132); ctx.stroke();

  // Bottom: room info + "reference card" label
  const spaceName = REC_SPACES.find(s=>s.id===spaceId)?.name||'';
  ctx.fillStyle = '#bbb'; ctx.font = '10px sans-serif';
  ctx.fillText('全屋定制助手 · 设计参考' + (spaceName?' · '+spaceName:''), 25, H-18);

  // Corner mark
  ctx.fillStyle = 'rgba(196,112,64,0.06)';
  ctx.beginPath(); ctx.moveTo(W-35, 0); ctx.lineTo(W, 0); ctx.lineTo(W, 35); ctx.closePath(); ctx.fill();

  return c.toDataURL('image/jpeg', 0.85);
}

// ─── Try loading real images from Chinese-accessible CDN ──
const unsplashIds = {
    kitchen: '1556909114-f6e7ad7d3136',
    bedroom: '1616594039964-ae9021a400a0',
    living: '1586023492125-27b2c045efd7',
    study: '1593061956140-5c1fc8e8c4c0',
    entry: '1558618666-fcd25c85f82e',
    closet: '1597006335770-25b6a72cb883',
    tatami: '1516458226156-cda4264f2ef2',
    bathroom: '1584622650111-993b4266e7a2',
    whole: '1558618666-fcd25c85f82e',
  };
function tryRealRefImg(roomType, callback) {
  const id = unsplashIds[roomType] || unsplashIds.kitchen;
  const url = `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&auto=format`;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    // Compress to data URL to avoid CORS issues on re-display
    const c = document.createElement('canvas');
    c.width = 400; c.height = 300;
    c.getContext('2d').drawImage(img, 0, 0, 400, 300);
    callback(c.toDataURL('image/jpeg', 0.8));
  };
  img.onerror = () => callback(null);
  img.src = url;
  // Timeout after 5s
  setTimeout(() => { if (!img.complete) { img.src = ''; callback(null); } }, 5000);
}

// ─── Validate Unsplash photo IDs on startup ──
const validUnsplashIds = new Set();
function validateUnsplashIds() {
  const ids = Object.values(unsplashIds);
  ids.forEach(id => {
    const img = new Image();
    img.onload = () => validUnsplashIds.add(id);
    img.onerror = () => {}; // leave out of valid set
    img.src = `https://images.unsplash.com/photo-${id}?w=1&h=1&fit=crop&auto=format`;
  });
}
// Patch tryRealRefImg to only use validated IDs
const _origTryRealRefImg = tryRealRefImg;
function _patchedTryRealRefImg(roomType, callback) {
  const id = unsplashIds[roomType] || unsplashIds.kitchen;
  if (validUnsplashIds.size > 0 && !validUnsplashIds.has(id)) {
    // This ID hasn't been validated yet (or failed) - skip to avoid slow timeout
    callback(null);
    return;
  }
  // Use original
  _origTryRealRefImg(roomType, callback);
}
// Swap in the patched version after a short delay for validation to start
setTimeout(() => { tryRealRefImg = _patchedTryRealRefImg; }, 3000);

const PROXY_IMG_KEY = 'ff_uploadedImgs';

// ─── Shared AI image loader: 4-level proxy chain + Unsplash fallback ──
function tryLoadAIImage(prompt, space, onSuccess, onFallback) {
  const tryLevel = (lvl) => {
    let src;
    const p = encodeURIComponent(prompt);
    if (lvl === 1) src = `https://image.pollinations.ai/prompt/${p}?width=400&height=300&model=turbo&nologo=true&seed=${Date.now()}`;
    else if (lvl === 2) src = `https://pollinations.ai/p/${p}?width=400&height=300&nologo=true&seed=${Date.now()}`;
    else if (lvl === 3) src = `https://corsproxy.io/?url=${encodeURIComponent('https://image.pollinations.ai/prompt/'+p+'?width=400&height=300&nologo=true&seed='+Date.now())}`;
    else if (lvl === 4) src = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://pollinations.ai/p/'+p+'?width=400&height=300&nologo=true&seed='+Date.now())}`;
    else { tryRealRefImg(space, onFallback); return; }
    const test = new Image();
    if (lvl >= 3) test.crossOrigin = 'anonymous';
    test.onload = () => onSuccess(src);
    test.onerror = () => tryLevel(lvl + 1);
    test.src = src;
  };
  tryLevel(1);
}

// ─── Background AI image loader ──
function bgLoadPlanImages() {
  document.querySelectorAll('.plan-images img[data-prompt]').forEach(el => {
    const prompt = el.dataset.prompt;
    if (!prompt) return;
    if (el.dataset.bgLoaded) return;
    el.dataset.bgLoaded = '1';
    el.classList.add('img-loading');
    const space = el.dataset.space || '';
    tryLoadAIImage(prompt, space,
      src => { el.src = src; el.dataset.loaded = 'ai'; el.classList.remove('img-loading'); },
      dataURL => { el.classList.remove('img-loading'); if (dataURL) el.src = dataURL; }
    );
  });
}

// imgError is kept as safety net but should rarely fire now
function imgError(el) {
  const lvl = (parseInt(el.dataset.err)||0) + 1;
  el.dataset.err = lvl;
  // On first failure: show canvas card immediately
  if (lvl === 1) {
    const space = el.dataset.space || recSpace || '';
    const style = el.dataset.style || '';
    const label = el.dataset.plan || '';
    const layout = el.dataset.layout || '';
    let colors = [], cnames = [];
    try { if (el.dataset.colors) colors = JSON.parse(el.dataset.colors); } catch(e) {}
    try { if (el.dataset.cnames) cnames = JSON.parse(el.dataset.cnames); } catch(e) {}
    el.src = genRefCard(space, style, label, layout, colors, cnames);
    el.style.cssText = 'width:120px;height:90px;object-fit:cover;border-radius:6px;flex-shrink:0;cursor:pointer';
    el.classList.add('img-loading');
    el.onclick = function(){showImg(this.src)};
    // Start background AI load
    if (el.dataset.prompt) {
      el.dataset.bgLoaded = '1';
      tryLoadAIImage(el.dataset.prompt, space,
        src => { el.src = src; el.dataset.loaded = 'ai'; el.classList.remove('img-loading'); },
        dataURL => { el.classList.remove('img-loading'); if (dataURL) el.src = dataURL; }
      );
    }
    return;
  }
  // If AI retries in progress fail, canvas card is already showing, nothing to do
}

// ─── Uploaded Plan Images ──
function getUploadedImg(hash) {
  try {
    const all = JSON.parse(localStorage.getItem(PROXY_IMG_KEY)||'{}');
    return all[hash] || '';
  } catch(e) { return ''; }
}
function saveUploadedImg(hash, dataURL) {
  try {
    const all = JSON.parse(localStorage.getItem(PROXY_IMG_KEY)||'{}');
    all[hash] = dataURL;
    localStorage.setItem(PROXY_IMG_KEY, JSON.stringify(all));
  } catch(e) { toast('存储已满，无法保存图片'); }
}
function delUploadedImg(hash) {
  try {
    const all = JSON.parse(localStorage.getItem(PROXY_IMG_KEY)||'{}');
    delete all[hash];
    localStorage.setItem(PROXY_IMG_KEY, JSON.stringify(all));
  } catch(e) {}
}
function uploadPlanImg(hash) {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'image/*';
  inp.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    // Compress via canvas to save space
    const reader = new FileReader();
    reader.onload = function(ev) {
      const img = new Image();
      img.onload = function() {
        const c = document.createElement('canvas');
        const MAX = 400;
        let w = img.width, h = img.height;
        if (w > MAX) { h = h * MAX / w; w = MAX; }
        if (h > MAX) { w = w * MAX / h; h = MAX; }
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        const dataURL = c.toDataURL('image/jpeg', 0.7);
        saveUploadedImg(hash, dataURL);
        toast('图片已上传 ✅');
        // Re-render to show the uploaded image
        const imgs = document.querySelectorAll('.img-placeholder');
        imgs.forEach(pl => {
          if (pl.innerHTML.includes(hash)) {
            pl.outerHTML = `<img src="${dataURL}" alt="已上传参考图" style="width:120px;height:90px;object-fit:cover;border-radius:6px;flex-shrink:0;cursor:pointer" onclick="showImg(this.src)">`;
          }
        });
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  inp.click();
}

const SPACE_DIMS = { kitchen:{w:3,l:2}, bedroom:{w:4,l:3.5}, living:{w:5,l:4}, entry:{w:1.8,l:1.5}, study:{w:3,l:2.8}, closet:{w:2.5,l:2}, whole:{w:8,l:6} };
// Restore saved dimensions per space type
try { const _sd = JSON.parse(localStorage.getItem('ff_spaceDims')||'{}'); Object.keys(_sd).forEach(k => { if (SPACE_DIMS[k]) SPACE_DIMS[k] = _sd[k]; }); } catch(e) {}
function saveSpaceDims() { try { const _a = JSON.parse(localStorage.getItem('ff_spaceDims')||'{}'); _a[recSpace] = { w: recW, l: recL }; localStorage.setItem('ff_spaceDims', JSON.stringify(_a)); } catch(e) {} }

// ─── State ──
// mode: 'discover' (search/grid) | 'style' (style detail) | 'apply' (space form) | 'results'
let recMode = 'discover';
let recSearch = '';
let recStyle = null; // selected style id from STYLE_DB
let recSpace = 'kitchen';
let recW = SPACE_DIMS[recSpace].w, recL = SPACE_DIMS[recSpace].l;
let recGrade = 'std';
let recResults = null;
let refSource = localStorage.getItem('ff_refSource') || 'znzmo';
function isPlanSaved(pi) { const plan=recResults[pi]; return plan?savedPlans.some(p=>p.planId===plan.id&&p.space===recSpace&&p.styleId===recStyle):false; }
function toggleSavePlan(pi) {
  const plan = recResults[pi]; if(!plan) return;
  const idx = savedPlans.findIndex(p => p.planId===plan.id && p.space===recSpace && p.styleId===recStyle);
  if (idx>=0) { savedPlans.splice(idx,1); savePlans(); toast('已取消收藏'); }
  else {
    const s = STYLE_DB.find(x=>x.id===recStyle);
    const refImg = genRefCard(recSpace, s?.name||'', plan.label, plan.layout, s?.colors, s?.colorNames);
    savedPlans.unshift({ id:Date.now().toString(36)+Math.random().toString(36).slice(2,6), savedAt:Date.now(),
      planId:plan.id, styleId:recStyle, styleName:s?.name||'', styleIcon:s?.icon||'',
      space:recSpace, spaceName:REC_SPACES.find(sp=>sp.id===recSpace)?.name||'', roomW:recW, roomL:recL, plan, refImg });
    savePlans(); toast('方案已收藏');
  }
  renderRecommend();
}
function delSavedPlan(id) { savedPlans=savedPlans.filter(p=>p.id!==id); savePlans(); renderSavedPlans(); }

// ─── Render ──
function renderRecommend() {
  const el = document.getElementById('recommendContent');
  if (recMode === 'discover') renderDiscover();
  else if (recMode === 'style') renderStyleDetail();
  else if (recMode === 'apply') renderApplyForm();
  else if (recMode === 'results') renderStyledResults();
  else if (recMode === 'saved') renderSavedPlans();
}

function renderDiscover() {
  const el = document.getElementById('recommendContent');
  const q = recSearch.toLowerCase();

  let items = q ? STYLE_DB.filter(s =>
    s.name.includes(q) || s.sub.includes(q) || s.desc.includes(q) || s.vibe.includes(q)
  ) : STYLE_DB;

  let html = `<div class="section-title" style="margin-top:4px">🔍 搜索设计风格</div>
    <div class="style-search">
      <span class="search-ico">🔎</span>
      <input type="text" id="styleSearch" value="${recSearch}" placeholder="如：宋式美学、侘寂风、工业风..." autocomplete="off" oninput="recSearch=this.value;renderDiscover()">
    </div>
    ${savedPlans.length ? `<button class="btn btn-sm btn-secondary" onclick="recMode='saved';renderRecommend()" style="margin:6px 0 4px;width:100%">📁 我的收藏 (${savedPlans.length})</button>` : ''}
    <div style="display:flex;gap:4px;margin:4px 0;font-size:11px;color:var(--text-muted);align-items:center;justify-content:center">
      <span>搜参考图:</span>
      ${Object.entries(REF_SOURCES).map(([k,v]) => `<button class="btn btn-sm ${refSource===k?'':'btn-secondary'}" style="font-size:10px;padding:2px 8px" onclick="refSource='${k}';localStorage.setItem('ff_refSource','${k}');renderDiscover()">${v.label}</button>`).join('')}
    </div>`;

  if (!items.length) {
    html += `<div class="empty-state"><span class="emoji">🔍</span><h3>没有匹配的风格</h3><p>试试换个关键词搜索</p></div>`;
    el.innerHTML = html; return;
  }

  html += `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">共 ${items.length} 种风格</div>
    <div class="style-grid">`;
  items.forEach((s, i) => {
    const bg = s.colors[0] || '#8B7355';
    html += `<div class="style-card" style="animation-delay:${Math.min(i,12)*40}ms" onclick="selectStyle('${s.id}')">
      <div class="style-card-top" style="background:${bg}"><span class="sc-icon">${s.icon}</span></div>
      <div class="style-card-body">
        <div class="style-card-name">${s.name}</div>
        <div class="style-card-sub">${s.sub}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

function selectStyle(id) {
  recStyle = id; recMode = 'style';
  renderRecommend();
}

function renderSavedPlans() {
  const el = document.getElementById('recommendContent');
  if (!savedPlans.length) {
    el.innerHTML = `<button class="btn btn-sm btn-secondary" onclick="recMode='discover';renderRecommend()" style="margin:4px 0 8px">← 返回</button>
      <div class="empty-state"><span class="emoji">📁</span><h3>还没有收藏的方案</h3><p>生成方案后点击"收藏"即可保存</p></div>`;
    return;
  }
  let html = `<button class="btn btn-sm btn-secondary" onclick="recMode='discover';renderRecommend()" style="margin:4px 0 8px">← 返回</button>
    <div class="section-title">📁 我的收藏 (${savedPlans.length})</div>`;
  savedPlans.forEach((sp, i) => {
    const p = sp.plan;
    html += `<div class="rec-plan-card ${p.id}" onclick="showSavedDetail(${i})">
      <div class="rec-plan-badge ${p.id}">${p.badge}</div>
      ${sp.refImg ? `<div style="width:100%;height:100px;border-radius:6px;overflow:hidden;margin-bottom:4px"><img src="${sp.refImg}" style="width:100%;height:100%;object-fit:cover;display:block"></div>` : ''}
      <div class="rec-plan-name" style="color:${p.id==='balanced'?'var(--clay)':p.id==='economy'?'var(--green)':'#b8860b'}">${p.label}</div>
      <div class="rec-plan-desc">${p.desc} · ${sp.spaceName} ${sp.roomW}×${sp.roomL}m</div>
      <div class="rec-plan-meta"><span>🎨 ${sp.styleName}</span><span>📐 ${p.layout}</span><span>🪵 ${p.panel}</span></div>
      <button class="btn btn-sm" style="margin-top:6px;color:var(--red);border-color:var(--red-light)" onclick="event.stopPropagation();if(confirm('删除此收藏？'))delSavedPlan('${sp.id}')">删除</button>
    </div>`;
  });
  el.innerHTML = html;
}
function showSavedDetail(idx) {
  const sp = savedPlans[idx]; if(!sp) return;
  const p = sp.plan;
  const total = sp.space==='whole'?null:Math.round(sp.roomW*sp.roomL*p.pricePerM);
  let html = `<div class="rec-plan-badge ${p.id}" style="margin-bottom:8px">${p.badge}</div>
    <div class="modal-title">${sp.styleIcon} ${p.label}</div>
    <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">${sp.styleName} · ${sp.spaceName} · ${sp.roomW}×${sp.roomL}m</div>
    ${sp.refImg?`<div style="margin:8px 0;border-radius:10px;overflow:hidden;background:var(--cream)"><img src="${sp.refImg}" style="width:100%;display:block;cursor:pointer" onclick="showImg('${sp.refImg}')"></div>`:''}
    <div class="modal-section"><h4>📐 布局方案</h4><p>${p.layout}</p></div>
    <div class="modal-section"><h4>🏗️ 柜体配置</h4><ul>${(p.cabinets||[]).map(c=>`<li>${c}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>🧱 推荐材料</h4><p>板材：${p.panel}<br>五金：${p.hardware}<br>配色：${p.colors}</p></div>
    ${p.notes?`<div class="modal-section"><h4>📝 设计建议</h4><ul>${p.notes.map(n=>`<li>${n}</li>`).join('')}</ul></div>`:''}
    ${total?`<div class="quote-total" style="margin-top:8px"><div class="total-label">预估总价</div><div class="total-number">¥${total.toLocaleString('zh-CN')}<span class="unit">元</span></div></div>`:''}
    <button class="btn btn-sm" style="margin-top:12px;width:100%;color:var(--red);border-color:var(--red-light)" onclick="hideModal();delSavedPlan('${sp.id}')">删除此收藏</button>`;
  showModal(html);
}

function renderStyleDetail() {
  const s = STYLE_DB.find(x => x.id === recStyle);
  if (!s) { recMode='discover'; renderDiscover(); return; }
  const el = document.getElementById('recommendContent');

  let html = `<button class="btn btn-sm btn-secondary" onclick="recMode='discover';renderRecommend()" style="margin:4px 0 8px">← 返回</button>
    <div class="style-hero">
      <div class="style-hero-bg" style="background:${s.colors[0] || '#8B7355'}"><span class="sh-icon">${s.icon}</span></div>
      <div class="style-hero-info">
        <div class="style-hero-name">${s.name}</div>
        <div class="style-hero-sub">${s.sub}</div>
        <div class="style-hero-desc">${s.desc}</div>
      </div>
    </div>

    <div class="section-title">🎨 配色方案</div>
    <div class="color-swatches">`;
  s.colors.forEach((c, i) => {
    html += `<div class="color-swatch" style="background:${c}"><span class="cs-label">${s.colorNames[i]}</span></div>`;
  });
  html += `</div>

    <div class="section-title">🧱 推荐材料</div>
    <div class="info-grid">
      <div class="info-card"><div class="ic-label">🪵 板材</div><div class="ic-value">${s.panels}</div></div>
      <div class="info-card"><div class="ic-label">💅 涂装</div><div class="ic-value">${s.finishes}</div></div>
      <div class="info-card"><div class="ic-label">🔩 五金</div><div class="ic-value">${s.hardware}</div></div>
      <div class="info-card"><div class="ic-label">🪨 台面</div><div class="ic-value">${s.countertop}</div></div>
    </div>

    <div class="section-title">📐 家具特征</div>
    <div class="info-grid">
      <div class="info-card"><div class="ic-label">线条造型</div><div class="ic-value">${s.lines}</div></div>
      <div class="info-card"><div class="ic-label">🚪 门板</div><div class="ic-value">${s.doors}</div></div>
      <div class="info-card"><div class="ic-label">🤌 拉手</div><div class="ic-value">${s.handles}</div></div>
      <div class="info-card"><div class="ic-label">🦵 柜脚</div><div class="ic-value">${s.legs}</div></div>
    </div>

    <div class="info-card" style="margin:8px 0"><div class="ic-label">💫 空间氛围</div><div class="ic-value">${s.vibe}</div></div>

    <div class="section-title">💡 设计师建议</div>
    <div style="background:var(--card);border-radius:var(--radius-sm);padding:12px;font-size:13px;color:var(--text-secondary);line-height:1.7">
      <ul style="padding-left:16px">${s.tips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>

    <button class="btn btn-primary btn-block btn-lg" onclick="startApply()" style="margin:16px 0">📐 应用到空间 →</button>`;

  el.innerHTML = html;
}

function startApply() {
  recMode = 'apply'; renderRecommend();
}

function renderApplyForm() {
  // Sync dimension inputs before re-render
  const wEl = document.getElementById('recW');
  if (wEl) recW = parseFloat(wEl.value) || 0;
  const lEl = document.getElementById('recL');
  if (lEl) recL = parseFloat(lEl.value) || 0;
  if (!recW) recW = (SPACE_DIMS[recSpace]||SPACE_DIMS.kitchen).w; if (!recL) recL = (SPACE_DIMS[recSpace]||SPACE_DIMS.kitchen).l;

  const s = STYLE_DB.find(x => x.id === recStyle);
  const el = document.getElementById('recommendContent');
  let html = `<button class="btn btn-sm btn-secondary" onclick="recMode='style';renderRecommend()" style="margin:4px 0 8px">← 返回</button>
    <div style="font-size:14px;font-weight:600;margin-bottom:4px">${s?s.icon+' '+s.name:'风格'} · 应用到空间</div>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">选择空间类型和尺寸，生成符合${s?s.name:''}的设计方案</div>

    <div class="section-title">🏗️ 空间类型</div>
    <div class="rec-space-grid">`;
  REC_SPACES.forEach(sp => {
    html += `<button class="rec-space-btn${recSpace===sp.id?' active':''}" onclick="recSpace='${sp.id}';var d=SPACE_DIMS['${sp.id}']||SPACE_DIMS.kitchen;var w=document.getElementById('recW'),l=document.getElementById('recL');if(w)w.value=d.w;if(l)l.value=d.l;recW=d.w;recL=d.l;renderApplyForm()">
      <span class="rs-icon">${sp.icon}</span><span class="rs-label">${sp.name}</span></button>`;
  });
  html += `</div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">宽 (m)</label>
        <input class="form-input" id="recW" type="number" step="0.1" value="${recW}"></div>
      <div class="form-group"><label class="form-label">长 (m)</label>
        <input class="form-input" id="recL" type="number" step="0.1" value="${recL}"></div>
    </div>
    <div class="form-group"><label class="form-label">💰 预算等级</label>
      <div class="grade-chips">
        <button class="grade-chip${recGrade==='econ'?' active':''}" onclick="recGrade='econ';renderApplyForm()"><span class="grade-name">经济</span><span class="grade-price">控制预算</span></button>
        <button class="grade-chip${recGrade==='std'?' active':''}" onclick="recGrade='std';renderApplyForm()"><span class="grade-name">标准</span><span class="grade-price">性价比</span></button>
        <button class="grade-chip${recGrade==='prem'?' active':''}" onclick="recGrade='prem';renderApplyForm()"><span class="grade-name">高端</span><span class="grade-price">品质优先</span></button>
      </div></div>
    <button class="btn btn-primary btn-block btn-lg" onclick="generateStyledPlans()">💡 生成 ${s?s.name:''}方案</button>`;
  el.innerHTML = html;
}

function generateStyledPlans() {
  const wEl = document.getElementById('recW');
  if (wEl) recW = parseFloat(wEl.value) || 3.0;
  const lEl = document.getElementById('recL');
  if (lEl) recL = parseFloat(lEl.value) || 3.0;
  if (!recW || !recL) return toast('请输入尺寸');

  // Generate 3 plans: balanced / economy / premium
  const s = STYLE_DB.find(x => x.id === recStyle);
  const area = recW * recL;
  const defaultPrice = recSpace === 'whole' ? 0 : (recSpace === 'bathroom' ? 2000 : 1200);

  const plans = [
    { id:'balanced', badge:'⭐ 推荐', label:'均衡方案',
      desc:`经典 ${s?s.name:'现代'} 设计，平衡美观与预算`,
      layout: recSpace==='kitchen'?(recW<2.2?'一字型':'L型'):'L型',
      cabinets: {
        kitchen:['地柜 3.0m 抽屉×2+拉篮','吊柜 2.4m 平板门','台面 石英石15mm'],
        bedroom:['衣柜 2.0m 短衣+长衣+抽屉','床头柜×2'],
        living:['电视柜 2.4m 抽屉+开放格'],
        entry:['鞋柜 1.2m 活动层板','换鞋凳挂衣区'],
        study:['书桌 1.4m+转角','书柜 1.8m'],
        closet:['L型衣柜 2.4m+1.8m','梳妆台'],
        whole:['全屋各空间标准配置']
      }[recSpace] || ['定制柜体'],
      panel:s?s.panels.split('/')[0].trim():'颗粒板',
      hardware:s?s.hardware.split(' / ')[0]:'阻尼铰链',
      colors:s?s.colorNames.slice(0,3).join('、'):'暖白+木色',
      pricePerM:defaultPrice,
      notes:s?s.tips.slice(0,3):['注意收口细节'] },
    { id:'economy', badge:'💰 经济之选', label:'简约方案',
      desc:`用 ${s?s.name:'现代'} 元素点缀，控制预算`,
      layout: recSpace==='kitchen'?'一字型':'一字型',
      cabinets: {
        kitchen:['地柜 2.4m 对开门×3','吊柜 1.8m'],
        bedroom:['移门衣柜 1.6m'],
        living:['地柜 1.8m 对开门'],
        entry:['薄鞋柜 800mm 翻斗式'],
        study:['书桌 1.2m+壁挂书架'],
        closet:['一字型开放柜+布帘'],
        whole:['厨柜+衣柜核心定制']
      }[recSpace] || ['核心空间柜体'],
      panel:'颗粒板(E1级)',
      hardware:'普通五金',
      colors:s?s.colorNames[1]+'+白':'白色+木色',
      pricePerM:Math.round(defaultPrice*0.6),
      notes:['简化造型节省成本','重点空间做，其他成品替代','颜色选基础款不额外收费'] },
    { id:'premium', badge:'👑 品质之选', label:'高端方案',
      desc:`完整呈现 ${s?s.name:'现代'} 美学，全案落地`,
      layout: recSpace==='kitchen'?(recW<3?'U型':'U型+中岛'):'U型',
      cabinets: {
        kitchen:['地柜 4.0m 抽屉×4+高柜','吊柜 3.0m 玻璃门+灯带','台面 岩板'],
        bedroom:['L型衣帽间 3.0m+2.4m','梳妆台'],
        living:['满墙柜 3.6m 展示+灯带'],
        entry:['L型系统柜 旋转鞋架+挂衣'],
        study:['满墙书柜+双人书桌'],
        closet:['U型衣帽间+中岛'],
        whole:['全屋+护墙板+隐形门']
      }[recSpace] || ['全案定制'],
      panel:s?s.panels.split(' / ').slice(0,2).join('/'):'多层板+实木',
      hardware:s?s.hardware.split(' / ').slice(0,2).join('/'):'进口五金',
      colors:s?s.colorNames.join('、'):'全屋统一风格配色',
      pricePerM:Math.round(defaultPrice*2.2),
      notes:s?s.tips.slice(0,3):['全案设计师跟进','进口五金+激光封边','灯光设计包含在内'] }
  ];

  recResults = plans;
  recMode = 'results';
  renderRecommend();
  setTimeout(() => {
    const el = document.getElementById('recommendContent');
    if (el) el.scrollTop = 0;
  }, 50);
}

// ─── SVG layout diagram generator ──
function genLayoutSVG(layout, w, l, colors, compact, spaceId) {
  const W = 300, H = 200;
  const p = compact ? 18 : 25;
  const rw = W-p*2, rh = H-p-15;
  const sc = Math.min(rw/w, rh/l, compact ? 120 : 80);
  const ox = p + (rw-w*sc)/2, oy = p + 15 + (rh-l*sc)/2;
  const c1 = '#c47040', c2 = colors?colors[1]:'#e8c4a8';
  const fs = compact ? 6 : 10;
  const sw = compact ? 0.5 : 1.5;
  const cd = compact ? 18 : 28;
  const layoutType = layout.includes('L型') ? 'L' : layout.includes('U型') ? 'U' : layout.includes('中岛') ? 'island' : layout.includes('一字') ? 'line' : layout.includes('双一字') ? 'double' : 'line';
  const LB = { kitchen:{m:'地柜',u:'吊柜'}, bedroom:{m:'衣柜',u:'顶柜'}, living:{m:'电视柜',u:'储物柜'}, entry:{m:'鞋柜',u:'吊柜'}, study:{m:'书桌',u:'书架'}, closet:{m:'衣柜',u:'顶柜'} }[spaceId]||{m:'柜体',u:'吊柜'};

  if (compact) {
    let s = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:100%">`;
    s += `<rect x="${ox}" y="${oy}" width="${w*sc}" height="${l*sc}" fill="#f5f0eb" stroke="#2d1810" stroke-width="${sw}" rx="2"/>`;
    s += `<text x="${ox+w*sc/2}" y="${oy-4}" text-anchor="middle" font-size="${fs}" fill="#8b7355">${w}m</text>`;
    s += `<text x="${ox-4}" y="${oy+l*sc/2+2}" text-anchor="end" font-size="${fs}" fill="#8b7355">${l}m</text>`;
    if (layoutType === 'L') {
      s += `<rect x="${ox}" y="${oy+l*sc-cd}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox+w*sc-cd}" y="${oy}" width="${cd}" height="${l*sc}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
    } else if (layoutType === 'U') {
      s += `<rect x="${ox}" y="${oy+l*sc-cd}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox}" y="${oy}" width="${cd}" height="${l*sc}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox+w*sc-cd}" y="${oy}" width="${cd}" height="${l*sc-cd/2}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
    } else if (layoutType === 'island') {
      s += `<rect x="${ox}" y="${oy+12}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox}" y="${oy+l*sc-cd-12}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox+w*sc/2-20}" y="${oy+l*sc/2-10}" width="40" height="20" fill="${c2}" stroke="${c1}" stroke-width="${sw}" rx="2"/>`;
    } else if (layoutType === 'double') {
      s += `<rect x="${ox}" y="${oy+10}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox}" y="${oy+l*sc-cd-10}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
    } else {
      s += `<rect x="${ox+10}" y="${oy+l*sc-cd}" width="${w*sc-20}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="${sw}" rx="1"/>`;
      s += `<rect x="${ox+10}" y="${oy+10}" width="${w*sc-20}" height="${cd*0.6}" fill="${c1}" opacity=".15" stroke="${c1}" stroke-width="${sw*0.5}" stroke-dasharray="2,2" rx="1"/>`;
    }
    s += '</svg>';
    return s;
  }

  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-height:200px;border-radius:10px;background:#f5f0eb">`;
  svg += `<rect x="${ox}" y="${oy}" width="${w*sc}" height="${l*sc}" fill="#f5f0eb" stroke="#2d1810" stroke-width="1.5" rx="3"/>`;
  svg += `<text x="${ox+w*sc/2}" y="${oy-6}" text-anchor="middle" font-size="10" fill="#8b7355">${w}m</text>`;
  svg += `<text x="${ox-6}" y="${oy+l*sc/2+3}" text-anchor="end" font-size="10" fill="#8b7355">${l}m</text>`;

  // Door marker
  const doorX = ox + w*sc - 24, doorY = oy;
  svg += `<path d="M${doorX},${doorY} L${doorX+6},${doorY+6} L${doorX+6},${doorY+24} L${doorX-6},${doorY+24} L${doorX-6},${doorY+6} Z" fill="#e0d0c2" stroke="#8b7355" stroke-width="0.5"/>`;
  svg += `<text x="${doorX}" y="${doorY+17}" text-anchor="middle" font-size="6" fill="#8b7355">🚪</text>`;

  if (layoutType === 'L') {
    svg += `<rect x="${ox}" y="${oy+l*sc-cd}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox+w*sc-cd}" y="${oy}" width="${cd}" height="${l*sc}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<text x="${ox+w*sc/2}" y="${oy+l*sc-cd/2+4}" text-anchor="middle" font-size="9" fill="#2d1810">${LB.m}</text>`;
    svg += `<text x="${ox+w*sc-cd/2}" y="${oy+l*sc/2+3}" text-anchor="middle" font-size="9" fill="#2d1810">${LB.u}</text>`;
  } else if (layoutType === 'U') {
    svg += `<rect x="${ox}" y="${oy+l*sc-cd}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox}" y="${oy}" width="${cd}" height="${l*sc}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox+w*sc-cd}" y="${oy}" width="${cd}" height="${l*sc-cd/2}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
  } else if (layoutType === 'island') {
    svg += `<rect x="${ox}" y="${oy+20}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox}" y="${oy+l*sc-cd-20}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox+w*sc/2-30}" y="${oy+l*sc/2-15}" width="60" height="30" fill="${c2}" stroke="${c1}" stroke-width="1" rx="3"/>`;
    svg += `<text x="${ox+w*sc/2}" y="${oy+l*sc/2+3}" text-anchor="middle" font-size="9" fill="#2d1810">中岛</text>`;
  } else if (layoutType === 'double') {
    svg += `<rect x="${ox}" y="${oy+15}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<rect x="${ox}" y="${oy+l*sc-cd-15}" width="${w*sc}" height="${cd}" fill="${c1}" opacity=".25" stroke="${c1}" stroke-width="1" rx="2"/>`;
  } else {
    svg += `<rect x="${ox+15}" y="${oy+l*sc-cd}" width="${w*sc-30}" height="${cd}" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="1" rx="2"/>`;
    svg += `<text x="${ox+w*sc/2}" y="${oy+l*sc-cd/2+4}" text-anchor="middle" font-size="9" fill="#2d1810">${LB.m}</text>`;
    svg += `<rect x="${ox+15}" y="${oy+15}" width="${w*sc-30}" height="${cd*0.6}" fill="${c1}" opacity=".15" stroke="${c1}" stroke-width="0.5" stroke-dasharray="3,2" rx="2"/>`;
    svg += `<text x="${ox+w*sc/2}" y="${oy+15+cd*0.6/2+3}" text-anchor="middle" font-size="7" fill="#8b7355">${LB.u}</text>`;
  }

  svg += `<rect x="${ox}" y="${oy+l*sc+8}" width="8" height="8" fill="${c1}" opacity=".3" stroke="${c1}" stroke-width="0.5" rx="1"/>`;
  svg += `<text x="${ox+12}" y="${oy+l*sc+16}" font-size="8" fill="#6b5a4e">柜体  ·  比例示意，非精确图纸</text>`;
  svg += '</svg>';
  return svg;
}

function genColorBar(colors, names) {
  if (!colors || !colors.length) return '';
  const seg = Math.max(1, Math.floor(100 / colors.length));
  let bar = '<div style="display:flex;border-radius:8px;overflow:hidden;height:32px;margin:6px 0">';
  colors.forEach((c, i) => {
    bar += `<div style="flex:${seg};background:${c};display:flex;align-items:center;justify-content:center;font-size:9px;color:${i<3?'#2d1810':'#fff'}">${names&&names[i]?names[i]:''}</div>`;
  });
  bar += '</div>';
  return bar;
}

function renderStyledResults() {
  const s = STYLE_DB.find(x => x.id === recStyle);
  const el = document.getElementById('recommendContent');

  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin:4px 0 8px">
    <div><span style="font-size:20px">${s?s.icon:''}</span>
    <span style="font-size:16px;font-weight:600;margin-left:6px">${s?s.name:'风格'} · ${REC_SPACES.find(sp=>sp.id===recSpace)?.name||''}</span></div>
    <button class="btn btn-sm btn-secondary" onclick="resetStyle()">重新选择</button>
  </div>
  <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">
    ${recW}×${recL}m · ${recGrade==='econ'?'经济':recGrade==='std'?'标准':'高端'}预算
  </div>`;

  recResults.forEach((plan, pi) => {
    const area = recW * recL;
    const total = recSpace === 'whole' ? null : Math.round(area * plan.pricePerM);

    html += `<div class="rec-plan-card ${plan.id}" onclick="showStyledDetail(${pi})">
      <div class="rec-plan-badge ${plan.id}">${plan.badge}</div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div><div class="rec-plan-name" style="color:${plan.id==='balanced'?'var(--clay)':plan.id==='economy'?'var(--green)':'#b8860b'}">${plan.label}</div>
        <div class="rec-plan-desc">${plan.desc}</div></div>
        <button class="btn btn-sm ${isPlanSaved(pi)?'':'btn-secondary'}" style="flex-shrink:0;font-size:11px;padding:2px 8px;margin-left:4px" onclick="event.stopPropagation();toggleSavePlan(${pi})">${isPlanSaved(pi)?'💾 已收藏':'💾 收藏'}</button>
      </div>
      <div style="display:flex;gap:8px;margin:4px 0 6px;align-items:stretch">
        <div style="flex-shrink:0;width:80px;border-radius:6px;overflow:hidden;background:var(--cream);height:53px">${genLayoutSVG(plan.layout, recW, recL, s?s.colors:null, true, recSpace)}</div>
        ${s ? `<div style="flex:1;display:flex;gap:3px;align-items:stretch">${s.colors.slice(0,4).map((c,i)=>`<div style="flex:1;min-height:40px;background:${c};border-radius:4px" title="${s.colorNames[i]}"></div>`).join('')}</div>` : ''}
      </div>
      <div class="rec-plan-meta">
        <span>📐 ${plan.layout}</span>
        <span>🪵 ${plan.panel}</span>
      </div>
      <div class="plan-images">${(()=>{const pp=aiPrompt(recSpace, s?s.name:'', plan.label, plan.layout); const card=genRefCard(recSpace, s?.name||'', plan.label, plan.layout, s?.colors, s?.colorNames); return `<img src="${card}" alt="${plan.label}参考图" data-prompt="${pp}" data-space="${recSpace}" data-style="${s?.name||''}" data-plan="${plan.label}" data-layout="${plan.layout}" loading="lazy" style="width:120px;height:90px;object-fit:cover;border-radius:6px;flex-shrink:0;cursor:pointer" onclick="showImg(this.src)" onerror="imgError(this)">`;})()}<a class="img-tag" href="${refSearchUrl((s?s.name+' ':'')+'参考图')}" onclick="warmZnzmo()" target="_blank">📷 搜参考图</a></div>
      <div class="rec-plan-features">
        ${(plan.cabinets||[]).slice(0,2).map(c => `<span class="rec-plan-feat">${c}</span>`).join('')}
      </div>
      ${total ? `<div class="rec-plan-total">
        <div class="rpt-label">预估总价</div>
        <div class="rpt-number">¥${total.toLocaleString('zh-CN')}<span style="font-family:var(--font-body);font-size:13px;color:var(--text-muted);font-weight:400"> 元</span></div>
      </div>` : ''}
    </div>`;
  });

  const sn = REC_SPACES.find(sp=>sp.id===recSpace)?.name||'';
  const srcLabel = (REF_SOURCES[refSource]||{}).label||'知末网';
  html += `<a class="btn btn-sm btn-secondary" href="${refSearchUrl(sn+' '+(s?s.name:'')+' 全屋定制 设计')}" onclick="warmZnzmo()" target="_blank" style="width:100%;margin-top:8px;text-align:center;text-decoration:none">🔍 ${srcLabel}搜参考图</a>`;
  el.innerHTML = html;
  setTimeout(bgLoadPlanImages, 100);
}

function showStyledDetail(pi) {
  const plan = recResults[pi];
  const s = STYLE_DB.find(x => x.id === recStyle);
  if (!plan) return;

  const area = recW * recL;
  const total = recSpace === 'whole' ? null : Math.round(area * plan.pricePerM);
  const spaceLabel = REC_SPACES.find(sp=>sp.id===recSpace)?.name||'';
  const srcLabel = (REF_SOURCES[refSource]||{}).label||'知末网';

  let html = `<div class="rec-plan-badge ${plan.id}" style="margin-bottom:8px">${plan.badge}</div>
    <div class="modal-title">${s?s.icon+' ':''}${plan.label}</div>
    <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">${s?s.name:'现代'} · ${spaceLabel} · ${recW}×${recL}m</div>
    <div style="margin:8px 0;background:var(--cream);border-radius:10px;padding:8px">
      ${genLayoutSVG(plan.layout, recW, recL, s?s.colors:null, false, recSpace)}
    </div>
    ${s ? `<div style="margin:0 0 8px">${genColorBar(s.colors, s.colorNames)}</div>` : ''}
    <div class="modal-section">
      <h4>🎨 AI 生成参考图</h4>
      <div class="plan-images">${[1,2].map(i => { const pp=aiPrompt(recSpace, s?s.name:'', plan.label, plan.layout); const card=genRefCard(recSpace, s?.name||'', plan.label, plan.layout, s?.colors, s?.colorNames); return `<img src="${card}" alt="${plan.label}参考图" data-prompt="${pp}" data-space="${recSpace}" data-style="${s?.name||''}" data-plan="${plan.label}" data-layout="${plan.layout}" loading="lazy" style="width:120px;height:90px;object-fit:cover;border-radius:6px;flex-shrink:0;cursor:pointer" onclick="showImg(this.src)" onerror="imgError(this)">`;}).join('')}<a class="img-tag" href="${refSearchUrl((s?s.name+' ':'')+'参考图')}" onclick="warmZnzmo()" target="_blank">📷 搜参考图</a></div>
      <a class="btn btn-sm btn-secondary" href="${refSearchUrl(spaceLabel+' '+(s?s.name:'')+' 全屋定制')}" onclick="warmZnzmo()" target="_blank" style="margin-top:4px;font-size:11px;text-decoration:none">🔍 ${srcLabel}搜更多参考图</a>
    </div>
    <div class="modal-section">
      <h4>📐 布局方案</h4><p>${plan.layout}</p>
    </div>
    <div class="modal-section">
      <h4>🏗️ 柜体配置</h4>
      <ul>${(plan.cabinets||[]).map(c => `<li>${c}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>🧱 推荐材料</h4>
      <p>板材：${plan.panel}<br>五金：${plan.hardware}<br>配色：${plan.colors}</p>
    </div>`;

  if (s) {
    html += `<div class="modal-section">
      <h4>🎨 风格要点</h4>
      <ul>${s.tips.slice(0,3).map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }

  if (total) {
    html += `<div class="quote-total" style="margin-top:8px">
      <div class="total-label">预估总价</div>
      <div class="total-number">¥${total.toLocaleString('zh-CN')}<span class="unit">元</span></div>
    </div>`;
  }
  const saved = isPlanSaved(pi);
  html += `<button class="btn btn-sm ${saved?'':'btn-primary'}" style="width:100%;margin-top:10px" onclick="toggleSavePlan(${pi});hideModal()">${saved?'✅ 已收藏':'💾 收藏此方案'}</button>`;
  html += `<button class="btn btn-sm btn-secondary" style="width:100%;margin-top:6px" onclick="hideModal();exportPlanCard(${pi})">📷 导出图片</button>`;
  showModal(html);
  setTimeout(bgLoadPlanImages, 100);
}

function resetStyle() {
  recMode = 'discover'; recResults = null; recStyle = null;
  renderRecommend();
}

// ─── Brand Settings ──
function showBrandSettings() {
  const b = brandSettings;
  let html = `<div class="modal-title" style="margin-bottom:16px">🏢 品牌设置</div>
    <div class="form-group"><label class="form-label">公司名称</label>
      <input class="form-input" id="b_name" value="${b.companyName||''}" placeholder="如：尚品宅配"></div>
    <div class="form-group"><label class="form-label">联系电话</label>
      <input class="form-input" id="b_phone" type="tel" value="${b.phone||''}" placeholder="如：13800138000"></div>
    <div class="form-group"><label class="form-label">微信号</label>
      <input class="form-input" id="b_wechat" value="${b.wechat||''}" placeholder="如：zhuangxiu2025"></div>
    <div class="form-group"><label class="form-label">地址</label>
      <input class="form-input" id="b_addr" value="${b.address||''}" placeholder="如：北京市朝阳区..."></div>
    <button class="btn btn-primary btn-block" onclick="saveBrandSettings()">💾 保存</button>`;
  showModal(html);
}
function saveBrandSettings() {
  brandSettings.companyName = document.getElementById('b_name').value;
  brandSettings.phone = document.getElementById('b_phone').value;
  brandSettings.wechat = document.getElementById('b_wechat').value;
  brandSettings.address = document.getElementById('b_addr').value;
  saveBrand();
  hideModal();
  setTimeout(() => toast('品牌设置已保存 ✅'), 300);
}

// ─── Customer Management ──
function showCustomerList() {
  let html = `<div class="modal-title" style="margin-bottom:12px">👥 客户管理</div>
    <button class="btn btn-primary btn-block" onclick="showCustomerForm()" style="margin-bottom:12px">＋ 添加客户</button>`;
  if (!customers.length) {
    html += `<div class="empty-state"><span class="emoji">👥</span><h3>还没有客户</h3><p>点击上方按钮添加第一位客户</p></div>`;
  } else {
    customers.forEach((c, i) => {
      const linked = measurements.filter(m => m.customerId === c.id).length + quotes.filter(q => q.customerId === c.id).length;
      html += `<div class="rec-card" style="margin-bottom:8px;cursor:default">
        <div style="display:flex;justify-content:space-between;align-items:start">
          <div><strong>${c.name}</strong>${c.phone?` · ${c.phone}`:''}</div>
          <div style="display:flex;gap:6px;flex-shrink:0">
            <button class="btn btn-sm btn-secondary" onclick="showCustomerForm(${i})">✏️</button>
            <button class="btn btn-sm btn-secondary" onclick="delCustomer(${i})">🗑️</button>
          </div>
        </div>
        ${c.address?`<div style="font-size:12px;color:var(--text-secondary)">${c.address}</div>`:''}
        ${c.notes?`<div style="font-size:11px;color:var(--text-muted)">📝 ${c.notes}</div>`:''}
        <div style="font-size:11px;color:var(--text-muted);margin-top:4px">关联 ${linked} 个项目 · ${c.createdAt||''}</div>
      </div>`;
    });
  }
  html += `<button class="btn btn-secondary btn-block" onclick="hideModal()" style="margin-top:8px">返回</button>`;
  showModal(html);
}
function showCustomerForm(editIdx) {
  const isEdit = editIdx !== undefined;
  const c = isEdit ? customers[editIdx] : { name:'', phone:'', address:'', notes:'' };
  let html = `<div class="modal-title" style="margin-bottom:12px">${isEdit?'编辑':'添加'}客户</div>
    <div class="form-group"><label class="form-label">姓名 *</label>
      <input class="form-input" id="c_name" value="${c.name||''}" placeholder="如：张先生"></div>
    <div class="form-group"><label class="form-label">电话</label>
      <input class="form-input" id="c_phone" type="tel" value="${c.phone||''}" placeholder="如：13800138000"></div>
    <div class="form-group"><label class="form-label">地址</label>
      <input class="form-input" id="c_addr" value="${c.address||''}" placeholder="如：北京市朝阳区"></div>
    <div class="form-group"><label class="form-label">备注</label>
      <input class="form-input" id="c_notes" value="${c.notes||''}" placeholder="如：偏好原木风"></div>
    <button class="btn btn-primary btn-block" onclick="saveCustomer(${isEdit?editIdx:-1})">💾 保存</button>`;
  showModal(html);
}
function saveCustomer(editIdx) {
  const name = document.getElementById('c_name').value.trim();
  if (!name) { toast('请输入客户姓名'); return; }
  const obj = {
    id: editIdx >= 0 ? customers[editIdx].id : 'c_'+Date.now(),
    name,
    phone: document.getElementById('c_phone').value,
    address: document.getElementById('c_addr').value,
    notes: document.getElementById('c_notes').value,
    createdAt: editIdx >= 0 ? customers[editIdx].createdAt : today(),
  };
  if (editIdx >= 0) customers[editIdx] = obj;
  else customers.push(obj);
  saveCustomers(); toast('客户已保存 ✅'); showCustomerList();
}
function delCustomer(i) {
  if (!confirm(`确定删除客户 ${customers[i].name}？关联的量尺和报价记录不会删除。`)) return;
  customers.splice(i, 1);
  saveCustomers(); showCustomerList();
}
function getCustomerName(id) {
  const c = customers.find(c => c.id === id);
  return c ? c.name : '';
}
function getCustomer(id) {
  return customers.find(c => c.id === id) || null;
}

// ═══════════════════════════════════════════
// 11. SETTINGS
// ═══════════════════════════════════════════

function showSettings() {
  let html = `<div class="modal-title" style="margin-bottom:16px">⚙️ 设置</div>
    <div class="settings-section">
      <div class="settings-item" onclick="showBrandSettings()">
        <div class="settings-item-left"><div class="settings-item-title">🏢 品牌设置</div><div class="settings-item-desc">公司名称、联系方式</div></div>
        <span class="arrow">→</span>
      </div>
      <div class="settings-item" onclick="showCustomerList()">
        <div class="settings-item-left"><div class="settings-item-title">👥 客户管理</div><div class="settings-item-desc">${customers.length} 位客户</div></div>
        <span class="arrow">→</span>
      </div>
      <div class="settings-item" onclick="exportData()">
        <div class="settings-item-left"><div class="settings-item-title">📤 导出数据</div><div class="settings-item-desc">下载所有数据为 JSON 文件</div></div>
        <span class="arrow">→</span>
      </div>
      <div class="settings-item" onclick="document.getElementById('importFile').click()">
        <div class="settings-item-left"><div class="settings-item-title">📥 导入数据</div><div class="settings-item-desc">从 JSON 文件恢复数据</div></div>
        <span class="arrow">→</span>
      </div>
      <div class="settings-item" onclick="if(confirm('确定清除所有数据？品牌信息、客户、收藏、量尺记录、报价历史、流程进度都会删除。')){localStorage.clear();brandSettings={};customers=[];favs.clear();measurements=[];quotes=[];wfProjects={};brandSettings={};customers=[];recResults=null;recStyle=null;recMode='discover';render();toast('已清除');hideModal();}">
        <div class="settings-item-left"><div class="settings-item-title">🗑️ 清除所有数据</div><div class="settings-item-desc">重置应用到初始状态</div></div>
        <span class="arrow" style="color:var(--red)">→</span>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-item">
        <div class="settings-item-left"><div class="settings-item-title">📐 全屋定制助手</div><div class="settings-item-desc">版本 2.0 · 专业版</div></div>
      </div>
    </div>
    <input type="file" id="importFile" accept=".json" style="display:none" onchange="importData(event)">`;
  showModal(html);
}

function exportData() {
  const data = {
    favs: [...favs],
    measurements,
    quotes,
    wf: wfProjects,
    brand: brandSettings,
    customers,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = '全屋定制助手数据_'+today()+'.json';
  a.click(); URL.revokeObjectURL(url);
  toast('数据已导出 ✅');
  hideModal();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.favs) favs = new Set(data.favs);
      if (data.measurements) measurements = data.measurements;
      if (data.quotes) quotes = data.quotes;
      if (data.wf) wfProjects = data.wf;
      if (data.brand) brandSettings = data.brand;
      if (data.customers) customers = data.customers;
      saveFavs(); saveMeasure(); saveQuotes(); saveWF(); saveBrand(); saveCustomers();
      render(); toast('数据导入成功 ✅');
      hideModal();
    } catch(e) { toast('导入失败：文件格式错误'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ─── Quote Image Export ──
const QUOTE_CARD_HTML = `<div id="quoteCardExport" style="position:fixed;left:-9999px;top:0;width:480px;padding:0;font-family:'PingFang SC','Microsoft YaHei',sans-serif;background:#fff;z-index:-1">
  <div style="background:#2d1810;color:#fff;padding:20px 24px">
    <div style="font-size:20px;font-weight:700" id="qc_brand">全屋定制报价单</div>
    <div style="font-size:12px;opacity:0.7;margin-top:4px" id="qc_contact"></div>
  </div>
  <div style="padding:20px 24px;background:#faf5f0">
    <div style="display:flex;justify-content:space-between;align-items:center" id="qc_customer"></div>
  </div>
  <div style="padding:16px 24px">
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px">报价详情</div>
    <div style="font-size:15px;font-weight:600;margin-bottom:4px" id="qc_title"></div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px" id="qc_dims"></div>
    <div id="qc_items"></div>
    <div style="border-top:2px solid #c47040;margin-top:12px;padding-top:12px">
      <div style="font-size:12px;color:var(--text-muted)">合计</div>
      <div style="font-size:28px;font-weight:700;color:#c47040" id="qc_total"></div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px" id="qc_opts"></div>
    </div>
  </div>
  <div style="padding:12px 24px;border-top:1px solid #f0e6de;font-size:10px;color:#bbb;text-align:center" id="qc_footer"></div>
</div>`;

// ─── Plan Card Export ──
function exportPlanCard(pi) {
  const plan = recResults[pi]; if (!plan) return toast('请先生成方案');
  const s = STYLE_DB.find(x=>x.id===recStyle);
  const sn = REC_SPACES.find(sp=>sp.id===recSpace)?.name||'';
  const total = recSpace==='whole'?null:Math.round(recW*recL*plan.pricePerM);
  const b = brandSettings||{};
  const cardId = 'planCardExport';
  if (!document.getElementById(cardId)) {
    const d = document.createElement('div');
    d.innerHTML = `<div id="${cardId}" style="position:fixed;top:-9999px;left:0;width:480px;background:#fff;padding:32px;font-family:'DM Sans','PingFang SC','Microsoft YaHei',sans-serif;line-height:1.6;box-sizing:border-box"></div>`;
    document.body.appendChild(d.firstElementChild);
  }
  const el = document.getElementById(cardId);
  el.innerHTML = `<div style="text-align:center;margin-bottom:16px">
    <div style="font-size:22px;font-weight:700;color:#2d1810;margin-bottom:2px">${s?s.icon+' ':''}${plan.label}</div>
    <div style="font-size:13px;color:#999">${s?s.name:'现代'} · ${sn} · ${recW}×${recL}m${recGrade==='econ'?' · 经济预算':recGrade==='std'?' · 标准预算':' · 高端预算'}</div>
    <div style="font-size:12px;color:#bbb;margin-top:2px">${plan.desc}</div>
  </div>
  <div style="background:#faf5f0;border-radius:10px;padding:12px;margin:12px 0">
    ${genLayoutSVG(plan.layout, recW, recL, s?s.colors:null, false, recSpace)}
  </div>
  <div style="border-top:1px solid #f0e6de;padding:12px 0">
    <div style="font-size:13px;font-weight:600;color:#2d1810;margin-bottom:6px">🏗️ 柜体配置</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#6b5a4e">${(plan.cabinets||[]).map(c=>`<li>${c}</li>`).join('')}</ul>
  </div>
  <div style="border-top:1px solid #f0e6de;padding:12px 0;font-size:13px;color:#6b5a4e">
    <strong style="color:#2d1810">🧱 推荐材料</strong><br>
    板材：${plan.panel} · 五金：${plan.hardware} · 配色：${plan.colors}
  </div>
  ${total?`<div style="text-align:center;padding:12px 0;border-top:1px solid #f0e6de">
    <div style="font-size:12px;color:#999">预估总价</div>
    <div style="font-size:28px;font-weight:700;color:#c47040">¥${total.toLocaleString('zh-CN')}<span style="font-size:14px;color:#999;font-weight:400"> 元</span></div>
  </div>`:''}
  <div style="text-align:center;padding:12px 0 0;border-top:1px solid #f0e6de;font-size:11px;color:#ccc">
    ${b.companyName?b.companyName+' · ':''}由 全屋定制助手 生成${b.phone?' · '+b.phone:''}
  </div>`;
  setTimeout(() => {
    if (typeof html2canvas !== 'undefined') { renderPlanHtml2canvas(el, pi); }
    else {
      const sc = document.createElement('script');
      sc.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      sc.onload = () => renderPlanHtml2canvas(el, pi);
      sc.onerror = () => renderPlanFallback(el, pi);
      document.head.appendChild(sc);
    }
  }, 100);
}
function renderPlanHtml2canvas(el, pi) {
  html2canvas(el, { scale:2, useCORS:true, backgroundColor:'#fff', width:480 })
    .then(canvas => {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        if (navigator.share && navigator.canShare({ files: [new File([blob], '方案.png', {type:'image/png'})] })) {
          navigator.share({ files:[new File([blob],'方案.png',{type:'image/png'})], title:'全屋定制方案' }).catch(()=>{});
        } else {
          const w = window.open('');
          if (w) { w.document.write(`<div style="text-align:center;padding:20px;font-family:sans-serif"><img src="${url}" style="max-width:100%;box-shadow:0 2px 20px rgba(0,0,0,0.1)"><p style="color:#999;margin-top:20px">长按图片保存到相册</p></div>`); }
          else { const a = document.createElement('a'); a.href = url; a.download = '全屋定制方案.png'; a.click(); }
        }
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }, 'image/png');
    })
    .catch(() => renderPlanFallback(el, pi));
}
function renderPlanFallback(el, pi) {
  const plan = recResults[pi]; if (!plan) return toast('导出失败');
  const s = STYLE_DB.find(x=>x.id===recStyle);
  const sn = REC_SPACES.find(sp=>sp.id===recSpace)?.name||'';
  const total = recSpace==='whole'?null:Math.round(recW*recL*plan.pricePerM);
  const W = 480, H = 700, R = 2;
  const c = document.createElement('canvas'); c.width = W*R; c.height = H*R;
  const ctx = c.getContext('2d'); ctx.scale(R,R);
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,W,H);
  ctx.fillStyle = '#2d1810'; ctx.font = 'bold 22px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(`${s?s.icon+' ':''}${plan.label}`, W/2, 50);
  ctx.fillStyle = '#999'; ctx.font = '14px sans-serif';
  ctx.fillText(`${s?s.name:'现代'} · ${sn} · ${recW}×${recL}m`, W/2, 76);
  ctx.fillStyle = '#6b5a4e'; ctx.font = '13px sans-serif';
  (plan.cabinets||[]).forEach((c,i) => { ctx.fillText(`• ${c}`, 40, 140+i*24); });
  if (total) {
    ctx.fillStyle = '#999'; ctx.font = '13px sans-serif'; ctx.fillText('预估总价', W/2, 400);
    ctx.fillStyle = '#c47040'; ctx.font = 'bold 28px sans-serif'; ctx.fillText(`¥${total.toLocaleString('zh-CN')}`, W/2, 432);
  }
  const url = c.toDataURL('image/png');
  const w = window.open('');
  if (w) w.document.write(`<div style="text-align:center;padding:20px;font-family:sans-serif"><img src="${url}" style="max-width:100%"><p style="color:#999;margin-top:20px">长按图片保存</p></div>`);
  else toast('导出失败，请截图保存');
}

function exportQuoteImage(i) {
  const q = quotes[i];
  if (!q) return toast('请先选择报价');
  const b = brandSettings || {};

  // Inject card first
  if (!document.getElementById('quoteCardExport')) {
    const div = document.createElement('div');
    div.innerHTML = QUOTE_CARD_HTML;
    document.body.appendChild(div.firstElementChild);
  }

  // Build card content
  const c = q.customerId ? getCustomer(q.customerId) : null;
  document.getElementById('qc_brand').textContent = b.companyName ? b.companyName : '全屋定制报价单';
  document.getElementById('qc_contact').textContent = [b.phone, b.wechat].filter(Boolean).join(' · ');
  document.getElementById('qc_customer').innerHTML = c
    ? `<span>👤 ${c.name}${c.phone?' · '+c.phone:''}</span>${c.address?`<span style="font-size:12px;color:var(--text-muted)">${c.address}</span>`:''}`
    : '';
  document.getElementById('qc_title').textContent = `${q.typeLabel} · ${q.gradeLabel}`;
  document.getElementById('qc_dims').textContent = `${q.w}×${q.h}×${q.d} mm · ${q.area} ${q.unit} · ¥${q.unitPrice}/${q.unit}`;

  const itemsHtml = (q.items||[]).map(item => {
    const pct = item.pct;
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f5f0eb">
      <span style="font-size:13px">${item.label}</span>
      <div style="flex:1;margin:0 12px;height:6px;background:#f0e6de;border-radius:3px">
        <div style="height:100%;width:${pct}%;background:#c47040;border-radius:3px"></div>
      </div>
      <span style="font-size:14px;font-weight:600">¥${fmtNum(item.val)}</span>
    </div>`;
  }).join('');
  document.getElementById('qc_items').innerHTML = itemsHtml;

  document.getElementById('qc_total').textContent = `¥${fmtNum(q.total)}`;
  document.getElementById('qc_opts').textContent = q.optsDesc ? `配件：${q.optsDesc}` : '';
  document.getElementById('qc_footer').textContent = `由 全屋定制助手 生成 · ${today()}`;

  // Wait for DOM then render
  setTimeout(() => {
    const el = document.getElementById('quoteCardExport');
    if (typeof html2canvas !== 'undefined') {
      renderWithHtml2canvas(el, i);
    } else {
      // Lazy load from CDN
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      s.onload = () => renderWithHtml2canvas(el, i);
      s.onerror = () => renderFallbackCanvas(q, b, c);
      document.head.appendChild(s);
    }
  }, 100);
}

function renderWithHtml2canvas(el, i) {
  const q = quotes[i];
  html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#fff', width: 480 })
    .then(canvas => {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        // Try Web Share API
        if (navigator.share && navigator.canShare({ files: [new File([blob], '报价单.png', { type: 'image/png' })] })) {
          navigator.share({ files: [new File([blob], '报价单.png', { type: 'image/png' })], title: '报价单' }).catch(() => {});
        } else {
          // Fallback: open in new tab (user can save/screenshot)
          const w = window.open('');
          if (w) {
            w.document.write(`<div style="text-align:center;padding:20px;font-family:sans-serif"><img src="${url}" style="max-width:100%;box-shadow:0 2px 20px rgba(0,0,0,0.1)"><p style="color:#999;margin-top:20px">长按图片保存到相册 · 或截图分享给客户</p></div>`);
          } else {
            // Popup blocked, try download
            const a = document.createElement('a');
            a.href = url; a.download = '报价单.png'; a.click();
          }
        }
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }, 'image/png');
    })
    .catch(() => renderFallbackCanvas(q, null, null));
}

function renderFallbackCanvas(q, b, c) {
  // Pure Canvas fallback when html2canvas fails
  const W = 480, H = 700, RATIO = 2;
  const canvas = document.createElement('canvas');
  canvas.width = W * RATIO; canvas.height = H * RATIO;
  const ctx = canvas.getContext('2d');
  ctx.scale(RATIO, RATIO);

  // Background
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  // Header bar
  ctx.fillStyle = '#2d1810'; ctx.fillRect(0, 0, W, 70);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 20px sans-serif'; ctx.fillText(b&&b.companyName?b.companyName:'全屋定制报价单', 24, 38);
  ctx.font = '12px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.7)';
  const contact = [b&&b.phone, b&&b.wechat].filter(Boolean).join(' · ');
  if (contact) ctx.fillText(contact, 24, 58);

  // Customer info
  const cust = c;
  if (cust) {
    ctx.fillStyle = '#faf5f0'; ctx.fillRect(0, 70, W, 36);
    ctx.fillStyle = '#2d1810'; ctx.font = '13px sans-serif';
    ctx.fillText('\u{1F464} '+cust.name+(cust.phone?' · '+cust.phone:''), 24, 93);
  }

  // Content
  let y = cust ? 130 : 110;
  ctx.fillStyle = '#999'; ctx.font = '13px sans-serif';
  ctx.fillText('报价详情', 24, y); y += 24;
  ctx.fillStyle = '#2d1810'; ctx.font = 'bold 15px sans-serif';
  ctx.fillText(q.typeLabel+' · '+q.gradeLabel, 24, y); y += 20;
  ctx.fillStyle = '#666'; ctx.font = '13px sans-serif';
  ctx.fillText(q.w+'×'+q.h+'×'+q.d+' mm · '+q.area+' '+q.unit+' · ¥'+q.unitPrice+'/'+q.unit, 24, y); y += 16;

  // Items
  (q.items||[]).forEach(item => {
    y += 8;
    ctx.fillStyle = '#2d1810'; ctx.font = '13px sans-serif';
    ctx.fillText(item.label, 24, y);
    ctx.fillStyle = '#2d1810'; ctx.font = 'bold 14px sans-serif';
    const priceText = '¥'+fmtNum(item.val);
    ctx.textAlign = 'right'; ctx.fillText(priceText, W-24, y);
    ctx.textAlign = 'left';
    // Bar background
    ctx.fillStyle = '#f0e6de'; ctx.fillRect(90, y-4, 200, 6);
    // Bar fill
    ctx.fillStyle = '#c47040'; ctx.fillRect(90, y-4, 200*item.pct/100, 6);
    y += 6;
  });

  // Total
  y += 16;
  ctx.strokeStyle = '#c47040'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(24, y); ctx.lineTo(W-24, y); ctx.stroke(); y += 12;
  ctx.fillStyle = '#999'; ctx.font = '12px sans-serif';
  ctx.fillText('合计', 24, y); y += 24;
  ctx.fillStyle = '#c47040'; ctx.font = 'bold 28px sans-serif';
  ctx.fillText('¥'+fmtNum(q.total), 24, y);

  // Footer
  ctx.fillStyle = '#ddd'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('由 全屋定制助手 生成 · '+today(), W/2, H-20);

  // Output
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const w = window.open('');
    if (w) {
      w.document.write(`<div style="text-align:center;padding:20px;font-family:sans-serif"><img src="${url}" style="max-width:100%;box-shadow:0 2px 20px rgba(0,0,0,0.1)"><p style="color:#999;margin-top:20px">长按图片保存到相册 · 或截图分享给客户</p></div>`);
    } else {
      const a = document.createElement('a');
      a.href = url; a.download = '报价单.png'; a.click();
    }
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
}

// ═══════════════════════════════════════════
// 12. INIT
// ═══════════════════════════════════════════

function render() {
  renderCurrent();
  document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.tab === activeTab));
}

// Tab bar
document.querySelectorAll('.tab-item').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

loadState();

// First-run welcome
if (!localStorage.getItem('ff_hasSeenWelcome')) {
  setTimeout(() => {
    showModal(`<div class="modal-title" style="margin-bottom:12px">👋 欢迎使用全屋定制助手</div>
      <div style="margin-bottom:16px;line-height:1.7;color:var(--text-secondary)">
        <p style="margin-bottom:8px">专为全屋定制设计师打造的现场工具：</p>
        <p>📐 <strong>尺寸速查</strong> — 橱柜/衣柜/榻榻米等标准尺寸</p>
        <p>📏 <strong>量尺记录</strong> — 现场量尺记下来</p>
        <p>💰 <strong>报价速算</strong> — 快速算价格给客户</p>
        <p>📋 <strong>设计流程</strong> — 从量尺到安装的清单</p>
        <p>🔩 <strong>材料五金</strong> — 板材/五金百科</p>
        <p>💡 <strong>智能推荐</strong> — AI 风格方案参考</p>
        <p>⚙️ <strong>设置</strong> — 品牌信息、客户管理、数据导入导出</p>
      </div>
      <button class="btn btn-primary btn-block" onclick="localStorage.setItem('ff_hasSeenWelcome','1');hideModal()">开始使用</button>`);
  }, 300);
}

// Handle missing 'notes' property on material entries that use "cons" instead of "cons"
// Fix: some material entries have "cons" with array format, some don't
// Ensure all materials have pros and cons as arrays
MAT_DATA.forEach(d => {
  if (!d.pros) d.pros = [];
  if (!d.cons) d.cons = [];
});

switchTab('dimensions');

// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

