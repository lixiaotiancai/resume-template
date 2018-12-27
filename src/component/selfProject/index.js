import {
  createEle
} from '../../assets/util'

const selfProject = function () {
  return new selfProject.prototype.init()
}

selfProject.prototype.init = function () {
  const section = this.section = createEle('section')

  section.classList.add('self-project')

  return this
}

selfProject.prototype.template = function (options) {
  let projectTemplate = ''

  options.content.forEach(item => {
    projectTemplate += `
      <div class='project-main-wrapper'>
        <div class='project-name'>${item.projectName}</div>
        <div class='project-intro'>作品描述: ${item.projectIntro}</div>
        <div class='project-skill'>代表技术: ${item.projectSkillStack}</div>
        <a class='project-href' href='${item.projectCodeLink}' target='_blank'>源码: ${item.projectCodeLink}</a>
        <a class='project-href' href='${item.projectOnline}' target='_blank'>在线体验: ${item.projectOnline}</a>
      </div>`
  })

  let template = `
    <div class="project-container">
      <div class="project-tt-wrapper">
        <span class="project-tt">我的作品</span>
        <span class="project-tt-en">My Project</span>
        <div class="project-tt-instruction">"我的一些小作品"</div>
      </div>
      <div class="project-main-container">
        ${projectTemplate}
      </div>
    </div>`

  this.section.innerHTML = template
}

selfProject.prototype.bindEvent = function () {}

selfProject.prototype.render = function (options) {
  this.template(options)
  this.bindEvent()

  return this.section
}

selfProject.prototype.init.prototype = selfProject.prototype

export default selfProject
