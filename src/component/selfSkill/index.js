import {
  createEle
} from '../../assets/util'

const selfSkill = function () {
  return new selfSkill.prototype.init()
}

selfSkill.prototype.init = function () {
  const section = this.section = createEle('section')

  section.classList.add('self-skill')

  return this
}

selfSkill.prototype.template = function (options) {
  let skillTemplate = ''

  options.content.forEach(item => {
    skillTemplate += `
      <div class='skill-main-wrapper'>
        <div class='skill-category'>${item.category}</div>
        <div class='skill-content'>${item.content}</div>
        <div class='skill-bar-slot'>
          <div class='skill-bar' style='width:${item.exp * 2 + '%'}'></div>
        </div>
        <div class='skill-degree'>${item.degree}</div>
      </div>`
  })

  let template = `
    <div class="skill-container">
      <div class="skill-tt-wrapper">
        <span class="skill-tt">技能特长</span>
        <span class="skill-tt-en">Skill</span>
        <div class="skill-tt-instruction">"我的技能条"</div>
      </div>
      <div class="skill-main-container">
        ${skillTemplate}
      </div>
    </div>`

  this.section.innerHTML = template
}

selfSkill.prototype.bindEvent = function () {}

selfSkill.prototype.render = function (options) {
  this.template(options)
  this.bindEvent()

  return this.section
}

selfSkill.prototype.init.prototype = selfSkill.prototype

export default selfSkill
