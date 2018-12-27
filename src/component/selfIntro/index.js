import {
  createEle
} from '../../assets/util'

const selfIntro = function () {
  return new selfIntro.prototype.init()
}

selfIntro.prototype.init = function () {
  const section = this.section = createEle('section')

  section.classList.add('self-intro')

  return this
}

selfIntro.prototype.template = function (options) {
  let template = `
    <div class="intro-container">
      <div class="intro-tt-wrapper">
        <span class="intro-tt">个人介绍</span>
        <span class="intro-tt-en">Self Introduce</span>
        <div class="intro-tt-instruction">"我的基本情况"</div>
      </div>
      <div class="intro-main-wrapper">
        <div class="intro-main">${options.content}</div>
      </div>
    </div>`

  this.section.innerHTML = template
}

selfIntro.prototype.bindEvent = function () {}

selfIntro.prototype.render = function (options) {
  this.template(options)
  this.bindEvent()

  return this.section
}

selfIntro.prototype.init.prototype = selfIntro.prototype

export default selfIntro
