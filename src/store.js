import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const data = [];
const state = {
  modules: {
    base: '基本信息',
    skill: '专业技能',
    intern: '工作经历',
    project: '项目经历',
    education: '教育经历',
  },
  baseMsg: sessionStorage.getItem('baseMsg')
    ? JSON.parse(sessionStorage.getItem('baseMsg'))
    : {
      address: '容桂',
      email: '1795387338@@qq.com',
      name: '苏金团',
      phone: '15217554483',
      position: '前端工程师',
      web: 'www.suiyi.com',
    },
  skillMsg: sessionStorage.getItem('skillMsg')
    ? JSON.parse(sessionStorage.getItem('skillMsg')).skillMsg
    : `<ul>
    <li>
        会HTML5,CSS3, $JavaScript  
        能够使用原生js独立制作精美网页
    </li>
    <li>
        掌握H5语义化标签 nav\\area\\canvas 等
        掌握css3动画、过度、弹性盒子布局、媒体查询等等
    </li>
    <li>熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性；</li>
    <li>
        熟悉前端自动化和工程化；对Webpack等常见构建工具有自己的认知与理解；
    </li>
    <li>有使用NodeJS开发、，熟练使用Git；</li>
    <li>其他：	
    会jquey制作动画页面
    会用less、bootstrap制作页面，有项目在git上
    理解MVC、MVVM的相关思想以及HTTP、commonjs的相关规范......</li>
</ul>`,
  skillRenderMsg: sessionStorage.getItem('skillMsg')
    ? JSON.parse(sessionStorage.getItem('skillMsg')).skillRenderMsg
    : `<ul>
        <li>
            会HTML5,CSS3, $JavaScript  
            能够使用原生js独立制作精美网页
        </li>
        <li>
            掌握H5语义化标签 nav\\area\\canvas 等
            掌握css3动画、过度、弹性盒子布局、媒体查询等等
        </li>
        <li>熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性；</li>
        <li>
            熟悉前端自动化和工程化；对Webpack等常见构建工具有自己的认知与理解；
        </li>
        <li>有使用NodeJS开发、，熟练使用Git；</li>
        <li>其他：	
        会jquey制作动画页面
        会用less、bootstrap制作页面，有项目在git上
        理解MVC、MVVM的相关思想以及HTTP、commonjs的相关规范......</li>
    </ul>`,

  projectMsg: [
    {
      proName: '项目名称：',
      proAddress: '容桂',
      proPosition: 'reume-vue-sjt',
      // proPartment: '无',
      // dateStart: '2019-01',
      // dateEnd: '2019-02',
      proValue: `<ul> 
      <li>关键词：vue+iview</li> 
      <li>技术点：vuex的使用，以及router，es6语法等等</li> 
      <li>源码链接：https://github.com/SuJinTuan/reume-vue-sjt</li> 
      <li>预览链接:因为项目的结构是有了但是，整体的内容存在一些BUG</li> 
      <li>描述：这是一个简历生成器，通过vue和iview来编写，这个项目最主要的还是插件html2的转化以及markdown的模板插件；</li> 
      </ul>`,
    },
    {
      proName: '项目名称：',
      proAddress: '容桂',
      proPosition: 'ExpressApi-',
      // proPartment: '无',
      // dateStart: '2019-01',
      // dateEnd: '2020-02',
      proValue: `<ul> 
      <li>关键词：node+express+mysql</li> 
      <li>源码链接：https://github.com/SuJinTuan/ExpressApi-</li> 
      <li>预览链接:因为项目是一些api接口，所以不方便，需要自己动手传入MySQL数据</li> 
      <li>描述：此项目是一些接口： 主要文件在：controllers这个文件： 
      其中包括：// 模拟验证码接口 // 用户名，手机号登陆 // 修改用户密码 // 绑定用户邮箱 // 退出登录 // 多图片上传 // 发布视频的接口 // 关注跟随 //账号密码登录；</li> 
     都是通过MySQL模拟的，并没有真实的数据去校验！
      </ul>`,
    },
    {
      proName: '项目名称：',
      proAddress: '容桂',
      proPosition: 'mallprojectjt',
      // proPartment: '无',
      // dateStart: '2019-01',
      // dateEnd: '2020-02',
      proValue: `<ul> 
      <li>关键词：纯vue的移动端项目</li> 
      <li>源码链接：https://github.com/SuJinTuan/mallprojectjt</li> 
      <li>预览链接: http://jintuan.3vcm.vip</li> 
      <li>描述：此项目只是用来展示,对Vue的练习。
      </ul>`,
    },
  ],
  educationMsg: [
    {
      eduSchoolName: '广州科技职业技术学院',
      eduProfession: '软件技术',
      eduSecCollege: '信息学院',
      eduCity: '广州',
      dateStart: '2018-08',
      dateEnd: '2021-6',
      eduValue: `<ul> 
    <li>GPA：3.52 / 5.0（专业前6%）| 荣誉/奖项：(校级)二等奖学金、(校级)一等奖学金</li> 
    </ul>`,
      options: [
        {
          value: '选项1',
          label: '大专',
        },
        {
          value: '选项2',
          label: '本科',
        },
        {
          value: '选项',
          label: '硕士',
        },
        {
          value: '选项4',
          label: '博士',
        },
        {
          value: '选项5',
          label: 'MBA',
        },
      ],
      eduDesValue: '',
    },
  ],
  newOtherMsg: [],
};

const mutations = {
  saveBaseMsg(state, base) {
    const baseMsg = state.baseMsg;
    baseMsg.name = base.name;
    baseMsg.phone = base.phone;
    baseMsg.email = base.email;
    baseMsg.address = base.address;
    baseMsg.position = base.position;
    baseMsg.web = base.web;
  },

  saveSkillMsg(state, skill) {
    state.skillMsg = skill;
    data.push(state.skillMsg);
  },

  saveSkillRenderMsg(state, skill) {
    state.skillRenderMsg = skill;
    data.push(state.skillRenderMsg);
  },

  saveInternMsg(state, intern) {
    const internMsg = state.internMsg;
    internMsg.comName = intern.name;
    internMsg.comAddress = intern.address;
    internMsg.comPosition = intern.position;
    internMsg.comPartment = intern.partment;
    internMsg.dateStart = intern.dateStart;
    internMsg.dateEnd = intern.dateEnd;
    internMsg.internValue = intern.internValue;
  },

  saveProjectMsg(state, project) {
    const proMsg = state.projectMsg;
    proMsg.proName = project.proName;
    proMsg.proAddress = project.proAddress;
    proMsg.proPosition = project.proPosition;
    proMsg.proPartment = project.proPartment;
    proMsg.dateStart = project.dateStart;
    proMsg.dateEnd = project.dateEnd;
    proMsg.proValue = project.proValue;
  },

  saveEducationMsg(state, edu) {
    const eduMsg = state.educationMsg;
    eduMsg.eduSchoolName = edu.eduSchoolName;
    eduMsg.eduProfession = edu.eduProfession;
    eduMsg.eduSecCollege = edu.eduSecCollege;
    eduMsg.eduCity = edu.eduCity;
    eduMsg.dateStart = edu.dateStart;
    eduMsg.dateEnd = edu.dateEnd;
    eduMsg.eduValue = edu.eduValue;
    eduMsg.eduDesValue = edu.eduDesValue;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
});
