import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
// 实现懒加载
const BaseMessage = () => import(/* webpackChunkName: "baseMsg" */ "./components/BaseMessage.vue")
const PersonalSkill = () => import( /* webpackChunkName: "skillMsg" */ "./components/PersonalSkill.vue")
const InternExperience = () => import( /* webpackChunkName: "internMsg" */ "./components/InternExperience.vue")
const EducationExperience = () => import( /* webpackChunkName: "educationMsg" */ "./components/EducationExperience.vue")
const ProjectExperience = () => import( /* webpackChunkName: "projectMsg" */ "./components/ProjectExperience.vue")

export default new Router({
  mode: "history",
  base: '/',
  routes: [
    {
      path: "/",
      name: "home",
      redirect: '/base',
      component: Home,
      // 子路由
      children: [
        { path: "/base", name: 'base', component: BaseMessage },
        { path: "/skill", name: 'skill', component: PersonalSkill },
        { path: "/intern", name: 'intern', component: InternExperience },
        { path: "/education", name: "education", component: EducationExperience },
        { path: "/project", name: "project", component: ProjectExperience }
      ]
    },
    {
      path: "/preview",
      name: "preview",
      component: () =>
        import(/* webpackChunkName: "showEdit" */ "./views/ShowEdit.vue")
    }
  ]
});
