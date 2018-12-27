import {
  createEle
} from '../../assets/util'

const selfExp = function () {
  return new selfExp.prototype.init()
}

selfExp.prototype.init = function () {
  const section = this.section = createEle('section')

  section.classList.add('self-exp')

  return this
}

selfExp.prototype.template = function (options) {
  let expTemplate = ''

  options.content.forEach(item => {
    expTemplate += `
      <div class='exp-main-wrapper'>
        <div class='exp-duration'>${item.duration}</div>
        <div class='exp-school'>${item.school}</div>
        <div class='exp-introduction'>${item.introduction}</div>
      </div>`
  })

  let template = `
    <div class="exp-container">
      <div class="exp-tt-wrapper">
        <span class="exp-tt">学习经历</span>
        <span class="exp-tt-en">Study Experience</span>
        <div class="exp-tt-instruction">"我的求学生涯"</div>
      </div>
      <div class="exp-main-container">
        ${expTemplate}
      </div>
    </div>`

  this.section.innerHTML = template
}

selfExp.prototype.bindEvent = function () {}

selfExp.prototype.render = function (options) {
  this.template(options)
  this.bindEvent()

  return this.section
}

selfExp.prototype.init.prototype = selfExp.prototype

export default selfExp
